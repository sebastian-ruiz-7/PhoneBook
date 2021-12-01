//Fetch dependecies
const express=require('express');
const cors=require('cors');

//Fetch internal modules
const config=require('./config');
const user=require('./components/user/network');
const auth=require('./auth/network');
const number=require('./components/numbers/network');

const app=express();

app.use(express.json());
app.use(cors()); //Allows all domains use the API, not recomended for production
app.use('/user',user);
app.use('/login',auth);
app.use('/number',number);

app.listen(config.api.port,()=>{
    console.log(`escuchando en el puerto ${config.api.port}`);
})

