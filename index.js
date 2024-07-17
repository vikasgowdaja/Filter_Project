const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/api');
require('dotenv').config();




// index.js

const apiRouter = require('./routes/api');

const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());

// Mount API routes from api.js
app.use('/api', apiRouter);

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});



















// // Connect to the database
// mongoose
//     .connect(process.env.MONGO_DB_URI, { useNewUrlParser: true })
//     .then(() => console.log(`Database connected successfully`))
//     .catch((err) => console.log(err));

// // Since mongoose's Promise is deprecated, we override it with Node's Promise
// mongoose.Promise = global.Promise;

// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//     next();
// });

// app.use(bodyParser.json());

// app.use('/api', routes);

// app.use((err, req, res, next) => {
//     console.log(err);
//     next();
// });