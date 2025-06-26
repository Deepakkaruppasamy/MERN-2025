const mongoose=require('mongoose');
const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGOURL)
        // mongoose.connect('mongodb://localhost:27017/')
        console.log('MongoDb connected')
    }

    catch(err){
        console.log(err)
    }
}
module.exports = connectDB