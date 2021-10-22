//Importing internal modules
const config=require('../config');

//Importing dependencies
const mysql=require('mysql2')


let dbConfig={
    host:config.mysql.host,
    user:'root',
    database:config.mysql.database,
    password:config.mysql.password,
    port:config.mysql.port
}

let connection;

const handleConnection=()=>{
    connection=mysql.createConnection(dbConfig);

    connection.connect((err)=>{
        if (err) {
            setTimeout(() => {
                handleConnection();
            }, 2000);
        }else{
            console.log('[db connected!]');
        }
    })


    connection.on('error',(err)=>{
        console.error('[db error]',err);
        if (err.code==='PROTOCOL_CONNECTION_LOST') {
            handleConnection();
        }else{
            throw err;
        }
    })
}

handleConnection();

const get=(Table,data)=>{
    return new Promise((resolve,reject)=>{
        connection.query(`SELECT * FROM ${Table} where ?`,data,(err,result)=>{
            if (err) {
                return reject(err);
            }else{
                return resolve(result);
            }
        })
    })
};

const add=(Table,data)=>{
    return new Promise((resolve,reject)=>{
        connection.query(`INSERT INTO ${Table} SET ?`,data,(err,result)=>{
            if (err) {
                return reject(err);
            }else{
                return resolve(result);
            }
        })
    })
};

const update=(Table,data)=>{
    return new Promise((resolve,reject)=>{
        connection.query(`UPDATE ${Table} SET ? WHERE id=${data.id}`,data,(err,result)=>{
            if (err) {
                reject(err);
            }else{
                resolve(result);
            }
        })
    })
}

const remove=(Table,data)=>{
    return new Promise((resolve,reject)=>{
        connection.query(`DELETE FROM ${Table} WHERE id=${data.id}`,data,(err,result)=>{
            if (err) {
                reject(err);
            }else{
                resolve(result);
            }
        })
    })
}

module.exports={
    get,
    add,
    update,
    remove
}