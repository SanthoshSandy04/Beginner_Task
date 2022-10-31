const express = require('express')

const app = express()
const port = 3000
app.get('/', function (req, res) {
    res.send('Hello World')
})

app.listen(port, () =>
    console.log(`running app-listening on port ${port}!`));

    // app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
const bodyParser = require('body-parser')

app.use(bodyParser.json())

    app.post("/display",(req,res)=>{
        const {data} = req.body;
        console.log(data[1].title);
        res.send(data[0].category.name);
        
        // const {name, age}=req.body;

        //console.log(req.body.name);

        // console.log(name,age);
        // req.status(200).send({"name":name,"age":age});

    })