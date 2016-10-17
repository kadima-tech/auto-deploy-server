export default function (scope, func, ...args) {
  // Now we add the callback
  return new Promise((resolve, reject) => {
    // Add the callback argument and turn it into a promise
    args.push((err, res) => {
      if (!err) {
        resolve(res);
      } else {
        reject(new Error(err));
      }
    });

    // Execute the function
    func.bind(scope).apply(this, args);
  });
}
