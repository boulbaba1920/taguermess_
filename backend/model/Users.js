const { model, Schema } = require("mongoose");
/*
const UserSchema = new Schema({
  Name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});*/

//module.exports = model("Users", UserSchema);
const Products = new Schema({
  Name : { type: String, required: true },
  price : { type: String , required: true},
  type : { type: String , required: false},
  desc : { type: String , required: true},
  img : { 
    data: String
    }
});
module.exports = model("prod", Products);