const mongoose = require('mongoose');


const roles = ['user','superadmin'];
const moment = require('moment');

const dotenv = require('dotenv');

dotenv.config();

// Define the user schema
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        match: /^\S+@\S+\.\S+$/,
        required: true,
        unique: true,
        lowercase: true,
        index: { unique: true }
      },
      photo:{
        type:String
      },
      role:{
        type: String,
        enum: roles,
        default: 'user'
      },
      fav_prod: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product' // Replace 'Product' with the correct model name for favorite products
      }],
      password: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 128
      },
      name  : {
        type: String,
        maxlength: 128,
      },
      tel: {
        type: String,
      },
      address:{
        type: String,
      }
});



  // Create the user model
  const User = mongoose.model('User', userSchema);
  // Export the user model
  module.exports = User;