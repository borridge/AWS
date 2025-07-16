const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

require('dotenv').config();
app.get('/', (req, res) => res.send('Hello from Dockerized Node.js!'));
app.listen(PORT, () => console.log(`App listening on port ${PORT}`));

// 