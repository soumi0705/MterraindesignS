var router = require("express").Router();
const request = require('request');

router.get("/",function(req,res){
    res.render("index");
});
// router.get("/townships",function(req,res){
//     res.render("townships");
// });
// router.get("/housing",function(req,res){
//     res.render("housing");
// });
router.get("/commercial",function(req,res){
    res.render("commercials");
});
router.get("/villas",function(req,res){
    res.render("villas");
});
router.get("/misc",function(req,res){
    res.render("misc");
});

module.exports = router;
