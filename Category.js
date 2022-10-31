const express = require('express')
const app = express()
const port = 3000
app.listen(port, () =>
    console.log(`running app-listening on port ${port}!`));
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.post("/Category",(req,res)=>{
    const {data} = req.body;
        const count = {};
        data.forEach(item => {
            if (count [item.category.slug]) {
                count [item.category.slug]++
            } else {
                count [item.category.slug] = 1;
            }
        });
    res.send(count)
})