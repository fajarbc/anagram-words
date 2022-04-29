# anagram-words

Return anagram words if existed from the given string/text, check if two strings are anagram word.

It has npm package here called [anagram-words](https://www.npmjs.com/package/anagram-words)

## Install
```sh
npm i anagram-words
```

## Usage
```javascript
const aw = require("anagram-words")

console.log(aw.findPattern("car", "race car care")) // output: [ 'rac', 'car', 'arc', 'rca', 'car' ]
console.log(aw.findPattern("car", "race car care", {unique: true})) // output: [ 'rac', 'car', 'arc', 'rca' ]
console.log(aw.findPattern("car", "race car care", {space: true})) // output: [ 'rac', 'car', 'car' ]
console.log(aw.findPattern("car", "race car care", {space: true, unique: true})) // output: [ 'rac', 'car' ]
console.log(aw.findPattern("cAr", "race car cAre", {caseSensitive: true})) // output: [ 'rcA', 'cAr' ]
console.log(aw.isAnagram("mything", "My night")) // output: true
console.log(aw.isAnagram("mything", "My night", {space: true})) // output: false
console.log(aw.isAnagram("Thing", "Night", {caseSensitive: true})) // output: false
```

## Function
### findPattern
```findPattern(pattern, text, options)```
- Description: return anagram words/sequences from the given string (text) if existed
- Return type `array`
- `pattern` (string) is the sequence string you look for in in the string `text`
- `text` (string) is the whole string you want to look for the `pattern`
- `options` (object) is an object to customize the options desribed bellow:
  | Parameter | Type | Deafult | Description |
  | --------- | :----: | :-------: | ----------- |
  | space | boolean | false | `true` means space counted as a character.<br> `false` means space is not counted as character and will be ignored |
  | caseSeneitive | boolean | false | `true` means case sensitive character.<br> `false` means case insensitive |
  | unique | boolean | false | `true` only return unique sequence result.<br> `false` will return all sequence result |
- Example use :
    ```javascript
    const aw = require("anagram-words")
    console.log(aw.findPattern("car", "race car care", {space: true, unique: true})) // output: [ 'rac', 'car' ]
    ```
### isAnagram
```isAnagram(string1, string2, options)```
- Description: Check if two strings are anagram
- Return type `boolean`. `true` if it is anagram, `false` if it is not anagram
- `string1` and `string2` is the text/string you you want to check wether if it is anagram or not
- `options` (object) is an object to customize the options desribed bellow:
  | Parameter | Type | Deafult | Description |
  | --------- | :----: | :-------: | ----------- |
  | space | boolean | false | `true` means space counted as a character.<br> `false` means space is not counted as character and will be ignored |
  | caseSeneitive | boolean | false | `true` means case sensitive character.<br> `false` means case insensitive |
- Example use :
    ```javascript
    const aw = require("anagram-words")
    console.log(aw.isAnagram("Thing", "Night", {caseSensitive: true})) // output: false
    ```
