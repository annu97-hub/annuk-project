const Model = require('../models');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const Config = require('../config');
var Util = require('../util');
var { SharedUtil, EmailUtil, AuthUtil } = require('../util');

exports.getUsersList = (request) => {
    return new Promise(async (resolve, reject) => {
        let response = {};
        var perPage = 10;
        var page = request.query.page || 1;
        let usersList = await Model.User.aggregate([
    //        { $match: { status: 1 } },
            { $sort: { createdAt: -1 } },
            { "$skip": (perPage * page) - perPage },
            { "$limit": perPage }
        ]);

        if (usersList == null) {
            return reject(false);
        } else {
            response.users = usersList;
            response.current = page;
            response.pages = Math.ceil(await Model.User.find().count() / perPage) ;
            return resolve(response);
        }
    });
}

exports.getUserById = (request) => {
    return new Promise(async (resolve, reject) => {
        console.log(request.params.userId);
        let user = await Model.User.findById(request.params.userId);
        resolve(user);
    });

}

exports.checkUnique = (value, type) => {
    return new Promise(async (resolve, reject) => {
        let criteria = {};
        if(type == 'email'){
            criteria.email = value;
        }else{
            criteria.userName = value;
        }
        let user = await Model.User.find(criteria);
        resolve(user);
    });
}

exports.checkEmail = (email) => {
    return new Promise(async (resolve, reject) => {
        let user = await Model.User.findOne({ email: email });
        resolve(user);
    });

}
exports.saveUser = (userObj) => {
    return new Promise(async (resolve, reject) => {
        if (userObj.password) {
            let salt = await bcrypt.genSalt(10);
            let hash = await bcrypt.hash(userObj.password, salt);
            userObj.password = hash;
        }

        let userModel = new Model.User(userObj);

        let saveUser = await userModel.save();

        // mail func
        Util.EmailUtil.sendMail(userObj.email, 'New OTP generated', 'otp-verify', { otp: userObj.otpCode });
        resolve(saveUser);
    });
}

exports.loginWithEmail = (userObj, requestParams) => {
    let email = requestParams.email;
    let password = requestParams.password;

    return new Promise(async (resolve, reject) => {
        let userObj = await Model.User.findOne({ email: email });
        let isMatch = await bcrypt.compare(password, userObj.password);

        if (isMatch && userObj ) {
            let token = AuthUtil.createToken({ id: userObj._id, email: userObj.email });
            //console.log(token);
            //userObj.token = token;
            // save token in db
            //userObj.accessToken = token;
            //userObj.deviceId = deviceId;
            //let loggedInUser = await userObj.save();
            let result = {
                user: userObj,
                token : token
            }
            resolve(result);
        } else {
            reject('Email and password incorrect.');
        }
    });
}

exports.verifyOtp = (requestParams) => {
    let email = requestParams.email;
    let otpCode = requestParams.otpCode;
    return new Promise(async (resolve, reject) => {
        let user = await Model.User.findOne({ email: email, otpCode: otpCode });

        if (user == null) {
            reject('Not found.');
        } else {
            // save token in db
            user.otpCode = '';
            user.status = 1;
            let userObj = await user.save();
            resolve('OTP verified successfully.');
        }
    });
}

exports.sendOtp = (requestParams) => {
    let email = requestParams.email;
    console.log(requestParams);
    let otpCode = '1234';
    return new Promise(async (resolve, reject) => {
        let user = await Model.User.findOneAndUpdate({ email: email },{ otpCode }, { new: true });
        console.log(user)
        if (user == null) {
            reject(Config.APP_CONSTANTS.CONSTANTS.NOT_FOUND);
        } else {
            // mail func
            Util.EmailUtil.sendMail(email, 'New OTP generated', 'otp-verify', { otp: otpCode });
            resolve('New OTP sent to email.');
        }
    });
}

exports.updateUser = (requestParams) => {
    let userId = requestParams.params.userId;
    return new Promise(async (resolve, reject) => {
        if (requestParams.body.password) {
            let salt = await bcrypt.genSalt(10);
            let hash = await bcrypt.hash(requestParams.body.password, salt);
            requestParams.body.password = hash;
        }

        let user = await Model.User.findOneAndUpdate({ _id: userId },requestParams.body, { new: true });
        console.log(user)
        if (user == null) {
            reject(Config.APP_CONSTANTS.CONSTANTS.NOT_FOUND);
        } else {
            resolve(user);
        }
    });
}
exports.resetPassword = (requestParams) => {
    let email = requestParams.body.email;
    return new Promise(async (resolve, reject) => {
        let user = await Model.User.findOne({ email: email });
        console.log(user);
        if (user == null) {
            reject('Not found.');
        } else {
            // save password in db
            var stringPassword = '123456';

            let salt = await bcrypt.genSalt(10);
            let hash = await bcrypt.hash('123456', salt);
            user.password = hash;

            let save = await user.save();
            // mail func
            Util.EmailUtil.sendMail(email, 'New Password generated', 'reset-password', { password: stringPassword });
            
            resolve('New password sent to your email');
        }
    });
}