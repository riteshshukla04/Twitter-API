var Twitter = require('twitter');
var dotenv=require('dotenv');
var express=require('express');
var cors = require('cors')
dotenv.config();
var bodyParser = require('body-parser');
var app=express();
app.use(cors())
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })




var client = new Twitter({
/* 	consumer_key: process.env.CONSUMER_KEY,
	consumer_secret: process.env.CONSUMER_SECRET, */
	access_token_key:process.env.ACCESS_TOKEN_KEY,
	access_token_secret:process.env.ACCESS_TOKEN_SECRET,
    consumer_key:process.env.CONSUMER_KEY,
    consumer_secret:process.env.CONSUMER_SECRET,

});

app.post('/terimummy',jsonParser,urlencodedParser,(req,res)=>

client.post('statuses/update', {status:`${req.body.tweet} ${Math.round(Math.random(),2)}`}, function(error, tweet, response){
    if(error){
        res.status(400).send(error);
    }
    else
    {
        res.status(200).send(tweet);
    }})
);

app.listen(process.env.PORT || 3000, () => console.log("Server is running..."));