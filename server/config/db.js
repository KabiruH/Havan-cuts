const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // Replace useCreateIndex and useFindAndModify with direct MongoDB driver options
      // useCreateIndex: true,
      // useFindAndModify: false,
      serverSelectionTimeoutMS: 5000, // optional, reduces the timeout for the initial connection
    });

    const connection = mongoose.connection;
    connection.once('open', () => {
      console.log('MongoDB database connection established successfully');
    });
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  }
};

module.exports = connectDB;
