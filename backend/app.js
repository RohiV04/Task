const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

const port = 9000;
app.use(bodyParser.json());
const tasksRouter = require('./routes/tasks');
const cors = require('cors');
app.use(cors({ origin: '*' }));
app.get('/', (req, res) => {
    res.send('Hello World!');
    }
);
const url = "mongodb+srv://root:571jgo3HZz9rthQo@atlascluster.b5dlijl.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster";
mongoose.connect(url);
const con = mongoose.connection;
con.once("open", () => {
  console.log("Mongo DB connected");
});


app.use('/tasks', tasksRouter);
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    }
);