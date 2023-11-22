// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs'); //for file system operations
// TODO: Create an array of questions for user input
const questions = [
    {
        type:'input',
        name: 'title',
        message: 'What is the name of your project?',
        validate: (input) => {
            return input ? true : (console.log(this.message), false)
        }
    },
    {
        type:'input',
        name: 'Description',
        message: 'What is the description of your project?',
        validate: (input) => {
            return input ? true : (console.log(this.message), false)
        }
    },
    {
        type:'input',
        name: 'installation',
        message: 'Will your project require installation instruction?',
        validate: (input) => {
            return input ? true : (console.log(this.message), false)
        }
    },
    {
        type:'input',
        name: 'Usage',
        message: 'How is this project used? (enter usage instruction)',
        validate: (input) => {
            return input ? true : (console.log(this.message), false)
        }
    },
    {
        type:'input',
        name: 'Contributions',
        message: 'Do you want others to contribute? (Please provide Constribution instructions if applicable)',
        validate: (input) => {
            return input ? true : (console.log(this.message), false)
        }
    },
    {
        type:'input',
        name: 'Testing',
        message: 'How can users run tests for your Project? (Please provide the command or steps)',
        validate: (input) => {
            return input ? true : (console.log(this.message), false)
        }
    },
    {
        type:'input',
        name: 'Credits',
        message: 'Credit others for their contribution to the project?',
        validate: (input) => {
            return input ? true : (console.log(this.message), false)
        }
    },
    {
        type: 'list',
        message: "You have a license for that Repo?? (Choose one valid license):",
        name: "license",
        choices:[
            "apache-2.0",
            "bsl-1.0",
            "bsd-2-clause",
            "bsd-3-clause",
            "cc0-1.0",
            "cc-by-4.0",
            "wtfpl",
            "epl-1.0",
            "agpl-3.0",
            "gpl-2.0",
            "gpl-3.0",
            "lgpl-3.0",
            "isc",
            "mit",
            "mpl-2.0",
            "unlicense",
            "zlib",
        ],
        validate: (input) => {
            return input ? true : (console.log(this.message), false)
        }
    },
    {
        type:'input',
        name: 'GitHub',
        message: 'What is your github username?',
        validate: (input) => {
            return input ? true : (console.log(this.message), false)
        }
    },
    {
        type:'input',
        name: 'Email',
        message: 'What is your email address?',
        validate: (input) => {
            return input ? true : (console.log(this.message), false)
        }
    },
    
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
