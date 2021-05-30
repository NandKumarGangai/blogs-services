const express = require('express');
const jwt = require('jsonwebtoken');
const multer = require('multer');

const upload = multer({ dest: 'uploads/' });
const UsersModel = require('../db/models/UsersModel');
const { interceptRequest } = require('../middlewares/interceptRequest');
const {
    authorizationError,
    genericResponseSender,
    status
} = require('../utils');

const {
    userLoginController,
    userRegistrationController,
    userProfileUpdateController,
    getUserProfileInfoController,
    getCandidateProfilesController,
    userProfileimageUpdateController
} = require('../controllers');

const Router = express.Router();

Router.post('/register-user', userRegistrationController);

Router.post('/user-login', userLoginController);

Router.put('/update-user-profile/', interceptRequest, userProfileUpdateController);

Router.put('/update-user-profile-image', interceptRequest, upload.single('user_profile_image'), userProfileimageUpdateController);

Router.post('/get-user-profile/', interceptRequest, getUserProfileInfoController);

Router.post('/get-candidate-profiles', interceptRequest, getCandidateProfilesController);

Router.get('/get-users', interceptRequest, (req, res) => {

    return jwt.verify(req.token, process.env.JWT_SECRET, (err, authData) => {
        if (err) {
            return authorizationError(res, err);
        } else {
            console.log('AuthData: ', authData)
            UsersModel.find().then(results => {
                const params = {
                    status: status.SUCCESS,
                    response: {
                        users: results,
                        length: results.length
                    }
                }
                return genericResponseSender(res, params);
            });
        }
    });
});

module.exports = Router;


// return jwt.verify(req.token, process.env.JWT_SECRET, (err, authData) => {
//     if (err) {
//         return authorizationError(res, err);
//     } else {
        
//     }
// });