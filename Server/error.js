const createError = (status, message) =>{
const err = new Error()
err.status = status
err.errMessage = message
return err
}



module.exports ={createError}