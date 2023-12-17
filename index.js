const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const BMIroutes = require('./routes/BMIroutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use('/',BMIroutes)

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/bmi').then(()=>console.log("Database Connected")).catch((err)=>console.log("Database Not Connected",err));


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
