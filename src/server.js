import express from 'express';
import passport from 'passport';
import mongoose from 'mongoose';
import routes from './routes';
import { toPromise } from './util';
import init from './init';
import './controllers';

const mongoUrl = process.env.MONGO_URL || 'mongodb://db';
const port = process.env.PORT || 8080;
const app = express();

// Initialise the middleware
app.use(passport.initialize());
app.use(passport.session());

// Setup routing
Object.keys(routes).forEach(route => app.use(`/api/${route}`, routes[route]));

// Connect mongoose
mongoose.connect(mongoUrl);

// Start the webserver
toPromise(app, app.listen, port)
  .then(
    () => init()
  )
  .then(
    () => console.info(`Server started listening on port ${port}!`),
    error => console.error(`Error occurred whilst starting the server: ${error}`)
  );
