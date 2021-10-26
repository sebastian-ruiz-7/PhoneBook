//Importing external modules
const bcrypt=require('bcrypt');

//Importing internal modules
const jwtHandling=require('./jwtHandling');

module.exports=(injectedStore)=>{
    let store=injectedStore;
    if (!injectedStore) {
        store=require('../store/mysql');
    }


    const getUser=async(id)=>{
        const sortedData={id:id};
        const desiredUser=await store.get('auth',sortedData);
        return desiredUser;
    }

    const addUser=async(data)=>{
        data.password=await bcrypt.hash(data.password,5);
        const sortedData={id:data.id,email:data.email,password:data.password};
        const addedUser=await store.add('auth',sortedData);
        return addedUser;
    }

    const updateUser=async(data)=>{
        data.password=await bcrypt.hash(data.password,5);
        const sortedData={id:data.id,email:data.email,password:data.password};
        const updatedUser=await store.update('auth',sortedData);
        return updatedUser;
    }

    const deleteUser=async(data)=>{
        const sortedData={id:data.id};
        const deletedUser=await store.remove('auth',sortedData);
        return deletedUser;
    }


    const login=async(data)=>{
        if (!data.email) {
            throw 'Invalid query';
        }
        let desiredUser=await store.get('auth',{email:data.email});
        if (Object.keys(desiredUser).length===0) {
            throw 'Contraseña o correo incorrecto';
        }
        desiredUser=desiredUser[0];
        const match=await bcrypt.compare(data.password,desiredUser.password)
        if (match) {
            const token=jwtHandling.sign(JSON.parse(JSON.stringify({id:desiredUser.id,email:desiredUser.email})));
            return token;
        }else{
            throw 'Contraseña o correo incorrecto';
        }
    }

    
    return{
        addUser,
        getUser,
        updateUser,
        deleteUser,
        login,
    }
}