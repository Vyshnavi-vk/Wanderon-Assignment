const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const cors = require('cors')
const userRoutes = require('./routes/userRoutes')
const helmet = require('helmet')
const cookieParser = require('cookie-parser')



dotenv.config()
connectDB()
const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(helmet({ hidePoweredBy: true }))
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}))

// app.use(session({
//     secret: process.env.JWT_SECRET,
//     resave: false,
//     saveUninitialized: false,
//     cookie: {
//         secure: process.env.NODE_ENV === 'production',
//         httpOnly: true,
//         sameSite: 'strict',
//         maxAge: 24 * 60 * 60 * 1000
//     }
// }))


app.use('/api/user', userRoutes)

const PORT = process.env.PORT || 8080


app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`)
})
