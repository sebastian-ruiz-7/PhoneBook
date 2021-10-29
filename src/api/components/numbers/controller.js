const { response } = require('express');

module.exports=(injectedStore)=>{
    let store=injectedStore;
    if (!injectedStore) {
        store=require('../../store/mysql');
    }

    const getNumbers=async(user)=>{
        const sortedData={id:user.id};
        let numbersFromUser=await store.get('numeros',sortedData);
        return numbersFromUser;
    }

    const addNumber=async(req)=>{
        const sortedData={
            id:req.user.id,
            name:req.body.name,
            alias:req.body.alias,
            numbers:req.body.number};
        if (!sortedData.id || !sortedData.name || !sortedData.numbers) {
            throw 'Invalid Query';
        }
        const newNumberRow=await store.add('numeros',sortedData);
        return newNumberRow;
    }

    const updateNumber=async(req)=>{
        try {
            const sortData={
                id:req.user.id,
                name:req.body.name,
                alias:req.body.alias,
                numbers:req.body.newNumber,
                oldNumber:req.body.oldNumber
            }
            if (!sortData.id || !sortData.oldNumber || !sortData.name) {
                throw 'Invalid Query';
            }
            console.log(sortData);
            const updateNumberRow=await store.updateNumber('numeros',sortData);
            return updateNumberRow;
        } catch (error) {
            console.error(error);
            throw error
        }
        
    }
    
    const removeNumber=async(req)=>{
        const sortData={id:req.user.id,numbers:req.body.number};
        if (!sortData.id || !sortData.numbers) {
            throw 'Invalid Query';
        }
        console.log(sortData);
        const removeNumberRow=await store.removeNumber('numeros',sortData);
        return removeNumberRow;

    }
    return{
        getNumbers,
        addNumber,
        removeNumber,
        updateNumber
    }
}