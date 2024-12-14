const mongoose = require('mongoose');

const dburl = "mongodb://jeri:120101@nodeexpreesproject-shard-00-00.qqncx.mongodb.net:27017,nodeexpreesproject-shard-00-01.qqncx.mongodb.net:27017,nodeexpreesproject-shard-00-02.qqncx.mongodb.net:27017/Store?ssl=true&replicaSet=atlas-12h1nm-shard-0&authSource=admin&retryWrites=true&w=majority&appName=NodeExpreesProject";


const connectDB = (url) => {
return mongoose.connect(dburl)
}
// Koneksi ke database Store
module.exports = connectDB;