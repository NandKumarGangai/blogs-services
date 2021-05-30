const path = require('path');
const fs = require('fs');
const Blogs = require('../../db/models/Blogs');
const {
    genericResponseSender,
    status,
    genericError
} = require('../../utils');

const URL = 'http://localhost:8000/';
const isProduction = process.env.NODE_ENV === 'PRODUCTION';

const getBlogPostsMetadataController = async (req, res) => {
    return Blogs.find({})
        .then(results => {
            // const hostname = require("os").hostname();

            const posts = results.filter(result => {

                let post = {};
                
                const { thumbnail: {
                    filename
                } = {} } = result;

                if (fs.existsSync(path.resolve('uploads/' + filename))) {
                    try {
                        // const thumbnailURL = `${isProduction ? 'https' : 'http'}://${hostname}:${process.env.PORT}/${filename}`;
                        const thumbnailURL = `/${filename}`;

                        delete result._doc.thumbnail;
                        post = {
                            ...result._doc,
                            thumbnailURL
                        }
                        // console.log('post: ', post);
                    } catch (error) {
                        throw new Error({ message: 'Something went wrong....' })
                    }
                    return post;
                }
            });

            const params = {
                status: status.SUCCESS,
                response: {
                    posts,
                    length: posts.length
                }
            }
            return genericResponseSender(res, params);
        })
        .catch(err => genericError(res, err));
}

module.exports = {
    getBlogPostsMetadataController
}