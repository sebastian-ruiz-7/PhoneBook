//Fetch depencies
const express=require('express');
const router=express.Router();

//Fetch internal modules
const response=require('../../response')
const controller=require('./index-User');


router.get('/:id',(req,res)=>{
    controller.get(req.params.id) //Fetching the data from the user specified in the req
        .then((message)=>response.succes(req,res,message,200))
        .catch((reason)=>response.failed(req,res,reason,500))
})

module.exports=router;