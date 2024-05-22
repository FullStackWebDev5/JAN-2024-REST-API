const User = require('../models/users.js')

const getUsers = async (req, res) => {
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
}

const createUser = async (req, res) => {
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
}

const updateUser = async (req, res) => {
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
}

const deleteUser = async (req, res) => {
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
}

module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser
}