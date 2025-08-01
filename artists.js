window.onload = function() {
  const container = document.getElementById('artist-list');
  if (!container) return;

  fetch('/api/songs')
    .then(res => res.json())
    .then(songs => {
      // Create a unique list of all artists from the songs array
      const artists = [...new Set(songs.map(song => song.artist))];
      
      // Sort the artists alphabetically
      artists.sort();

      container.innerHTML = ''; // Clear any existing content
      if (artists.length === 0) {
        container.innerHTML = '<p>No artists found.</p>';
        return;
      }

      // Create and append a card for each unique artist
      artists.forEach(artist => {
        const artistCard = document.createElement('a');
        artistCard.className = 'artist-card';
        artistCard.href = `recommendations.html?artist=${encodeURIComponent(artist)}`;
        artistCard.textContent = artist;
        container.appendChild(artistCard);
      });
    })
    .catch(err => {
      container.innerHTML = '<p>Failed to load artists.</p>';
      console.error(err);
    });
};