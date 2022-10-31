const express = require('express')
const app = express()
const port = 3000
app.listen(port, () =>
    console.log(`running app-listening on port ${port}!`));
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.post("/Price",(req,res)=>{
    const {data} = req.body;
        let total = 0
        data.forEach(item => {
            total += item.price;
        });
    res.send({total: total})
})