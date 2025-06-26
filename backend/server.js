const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors'); // ✅ add this

const todoRoute = require('./routers/todoRouters');
const userRouter = require('./routers/egrouter');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(cors()); // ✅ add this line

app.use(express.json());
app.use('/user', userRouter);
app.use('/todo', todoRoute);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
