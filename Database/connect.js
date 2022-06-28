const mongoose = require('mongoose');

const connectDatabase = async () =>{
    //connect to mongoose
    try{
        const connectingString = `mongodb+srv://Admin:V8kkrZ48a6wkB2Tw@asm.spwik.mongodb.net/Library?retryWrites=true&w=majority`;
        const value = await mongoose.connect(connectingString, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        if(value) console.log('Connected to database successfully');

    } catch(error){
    console.log(error)
    }
};
const disconnectDatabase = async () =>{
    //disconnect from mongoose
    try{
        const value = await mongoose.connection.close();
        if(value) console.log('Disconnected from database successfully');
    } catch(error){
        console.log(error)
    }
};

module.exports = {
    connectDatabase,
    disconnectDatabase,
}