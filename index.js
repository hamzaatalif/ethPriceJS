const express = require("express");
const axios = require('axios');
const CoinMarketCap = require('coinmarketcap-api')
const apiKey = 'f94ec3ee-a2d5-4668-8239-c20015a6e924'
const client = new CoinMarketCap(apiKey)
const app = express();
const PORT = process.env.PORT || 5000;

// client.getQuotes({symbol: ['ETH'], convert: 'USD'}).then(console.log).catch(console.error)

app.get("/",async (req,res)=>{
    try {
        let response = await client.getQuotes({symbol: ['ETH'], convert: 'USD'});
        let json = await response.data["ETH"]["quote"]["USD"]["price"];        
        res.send(json.toFixed(0))
    } catch (error) {
        console.error(error)
    }
})

app.listen(PORT, console.log(`App is listening on port: ${PORT}...`))