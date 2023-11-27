// including necessary Node.js modules 
const generateMarkdown = require('./utils/generateMarkdown') // generateMarkdown JS 
const inquirer = require('inquirer'); // Inquier for the interactive CLI 
const fs = require('fs'); // File system module for file operations 

const questions = [
    {
        type: 'input', // Type of question, here it's a simple input 
        name: 'title', // Key under whuch the asnwer will be stored
        message: 'What is the name of your project?', // Question Text
        validate: (input) => { // Validation function for the input
            // If input is provided, return true, else log the message and return false
            return input ? true : (console.log(this.message), false)
        }
    },
    // Aditional questions follow same structure:
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of your project?',
        validate: (input) => {
            return input ? true : (console.log(this.message), false)
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Will your project require installation instructions?',
        validate: (input) => {
            return input ? true : (console.log(this.message), false)
        }
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'How is this project used? (enter usage instruction)',
        validate: (input) => {
            return input ? true : (console.log(this.message), false)
        }
    },
    {
        type: 'input',
        name: 'Contributions',
        message: 'Do you want others to contribute? (Please provide Constribution instructions if applicable)',
        validate: (input) => {
            return input ? true : (console.log(this.message), false)
        }
    },
    {
        type: 'input',
        name: 'Testing',
        message: 'How can users run tests for your Project? (Please provide the command or steps)',
        validate: (input) => {
            return input ? true : (console.log(this.message), false)
        }
    },
    {
        type: 'input',
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
        choices: [
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
        type: 'input',
        name: 'GitHub',
        message: 'What is your github username?',
        validate: (input) => {
            return input ? true : (console.log(this.message), false)
        }
    },
    {
        type: 'input',
        name: 'Email',
        message: 'What is your email address?',
        validate: (input) => {
            return input ? true : (console.log(this.message), false)
        }
    },


];

// Function to write a ReadMe file
function writeToFile(fileName, data) {
    // Using writeFile method from fs module to write data to a file 
    fs.writeFile(fileName, data, (err) => {
        if (err) { // if there's an error during file writing 
            console.log(err); // Log the error
        } else {
            // If no error, log that the file was successfully written
            console.log(`Successfully wrote ${fileName}`);
        }
    });
}

// Function to initialize application 
function init() {
    //  Starting to inquirer prompt with an array of questions 
    inquirer
        .prompt(questions)
        .then((data) => {
            // After successful input, process the data
            const markdown = generateMarkdown(data); // Convert data to markdown format 
            writeToFile('ReadMe.md', markdown); // Write the markdown to a file 
        })
        .catch((error) => {
            // If there's an error in the inquirer process, log the error 
            console.log(error);
        });
}

// Starting the apllication by calling the init function
init();
