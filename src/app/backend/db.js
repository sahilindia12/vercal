const jwt = require('jsonwebtoken');
import mongoose from 'mongoose';
export const db=()=>{
    mongoose.connect('mongodb://localhost:27017/nextjs', {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }).then(() => {
        console.log("Connected to MongoDB");
      }).catch(err => {
        console.error("Error connecting to MongoDB:", err);
      });
  }
  db()