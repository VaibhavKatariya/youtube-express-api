const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config')
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

// Import Routes
const channelRoute = require('./routes/channel');
app.use('/v1/channel', channelRoute);

const videoRoute = require('./routes/videos');
app.use('/v1/videos', videoRoute);

app.get('/', (req, res) => {
    res.send({error: {
        code : "404",
        reason : "missing param"
    }});
})

mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log("Hi")
})

let PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`)
});