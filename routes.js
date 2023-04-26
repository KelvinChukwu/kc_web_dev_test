const routes = require('express').Router();
const https = require('https');

routes.get('/', (req, res) => {
    res.send("Hello, World!");
});

routes.get('/api/psets', (req, res) => {
    var url = 'https://www.orcestra.ca/api/psets/canonical';
    https.get(url, (resp) => {
        let data = '';

        resp.on('data', (chunk) => {
            data += chunk;
        });

        resp.on('end', () => {
            res.send(JSON.parse(data));
        });

    }).on("error", (err) => {
        res.send("Error: " + err.message);
    });
});

module.exports = routes;