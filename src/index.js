module.exports = function toReadable(n) {
    const nStr = n.toString()
    let str = ''
    const a = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine'
    }

    const b = {
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen'
    }
    const c = {
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety'
    }

    if (nStr.length === 1) {
        for (key in a) {
            if (key === nStr) {
                return a[key]
            }
        }
    }
    if (nStr.length === 2) {
        if (nStr[0] === '1') {
            for (key in b) {
                if (key === nStr) {
                    return b[key]
                }
            }
        }
        if (nStr[0] !== '1' && nStr[1] === '0') {
            for (key in c) {
                if (key === nStr) {
                    return c[key]
                }
            }
        }
        if (nStr[1] !== '0') {
            for (key in c) {
                if (nStr[0] === key[0]) {
                    str += c[key] + ' '
                }
            }
            for (key in a) {
                if (nStr[1] === key) {
                    return str += a[key]
                }
            }
        }
    }
    if (nStr.length === 3) {
        if (nStr.endsWith('00')) {
            for (key in a) {
                if (key === nStr[0]) {
                    return a[key] + ' ' + 'hundred'
                }
            }
        }
        if (nStr[1] === '0') {
            for (key in a) {
                if (key === nStr[0]) {
                    str += a[key] + ' ' + 'hundred' + ' '
                }
            }
            for (key in a) {
                if (key === nStr[2]) {
                    return str += a[key]
                }
            }
        }
        if (nStr[1] === '1') {
            for (key in a) {
                if (key === nStr[0]) {
                    str += a[key] + ' ' + 'hundred' + ' '
                }
            }
            for (key in b) {
                if (key[1] === nStr[2]) {
                    return str += b[key]
                }
            }
        }
        if (nStr[1] !== '1' && nStr[2] === '0') {
            for (key in a) {
                if (key === nStr[0]) {
                    str += a[key] + ' ' + 'hundred' + ' '
                }
            }
            for (key in c) {
                if (key[0] === nStr[1]) {
                    return str += c[key]
                }
            }
        }
        if (nStr[1] !== '1') {
            for (key in a) {
                if (key === nStr[0]) {
                    str += a[key] + ' ' + 'hundred' + ' '
                }
            }
            for (key in c) {
                if (key[0] === nStr[1]) {
                    str += c[key] + ' '
                }
            }
            for (key in a) {
                if (key === nStr[2]) {
                    return str += a[key]
                }
            }
        }

    }
}



