
const router = require('express').Router();
const { addProducts, getProducts ,searchapi} = require('../controllers/productcontroller');


router.get('/',(req,res)=>{
    res.send("product has been updated")
})


//  creating user
router.post('/addProducts', addProducts);

//  getting products
router.get('/getProducts', getProducts);

//  search api
router.get('/searchapi', searchapi)

module.exports = router;

