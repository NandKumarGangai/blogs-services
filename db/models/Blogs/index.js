const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ThumbnailSchema = new Schema({
    fieldname: {
        type: String,
        required: true
    },
    originalname: {
        type: String,
        required: true
    },
    encoding: {
        type: String,
        required: true
    },
    mimetype: {
        type: String,
        required: true
    },
    destination: {
        type: String,
        required: true
    },
    filename: {
        type: String,
        required: true
    },
    path: {
        type: String,
        required: true
    },
    size: {
        type: Number,
        required: true
    },
});

const BlogsSchema = new Schema({
    // id: {
    //     type: String,
    //     unique: true,
    //     required: true,
    //     default: new Date().getTime()
    // },
    title: {
        type: String,
        min: 1,
        max: 99,
        required: true
    },
    sub_title: {
        type: String,
    },
    quote: {
        type: String
    },
    content: {
        type: String,
        required: true
    },
    keywords: {
        type: Array,
        required: false
    },
    date_publish: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    author_mail: {
        type: String,
        required: true
    },
    thumbnail: {
        type: ThumbnailSchema,
        required: true
    },
    last_updated: {
        type: Date,
        default: new Date(),
        required: true
    }
});

module.exports = mongoose.model('Blogs', BlogsSchema, 'blogs_collection');