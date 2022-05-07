const {Schema, model} = require('mongoose');

const UserSchema = Schema({
    
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        require: true,
        uniqued: true
    },
    password: {
        type: String,
        required: true
    }

})

module.exports = model('User', UserSchema);