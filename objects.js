var playlist = {
"artistName": 'songTitle',
"Mariah Carey": 'honey'
}

function updatePlaylist(object, key, value) {
object[key] = value;
return object;
}

function removeFromPlaylist(object, key) {
  delete object.key;
  return object;
}
