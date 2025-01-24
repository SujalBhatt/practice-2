const express = require("express")
const connectDB = require("./config/db")
const router = require("./routes/bookRoutes")
const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    res.send("Hello World")
})

app.use("/api/users", router)

app.listen(8000, async () => {
    try {
        console.log("Sever is running on port 8000")
        await connectDB()
    } catch (error) {
        console.log("Error:", error.message)
    }
})