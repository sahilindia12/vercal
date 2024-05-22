import mongoose from "mongoose";



// Define a schema
const Schema = mongoose.Schema;
const sing= new Schema({
  name: String ,
  address:String,
subject:String,
 
});

// Create a model
 export const addd= mongoose.models.newtt|| mongoose.model('newtt', sing);

