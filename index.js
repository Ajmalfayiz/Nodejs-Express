const express = require('express')

const app = express()

let users = [
    {
        "id": 1,
        "Name": "Ajmal",
        "Age": 25
    },
    {
        "id": 2,
        "Name": "Midlaj",
        "Age": 20
    },
    {
        "id": 3,
        "Name": "Fayiz",
        "Age": 26
    }
]
const PORT = 4000;

app.get('/', (req, res) => {
    res.send("Home Page")
})
app.get('/about', (req, res) => {
    res.send("About Page")
})

app.get('/contact', (req, res) => {
    res.send("Contact Page")
})

app.get('/users', (req, res) => {
    res.json(users)
})

app.listen(PORT, () => {
    console.log(`Server Running  on ${PORT}`)
})