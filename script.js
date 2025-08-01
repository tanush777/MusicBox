window.onload = function() {
  const container = document.getElementById('songs-list');
  const titleElement = document.querySelector('.main-content h1');
  const urlParams = new URLSearchParams(window.location.search);
  const genre = urlParams.get('genre');
  const searchQuery = urlParams.get('search');

  if (!container) return;

  let fetchUrl = '/api/songs';
  let pageTitle = 'Recommended Songs';

  if (genre) {
    fetchUrl = `/api/songs?genre=${genre}`;
    pageTitle = `${genre.charAt(0).toUpperCase() + genre.slice(1)} Songs`;
  } else if (searchQuery) {
    fetchUrl = `/api/songs?search=${encodeURIComponent(searchQuery)}`;
    pageTitle = `Results for "${searchQuery}"`;
  } else {
    container.innerHTML = '<p>Please select a genre or perform a search.</p>';
    return;
  }

  if (titleElement) {
    titleElement.textContent = pageTitle;
  }

  fetch(fetchUrl)
    .then(res => res.json())
    .then(songs => {
      container.innerHTML = '';
      if (songs.length === 0) {
        container.innerHTML = '<p>No songs found. Try a different search or genre.</p>';
        return;
      }
      songs.forEach(song => {
        container.innerHTML += `
          <div class="song-card">
            <h3>${song.title}</h3>
            <p>${song.artist}</p>
            <div class="video-container">
              <iframe 
                width="100%" height="150" 
                src="https://www.youtube.com/embed/${song.youtubeId}" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen
              ></iframe>
            </div>
          </div>
        `;
      });
    })
    .catch(err => {
      container.innerHTML = '<p>Failed to load songs.</p>';
      console.error(err);
    });
};