const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);

const api = require("./utils/api");

const question = [{
    type: "input",
    name: "github",
    message: "Enter your GitHub Username:"
}, ];

function promptUser() {
    return inquirer.prompt(question);
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
    const githubApi = await api.getUser(username);
    writeToFile("README.md", githubApi);
}

init();