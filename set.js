module.exports = function set(map, key, value) {
  var index = map.keys.indexOf(key)
  if (index !== -1) {
    map.values[index] = value
  } else {
    map.keys.push(key)
    map.values.push(value)
  }
}
