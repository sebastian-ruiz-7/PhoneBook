//importing external modules
const express=require('express');
const router=express.Router();

//importing internal modules
const controller=require('./index-Auth');
const response=require('../response');

router.post('/',login);

function login(req,res) {
    controller.login(req.body)
        .then(token=>response.succes(req,res,token,200))
        .catch(reason=>response.failed(req,res,reason,500));
}

module.exports=router;