//Importing external modules
const express=require('express');
const router=express.Router();

//Importing internal modules
const controller=require('./index-Number');
const secure=require('../../auth/secure');
const response=require('../../response');
const { update } = require('../../store/mysql');

//Get the numbers from an user
router.get('/',secure('decodeToken'),getNumbers);

//Add a new number of an user
router.post('/',secure('decodeToken'),addNumber);

//Update a number of an user
router.put('/',secure('decodeToken'),updateNumber);

//Delete a number
router.delete('/',secure('decodeToken'),removeNumber);

function getNumbers(req,res) {
    controller.getNumbers(req.user)
        .then(message=>response.succes(req,res,message,200))
        .catch(reason=>response.failed(req,res,reason,500));
}

function addNumber(req,res) {
    controller.addNumber(req)
        .then(message=>response.succes(req,res,message,200))
        .catch(reason=>response.failed(req,res,reason,500));
}

function updateNumber(req,res) {
    controller.updateNumber(req)
        .then(message=>response.succes(req,res,message,200))
        .catch(reason=>response.failed(req,res,reason,500));
}

function removeNumber(req,res) {
    controller.removeNumber(req)
        .then(message=>response.succes(req,res,message,200))
        .catch(reason=>response.failed(req,res,reason,500));
}

module.exports=router;