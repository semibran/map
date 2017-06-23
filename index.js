exports.get = get
exports.set = set
exports.has = has
exports.remove = remove
exports.clear = clear

function get(map, key) {
  var index = map.keys.indexOf(key)
  if (index !== -1) {
    return map.values[index]
  }
}

function set(map, key, value) {
  var index = map.keys.indexOf(key)
  if (index !== -1) {
    map.values[index] = value
  } else {
    map.keys.push(key)
    map.values.push(value)
  }
}

function has(map, key) {
  return map.keys.indexOf(key) !== -1
}

function remove(map, key) {
  var index = map.keys.indexOf(key)
  if (index !== -1) {
    map.keys.splice(index, 1)
    map.values.splice(index, 1)
    return true
  } else {
    return false
  }
}

function clear(map) {
  map.keys.length = 0
  map.values.length = 0
}
