// require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const jsonParser = express.json();

// const PORT = process.env.PORT || 8700;
// const URI = process.env.MONGO_URI;
const PORT = 8700;
const DBNAME = 'sovalab';
const URI = `mongodb://127.0.0.1:27017/${DBNAME}`;

const projectRouter = require('./routes/projectRouter');
// const adminRouter = require('./routes/adminRouter');

app.use(cors());
app.use(jsonParser);
app.use('/api/projects', projectRouter);
// app.use('/api/admin', adminRouter);


// Connecting to db and run server
(async () => {
  try {
    await mongoose.connect(URI);
    await app.listen(PORT);
    console.log(`Example app listening on port ${PORT}`);
    console.log('Connected with DB is OK!');
  }
  catch (error) {
    console.log(error);
    process.exit(1);
  };
})();

// Disconnect
process.on('SIGINT', async () => {
  await mongoose.disconnect();
  console.log('Disconnect is OK!');
  process.exit(0);
});