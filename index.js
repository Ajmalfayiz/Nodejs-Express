const express = require('express')

const app = express()

const PORT = 4000;

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


app.listen(PORT, () => {
    console.log(`Server Running  on ${PORT}`)
})