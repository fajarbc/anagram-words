function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, "g"), replace);
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
