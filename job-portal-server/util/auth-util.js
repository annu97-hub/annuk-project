const APP_CONSTANTS = require("../config/app-constants");
var jwt = require('jsonwebtoken');

exports.createToken = (data) => {
    var token = jwt.sign(data, APP_CONSTANTS.SECRET_KEY);
    return token;
}

exports.get_toekn_data = (data) => {
    data = jwt.decode(data)
    return data;
}

exports.verifyToken = (token) => {
    try {
        var decoded = jwt.verify(token, APP_CONSTANTS.SECRET_KEY);
        console.log(decoded);

        return decoded;
      } catch(err) {
        // err
        return null;
      }
}

exports.Auth = async (request, response, next) => {
    next();
    return true;
    let authHeader = request.headers['authorization'];
    
    if(authHeader && authHeader.indexOf("Bearer") !== -1){
        let tokenArr = authHeader.split(" ");
        
        let token = tokenArr[1];
        let user = this.verifyToken(token);
        if(user){
            request.user = user;
            next();
        }else{
            return response.status(401).send({
                "statusCode": 401,
                "message": "Token expired."
            });
        }
    }else{
        return response.status(401).send({
            "statusCode": 401,
            "message": "Token not found."
        });
    }
}

exports.AdminAuth = async (request, response, next) => {
    let authHeader = request.headers['authorization'];
    
    if(authHeader && authHeader.indexOf("Bearer") !== -1){
        let tokenArr = authHeader.split(" ");
        
        let token = tokenArr[1];
        let user = this.verifyToken(token);
        if(user){
            if((user.roleId === 1 || user.roleId === 2)){
                request.user = user;
                next();
            }else{
                return response.status(401).send({
                    "statusCode": 401,
                    "message": "You are not authorized to access this."
                });
            }
        }else{
            return response.status(401).send({
                "statusCode": 401,
                "message": "Token expired."
            });
        }
    }else{
        return response.status(401).send({
            "statusCode": 401,
            "message": "Token not found."
        });
    }
}