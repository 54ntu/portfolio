require('dotenv').config();
const { app } = require("./src/app");
const { connectdb } = require('./src/dbconfig/db');


PORT = process.env.PORT || 8000

connectdb()
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`server is listening at port ${PORT}`)
    });
})
.catch((error)=>{
    console.log("database connection failed!!!", error)
})