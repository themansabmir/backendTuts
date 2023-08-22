const router= require('express').Router() 
const multer = require("multer");
const cloudinary = require('cloudinary');
const storage = multer.memoryStorage() 

const upload= multer({storage}) ;

cloudinary.config({
  cloud_name: 'dn5hq2s10',
  api_key: '793126552791256',
  api_secret: 'zNx8ZVXLl-EtoAa-SukzmfNbUmM'
});




router.route('/upload').post(upload.single('file'),async(req, res) =>{
    try { 
    
      const upload = await cloudinary.v2.uploader.upload(req.file.path); 
      return res.json({
     id:upload.public_id,
        file:upload.secure_url,
        success:true
      })
    } catch (error) {
      return res.status(500).json({msg:error})
    }
  })




module.exports= router