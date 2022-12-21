let express = require('express');

let router = express.Router();
let userController = require('./controllers/userControllers');


router.get('/',(req,res)=>res.redirect('/reservation'));

router.get('/reservation', userController.reservation);
router.post('/new',userController.next);
router.post('/persons',userController.next1);
router.get('/index',userController.total);
router.get('/annuler',userController.annuler)
router.post('/confirmation',userController.next2);



module.exports = router;
