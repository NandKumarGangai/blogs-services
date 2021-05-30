const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogsSchema = new Schema({
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
        data: Buffer,
        contentType: String
    },
    last_updated: {
        type: Date,
        default: new Date(),
        required: true
    }
});

module.exports = mongoose.model('Blogs', BlogsSchema, 'blogs_collection');