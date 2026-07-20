const express = require('express');
const { message } = require('statuses');

const app = express()

const PORT = 5000;

//Middle ware
app.use(express.json())

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

//Get all users

app.get('/users', (req, res) => {
    res.json(users)
})

//Get user by id

app.get('/users/:id', (req, res) => {
    const user_id = Number(req.params.id)
    const user = users.find((user) => user.id === user_id)

    // console.log(user,'user')

    if (!user) {
        return res.status(404).json({
            message: "User Not Found"
        })
    }
    res.json(user)
})

//Create User

app.post('/users', (req, res) => {

    // console.log(req.body)

    const { name, age } = req.body

    if (!name || !age) {
        return res.status(400).json({
            message: "Name and Age are Required"
        })
    }

    const newUser = {
        id: users.length + 1,
        name,
        age
    }

    users.push(newUser)

    res.status(201).json({
        message: 'User Created Successfully'
    })
})



app.listen(PORT, () => {
    console.log(`Server Running on ${PORT}`)
}) 