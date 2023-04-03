// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license = 'None') {
    return '';
  }
  return `[![License: ${license}](https://img.shields.io/badge/License-${license}-blue.svg)](https://opensource.org/licenses/${license})`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license = 'None') {
    return '';
  }
  return `[License](#license)`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license = 'None') {
    return '';
  }
  return `This project is licensed under the ${license} license.`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * ${renderLicenseLink(data.license)}
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  
  ${data.installation}

  ## Usage

  ${data.usage}

  ## License

  ${renderLicenseBadge(data.license)}
  
  ${renderLicenseSection(data.license)}

  ## Contributions and Credits

  ${data.credits}

  ## Test Commands

  ${data.test}

  ## Questions

  If you have any questions, please email me at ${data.email}. Visit my [GitHub profile](https://github.com/${data.github}) to see my other projects.
`;
}

module.exports = generateMarkdown;
