const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://vimlabhatt97:KVSs75@cluster0.q8t0m.mongodb.net/practice-2-jan")
        console.log("MongoDB connected")
    } catch(error) {
        console.log("Error:", error.message)
    }
}

module.exports = connectDB