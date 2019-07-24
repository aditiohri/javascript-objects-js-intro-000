var playlist = {
"chris isaac": 'wicked game',
"tierra whack": 'only child',
"velvet underground": 'pale blue eyes'
};

function updatePlaylist(object, key, value) {
object[key] = value;
return object;
}

function removeFromPlaylist(object, key) {
  delete object.key;
  return object;
}
