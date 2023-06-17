const mongoose = require('mongoose');
// const MONGODB_connection_string = 'mongodb://mongodb:27017/mydatabase' || ${MONGODB_URL};

async function connect(){
    try{
        await mongoose.connect('mongodb://mongodb:27017/mydatabase',{
            useNewUrlParser : true,
            useUnifiedTopology : true
        });
       console.log('Connected to mongodb successfully !!');
    } catch (error){
            
        console.log('Connected to mongodb failure !!');
    }
}
module.exports = { connect };