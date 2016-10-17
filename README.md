# auto-deploy-server
[![Code Climate](https://codeclimate.com/github/kadima-tech/auto-deploy-server/badges/gpa.svg)](https://codeclimate.com/github/kadima-tech/auto-deploy-server)
[![Test Coverage](https://codeclimate.com/github/kadima-tech/auto-deploy-server/badges/coverage.svg)](https://codeclimate.com/github/kadima-tech/auto-deploy-server/coverage)
[![Issue Count](https://codeclimate.com/github/kadima-tech/auto-deploy-server/badges/issue_count.svg)](https://codeclimate.com/github/kadima-tech/auto-deploy-server)

auto-deploy-server is a project that was started as a means to give everyone the opportunity to set up their own Continuous Deployment server, without having to pay high fees per project you deploy. 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisities

To contribute to this project, you will need the following tools to run and build the code:

* Yarn
* Node.js
* Docker

### Installing

To start developing, you'll need to start with installing the dependencies of the project. In the project's root folder, run yarn.

```
yarn
```

After this, the project may be run using 
```
yarn start
```


## Running the tests

The tests can be run using the following command
```
yarn test
```

## Deployment

This project is split up into two components - auto-deploy-server and auto-deploy-cli. For this project you will need a server to deploy the infrastructure on and a machine to run the cli on. The deployment of this project can be done without docker, though the included docker setup means that you will only need to install docker-tools on the target machine to host this project.

## Built With

* [Yarn](https://yarnpkg.com/) - Dependency management
* [Node.js](https://nodejs.org/en/) - Server framework
* [Docker](https://docker.com/) - Docker containers

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Jacobus Meulen** - *Initial work* - [Kadima-Tech](https://github.com/kadima-tech)

See also the list of [contributors](https://github.com/kadima-tech/auto-deploy-server/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone who's code was used
* Inspiration
* etc
