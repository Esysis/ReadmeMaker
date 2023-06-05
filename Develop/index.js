// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// Create an array of questions for user input

const questions = [
    
  {
    type: 'input',
    name: 'description',
    message: 'Enter a description for your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Enter installation instructions for your project:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Enter usage information for your project:',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Enter contribution guidelines for your project:',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Enter test instructions for your project:',
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub username:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your application:',
    choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None'],
  },
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

