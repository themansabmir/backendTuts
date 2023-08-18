const router= require('express').Router()  

router.route('/test').get(async (req,res)=>{
res.send("server working fine") 


})


module.exports = router