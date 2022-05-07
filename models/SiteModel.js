const {Schema, model} = require('mongoose');

const SiteSchema = Schema({

    name: {
        type: String,
        required: true
    },
    addressStreetName: {
        type: String,
        required: true
    },
    addressNumber: {
        type: String,
        required: true
    },
    addressComuna: {
        type: String,
        require: true
    },
    addressRegion: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    
    company: {
        type: Schema.Types.ObjectId,
        ref: 'Company',
        required: false
    }
    
});

module.exports = model('Site', SiteSchema);