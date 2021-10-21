module.exports=(injectedStore)=>{
    let store=injectedStore;
    if (!store) {
        store=require('../../store/');
    }

    const get=async(id)=>{
        const data={id:id}
        const desiredTable=await store.get('user',data);
        return desiredTable;
    }
    return{
        get
    }
}