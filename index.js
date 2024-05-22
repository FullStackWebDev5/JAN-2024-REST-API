const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
dotenv.config()

const userRoutes = require('./src/routes/users.js')

const app = express()
app.use(bodyParser.urlencoded())
app.use(userRoutes)

app.get('/', (req, res) => {
  res.send('REST APIs')
})

app.listen(process.env.PORT, () => {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log('Server is running :)'))
    .catch((error) => console.log(error))
})












/*
  # REST: REpresentational State Transfer (CRUD Operations)

  # HTTP Methods:
    - GET (READ)
    - POST (CREATE)
    - PATCH (UPDATE)
    - DELETE (DELETE)

  # Example: Create APIs for E-Commerce website
    - Sellers
      - Read: GET /sellers
      - Create: POST /sellers
      - Update: PATCH /sellers/:id
      - Delete: DELETE /sellers/:id
    - Customers
      - Read: GET /customers
      - Create: POST /customers
      - Update: PATCH /customers/:id
      - Delete: DELETE /customers/:id
    - Products
      - Read: GET /products
      - Create: POST /products
      - Update: PATCH /products/:id
      - Delete: DELETE /products/:id
    
  # Status Codes:
    - 200 (Default): Success
    - 404: Page/ Resource not found
    - 500: Internal Server Error

  # Folder Structure
    - models
    - routes
    - controllers

  # Server in 1 file
    const express = require('express')
    const mongoose = require('mongoose')
    const bodyParser = require('body-parser')
    const dotenv = require('dotenv')
    dotenv.config()

    const app = express()
    app.use(bodyParser.urlencoded())

    const User = mongoose.model('User', {
      name: String,
      email: String,
      phone: Number,
      password: String,
      isMinor: Boolean
    })

    app.get('/', (req, res) => {
      res.send('REST APIs')
    })

    app.get('/users', async (req, res) => {
      try {
        const users = await User.find()
        res.json({
          status: 'SUCCESS',
          data: users
        })
      } catch (error) {
        res.status(500).json({
          status: 'FAILED',
          message: 'Something went wrong'
        })
      }
    })


    app.post('/users', async (req, res) => {
      try {
        const { name, email, password, phone, isMinor } = req.body
        await User.create({ name, email, password, phone, isMinor })
        res.json({
          status: 'SUCCESS',
          message: 'User created successfully'
        })
      } catch (error) {
        res.status(500).json({
          status: 'FAILED',
          message: 'Something went wrong'
        })
      }
    })


    app.patch('/users/:id', async (req, res) => {
      try {
        const { id } = req.params
        const { name, email, password, phone, isMinor } = req.body
        await User.findByIdAndUpdate(id, { name, email, password, phone, isMinor })
        res.json({
          status: 'SUCCESS',
          message: 'User updated successfully'
        })
      } catch (error) {
        res.status(500).json({
          status: 'FAILED',
          message: 'Something went wrong'
        })
      }
    })


    app.delete('/users/:id', async (req, res) => {
      try {
        const { id } = req.params
        await User.findByIdAndDelete(id)
        res.json({
          status: 'SUCCESS',
          message: 'User deleted successfully'
        })
      } catch (error) {
        res.status(500).json({
          status: 'FAILED',
          message: 'Something went wrong'
        })
      }
    })

    app.listen(process.env.PORT, () => {
        mongoose
            .connect(process.env.MONGODB_URL)
            .then(() => console.log('Server is running :)'))
            .catch((error) => console.log(error))
    })
*/