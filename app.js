const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');
//get index.html


app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())


app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`)
    })

// Path: routes/index.js
app.get('/', (req, res) => {
    res.send('Hello World!')
    })