import fs from 'fs';
import * as cp from 'child_process';

import { fileExists } from '../util';

function init() {
  const pubkeyPath = `${process.env.HOME}/.ssh/id_rsa.pub`;

  // If we don't have an SSH key yet, we'll create one
  if (!fileExists(pubkeyPath)) {
    const mkdir = `mkdir -p ${process.env.HOME}/.ssh`;
    const sshKeygen = `ssh-keygen -f ${process.env.HOME}/.ssh/id_rsa -t rsa -N ''`;

    // Create the directory if it does not yet exist
    cp.execSync(mkdir);

    // Create the ssh key
    cp.execSync(sshKeygen);
  }

  return fs.readFileSync(pubkeyPath);
}

export default init;
