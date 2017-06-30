# associate
> Lightweight and context-free key-value maps

## usage
[![NPM](https://nodei.co/npm/associate.png?mini)](https://www.npmjs.com/package/associate)

In this module, a map is any object with the fields `keys` and `values`, both of which are arrays.
```js
var map = {
  keys: ['foo', { x: 3, y: 42 }],
  values: ['bar', 1]
}
```
These two arrays are correlated ("associated") by index; e.g. `map.keys[0]` corresponds to `map.values[0]`.
```js
> map.keys[0] + ' -> ' + map.values[0]
'foo -> bar'
```
The number of entries in a map (i.e. its size) can be determined via `map.keys.length`, which is especially useful when iterating over each entry.
```js
for (var i = 0; i < map.keys.length; i++) {
  var key = map.keys[i]
  var value = map.values[i]
  console.log(key + ' -> ' + value)
}
```

### `get`
Use `get(map, key)` to retrieve a `key`'s corresponding value if it exists, otherwise `undefined`.
```js
> var get = require('associate/get')
> get(map, 'foo')
3
```

### `set`
To add new entries or alter existing ones, use `set(map, key, value)`.
```js
> var set = require('associate/set')
> set(map, 'lorem', 'ipsum')
```

### `has`
Use `has(map, key)` to determine if `map` contains an entry called `key`.
```js
> var has = require('associate/has')
> has(map, 'lorem')
true
```

### `clear`
To remove an entry, use `clear(map, key)`.
```js
> clear(map, 'foo')
true
```
In this scenario, `clear` returns the same value that `has(map, key)` would have returned. Therefore, it will return `false` if the given key is not found.
```js
> clear(map, 'bogus')
false
```
If you would like to clear all of a map's entries without creating any new objects, simply omit the second argument.
```js
> clear(map)
true

> map.keys.length
0
```

## see also
- [`semibran/list`](https://github.com/semibran/list) - simple array operations

## license
[MIT](https://opensource.org/licenses/MIT) © [Brandon Semilla](https://git.io/semibran)
