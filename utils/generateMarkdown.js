// TODO: Create a function that returns a license badge based on which license is passed in
const index = require("../index");
console.log(index.questions.License);


// If there is no license, return an empty string
// function renderLicenseBadge(license) {
//   if (license === index.questions.choices[0]) {
//     return "";
//   }
//   if (license === ) {

//   }
//   if (license === ) {

//   }
//   if (license === ) {

//   }
//   if (license === ) {

//   }
//   if (license === ) {

//   }
//   if (license === ) {

//   }
//   if (license === ) {

//   }
//   if (license === ) {

//   }
//   if (license === ) {

//   }
//   if (license === ) {

//   }
//   if (license === ) {

//   }
//   if (license === ) {

//   }
//   if (license === ) {

//   }
// }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = {
  generateMarkdown,
  //renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection,
}
