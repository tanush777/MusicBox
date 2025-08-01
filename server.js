const express = require('express');
const app = express();
const PORT = 3000;
const songs = [
  // POP
  { title: "Shape of You", artist: "Ed Sheeran", genre: "pop", youtubeId: "JGwWNGJdvx8" },
  { title: "Blinding Lights", artist: "The Weeknd", genre: "pop", youtubeId: "4NRXx6U8ABQ" },
  { title: "Levitating", artist: "Dua Lipa", genre: "pop", youtubeId: "TUVcZfQe-Kw" },
  { title: "Uptown Funk", artist: "Mark Ronson ft. Bruno Mars", genre: "pop", youtubeId: "OPf0YbXqDm0" },
  { title: "Dynamite", artist: "BTS", genre: "pop", youtubeId: "gdZLi9oWNZg" },
  { title: "Senorita", artist: "Shawn Mendes & Camila Cabello", genre: "pop", youtubeId: "Pkh8UtuejGw" },
  { title: "Don't Start Now", artist: "Dua Lipa", genre: "pop", youtubeId: "oygrmJFKYZY" },
  { title: "Watermelon Sugar", artist: "Harry Styles", genre: "pop", youtubeId: "E07s5ZYygMg" },
  { title: "Peaches", artist: "Justin Bieber", genre: "pop", youtubeId: "tQ0yjYUFKAE" },
  { title: "Happier", artist: "Marshmello ft. Bastille", genre: "pop", youtubeId: "m7Bc3pLyij0" },
  { title: "Bad Guy", artist: "Billie Eilish", genre: "pop", youtubeId: "DyDfgMOUjCI" },
  { title: "Sorry", artist: "Justin Bieber", genre: "pop", youtubeId: "fRh_vgS2dFE" },
  { title: "Rockabye", artist: "Clean Bandit ft. Sean Paul & Anne-Marie", genre: "pop", youtubeId: "papuvlVeZg8" },
  { title: "Old Town Road", artist: "Lil Nas X", genre: "pop", youtubeId: "r7qovpFAGrQ" },
  { title: "Perfect", artist: "Ed Sheeran", genre: "pop", youtubeId: "2Vv-BfVoq4g" },
  { title: "Cheap Thrills", artist: "Sia", genre: "pop", youtubeId: "nYh-n7EOtMA" },
  { title: "Girls Like You", artist: "Maroon 5 ft. Cardi B", genre: "pop", youtubeId: "aJOTlE1K90k" },
  { title: "Havana", artist: "Camila Cabello", genre: "pop", youtubeId: "HCjNJDNzw8Y" },
  { title: "Dance Monkey", artist: "Tones and I", genre: "pop", youtubeId: "q0hyYWKXF0Q" },
  { title: "Love Yourself", artist: "Justin Bieber", genre: "pop", youtubeId: "oyEuk8j8imI" },
  { title: "One Kiss", artist: "Calvin Harris & Dua Lipa", genre: "pop", youtubeId: "DkeiKbqa02g" },
  { title: "Shallow", artist: "Lady Gaga & Bradley Cooper", genre: "pop", youtubeId: "bo_efYhYU2A" },
  { title: "Sunflower", artist: "Post Malone & Swae Lee", genre: "pop", youtubeId: "ApXoWvfEYVU" },
  { title: "Stitches", artist: "Shawn Mendes", genre: "pop", youtubeId: "VbfpW0pbvaU" },
  { title: "Intentions", artist: "Justin Bieber ft. Quavo", genre: "pop", youtubeId: "9p2wMpVVtXg" },
  { title: "Heat Waves", artist: "Glass Animals", genre: "pop", youtubeId: "mRD0-GxqHVo" },
  { title: "Memories", artist: "Maroon 5", genre: "pop", youtubeId: "SlPhMPnQ58k" },
  { title: "Someone You Loved", artist: "Lewis Capaldi", genre: "pop", youtubeId: "zABLecsR5UE" },
  { title: "Good 4 U", artist: "Olivia Rodrigo", genre: "pop", youtubeId: "gNi_6U5Pm_o" },
  { title: "Closer", artist: "The Chainsmokers ft. Halsey", genre: "pop", youtubeId: "PT2_F-1esPk" },
  { title: "Stay", artist: "The Kid LAROI, Justin Bieber", genre: "pop", youtubeId: "kTJczUoc26U" },
  { title: "Attention", artist: "Charlie Puth", genre: "pop", youtubeId: "nfs8NYg7yQM" },
  { title: "Say So", artist: "Doja Cat", genre: "pop", youtubeId: "pok8H_KF1FA" },
  { title: "Blank Space", artist: "Taylor Swift", genre: "pop", youtubeId: "e-ORhEE9VVg" },
  { title: "Love Me Like You Do", artist: "Ellie Goulding", genre: "pop", youtubeId: "AJtDXIazrMo" },
  { title: "Sugar", artist: "Maroon 5", genre: "pop", youtubeId: "09R8_2nJtjg" },
  { title: "Shake It Off", artist: "Taylor Swift", genre: "pop", youtubeId: "nfWlot6h_JM" },
  { title: "Symphony", artist: "Clean Bandit ft. Zara Larsson", genre: "pop", youtubeId: "aatr_2MstrI" },
  { title: "Rather Be", artist: "Clean Bandit ft. Jess Glynne", genre: "pop", youtubeId: "m-M1AtrxztU" },
  { title: "Faded", artist: "Alan Walker", genre: "pop", youtubeId: "60ItHLz5WEA" },
  { title: "Break My Heart", artist: "Dua Lipa", genre: "pop", youtubeId: "Nj2U6rhnucI" },
  { title: "Wake Me Up", artist: "Avicii", genre: "pop", youtubeId: "IcrbM1l_BoI" },
  { title: "Stressed Out", artist: "Twenty One Pilots", genre: "pop", youtubeId: "pXRviuL6vMY" },
  { title: "If I Can't Have You", artist: "Shawn Mendes", genre: "pop", youtubeId: "oTJ-oqwxdZY" },
  { title: "Thunder", artist: "Imagine Dragons", genre: "pop", youtubeId: "fKopy74weus" },
  { title: "New Rules", artist: "Dua Lipa", genre: "pop", youtubeId: "k2qgadSvNyU" },
  { title: "Counting Stars", artist: "OneRepublic", genre: "pop", youtubeId: "hT_nvWreIhg" },
  { title: "IDGAF", artist: "Dua Lipa", genre: "pop", youtubeId: "Mgfe5tIwOj0" },
  { title: "Let Me Love You", artist: "DJ Snake ft. Justin Bieber", genre: "pop", youtubeId: "euCqAq6BRa4" },
  { title: "Call Me Maybe", artist: "Carly Rae Jepsen", genre: "pop", youtubeId: "fWNaR-rxAic" },

  // ROCK
  { title: "Smells Like Teen Spirit", artist: "Nirvana", genre: "rock", youtubeId: "hTWKbfoikeg" },
  { title: "Bohemian Rhapsody", artist: "Queen", genre: "rock", youtubeId: "fJ9rUzIMcZQ" },
  { title: "Sweet Child O' Mine", artist: "Guns N' Roses", genre: "rock", youtubeId: "1w7OgIMMRc4" },
  { title: "Hotel California", artist: "Eagles", genre: "rock", youtubeId: "EqPtz5qN7HM" },
  { title: "Don't Stop Believin'", artist: "Journey", genre: "rock", youtubeId: "1k8craCGpgs" },
  { title: "Nothing Else Matters", artist: "Metallica", genre: "rock", youtubeId: "tAGnKpE4NCI" },
  { title: "Stairway to Heaven", artist: "Led Zeppelin", genre: "rock", youtubeId: "QkF3oxziUI4" },
  { title: "Another Brick in the Wall", artist: "Pink Floyd", genre: "rock", youtubeId: "HrxX9TBj2zY" },
  { title: "Zombie", artist: "The Cranberries", genre: "rock", youtubeId: "SBtwFf8GQiw" },
  { title: "Highway to Hell", artist: "AC/DC", genre: "rock", youtubeId: "l482T0yNkeo" },
  { title: "Back In Black", artist: "AC/DC", genre: "rock", youtubeId: "pAgnJDJN4VA" },
  { title: "Livin' On A Prayer", artist: "Bon Jovi", genre: "rock", youtubeId: "lDK9QqIzhwk" },
  { title: "In the End", artist: "Linkin Park", genre: "rock", youtubeId: "eVTXPUF4Oz4" },
  { title: "High Hopes", artist: "Panic! At The Disco", genre: "rock", youtubeId: "IPXIgEAGe4U" },
  { title: "Closer", artist: "Nine Inch Nails", genre: "rock", youtubeId: "PTFwQP86BRs" },
  { title: "Mr. Brightside", artist: "The Killers", genre: "rock", youtubeId: "gGdGFtwCNBE" },
  { title: "Take Me Out", artist: "Franz Ferdinand", genre: "rock", youtubeId: "GhCXAiNz9Jo" },
  { title: "Use Somebody", artist: "Kings Of Leon", genre: "rock", youtubeId: "gnhXHvRoUd0" },
  { title: "Radioactive", artist: "Imagine Dragons", genre: "rock", youtubeId: "ktvTqknDobU" },
  { title: "Boulevard of Broken Dreams", artist: "Green Day", genre: "rock", youtubeId: "Soa3gO7tL-c" },
  { title: "Time", artist: "Pink Floyd", genre: "rock", youtubeId: "JwYX52BP2Sk" },
  { title: "Dream On", artist: "Aerosmith", genre: "rock", youtubeId: "zLZjU1wb1QY" },
  { title: "Come As You Are", artist: "Nirvana", genre: "rock", youtubeId: "vabnZ9-ex7o" },
  { title: "Under Pressure", artist: "Queen & David Bowie", genre: "rock", youtubeId: "a01QQZyl-_I" },
  { title: "Paint It Black", artist: "The Rolling Stones", genre: "rock", youtubeId: "O4irXQhgMqg" },
  { title: "Enter Sandman", artist: "Metallica", genre: "rock", youtubeId: "CD-E-LDc384" },
  { title: "Paranoid", artist: "Black Sabbath", genre: "rock", youtubeId: "0qanF-91aJo" },
  { title: "My Hero", artist: "Foo Fighters", genre: "rock", youtubeId: "EqWRaAF6_WY" },
  { title: "I Bet You Look Good On The Dancefloor", artist: "Arctic Monkeys", genre: "rock", youtubeId: "pK7egZaT3hs" },
  { title: "The Middle", artist: "Jimmy Eat World", genre: "rock", youtubeId: "oKsxPW6i3pM" },
  { title: "Fix You", artist: "Coldplay", genre: "rock", youtubeId: "k4V3Mo61fJM" },
  { title: "Come Together", artist: "The Beatles", genre: "rock", youtubeId: "oolpPmuK2I8" },
  { title: "Baba O'Riley", artist: "The Who", genre: "rock", youtubeId: "x2KRpRMSu4g" },
  { title: "Go Your Own Way", artist: "Fleetwood Mac", genre: "rock", youtubeId: "6ul-cZyuYq4" },
  { title: "Basket Case", artist: "Green Day", genre: "rock", youtubeId: "NUTGr5t3MoY" },
  { title: "Everlong", artist: "Foo Fighters", genre: "rock", youtubeId: "eBG7P-K-r1Y" },
  { title: "Reptilia", artist: "The Strokes", genre: "rock", youtubeId: "b8-tXG8KrWs" },
  { title: "7 Nation Army", artist: "The White Stripes", genre: "rock", youtubeId: "0J2QdDbelmY" },
  { title: "Sex on Fire", artist: "Kings Of Leon", genre: "rock", youtubeId: "RF0HhrwIwp0" },
  { title: "Africa", artist: "Toto", genre: "rock", youtubeId: "FTQbiNvZqaY" },
  { title: "Somebody to Love", artist: "Queen", genre: "rock", youtubeId: "kijpcUv-b8M" },
  { title: "All The Small Things", artist: "Blink-182", genre: "rock", youtubeId: "9Ht5RZpzPqw" },
  { title: "Yellow", artist: "Coldplay", genre: "rock", youtubeId: "yKNxeF4KMsY" },
  { title: "With or Without You", artist: "U2", genre: "rock", youtubeId: "XmSdTa9kaiQ" },
  { title: "Chop Suey!", artist: "System of a Down", genre: "rock", youtubeId: "CSvFpBOe8eY" },
  { title: "Jeremy", artist: "Pearl Jam", genre: "rock", youtubeId: "MS91knuzoOA" },
  { title: "Don't Look Back In Anger", artist: "Oasis", genre: "rock", youtubeId: "cmpRLQZkTb8" },

  // HIPHOP
  { title: "SICKO MODE", artist: "Travis Scott", genre: "hiphop", youtubeId: "6ONRf7h3Mdk" },
  { title: "God's Plan", artist: "Drake", genre: "hiphop", youtubeId: "xpVfcZ0ZcFM" },
  { title: "HUMBLE.", artist: "Kendrick Lamar", genre: "hiphop", youtubeId: "tvTRZJ-4EyI" },
  { title: "See You Again", artist: "Wiz Khalifa ft. Charlie Puth", genre: "hiphop", youtubeId: "RgKAFK5djSk" },
  { title: "Lucid Dreams", artist: "Juice WRLD", genre: "hiphop", youtubeId: "mWRsgZuwf_8" },
  { title: "Old Town Road", artist: "Lil Nas X", genre: "hiphop", youtubeId: "w2Ov5jzm3j8" },
  { title: "Sunflower", artist: "Post Malone & Swae Lee", genre: "hiphop", youtubeId: "ApXoWvfEYVU" },
  { title: "Sicko Mode", artist: "Travis Scott", genre: "hiphop", youtubeId: "6ONRf7h3Mdk" },
  { title: "Rockstar", artist: "Post Malone ft. 21 Savage", genre: "hiphop", youtubeId: "UceaB4D0jpo" },
  { title: "DNA.", artist: "Kendrick Lamar", genre: "hiphop", youtubeId: "NLZRYQMLDW4" },
  { title: "Goosebumps", artist: "Travis Scott", genre: "hiphop", youtubeId: "Dst9gZkq1a8" },
  { title: "Finesse", artist: "Bruno Mars ft. Cardi B", genre: "hiphop", youtubeId: "LsoLEjrDogU" },
  { title: "Bad and Boujee", artist: "Migos ft. Lil Uzi Vert", genre: "hiphop", youtubeId: "S-sJp1FfG7Q" },
  { title: "XO Tour Llif3", artist: "Lil Uzi Vert", genre: "hiphop", youtubeId: "WrsFXgQk5UI" },
  { title: "Money Longer", artist: "Lil Uzi Vert", genre: "hiphop", youtubeId: "pAl2m4Wee6A" },
  { title: "Mask Off", artist: "Future", genre: "hiphop", youtubeId: "xvZqHgFz51I" },
  { title: "Bank Account", artist: "21 Savage", genre: "hiphop", youtubeId: "Uo05HUFb6HE" },
  { title: "Congratulations", artist: "Post Malone ft. Quavo", genre: "hiphop", youtubeId: "SC4xMk98Pdc" },
  { title: "No Role Modelz", artist: "J. Cole", genre: "hiphop", youtubeId: "2b0yD8UQpzw" },
  { title: "The Box", artist: "Roddy Ricch", genre: "hiphop", youtubeId: "UNZqm3dxd2w" },
  { title: "Nonstop", artist: "Drake", genre: "hiphop", youtubeId: "2lI3EQekAgc" },
  { title: "Do What I Want", artist: "Lil Uzi Vert", genre: "hiphop", youtubeId: "tTj3to3h3j8" },
  { title: "GODZILLA", artist: "Eminem ft. Juice WRLD", genre: "hiphop", youtubeId: "r_0JjYUe5jo" },
  { title: "Goosebumps", artist: "Travis Scott", genre: "hiphop", youtubeId: "Dst9gZkq1a8" },
  { title: "Clout", artist: "Offset ft. Cardi B", genre: "hiphop", youtubeId: "v8SvLh3rH8Q" },
  { title: "Gucci Gang", artist: "Lil Pump", genre: "hiphop", youtubeId: "4LfJnj66HVQ" },
  { title: "Stir Fry", artist: "Migos", genre: "hiphop", youtubeId: "HI-mXMr8glQ" },
  { title: "Hot", artist: "Young Thug ft. Gunna", genre: "hiphop", youtubeId: "Etby5A7gT1E" },
  { title: "Lifestyle", artist: "Rich Gang", genre: "hiphop", youtubeId: "ntSBKPkk4m4" },
  { title: "No Lie", artist: "Sean Paul ft. Dua Lipa", genre: "hiphop", youtubeId: "GF9T7CZTd10" },
  { title: "FEFE", artist: "6ix9ine ft. Nicki Minaj & Murda Beatz", genre: "hiphop", youtubeId: "V-MvW4V7TWE" },
  { title: "MIDDLE CHILD", artist: "J. Cole", genre: "hiphop", youtubeId: "WILNIXZr2oc" },
  { title: "Loyalty.", artist: "Kendrick Lamar ft. Rihanna", genre: "hiphop", youtubeId: "Dlh-dzB2U4Y" },
  { title: "Suge", artist: "DaBaby", genre: "hiphop", youtubeId: "b1kbLwvqugk" },
  { title: "Plug Walk", artist: "Rich The Kid", genre: "hiphop", youtubeId: "siJGgBMKweo" },
  { title: "Taste", artist: "Tyga ft. Offset", genre: "hiphop", youtubeId: "LjxulQ1bEWg" },
  { title: "ZEZE", artist: "Kodak Black ft. Travis Scott & Offset", genre: "hiphop", youtubeId: "b87dBaL4qI0" },
  { title: "Ric Flair Drip", artist: "Offset & Metro Boomin", genre: "hiphop", youtubeId: "ESVHo4fAAo0" },
  { title: "Taki Taki", artist: "DJ Snake ft. Selena Gomez, Ozuna, Cardi B", genre: "hiphop", youtubeId: "ixkoVwKQaJg" },
  { title: "Mo Bamba", artist: "Sheck Wes", genre: "hiphop", youtubeId: "VWoIpDVkOH0" },
  { title: "ROCKSTAR", artist: "DaBaby ft. Roddy Ricch", genre: "hiphop", youtubeId: "mxFstYSbBmc" },
  { title: "Ballin'", artist: "Mustard ft. Roddy Ricch", genre: "hiphop", youtubeId: "t1N8dGZlBNs" },
  { title: "Life Is Good", artist: "Future ft. Drake", genre: "hiphop", youtubeId: "l0U7SxXHkPY" },
  { title: "Laugh Now Cry Later", artist: "Drake ft. Lil Durk", genre: "hiphop", youtubeId: "JFm7YDVlqnI" },
  { title: "Walk It Talk It", artist: "Migos ft. Drake", genre: "hiphop", youtubeId: "e5QKmgN1pA0" },
  { title: "Lemonade", artist: "Internet Money ft. Don Toliver, Gunna & NAV", genre: "hiphop", youtubeId: "q0j6oSCX1aQ" },
  { title: "Blueberry Faygo", artist: "Lil Mosey", genre: "hiphop", youtubeId: "qafMJEUqFfg" },
  { title: "Trap Queen", artist: "Fetty Wap", genre: "hiphop", youtubeId: "i_kF4zLNKio" }
  
];

app.use(express.static('public'));

app.get('/api/songs', (req, res) => {
  const { genre, search } = req.query;

  if (genre) {
    const filteredSongs = songs.filter(song => song.genre === genre);
    return res.json(filteredSongs);
  }

  if (search) {
    const lowercasedSearch = search.toLowerCase();
    const searchedSongs = songs.filter(song => 
      song.title.toLowerCase().includes(lowercasedSearch) || 
      song.artist.toLowerCase().includes(lowercasedSearch)
    );
    return res.json(searchedSongs);
  }

  res.json(songs);
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));