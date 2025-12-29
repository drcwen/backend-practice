const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

const app = express();
app.use(express.json())

const userRoutes = require('./routes/userRoutes')
app.use('/user', userRoutes)

const notesRoutes = require('./routes/notesRoutes')
app.use('/notes', notesRoutes)


const port = 4000;

//Connect to Mongoose
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err))

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})