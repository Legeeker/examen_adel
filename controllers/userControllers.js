
let session = require('express-session');
let  connection= require('../db') ;



exports.reservation = function(req, res){
    // connection.query("select * from formation;", function(error, result){
    //     if (error) console.log(error);
    // res.render('home.ejs', {academy1: result});
    res.render('home.ejs');
}
statut="";
exports.total = function(req,res){
    req.session.nbseat = req.body.nbseat;
    console.log(req.nbseat);
    total = req.body.nbseat;
    if (total.length != 0){
        statut="Total de la réservation :" ;
        res.send(statut);
    };

}
exports.next = function(req ,res){
    req.session.destination = req.body.destination;
    req.session.nbseat = req.body.nbseat;
    req.session.assurance = req.body.assurance;

    // let user = { "destination" :req.body.destination};
    console.log(req.session);
    console.log(req.nbseat);
    console.log(req.assurance);

    res.render('person.ejs');
}
exports.next1= function(req ,res){
    res.render('validation.ejs');
}
// exports.next2= function(req ,res){
//     res.render('confirmation.ejs');
// }
