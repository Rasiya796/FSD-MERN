// import
var express = require("express")
require("./connection")
var empmodel = require("./models/employee")
var cors = require("cors")

// initialize
var app = express()

//mid
app.use(express.json())
app.use(cors())


// api
app.get('/rasiya',(req,res) => {
    res.send('hello')
})

app.post('/add',async (req,res) =>{
    try {
        await empmodel(req.body).save(
            res.send({message:"data added"})
        )
    } catch (error) {
        console.log(error)
        
    }
})
//view
app.get('/view',async (req,res) => {
    try {
        data = await empmodel.find()
        res.send(data)
        
    } catch (error) {
        console.log(error)
        
    }
})
// delete

app.delete('/delete/:id',async (req,res) =>{
    try {
        await empmodel.findByIdAndDelete(req.params.id)
        res.send({message:"deleted successfully"})
    } catch (error) {
        console.log(error)
        
    }
})
// update
app.put('/update/:id',async (req,res) =>{
    try {
        var data= await empmodel.findByIdAndUpdate(req.params.id,req.body)
        res.send({message:"updated data"})
        
    } catch (error) {
        console.log(error)
        
    }
})

// port
app.listen(3009,()=>{
    console.log("port is running")

})