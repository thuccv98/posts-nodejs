const express = require('express');

// Khoi dong app
const app = express();

// Khoi dong express middleware
app.use(express.json());

const PORT = 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
