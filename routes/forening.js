var express = require("express");
var router = express.Router();

var mongoose = require("mongoose");
var ForeningModel = require("../models/ForeningModel.js");

/* GET - sektion för att hämta innehåll. */
router.get("/", function (req, res, next) {
   // Här söker man efter innehållet man vill hämta;
   ForeningModel.find().then(function (foreningarna) {
      res.json(foreningarna);
   });
});
/* POST - sektion för att skicka till databasen*/
router.post("/", function (req, res, next) {
   //Här kommer själva innehållet det som anges som req.body och är här info om en förening
   ForeningModel.create(req.body).then(function (post) {
      //Här skickas datan in i databasen
      res.json(post);
   });
});
/* DELETE - sektionen för att ta bort data ur databasen*/
/*Det som ska tas bort identifieras genom sitt id som autogenererats i databasen, 
det som kommer efter /tas bort om id:et stämmer*/
router.delete("/:id", function (req, res, next) {
   ForeningModel.findByIdAndDelete(req.params.id, req.body).then(function (post) {
      res.json(post);
   });
});
//Här exporteras routerfunktionerna ut
module.exports = router;
