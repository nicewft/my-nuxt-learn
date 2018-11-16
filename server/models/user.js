import mongoose from 'mongoose'

let userSchema = new mongoose.Schema({
  userName: String,
  age: Number
})
const User = mongoose.model('User', userSchema)
export default User
// module.exports = mongoose.model('User', userSchema)