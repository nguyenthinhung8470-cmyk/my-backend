const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

app.post("/contact",(req,res)=>{

    const {name,email,message} = req.body

    console.log("Name:",name)
    console.log("Email:",email)
    console.log("Message:",message)

    res.json({
        message:"Server đã nhận dữ liệu!"
    })

})

app.listen(3000,()=>{
    console.log("Server running at http://localhost:3000")
})