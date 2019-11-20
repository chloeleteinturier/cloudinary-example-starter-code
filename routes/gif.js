const express = require('express');
const router = express.Router();

const Gif = require('./../models/gif')

router.post('/', (req,res,next)=>{
  const {title, description} = req.body
  
  const newGif = new Gif({
    title,
    description,
  })

  newGif.save()
    .then(()=> res.redirect('/'))
    .catch((err)=> console.log(err))
    
})

module.exports = router;