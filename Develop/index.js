const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);

const api = require("./utils/api");

const questions = [{
        type: "input",
        name: "github",
        message: "Enter your GitHub Username:"
    },
    {
        type: "input",
        name: "repository",
        message: "Enter a repository name:"
    }
];

function promptUser() {
    return inquirer.prompt(questions);
}


function generateReadme(answers) {
    return `${answers.github} , ${answers.repository}`
}


function writeToFile(fileName, data) {
    try {
        return writeFileAsync(fileName, data);
        console.log("Successfully wrote to README.md");
    } catch (err) {
        console.log(err);
    }
}

async function init() {
    const answers = await promptUser();
    const readme = generateReadme(answers);
    const username = answers.github;
    const repo = answers.repository;
    const githubApi = await api.getUser(username, repo);
    writeToFile("README.md", githubApi);
}

init();