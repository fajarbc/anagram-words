function findAnagramWords(pattern, text) {
    let words = []
    let p = pattern.split("")
    let t = text.split("")
    let pw = {}
    let tw = {}
    const pl = p.length

    // create pattern window & first text window
    let i = 0
    for (; i < pl; i++) {
        pw[p[i]] = pw[p[i]] ? ++pw[p[i]] : 1
        tw[t[i]] = tw[t[i]] ? ++tw[t[i]] : 1
    }
    
    // iterate & compare text window
    for (; i < t.length; ++i) {
        if(compare(pw, tw))
            words.push(text.substring(i-pl, i))
        tw[t[i]] = tw[t[i]] ? ++tw[t[i]] : 1
        tw[t[i-pl]] = tw[t[i-pl]] ? --tw[t[i-pl]] : 1
    }

    // last compare text window
    if(compare(pw, tw))
        words.push(text.substring(i-pl, i))

    return words
}

function compare(a, b) {
    for (const key of Object.keys(a))
        if(a[key] != b[key]) return false

    return true
}

module.exports = findAnagramWords