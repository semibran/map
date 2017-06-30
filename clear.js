module.exports = function clear(map, key) {
  if (arguments.length === 0) {
    map.keys.length = 0
    map.values.length = 0
    return true
  } else {
    var index = map.keys.indexOf(key)
    if (index !== -1) {
      map.keys.splice(index, 1)
      map.values.splice(index, 1)
      return true
    } else {
      return false
    }
  }
}
