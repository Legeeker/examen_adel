
let session = require('express-session');
let  connection= require('../db') ;



exports.reservation = function(req, res){
    // connection.query("select * from formation;", function(error, result){
    //     if (error) console.log(error);
    // res.render('home.ejs', {academy1: result});
    res.render('home.ejs');
}