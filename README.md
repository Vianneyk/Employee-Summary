
# Template Engine – Employee Summary

## Description

This application helps you to quick create a website with your team profile information. 

## Table of Contents

* [Installation](#installation)

* [Usage](#usage)

* [Tests](#tests)


## Installation

To install necessary dependencies, run the following command:
```
npm i
```
It will install inquirer, and jest for tests.

## Usage

To start, run on your command line `node app.js`, this will prompt a series of questions that will be used to build your team. To start you will be asked to enter the Manager information such as name, email, id and office number. Once Manager information is completed user can chose between enter a new Engineer, Intern, or not enter more employees. When selected Engineer the required information are name, email, id, and GitHub username. When selected Intern the required information are name, email, id, and school name. Once you have completed to enter all your team information a new `team.html` file will be created and saved in the `output` directory.

[Click here](https://youtu.be/JtOfmrDuqSE) to watch a video of a new team profile been created.


## Tests

To run tests, run the following command:
```
npm run test
```

