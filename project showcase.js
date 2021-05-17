var router = require("express").Router();
const request = require('request');
//const fetch = require('node-fetch');

var towns = [{
        name: "ANSAL SUSHANT GOLFCITY",
        loc: "LUCKNOW",
        area: "",
        photo: "../project/townships/1 Ansal Sushant Golfcity LCNO.jpg"
    },
    {
        name: "ANANTRAJ ESTATE",
        loc: "GURUGRAM",
        area: "",
        photo: "../project/townships/2 Anantraj Estate Gurgaon.jpg"
    },
    {
        name: "UNITECH NIRVANA COUNTRY",
        loc: "GURUGRAM",
        area: "",
        photo: "../project/townships/3 Unitech Nirvana County 3.jpg"
    },
]



router.get("/townships", function(req, res) {
    res.render("townships", { towns: towns });
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