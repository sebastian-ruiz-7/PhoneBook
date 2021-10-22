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
        const sortedData={id:data.id,email:data.email,password:data.password};
        const addedUser=await store.add('auth',sortedData);
        return addedUser;
    }

    const updateUser=async(data)=>{
        const sortedData={id:data.id,email:data.email,password:data.password};
        const updatedUser=await store.update('auth',sortedData);
        return updatedUser;
    }

    const deleteUser=async(data)=>{
        const sortedData={id:data.id};
        const deletedUser=await store.remove('auth',sortedData);
        return deletedUser;
    }

    return{
        addUser,
        getUser,
        updateUser,
        deleteUser
    }
}