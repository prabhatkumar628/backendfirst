const asynHandler = async (reqHandler) => {
   return (req, res, next)=>{
    Promise.resolve(reqHandler(req, res, next))
    .catch((error)=> next(error))
    }
}

export {asynHandler}


// const asynHandle = (fn) => async (req, res, next) => {
//     try{
//        return await fn (req, res, next)

//     }
//     catch(error){
//         res.error(err.code || 500).json({
//             sucess: false,
//             message: err.message
//         })
//     }

// }
