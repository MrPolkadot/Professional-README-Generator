// TODO: Create a function that returns a license badge based on which license is passed in
const index = require("../index");
console.log(index.questions);


//If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![Static Badge](https://img.shields.io/badge/license-${license}-blue)`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}
  ## Table of Contents
  *[Description](#description)
  *[Installation](#installation)
  *[Usage](#usage)
  *[Contributing](#contributing)
  *[Tests](#tests)
  *[License](#license)
  *[Contact Me](#contact-me)
  
  ## Description
  ${data.description}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Contributing
  ${data.contributing}
  ## Tests
  ${data.tests}
  ##License
  ${data.license}
  ## Contact-Me
  You can contact me through my Github account and email:
  * GitHub username: ${data.username}
  * Email: ${data.email}
`;
}

module.exports = {
  generateMarkdown,
  //renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection,
}
