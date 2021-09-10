const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const handlebars = require('express-handlebars');

// import routes
const posts = require('./routes/posts');

// Khoi dong app
const app = express();

// Khoi dong handlebars middleware
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');

// Su dung .env
dotenv.config();

// Khoi dong express middleware
app.use(express.json());

// Ket noi co so du lieu
connectDB();

// Mot so routes co ban, co the dua vao file rieng trong thu muc routes
app.get('/', (req, res) => res.render('index'));
app.get('/about', (req, res) => res.render('about'));

// Mang routes vao de su dung
app.use('/posts', posts);

const PORT = 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
