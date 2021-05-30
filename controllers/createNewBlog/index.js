const _get = require('lodash/get');
const Blogs = require('../../db/models/Blogs');
const {
    genericError,
    genericResponseSender,
    status
} = require('../../utils');

const allowedImageTypes = ['image/png', 'image/jpg'];

const createNewBlogController = (req, res) => {
    try {
        const fileData = _get(req, 'file');

        if(!fileData || allowedImageTypes.includes(fileData.mimetype) === -1) {
            throw new Error({ message: 'Something went wrong'});
        }

        const body = JSON.parse(_get(req, 'body.document', {}));
        const newBlog = new Blogs({ ...body, thumbnail: fileData });

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