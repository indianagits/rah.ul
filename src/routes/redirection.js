const { Router } = require('express')
const { findLink } = require('../services/url-service')

const route = Router()

route.get('/:code', async (req, res) => {
    const code = req.params.code

    const url = await findLink(code)

    if (url) {
        return res.redirect(url.link)
    }
    return res.redirect('https://github.com/indianagits/rah.ul')
})

module.exports = route