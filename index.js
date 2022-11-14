const express = require('express');
const app = express();
const cors  =require('cors');
const dotenv = require('dotenv');
dotenv.config();

/** middlewares */
app.use(express.json());

/** routes */
// routes

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Server has started on port: ${port}`)
})