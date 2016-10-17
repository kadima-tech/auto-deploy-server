import express from 'express';
import passport from 'passport';
import mongoose from 'mongoose';
import { login as loginRoute } from './routes';
import { toPromise } from './util';
import './controllers';

const mongoUrl = process.env.MONGO_URL || 'mongodb://db';
const port = process.env.PORT || 8080;
const app = express();

// Initialise the middleware
app.use(passport.initialize());
app.use(passport.session());

// Setup routing
app.use('/api/login', loginRoute);

// Connect mongoose
mongoose.connect(mongoUrl);

// Start the webserver
toPromise(app, app.listen, port)
  .then(
    () => console.info(`Server started listening on port ${port}!`),
    error => console.error(`Error occurred whilst starting the server: ${error}`)
  );
