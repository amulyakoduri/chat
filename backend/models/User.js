const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

  name: {
    type:String,
    required:[true,"Please enter a name"],
  },

  avatar: {
    public_id:String,
    url:String,
  },

  email: {
    type: String,
    required:[true, "Please enter the email"],
    unique:[true, "Email already exists"],
  },

  password: {
    type: String,
    required:[true, "PLease enter the email"],
    minlenght:[6, "Password must be at least 6 charaters"],
    select:false,
  },

  posts:[
      {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post",
      },
  ],

  followers:[
      {
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
      },
  ],

  following:[
    {
      type:mongoose.Schema.Types.ObjectId,
      ref:"User",
    },
],


});

module.exports = mongoose.model("User", userSchema);