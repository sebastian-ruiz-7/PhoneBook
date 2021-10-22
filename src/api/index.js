//Fetch dependecies
const express=require('express');

//Fetch internal modules
const config=require('./config');
const user=require('./components/user/network');



const app=express();

app.use(express.json());

app.use('/user',user)

app.listen(config.api.port,()=>{
    console.log(`escuchando en el puerto ${config.api.port}`);
})

