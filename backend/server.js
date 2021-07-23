const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const db = require('./keys').MongoURI;
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(cors());

mongoose
	.connect(db, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
	})
	.then((response) =>
		console.log('MongoDb connected.....')
	)
	.catch((err) => console.log(err));

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
	console.log(`App is running on port ${port}`);
});
