require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')
const session = require('express-session')
const cors = require('cors')
const MongoStore = require('connect-mongo')

const userRouter = require('./routes/user')
const indexRouter = require('./routes/index')

const app = express() 

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}))
app.use(session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: true,
    resave: false,
    store: MongoStore.create({
        mongoUrl: process.env.DB_URI,
        dbName: process.env.DB_NAME
    })
})) 

app.use('/', indexRouter)
app.use('/user', userRouter)

const startServer = async _ => {
    try {
        await mongoose.connect(process.env.DB_URI, {dbName: process.env.DB_NAME}, {useNewUrlParser: true})
        app.listen(4000, _ => console.log('server running on http://localhost:4000'))
    } catch (err) {
        console.log('Failed to connect database\n' + err)
    }
}
startServer()