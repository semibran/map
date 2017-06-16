# map
> Fast and functional key-value maps

## install
```sh
npm install semibran/map
```

## usage
```js
const { get, set, has, remove, clear } = require('map')
```
A map is any object with the fields `keys` and `values`, both of which are arrays.

### `get(map, key)`
Retrieves and returns the value of entry `key` in `map` if it exists, otherwise `undefined`.

### `set(map, key, value)`
Sets the value of entry `key` in `map` to `value`, creating a new entry if it does not exist.

### `has(map, key)`
Determines if entry `key` has been defined inside `map`.

### `remove(map, key)`
Removes entry `key` from `map`. Returns `true` if successful, otherwise `false`.

### `clear(map)`
Clears all keys and values from `map`.

## license
[MIT](https://opensource.org/licenses/MIT) © [Brandon Semilla](https://git.io/semibran)
