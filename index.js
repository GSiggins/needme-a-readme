// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const techArray = ['HTML', 'CSS', 'Javascript', 'jQuery', 'Bootstrap', 'Moment.js', 'react.js', 'Other']
const licenseArray = ['Apache2.0License', 'EclipsePublicLicense1.0', 'GNUGPLv3', 'IBMPublicLicenseVersion1.0', 'TheMITLicense']

// TODO: Create a function to initialize app
function init() {

inquirer
    .prompt([
        {
            type: 'input',
            message: "What is the name of your project?",
            name: 'projectname',
        },
        {
            type: 'input',
            message: "What is the live link?",
            name: 'livelink',
        },
        {
            type: 'input',
            message: "What is the repo link?",
            name: 'repolink',
        },
        {
            type: 'checkbox',
            message: "What tools were used?",
            name: 'tools',
            choices: techArray,
        },
        {
            type: 'input',
            message: 'Write a brief description of your project.',
            name: 'desc',
        },
        {
            type: 'input',
            message: 'What motivated you to build this project?',
            name: 'motive',
        },
        {
            type: 'input',
            message: 'What problem does this project solve?',
            name: 'problem',
        },
        {
            type: 'input',
            message: 'What lessons did you learn in this project?',
            name: 'lessons',
        },
        {
            type: 'input',
            message: 'How do you install this project?',
            name: 'install',
        },
        {
            type: 'input',
            message: 'How can you use your project?',
            name: 'usage',
        },
        {
            type: 'list',
            message: 'What licenses are applicable to your project?',
            name: 'licenses',
            choices: licenseArray,
        },
        {
            type: 'input',
            message: 'Who contributed to this project?',
            name: 'contributors',
        },
        {
            type: 'input',
            message: 'What tests did you perform on this project?',
            name: 'tests',
        },
        {
            type: 'input',
            message: 'What questions did the project prompt?',
            name: 'questions',
        },
        {
            type: 'input',
            message: 'What is your LinkedIn URL?',
            name: 'linkedin',
        },
        {
            type: 'input',
            message: 'What is your Github URL?',
            name: 'github',
        },
    ])
    .then((response) =>
        fs.writeFile('README.md',

`### Licenses : ![](https://img.shields.io/static/v1?label=License&message=${response.licenses}&color=blue)

# ${response.projectname} 

## ${response.livelink}

## ${response.repolink}

## Tools used: ${response.tools}

## Description: ${response.desc}  

- What was the motivation for this project? 

    * ${response.motive}

- What problem does it solve?

    * ${response.problem}

- What did I learn?

    * ${response.lessons}

## Table of Contents

- [Installation](#installation)

- [Usage](#usage)

- [Contributors](#contributing)

- [Licenses](#licenses)

## Installation: 
${response.install}

## Usage: 
${response.usage}

## Licenses: 
${response.licenseArray}

### Contributing; 
${response.contributors}

### Tests: 
${response.tests}

### Questions: Any questions can be sent to me directly via the links below.

#### Github: [${response.github}](${response.github})

#### LinkedIn: [${response.linkedin}](${response.linkedin})`,

            (err) =>
                err ? console.error(err) : console.log('Success!'))
    );
}
    init();