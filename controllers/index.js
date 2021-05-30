const { userLoginController } = require('./UserLogin');
const { userRegistrationController } = require('./UserRegistration');
const { userProfileUpdateController } = require('./CandidateProfileUpdate/index');
const { getUserProfileInfoController } = require('./GetUserProfileInfo');
const { getCandidateProfilesController } = require('./GetCandidateProfiles');
const { userProfileimageUpdateController } = require('./userProfileimageUpdateController');

module.exports = {
    userLoginController,
    userRegistrationController,
    userProfileUpdateController,
    getUserProfileInfoController,
    getCandidateProfilesController,
    userProfileimageUpdateController
}