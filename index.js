const { compare, createHash, applyOptions } = require("./utilities");

/**
 * Return anagram words/sequences from the given string if any
 * @param {string} pattern - The sequence string you look for in in the text
 * @param {string} text - The whole string you want to look for the pattern
 * @param {Object} [options] - Options for customization
 * @param {boolean} [options.caseSensitive=false] - true = case sensitive. false = case insensitive
 * @param {boolean} [options.space=false] - true = space is count. false = space is not count as character
 * @param {boolean} [options.unique=false] - true = return only unique sequence. false = return all sequence
 * @returns {Array} anagram words/sequences
 */
function findPattern(pattern, text, { caseSensitive = false, space = false, unique = false }) {
  const words = [];
  let word;

  // apply options
  [pattern, text] = applyOptions(pattern, text, space, caseSensitive)

  let p = pattern.split("");
  let t = text.split("");
  const pl = p.length;

  // create pattern window & first text window
  let { pw, tw } = createHash(pattern, text);

  // iterate next text & compare to pattern window
  let i = pl;
  for (; i <= t.length; ++i) {
    word = text.substring(i - pl, i);
    if (compare(pw, tw) && (!unique || (unique && !words.includes(word))))
      words.push(word);
    tw[t[i]] = tw[t[i]] ? ++tw[t[i]] : 1;
    tw[t[i - pl]] = tw[t[i - pl]] ? --tw[t[i - pl]] : 1;
  }

  return words;
}

/**
 * Check if two words are palindrome
 * @param {string} word1 
 * @param {string} word2 
 * @param {Object} [options] - Options for customization
 * @param {boolean} [options.caseSensitive=false] - true = case sensitive. false = case insensitive
 * @param {boolean} [options.space=false] - true = space is count. false = space is not count as character
 * @returns {boolean} - is two words are palindrome
 */
function arePalindrome(word1, word2, { caseSensitive = false, space = false } = {}) {
  // word1 as pattern, word2 as text
  if (word1 == word2) return true;

  // apply options
  [word1, word2] = applyOptions(word1, word2, space, caseSensitive)

  if (word1.length != word2.length) return false;
  // create hash and compare
  let { pw, tw } = createHash(word1, word2);
  return compare(pw, tw);
}

module.exports = {
  findPattern: findPattern,
  arePalindrome: arePalindrome,
  // for backward compatibility v1.0.2
  isAnagram: arePalindrome, // wrong naming hehe (^_^")
};
