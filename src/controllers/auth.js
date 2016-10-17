import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as LocalApiKeyStrategy } from 'passport-localapikey';

// Encoding strategies
import { argon2i } from 'argon2-ffi';

// Local dependencies
import { User } from '../models';
import { toPromise } from '../util';

// Implements the username/password strategy
const localStrategy = (username, password, done) => {
  toPromise(User, User.findOne, {
    username,
  }).then(
    (user) => {
      if (user) {
        return argon2i.verify(user.password, password);
      }

      return false;
    },

    err => done(err)
  ).then(
    (authorized) => {
      if (authorized) {
        return done(null, { username });
      }

      return done('Not authorized');
    },

    err => done(err)
  );
};

// Implements the API key strategy
const localApiKeyStrategy = (apiToken, done) => {
  toPromise(User, User.findOne, {
    api_token: apiToken,
  }).then(
    user => done(null, user || false),
    err => done(err)
  );
};

passport.use(new LocalStrategy(localStrategy));
passport.use(new LocalApiKeyStrategy(localApiKeyStrategy));
passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

module.exports = {
  localStrategy,
  localApiKeyStrategy,
};
