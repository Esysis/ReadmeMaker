// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// Create an array of questions for user input

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    // Add more questions here...
];

// Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }

        console.log("Success! Your README.md file has been created!")
    });
}

// Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(answers => {
            // Pass inquirer data to generateMarkdown function
            writeToFile("README.md", generateMarkdown(answers));
        })
}

// Function call to initialize app
init();

