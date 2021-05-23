const { Router } = require('express')
const {
    createRandomShortCode,
    crateCustomShortCode,
    findLink
} = require('../services/url-service')

const route = Router()

/**
 * POST /api/links
 * BODY
 *      link: http://xxx.xxx/xxx/xxx
 *      code: xxxxx
 */
route.post('/', async (req, res) => {
    const code = req.body.code
    const link = req.body.link

    if (!code) {
        const url = await createRandomShortCode(link)
        return res.json(url)
    }

    try {
        const url = await crateCustomShortCode(code, link)
        return res.json(url)
    } catch (e) {
        return res.status(400).json({ error: e.message })
    }
})

/**
 * GET /api/links/xxxxx
 * RESPONSE
 *      link:
 */
route.get('/:code', async (req, res) => {
    const code = req.params.code

    const url = await findLink(code)

    if (url) {
        return res.json(url)
    }
    return res.status(404).json({ error: 'Code not found' })
})

module.exports = route