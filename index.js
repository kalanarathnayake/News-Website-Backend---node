const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors()); //cors origin
app.use(express.json()); 
const mongoose = require('mongoose');

const port = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.send('Derana News Assignment Backend API Running');
})

connectMongoDB().then(()=>console.log("MongoDB connected")).catch(err => console.log(err));

async function connectMongoDB() {
  await mongoose.connect('mongodb+srv://KalanaUser:Kalana123@cluster0.9mm3k.mongodb.net/?retryWrites=true&w=majority');
}

app.use('/api/news', require('./route/News.route'));
app.use('/api/admin', require('./route/Admin.route'));

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
})