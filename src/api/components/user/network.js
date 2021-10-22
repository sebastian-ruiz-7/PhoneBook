//Fetch depencies
const express=require('express');
const router=express.Router();

//Fetch internal modules
const response=require('../../response')
const controller=require('./index-User');


router.get('/:id',getUser)    //get the info from a user

router.post('/',addUser)      //add a user to the table User

router.put('/',updateUser)    //update the info from an user

router.delete('/:id',deleteUser) //deletes a user

function getUser(req,res) {
    controller.get(req.params.id) //Fetching the data from the user specified in the req
        .then((message)=>response.succes(req,res,message,200))
        .catch((reason)=>response.failed(req,res,reason,500));
}


function addUser(req,res) {
    controller.addUser(req.body)
        .then((message)=>response.succes(req,res,message,200))
        .catch((reason)=>response.failed(req,res,reason,400));
}


function updateUser(req,res) {
    controller.updateUser(req.body)
        .then((message)=>response.succes(req,res,message,200))
        .catch((reason)=>response.failed(req,res,reason,400));
}


function deleteUser(req,res) {
    controller.deleteUser(req.params.id)
        .then((message)=>response.succes(req,res,message,200))
        .catch((reason)=>response.failed(req,res,reason,400));
}

module.exports=router;