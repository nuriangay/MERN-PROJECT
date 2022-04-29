const mongoose=require('mongoose')

const connectDB =async()=>{
    try {
        const connect=await mongoose.connect(`mongodb+srv://NuriAngay:06062000@nuritutorial.vqhwy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`)
        console.log(`connected: ${connect.connection.host}`.cyan.underline)
    } catch (error) {
        console.log(`error: ${error.message}`.red.underline.bold);
        process.exit(1)
        
    }
    
}
module.exports=connectDB