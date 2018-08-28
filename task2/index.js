const express =  require('express');
const routes = require('./routes');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost/todolist');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());
app.use(routes);
app.use(function(err,req,res,next){
    res.status(422).send({
        error:err.message
    })
});

const port = process.env.PORT || 3000;
app.listen(3000, () => {
    console.log(`listening on port ${port}...`);
});