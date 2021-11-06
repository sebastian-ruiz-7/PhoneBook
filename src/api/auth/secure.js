const auth=require('./jwtHandling');

module.exports=(action)=>{
    if (!action) {
        throw 'Action requiered fos this request';
    }

    const middleware=(req,res,next)=>{
        // if (action==='logged') {
        //     const verifyIdentity=auth.check.verifyOwn(req);
        //     next();
        // }
        if (action==='decodeToken') {
            const getIdentity=auth.check.decodedToken(req);
            next();
        }
    }

    return middleware
}