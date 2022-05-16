const express = require('express');
const cors = require('cors')
const mongodbConnect = require('./configs/db');
const path = require('path')
const port = process.env.PORT || 7000


const registerAndLoginController = require('./controllers/registration.controller')
const { register, login } = require('./controllers/authentication.controller')


const app = express()
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended : true}))
app.use(express.static('public'))
app.set('view engine','ejs')   

app.get("/",(req,res)=>{
    res.send(" Users");
});
app.use('/login', registerAndLoginController)
app.post('/register',register)
app.post('/signin',login)



module.exports = ()=>{
    app.listen( port, async () => {
        try {
            await mongodbConnect()
            console.log("Server is running on the port 7000")
        } catch (error) {
            console.log({
                status : "connection failed",
                error_message : error.message
            })
        }
    })
}