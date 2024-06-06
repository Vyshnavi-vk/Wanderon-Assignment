const User = require('../model/userModel')
const generateToken = require('../utils/generateToken')



const registerController = async (req, res) => {
    const { username, email, password } = req.body
    try {
        const userExists = await User.findOne({ email })

        if (userExists) {
            return res.status(400).json({ msg: "User already exists! Please login" })
        }

        const user = new User({ username, email, password })
        await user.save()
        res.status(201).json({ msg: "User created successfully" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: "Internal server error" })
    }
}



const loginController = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await User.findOne({ email })

        if (!user) {
            return res.status(400).json({ msg: "Invalid credentials" })
        }

        const isPasswordMatch = await user.matchPassword(password)

        if (!isPasswordMatch) {
            return res.status(400).json({ msg: "Invalid credentials" })
        }

        res.cookie('token', generateToken(user._id), {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict'
        })

        res.status(200).json({
            user: {
                username: user.username,
                email: user.email,
                token: generateToken(user._id)
            }
        })

    } catch (error) {
        console.log(error)
        res.status(500).send("Intenal Server Error")
    }
}



const logoutController = async (req, res) => {
    try {
        res.cookie('token', '', { maxAge: 1 })
        res.status(200).json({ msg: "User logged out successfully" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: error })
    }
}



const getUsers = async (req, res) => {
    try {
        const allUsers = await User.find({})
        res.status(200).json({ users: allUsers })
    } catch (error) {
        console.log(error)
        res.status(200).json({ msg: "Internal Server Error" })
    }
}



module.exports = { registerController, loginController, getUsers, logoutController }