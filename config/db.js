const mongoose = require('mongoose');

const dbConnection = async () => {
    
    try {

        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to db...');

    } catch (error) {

        console.log(error);
        throw new Error('Error at initializing databse');
    }
}

module.exports = {dbConnection}