const express = require('express');
const multer = require('multer');

const {
    createNewBlogController,
    getBlogPostsMetadataController
} = require('../controllers');

const upload = multer({ dest: 'uploads/' });

const Router = express.Router();

Router.post('/create-new', upload.single('thumbnail'), createNewBlogController);

Router.get('/get/posts/', getBlogPostsMetadataController);

module.exports = Router;


// return jwt.verify(req.token, process.env.JWT_SECRET, (err, authData) => {
//     if (err) {
//         return authorizationError(res, err);
//     } else {

//     }
// });