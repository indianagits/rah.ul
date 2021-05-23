const ALPHABET = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_'
const ALPHABET_MAP = {}

ALPHABET.split('').forEach((v, i) => {
    ALPHABET_MAP[v] = i
})

function intToRadix64(num) {
    let chars = []
    let q = num
    while (q != 0) {
        let r = q % 64
        chars.push(ALPHABET.charAt(r))
        q = parseInt(q / 64)
    }
    return chars.reverse().join('')
}

function radix64ToInt(str) {
    let chars = str.split('').reverse()
    let num = 0
    for (let i = 0; i < chars.length; ++i) {
        num += ALPHABET_MAP[chars[i]] * Math.pow(64, i)
    }
    return num
}

module.exports = {
    intToRadix64,
    radix64ToInt
}