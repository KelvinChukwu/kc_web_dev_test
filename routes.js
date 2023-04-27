const routes = require('express').Router();
const https = require('https');
const mongoose = require('mongoose');
const PSetDataObject = require('./DataObject');


async function getPsetData(){

    const PsetData = await PSetDataObject.find({});
    return PsetData;
  
  }

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

routes.get('/api/pset-database', (req, res) => {
    var connectionString = 'mongodb+srv://root:root@development-cluster-ptdz3.azure.mongodb.net/orcestra-new?retryWrites=true&w=majority';
    mongoose.connect(connectionString);

    getPsetData().then(function(FoundItems){
    
        res.send(FoundItems);
    
      });

});

module.exports = routes;