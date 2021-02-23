var router = require("express").Router();
const request = require('request');
//const fetch = require('node-fetch');

var house = [
    {
    name: "TATA MYST",
    loc: "KASAULI",
    area: "",
    photo: "../project/housing/1 TATA Myst Kasauli.png"
},
{
    name: "UNITECH CRESTVIEW",
    loc: "GURUGRAM",
    area: "",
    photo: "../project/housing/2 UNITECH Crestview Gurgaon.jpg"
},
]



router.get("/housing",function(req,res){
    res.render("housing", {house: house});
    //console.log('User on Township Page');
});
// app.get('/',function(req,res){
//     res.render('home',{
//         topicHead : 'Person Of Interest TV Series',
//         febChar : person
//     });
//     console.log('user accessing Home page');
// });

module.exports = router;