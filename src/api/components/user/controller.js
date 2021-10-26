//Importing external modules
const {nanoid}=require('nanoid');

//Importing internal modules
const auth=require('../../auth/index-Auth');
const jwtHandling=require('../../auth/jwtHandling');

module.exports=(injectedStore)=>{
    let store=injectedStore;
    if (!store) {
        store=require('../../store/');
    }

    const get=async(id)=>{
        const sortdata={id:id}
        const desiredUser=await store.get('user',sortdata);
        // const password=await auth.getUser(id); This code has to be uncomment in case we want the password from the user
        // console.log(password[0].password);
        return desiredUser;
    }

    const getUserByToken=async(decodedToken)=>{
        
        const sortdata={id:decodedToken.id};
        const desiredUser=await store.get('user',sortdata);
        return desiredUser;
    }

    const addUser=async(data)=>{
        if (!data.name || !data.email || !data.password) {
            throw 'Invalid query';
        }else if (!data.id) {
            const newId=nanoid();
            data.id=newId;
        }
        
        let sortData={id:data.id, name:data.name, email:data.email};
        
        let verifyTheUserIsNew=await store.get('user',{email:sortData.email});
        
        if (Object.keys(verifyTheUserIsNew).length>0) {
            throw 'email already taken';
        }

        const newUser=await store.add('user',sortData);
        const newAuthRow=await auth.addUser(data);
        const token=jwtHandling.sign(JSON.parse(JSON.stringify({id:sortData.id,email:sortData.email})));
        return token;
        //return newUser;
    }   

    const updateUser=async(data)=>{
        if (!data.id || !data.name || !data.email || !data.password) {
            throw 'Invalid query';
        }
        const sortData={id:data.id, name:data.name, email:data.email};

        let verifyTheUserIsNew=await store.get('user',{email:sortData.email});
        
        if (Object.keys(verifyTheUserIsNew).length>0) {
            throw 'email already taken';
        }
        
        const updatedUser=await store.update('user',sortData);
        const updatedAuthRow=await auth.updateUser(data);
        return updatedUser;
    }

    const deleteUser=async(data)=>{
        const sortData={id:data.id};
        const deletedUser=await store.remove('user',sortData);
        const deleteAuthRow=await auth.deleteUser(data);
        return deletedUser;
    }

    

    return{
        get,
        addUser,
        updateUser,
        deleteUser,
        getUserByToken
    }
}