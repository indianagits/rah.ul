const { URLs } = require('../models/db')
const {
    intToRadix64,
    radix64ToInt
} = require('./radix64-service')

async function createRandomShortCode(link) {
    const id = parseInt(Math.random() * 999999999999)
    const exists = await URLs.findOne({
        where: {
            id
        }
    })
    if (exists) {
        // FIX: possible race condition if multiple servers vs 1 db
        return createRandomShortCode(link)
    }
    return await URLs.create({
        id,
        code: intToRadix64(id),
        link
    })
}

async function crateCustomShortCode(code, link) {
    const id = radix64ToInt(code)
    const exists = await URLs.findOne({
        where: {
            id
        }
    })
    if (exists) {
        throw new Error('Code: [' + code + '] already exists')
    }
    return await URLs.create({
        id,
        code,
        link
    })
}

async function findLink(code) {
    const id = radix64ToInt(code)
    return await URLs.findOne({
        where: {
            id
        }
    });
}

module.exports = {
    createRandomShortCode,
    crateCustomShortCode,
    findLink
}