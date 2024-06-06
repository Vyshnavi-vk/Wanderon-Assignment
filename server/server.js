const express = require('express')
const dotenv = require('dotenv')
const connecctDB = require('./config/db')
const connectDB = require('./config/db')
const cors = require('cors')
const userRoutes = require('./routes/userRoutes')
const cookieParser = require('cookie-parser')


dotenv.config()
connectDB()
const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}))


app.use('/api/user', userRoutes)

const PORT = process.env.PORT || 8080


app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`)
})
