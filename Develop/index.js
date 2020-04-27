const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);

const api = require("./utils/api");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [{
        type: "input",
        name: "github",
        message: "Enter your GitHub Username:"
    }, {
        type: "input",
        name: "title",
        message: "Enter your project title:"
    },
    {
        type: "input",
        name: "description",
        message: "Enter your project description:"
    },
    {
        type: "input",
        name: "tableOfContents",
        message: "Enter the table table of contents:"
    },
    {
        type: "input",
        name: "installation",
        message: "Enter your installation guideline:"
    },
    {
        type: "input",
        name: "contributing",
        message: "Enter your project contributing:"
    },
    {
        type: "input",
        name: "tests",
        message: "Enter project tests tests:"
    },
    {
        type: "input",
        name: "questions",
        message: "Enter projects questions:"
    },
];

function promptUser() {
    return inquirer.prompt(questions);
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
    console.log(answers)
    const username = answers.github;
    const githubApi = await api.getUser(username);
    console.log(githubApi)
    writeToFile("README.md", githubApi);
}

init();