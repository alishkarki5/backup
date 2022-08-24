const express = require('express');
const app =express();
const mongoose = require("mongoose");
const dotenv = require('dotenv')
const userRoutes = require("./routes/user")
const authRoutes = require("./routes/auth")

dotenv.config();

mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log('DB successfully connected')).catch((err) =>{console.log(err);
});


app.use(express.json());
app.use("/api/users",userRoutes);
app.use("/api/auths",authRoutes);


app.listen(process.env.PORT||3000, ()=>{
    console.log('server is listening to port 3000')
})
