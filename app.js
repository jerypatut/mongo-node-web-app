const express = require('express');
const app = express();
const tasks = require('./routes/tasks')
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');
require('dotenv').config();
const connectDB = require('./db/connect');

//this middleware
app.use(express.json())
app.use(express.static('./public'));
app.use('/api/v1/tasks', tasks)
app.use(notFound)
app.use(errorHandlerMiddleware)


const port = process.env.PORT
const start= async () => {
    try{
        await connectDB(process.env.MONGO_URL);
        app.listen(port,console.log(`server running at http://localhost:${port}`));
    }catch (error) {
        console.error('Error starting server:', error)
    }
}

start();