const mongoose = require('mongoose')

const NoteSchema = new mongoose.Schema({
    title: {
        type: String
    },
    selectedTime: {
        type: Object
    },
    description: {
        type: String
    }
})
const FileSchema = new mongoose.Schema({
    filename: {
        type: String
    },
    originalname: {
        type: String
    },
    notes: [NoteSchema]
})
const UserSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    files: [FileSchema]
})

const User = mongoose.model('User', UserSchema, 'users')

module.exports = User