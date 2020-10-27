const express = require('express');
const path = require('path');
const { use } = require('./server/routes/root');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 8080;

const rootRoute = require('./server/routes/root');

/***********************middlewares ********************************/
app.use(bodyParser.json());

/********************* loading view engine ******************************* */
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'frontend/build')));

/********************** routes *************************************/
app.use('/api', rootRoute);



app.listen(port,()=>{
	console.log(`we available on port ${port}`);
});

