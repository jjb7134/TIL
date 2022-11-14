const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, '이름이 비었습니다.']
    },
    password: {
        type: String,
        required: [true, '패스워드가 비었습니다.']
    }
})

module.exports = mongoose.model('User', userSchema);