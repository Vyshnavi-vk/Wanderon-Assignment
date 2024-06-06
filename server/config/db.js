const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI)
        console.log('MongoDB Server Connected')
    } catch (error) {
        console.log(error)
        process.exit()
    }
}


module.exports = connectDB