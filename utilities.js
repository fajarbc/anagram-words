/**
 * Return new string with pattern "find" replaced by string "replace"
 * @param {string} string - The string needs to be 
 * @param {string} find - The pattern string to be replaced
 * @param {string} replace - The string going to replace the pattern string
 * @returns new replaced string
 */
function replaceAll(string, find, replace) {
  return string.replace(new RegExp(find, "g"), replace);
}

module.exports = {
  compare: (a, b) => {
    for (const key of Object.keys(a)) if (a[key] != b[key]) return false;

    return true;
  },
  createHash: (pattern, text) => {
    let p = pattern.split("");
    let t = text.split("");
    let pw = {};
    let tw = {};
    const pl = p.length;

    // create pattern window & first text window
    let i = 0;
    for (; i < pl; i++) {
      pw[p[i]] = pw[p[i]] ? ++pw[p[i]] : 1;
      tw[t[i]] = tw[t[i]] ? ++tw[t[i]] : 1;
    }

    return { pw, tw };
  },
  /**
   * Apply options to pattern and text
   * @param {string} pattern - The sequence string you look for in in the text
   * @param {string} text - The whole string you want to look for the pattern
   * @param {boolean} caseSensitive - true = case sensitive. false = case insensitive
   * @param {boolean} space - true = space is count. false = space is not count as character
   * @returns {Array} [pattern, text]
   */
  applyOptions: (pattern, text, space, caseSensitive) => {
    // remove space
    if (!space) {
      pattern = replaceAll(pattern, " ", "");
      text = replaceAll(text, " ", "");
    }

    // transform to lower case
    if (!caseSensitive) {
      pattern = pattern.toLowerCase();
      text = text.toLowerCase();
    }
    return [pattern, text];
  },
};
