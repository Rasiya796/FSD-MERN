var mongoose=require('mongoose')

mongoose.connect("mongodb+srv://rasiyasulthanakp:rasiyakp@cluster0.hl6nv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(() =>{
    console.log("db connect")

})
.catch((err)=>{
    console.log(err)
})