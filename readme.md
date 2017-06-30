# associate
> Lightweight and context-free key-value maps

Objects in JavaScript have been traditionally used as [associative arrays](https://en.wikipedia.org/wiki/Associative_array) to associate keys with values. Unfortunately, these kinds of object maps can only handle keys whose types are [primitive values](https://www.ecma-international.org/ecma-262/5.1/#sec-4.3.2). Any other kinds of values will be automatically converted into a string via `.toString()`.
```js
> map[[3, 42]] = 'dragons' // here be dragons!
> map
{ '3,42': 'dragons' }

> [3, 42] in map
true
```
This kind of type coercion can be considered somewhat useful for arrays, which happen to be the closest that native JavaScript can get to actual tuples. However, it turns out to be practically useless when applied to other kinds of objects.
```js
> map[{ object: 'with', stuff }] = 'big rip'
> map
{ '[object Object]': 'big rip' }
```
To address this issue, ES6 introduced the [`Map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) object, which removes the limit on what types of keys can be used.

But using the `Map` constructor doesn't just break backwards compatibility -  it also suffers from the fact that `Map` instances can't be serialized to JSON.
```js
> JSON.stringify(new Map())
'{}'
```
Feel free to move on ahead if neither of these drawbacks apply to you, but I wanted to try my hand at creating a fast and serializable model for associative arrays based strictly on primitives instead of constructors. This module is what I came up with. :tada:

## usage
[![NPM](https://nodei.co/npm/associate.png?mini)](https://www.npmjs.com/package/associate)

In this module, a map is any object with the fields `keys` and `values`, both of which are arrays.
```js
var map = {
  keys: ['foo', [3, 42]],
  values: ['bar', 'dragons']
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
