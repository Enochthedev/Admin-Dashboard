const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');
const path = require('path');
//get index.html

app.use(express.static('public'));
console.log(__dirname);
app.use('/css', express.static(path.join(__dirname, 'public/css')));
app.use('/js', express.static(path.join(__dirname, 'public/js')));
app.use('/img', express.static(path.join(__dirname, 'public/img')));

//set view engine
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())


app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`)
    })

// Path: routes/index.js
app.get('/', (req, res) => {
    res.render('index.ejs')
    })