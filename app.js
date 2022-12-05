const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;
const cors = require('cors');
//get index.html

app.use(express.static(path.join(__dirname, './public')));

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())


app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`)
    })

// Path: routes/index.js
app.get('/', (req, res) => {
    res.render('dashboard')
    })

app.get('/login', (req, res) => {
    res.render('login')
    })

//employee register route with post method request name, password and email
app.post('/register', (req, res) => {
    const { name, email, password } = req.body
    const employee = new Employee({
        name,
        email,
        password
    })
    employee.save()
        .then(() => {
            res.send('employee registered')
        })
        .catch((err) => {
            console.log(err)
        })
    })