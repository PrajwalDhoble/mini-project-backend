const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

const db = `mongodb+srv://prajwal:prajwal_123@cluster0.b0wgc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

module.exports = () => mongoose.connect(db)