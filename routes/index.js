const express = require('express');
const {
    createNewBlogController,
    getBlogPostsMetadataController
} = require('../controllers');

const Router = express.Router();

Router.post('/create-new', createNewBlogController);

Router.get('/get/posts/', getBlogPostsMetadataController);

module.exports = Router;


// return jwt.verify(req.token, process.env.JWT_SECRET, (err, authData) => {
//     if (err) {
//         return authorizationError(res, err);
//     } else {
        
//     }
// });