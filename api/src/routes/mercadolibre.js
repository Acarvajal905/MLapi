const { Router, response, query } = require('express');
const router = Router();

const fetch = require('node-fetch');

router.get('/', async (req, res) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    res.json(users)
})


router.get('/search', async (req, res) => {
    const queri = (req.query.query)
    console.log(queri)
    const api_url = `https://api.mercadolibre.com/sites/MLA/search?q=${queri}`
    const fetch_response = await fetch(api_url);
    const json = await fetch_response.json();
    res.json(json)
});


module.exports = router;