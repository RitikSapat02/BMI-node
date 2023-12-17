const BMIData = require('../models/bmi');

// Express Routes
const calcBMI =  async (req, res) => {
    try {
      const { weight, height } = req.body;
  
      // Validate input
      if (!weight || !height || weight <= 0 || height <= 0) {
        return res.status(400).json({ error: 'Invalid input. Weight and height must be positive numbers.' });
      }
  
      // Calculate BMI
      const bmiValue = weight / Math.pow(height, 2);
      let result;
  
      if (bmiValue < 18.5) {
        result = 'Underweight';
      } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        result = 'Normal weight';
      } else {
        result = 'Overweight';
      }
  
      // Save to MongoDB
      const bmiData = new BMIData({
        weight,
        height,
        result,
      });
  
      await bmiData.save();
  
      // Return result
      res.json({ bmi: bmiValue, result });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
};
  
module.exports = calcBMI;