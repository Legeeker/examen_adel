
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
    if (req.session.nbseat != 0){
        statut=req.session.nbseat*45
    };
    res.send("Total de la réservation :" ,{
        statut:statut
    });
    

}
exports.next = function(req ,res){
    req.session.destination = req.body.destination;
    req.session.nbseat = req.body.nbseat;
    req.session.assurance = req.body.assurance;

    // let user = { "destination" :req.body.destination};
    console.log(req.session.destination);
    console.log(req.session.nbseat);
    console.log(req.session.assurance);
    statut=req.session.nbseat*45

    res.render('person.ejs');
}
destinat="";
exports.next1= function(req ,res){
    req.session.name = req.body.name;
    req.session.age = req.body.age;
    console.log(req.session.name);
    console.log(req.session.age);
    res.render('validation.ejs',{
        destinat : req.session.destination
    });
}

exports.annuler = function(req,res){
    res.render('home.ejs');
}




exports.next2= function(req ,res){
    destinat = "ajout reussi";
    let user = { "destination" :req.session.destination,"firstname" :req.session.firstname,"age":req.session.age} ;
    console.log(req.session.destination);
    connection.query("INSERT INTO  validation SET;",user, function(error, result){
        if (error) console.log(error);
    });

    res.render('confirmation.ejs');
}
