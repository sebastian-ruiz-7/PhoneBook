const succes=(req,res,message,status)=>{
    let messageDefault=message || 'OK';
    let statusDefault=status || 200;
    res.status(statusDefault).send({
        error:false,
        status:statusDefault,
        body:messageDefault
    })
}

const failed=(req,res,message,status,internalLog)=>{
    let err=message || 'Internal Error';
    let statusDefault=status || 500;
    if (internalLog) {
        console.log(internalLog);
    }
    res.status(statusDefault).send({
        error:err,
        status:statusDefault,
        body:''
    })

}

module.exports={
    succes,
    failed
};