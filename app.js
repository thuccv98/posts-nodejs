const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');

// import routes
const posts = require('./routes/posts');

// Khoi dong app
const app = express();
dotenv.config();

// Khoi dong express middleware
app.use(express.json());

// Ket noi co so du lieu
connectDB();

// Mang routes vao de su dung
app.use('/posts', posts);

const PORT = 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
