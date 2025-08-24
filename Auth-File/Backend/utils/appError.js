// class AppError extends Error{
//     constructors(message,statusCode){
//         super(message);

//         this.statusCode=statusCode;
//         this.statusCode=`${statusCode}`.startsWith("4") ? "fail":"error";
//         Error.captureStackTrace(this,this.constructors);
//     }
// }


class AppError extends Error {
    constructor(message, statusCode) {
      super(message);
      this.statusCode = statusCode;
      this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
      this.isOperational = true;
  
      Error.captureStackTrace(this, this.constructor);
    }
  }
  
  module.exports = AppError;
  