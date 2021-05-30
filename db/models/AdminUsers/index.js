const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdminUsersSchema = new Schema({
    user_name: {
        type: String,
        unique: true,
        min: 1,
        max: 99,
        required: true
    },
    email_id: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true,
        select: false,
        min: 8,
        max: 1024
    },
    avatar: {
        data: Buffer,
        contentType: String
    }
});

module.exports = mongoose.model('AdminUsers', AdminUsersSchema, 'admins_collection');