const app = require('express')()

app.get('/', (req,res)=>{
    res.send("done")
})

//Testing
app.listen(3000, (req,res)=> {
    console.log('app listening on'+ 3000)
})
