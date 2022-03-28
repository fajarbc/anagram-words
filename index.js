const { compare, createHash, applyOptions } = require("./utilities");

function findPattern(pattern, text, { space = false, unique = false, caseSensitive = false } = {}) {
  let words = [];
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

function isAnagram(string1, string2, { space = false, caseSensitive = false } = {}) {
  // string1 as pattern, string2 as text
  if (string1 == string2) return true;

  // apply options
  [string1, string2] = applyOptions(string1, string2, space, caseSensitive)

  if (string1.length != string2.length) return false;
  // create hash and compare
  let { pw, tw } = createHash(string1, string2);
  return compare(pw, tw);
}

module.exports = {
  findPattern: findPattern,
  isAnagram: isAnagram,
};
