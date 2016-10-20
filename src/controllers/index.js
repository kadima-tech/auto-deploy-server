import auth from './auth';
import init from './init';
import deploy from './deploy';

const controllers = {
  auth,
  init,
  deploy,
};

export {
  auth,
  init,
  deploy,
  controllers as default,
};
