//Fetch dependecies
const express=require('express');

//Fetch internal modules
const config=require('./config');


const app=express();

app.use(express.json());

app.use('/',(req,res)=>{
    res.send('Bye');
})

app.listen(config.port_api,()=>{
    console.log(`escuchando en el puerto ${config.port_api}`);
})

