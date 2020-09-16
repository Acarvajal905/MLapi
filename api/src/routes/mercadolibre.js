const { Router, response, query } = require('express');
const router = Router();

const fetch = require('node-fetch');


router.get('/search', async (req, res) => {
    const queri = (req.query.query)
    console.log(queri)
    const api_url = `https://api.mercadolibre.com/sites/MLA/search?q=${queri}&limit=30&offset=${req.query.offset}&sort=${req.query.sort}&ITEM_CONDITION=${req.query.ITEM_CONDITION}`
    const fetch_response = await fetch(api_url);
    const json = await fetch_response.json();
    res.json(json)
});


router.get('/items/:id', async (req, res) => {
    id = req.params.id
    const api_url = `https://api.mercadolibre.com/items/${id}`
    const fetch_response = await fetch(api_url);
    const json = await fetch_response.json();
    res.json(json)
});


module.exports = router;

