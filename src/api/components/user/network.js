//Fetch depencies
const express=require('express');
const router=express.Router();

//Fetch internal modules
const response=require('../../response');
const controller=require('./index-User');
const secure=require('../../auth/secure');

router.get('/:id',getUserByParams)    //get the info from a user
router.get('/me/token',secure('decodeToken'),getUserByToken)    //get the info from a user


router.post('/',addUser)      //add a user to the table User

router.put('/',secure('logged'),updateUser);    //update the info from an user

router.delete('/',secure('logged'),deleteUser); //deletes a user




function getUserByParams(req,res) {
    controller.get(req.params.id) //Fetching the data from the user specified in the req
        .then((message)=>response.succes(req,res,message,200))
        .catch((reason)=>response.failed(req,res,reason,500));
}

function getUserByToken(req,res) {
    controller.getUserByToken(req.user) //Fetching the data from the user specified in the req
        .then((message)=>response.succes(req,res,message,200))
        .catch((reason)=>response.failed(req,res,reason,500));
}

function addUser(req,res) {
    controller.addUser(req.body)
        .then((message)=>response.succes(req,res,message,200))
        .catch((reason)=>response.failed(req,res,reason,400));
}


function updateUser(req,res) {
    controller.updateUser(req.body,req.headers.authorization)
        .then((message)=>response.succes(req,res,message,200))
        .catch((reason)=>response.failed(req,res,reason,400));
}


function deleteUser(req,res) {
    controller.deleteUser(req.body)
        .then((message)=>response.succes(req,res,message,200))
        .catch((reason)=>response.failed(req,res,reason,400));
}

module.exports=router;