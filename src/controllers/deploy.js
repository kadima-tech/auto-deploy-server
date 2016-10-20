// Deployment is only possible if the environment has previously been initialized
function deployToStaging() {

}

function deployToProduction() {
}

function deploy(bundleStream, environment) {
  if (environment === 'production') {
    return deployToProduction(bundleStream);
  }

  return deployToStaging(bundleStream);
}

export default deploy;
