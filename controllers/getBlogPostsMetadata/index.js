const Blogs = require('../../db/models/Blogs');
const {
    genericResponseSender,
    status,
    genericError
} = require('../../utils');

const getBlogPostsMetadataController = (req, res) => {

    return Blogs.find()
        .then(results => {
            const params = {
                status: status.SUCCESS,
                response: {
                    posts: results,
                    length: results.length
                }
            }
            return genericResponseSender(res, params);
        })
        .catch(err => genericError(res, err));
}

module.exports = {
    getBlogPostsMetadataController
}