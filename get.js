module.exports = function get(map, key) {
  var index = map.keys.indexOf(key)
  if (index !== -1) {
    return map.values[index]
  }
}
