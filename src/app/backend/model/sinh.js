import mongoose from "mongoose";



// Define a schema
const Schema = mongoose.Schema;
const sing= new Schema({
  username: String ,
  password:String,
email:String,
 
});

// Create a model
 export const save= mongoose.models.save|| mongoose.model('save', sing);
