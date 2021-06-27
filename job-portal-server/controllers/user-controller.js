const Model = require('../models');
var Services = require('../services');

exports.register = async (request, response) => {
    console.log(request.body);
    let userObj = {};
    userObj = request.body;
    // check if email exists
    try {
        let user = await Services.UserService.checkEmail(userObj.email);
        if (user != null)
            return Services.GlobalService.sendError(response, 'Email already exists.');
    } catch (err) {
        return Services.GlobalService.sendError(response, err);
    }

    // // check if username is unique
    if (userObj.userName) {
        let user = await Model.User.findOne({ userName: userObj.userName });
        if (user != null) {
            return Services.GlobalService.sendError(response, 'Username already exists.');
        }
    }

    try {
        let save = await Services.UserService.saveUser(userObj);
        return Services.GlobalService.sendSuccess(response, 'User registered successfully.', save);
    } catch (err) {
        console.log(err);
        return Services.GlobalService.sendError(response, err);
    }
}

exports.login = async (request, response) => {
    let existingUser = await Services.UserService.checkEmail(request.body.email);
    if (existingUser == null) {
        return Services.GlobalService.sendError(response, 'User doesn\'t exist');
    }
    try {
        let userObj = await Services.UserService.loginWithEmail(existingUser, request.body);

        return Services.GlobalService.sendSuccess(response, null, userObj);
    } catch (err) {
        return Services.GlobalService.sendError(response, err);
    }
}

exports.addJob = async (request, response) => {
    
    let userObj = {};
    userObj = request.body;
    
    try {
        let save = await Services.UserService.saveJob(userObj);
        return Services.GlobalService.sendSuccess(response, 'Job saved successfully.', save);
    } catch (err) {
        console.log(err);
        return Services.GlobalService.sendError(response, err);
    }
}

exports.listJob = async (request, response) => {
    
    let userObj = {};
    userObj = request.body;
    
    try {
        let save = await Services.UserService.listJob(userObj);
        return Services.GlobalService.sendSuccess(response, 'Job listed successfully.', save);
    } catch (err) {
        console.log(err);
        return Services.GlobalService.sendError(response, err);
    }
}

exports.updateUser = async (request, response) => {
    try{
        let userObj = await Services.UserService.updateUser(request);
        return Services.GlobalService.sendSuccess(response, null, userObj);
    }catch(err){
        console.log(err);
        return Services.GlobalService.sendError(response, err);
    }
}

exports.getUsersList = async (request, response) => {
    try {
        let users = await Services.UserService.getUsersList(request);
        return Services.GlobalService.sendSuccess(response, null, users);
    } catch (err) {
        return Services.GlobalService.sendError(response, err);
    }
}

exports.getUserById = async (request, response) => {
    try {
        let users = await Services.UserService.getUserById(request);
        return Services.GlobalService.sendSuccess(response, null, users);
    } catch (err) {
        console.log(err);
        return Services.GlobalService.sendError(response, err);
    }
}

exports.resetPassword = async (request, response) => {
    try{
        let userObj = await Services.UserService.resetPassword(request);
        return Services.GlobalService.sendSuccess(response, null, userObj);
    }catch(err){
        return Services.GlobalService.sendError(response, err);
    }

}

exports.verifyOtp = async (request, response) => {
    console.log(request.body);
    try {
        let result = await Services.UserService.verifyOtp(request.body);
        return Services.GlobalService.sendSuccess(response, result);
    } catch (err) {
        console.log(err);
        return Services.GlobalService.sendError(response, err);
    }
}

exports.sendOtp = async (request, response) => {
    console.log(request.body);
    try {
        let result = await Services.UserService.sendOtp(request.body);
        return Services.GlobalService.sendSuccess(response, result);
    } catch (err) {
        console.log(err);
        return Services.GlobalService.sendError(response, err);
    }
}
