let express = require('express');

let router = express.Router();
let userController = require('./controllers/userControllers');


router.get('/',(req,res)=>res.redirect('/reservation'));

router.get('/reservation', userController.reservation);




module.exports = router;
