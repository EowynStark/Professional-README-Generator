// required packages and files
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// user input questionnaire 
const questions = [
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of your project?'
        },
        {
            type: 'input',
            name: 'motivation',
            message: 'What is your motivation for this project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'What problem does this project solve for a user?',
        },
        {
            type: 'checkbox',
            name: 'installation',
            message: 'Please select any necessary files to install for use:',
            choices: ['Node', 'NPM Inquirer Version 8.2.4'],
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please describe how to best use this project:',
        },
        {
            type: 'checkbox',
            name: 'credits',
            message: 'Please select any outside sources used in your project:',
            choices: ['None', 'Tutor', 'Instructor', 'Peer Input'],
        },
        {
            type: 'list',
            name: 'license',
            message: 'Would you like to include a usage license?',
            choices: ['No License','Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'The Unlicense'],
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter your GitHub username:',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email address:'
        },
    ];

function writeToFile() {
    inquirer.prompt(questions)
        .then((answers) =>{
            const markdownContent = generateMarkdown(answers);
            if (markdownContent !== undefined) {
            fs.writeFile('README.md', markdownContent);
            console.log('README.md created successfully!');
        } else {
            console.error('Error: Markdown content is undefined.');
        }
    })
    .catch((error)=> {
        console.error('Error generating README:', error);
    });
};

writeToFile();