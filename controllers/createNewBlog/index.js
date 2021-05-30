const _get = require('lodash/get');
const Blogs = require('../../db/models/Blogs');
const {
    genericError,
    genericResponseSender,
    status
} = require('../../utils');

const createNewBlogController = (req, res) => {

    const body = _get(req, 'body', {});

    try {
        const newBlog = new Blogs({ ...body });

        newBlog.save((err, response) => {
            if (err) {
                console.error('error: ', body, err);
                return genericError(res, err);
            }

            genericResponseSender(res, { status: status.CREATED, response: { message: `Created ${[response].length} record....` } });
        });
    } catch (error) {
        return genericError(res, error);
    }
}


module.exports = {
    createNewBlogController
};