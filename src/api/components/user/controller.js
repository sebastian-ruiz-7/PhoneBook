module.exports=(injectedStore)=>{
    let store=injectedStore;
    if (!store) {
        store=require('../../store/');
    }

    const get=async(id)=>{
        const sortdata={id:id}
        const desiredUser=await store.get('user',sortdata);
        return desiredUser;
    }

    const addUser=async(data)=>{
        if (!data.id || !data.name || !data.email || !data.password) {
            throw 'Invalid query';
        }
        const sortData={id:data.id, name:data.name, email:data.email, password:data.password};
        
        const newUser=await store.add('user',sortData);
        return newUser;
    }   

    const updateUser=async(data)=>{
        const sortData={id:data.id, name:data.name, email:data.email};
        const updatedUser=await store.update('user',sortData);
        return updatedUser;
    }

    const deleteUser=async(data)=>{
        const sortData={id:data};
        const deletedUser=await store.remove('user',sortData);
        return deletedUser;
    }


    return{
        get,
        addUser,
        updateUser,
        deleteUser
    }
}