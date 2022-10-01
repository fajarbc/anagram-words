# anagram-words

Return anagram words if existed from the given string/text, check if two strings are palindrome.

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
console.log(aw.arePalindrome("mything", "My night")) // output: true
console.log(aw.arePalindrome("mything", "My night", {space: true})) // output: false
console.log(aw.arePalindrome("Thing", "Night", {caseSensitive: true})) // output: false
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
  | caseSensitive | boolean | false | `true` means case sensitive character.<br> `false` means case insensitive |
  | unique | boolean | false | `true` only return unique sequence result.<br> `false` will return all sequence result |
- Example use :
    ```javascript
    const aw = require("anagram-words")
    console.log(aw.findPattern("car", "race car care", {space: true, unique: true})) // output: [ 'rac', 'car' ]
    ```
### arePalindrome
```arePalindrome(word1, word2, options)```
- Description: Check if two strings are palindrome
- Return type `boolean`. `true` if they are palindrome, `false` if it is not anagram
- `word1` and `word2` is the text/string you you want to check wether if they are palindrome or not
- `options` (object) is an object to customize the options desribed bellow:
  | Parameter | Type | Deafult | Description |
  | --------- | :----: | :-------: | ----------- |
  | space | boolean | false | `true` means space counted as a character.<br> `false` means space is not counted as character and will be ignored |
  | caseSensitive | boolean | false | `true` means case sensitive character.<br> `false` means case insensitive |
- Example use :
    ```javascript
    const aw = require("anagram-words")
    console.log(aw.arePalindrome("Thing", "Night", {caseSensitive: true})) // output: false
    console.log(aw.arePalindrome("Thing", "Night")) // output: true
    ```
