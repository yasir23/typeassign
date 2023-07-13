function make_album(artist, title, tracks) {
  let album = {
    artist: artist,
    title: title
  };

  if (tracks) {
    album = tracks;
  }

  return album;
}

console.log(make_album("Artist 1", "Album 1"));
console.log(make_album("Artist 2", "Album 2", 10));
console.log(make_album("Artist 3", "Album 3", 5));
