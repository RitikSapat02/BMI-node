const mongoose = require('mongoose');

// BMI Schema
const bmiSchema = new mongoose.Schema({
    weight: Number,
    height: Number,
    result: String,
  });
  
const BMIData = mongoose.model('BMIData', bmiSchema);
module.exports = BMIData;