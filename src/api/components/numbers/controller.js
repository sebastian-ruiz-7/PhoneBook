const { response } = require('express');

module.exports=(injectedStore)=>{
    let store=injectedStore;
    if (!injectedStore) {
        store=require('../../store/mysql');
    }

    const getNumbers=async(user)=>{
        const sortedData={id:user.id};
        let numbersFromUser=await store.get('numbers',sortedData);
        return numbersFromUser;
    }


    const addNumber=async(req)=>{

        try {
            
            const sortedData={
                id:req.user.id,
                name:req.body.name,
                alias:req.body.alias,
                numbers:req.body.number};
            if (!sortedData.id || !sortedData.name || !sortedData.numbers) {
                throw 'Invalid Query';
            }
            //Get current numbers
            let currentNumbers=await getNumbers({id:sortedData.id}); 
            let newArrayNumbers=currentNumbers[0].numbers; //SQL queries returns arrays thats why is necessary add '[0]'
            newArrayNumbers.push({name:sortedData.name,alias:sortedData.alias,number:sortedData.numbers});
            newArrayNumbers=JSON.stringify(newArrayNumbers);
    
            const saveChanges=await store.update('numbers',{id:sortedData.id,numbers:newArrayNumbers});
            return saveChanges;

        } catch (error) {
            console.error(error);
            throw error
        }

        
    }

    const updateNumber=async(req)=>{
        try {
            const sortData={
                id:req.user.id,
                name:req.body.name,
                alias:req.body.alias,
                newNumber:req.body.newNumber,
                oldNumber:req.body.oldNumber
            }
            if (!sortData.id || !sortData.oldNumber || !sortData.name) {
                throw 'Invalid Query';
            }

            let currentNumbers=await getNumbers({id:sortData.id}); 
            let newArrayNumbers=currentNumbers[0].numbers; //SQL queries returns arrays thats why is necessary add '[0]'
            
            //Finding the desire contact
            let i;
            let desiredContact=newArrayNumbers.filter(contact=>{
                if (contact.number===sortData.oldNumber) {
                    return true;
                }
                i++;
                return false;
            })
            desiredContact=desiredContact[0];
            desiredContact.name=sortData.name;
            desiredContact.alias=sortData.alias;
            desiredContact.number=sortData.newNumber;
            
            newArrayNumbers=JSON.stringify(newArrayNumbers);

            const saveChanges=await store.update('numbers',{id:sortData.id,numbers:newArrayNumbers});
            return saveChanges;
        } catch (error) {
            console.error(error);
            throw error
        }
        
    }
    
    const removeNumber=async(req)=>{
        try {
            const sortData={id:req.user.id,number:req.body.number};
        if (!sortData.id || !sortData.number) {
            throw 'Invalid Query';
        }
        
        let currentNumbers=await getNumbers({id:sortData.id}); 
        let newArrayNumbers=currentNumbers[0].numbers; //SQL queries returns arrays thats why is necessary add '[0]'
        

        //Finding the desire contact
        let i=0;
        for (const contact of newArrayNumbers) {
            if (contact.number===sortData.number) {
                break;
            }
            i++;
        }

        newArrayNumbers.splice(i,1);
        newArrayNumbers=JSON.stringify(newArrayNumbers);
        const saveChanges=await store.update('numbers',{id:sortData.id,numbers:newArrayNumbers});
        return saveChanges;

        } catch (error) {
            console.error(error);
            throw error
        }
        
        

    }
    return{
        getNumbers,
        addNumber,
        removeNumber,
        updateNumber
    }
}