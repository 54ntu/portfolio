const mongoose = require("mongoose");

const connectdb = async () => {
 try {
     const connectInstance = await mongoose.connect(
       `${process.env.MONGODB_URL}/${process.env.DB_NAME}`
     );
     console.log("db connected successfully")
   //   console.log(connectInstance)
 } catch (error) {
    console.log('error while connecting database: ', error);
    process.exit(1);
    
 }
};

module.exports = { connectdb };
