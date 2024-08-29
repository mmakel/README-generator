// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from "fs";



// TODO: Create an array of questions for user input
//const questions = [];

/* TODO: Create a function to write README file
function writeToFile(fileName, data) {
}*/



// TODO: Create a function to initialize app
function init() {
   inquirer
       .prompt([
       {
           type: "input",
           message: "What is your project title?",
           name: "title",
       },
       {
           type: "input",
           message: "Please provide a description of your project.",
           name: "description",
       },
       {
           type: "input",
           message: "What are the steps required to install your project?",
           name: "installation",
       },
       {
           type: "input",
           message: "What are the steps required to use your project?",
           name: "usage",
       },
       {
           type: "input",
           message: "List any collaborators' GitHub usernames.",
           name: "credits",
       },
       {
           type: "list",
           message: "What license would you like to use?",
           name: "license",
           choices: ["MIT", "Apache", "GPL",]
       }])
       .then((response) => {
        fs.writeFile('README.md', generateFile(response.title, response.description, response.installation, response.usage, response.credits, response.license), (err) =>
            err ? console.error(err) : console.log('Success!'));
       });
}

function generateFile(ttl, dsc, ins, use, crd, lic){
    return `
    # ${ttl}
    ## Description
    ${dsc}
    ## Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [Credits](#credits)
    - [License](#license)
    ## Installation
    ${ins}
    ## Usage
    ${use}
    ## Credits
    ${crd}
    ## License
    ${lic}
    `;
}

// Function call to initialize app
init();
