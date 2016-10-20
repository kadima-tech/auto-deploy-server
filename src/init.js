import crypto from 'crypto';
import { argon2i } from 'argon2-ffi';

import { User } from './models';
import { toPromise } from './util';

// TODO: This function should ideally be
// moved to a different place
function generatePasswordHash(password) {
  return toPromise(crypto, crypto.randomBytes, 16).then(
   salt => toPromise(argon2i, argon2i.hash, password, salt),
   error => console.error(`Error generating a password: ${error}`)
  );
}

// TODO: The default password should not be hardcoded
function createAdminUser(user) {
  if (!user) {
    return generatePasswordHash('admin').then(
      (hash) => {
        const admin = new User({ username: 'admin', password: hash });
        return admin.save();
      },

      error => console.error(`Error generating password: ${error}`)
    );
  }

  return user;
}

// Handle first time start up
export default function initialize() {
  return User.findOne({})
    .then(
      user => createAdminUser(user),
      error => console.error(`Error fetching user list: ${error}`)
    );
}
