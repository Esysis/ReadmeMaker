
// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![GitHub License](https://img.shields.io/badge/License-${license}-blue.svg)`;
  }
  return '';
}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return (
      `\n* [License](#license)\n`
    );
  }
  return '';
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return (
      `## License
      
This project is licensed under the ${license} license.`
    );
  }
  return '';
}


// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return (
      `## License
      
This project is licensed under the ${license} license.`
    );
  }
  return '';
}

// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}
  
  ## Description 
  
  ${data.description}
  
  ## Table of Contents 

  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation

  ${data.installation}

  ## Usage 

  ${data.usage}

  ## Contributing

  ${data.contributing}

  ## Tests

  ${data.tests}
  ## Questions

  For any questions, please contact me with the information below:

  GitHub: [@${data.github}](https://github.com/${data.github})

  Email: ${data.email}

  ## License

  This project is licensed under the ${data.license} license. ${renderLicenseLink(data.license)}

  `;
}


module.exports = generateMarkdown;


