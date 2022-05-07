const {Schema, model} = require('mongoose');

const EmployeeSchema = Schema({


    //TODO: required: true
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: false
    },

    names: {
        type: String,
        required: true
    },
    lastNames: {
        type: String,
        required: true
    },
    rutId: {
        type: String,
        required: true
    },
    dob: {
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

    heathCoverage: {
        type: String,
        required: true
    },
    maritalStatus: {
        type: String,
        required: true
    },
    nationality: {
        type: String,
        required: true
    },
    pensionSystem: {
        type: String,
        required: true
    },
    siteTag: {
        type: [],
        required: false
    },
    personalContact: {
        type: String,
        required: false
    },
    emergencyContact: {
        type: String,
        required: false
    }

});

// para cambiar de _id a id en la respuesta
// EventSchema.method('toJSON', function() {
//     const { __v, _id, ...object} = this.toObject();
//     object.id = _id;
//     return object

// })

module.exports = model('Employee', EmployeeSchema);
//('')