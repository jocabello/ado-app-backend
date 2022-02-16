const {Schema, model} = require('mongoose');

const EmployeeSchema = Schema({

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
    address: {
        type: {},
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
    region: {
        type: String,
        required: true
    },
    streetName: {
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

    // notes: {
    //     type: String
    // },
    // start: {
    //     type: Date,
    //     required: true
    // },
    // end: {
    //     type: Date,
    //     required: true
    // },
    // user: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'User',
    //     required: true
    // }

});

// para cambiar de _id a id en la respuesta
// EventSchema.method('toJSON', function() {
//     const { __v, _id, ...object} = this.toObject();
//     object.id = _id;
//     return object

// })

module.exports = model('Employee', EmployeeSchema);('')