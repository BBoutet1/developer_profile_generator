const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const htmlToPdf = require('md-to-pdf');

const fetch = require('node-fetch');
const accessToken = '88ed5b10af2bf09a660a8c30739eb03a89415d6a'; // Githup graphql API Access token

const writeFileAsync = util.promisify(fs.writeFile);


const api = require("./utils/api");
const generateMarkdown = require("./utils/generateMarkdown");
const generateHtml = require("./utils/generateHTML");

const questions = [{
        type: "input",
        name: "github",
        message: "Enter your GitHub Username:"
    },
    /* {
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
              name: "summary",
              message: "Enter your project summary:"
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
            {
                message: 'Select your profile presentation color',
                name: 'color',
                type: 'list',
                choices: ['green', 'blue', 'pink', 'red'],
            }
          
          , */
];

function promptUser() {
    return inquirer.prompt(questions);
}




function writeToFile(fileName, data) {
    try {
        return writeFileAsync(fileName, data);
        console.log("Successfully wrote to README.md");
    } catch (err) {
        console.log("ERROR" + err);
    }
}

function convertToPdf(mdFile, destination) {


}

async function init() {
    const answers = await promptUser(); // Answers objetc to prompt
    const username = answers.github; // retrieved answer object
    const githubApi = await api.getUser(username); // github API for the profile

    /* Adding json API retrieved information to the answers object */
    answers.user = githubApi.login;
    answers.userPicture = githubApi.avatar_url;
    answers.name = githubApi.name;
    answers.repos = githubApi.public_repos
    answers.githubUrl = githubApi.html_url;
    answers.location = githubApi.location;
    answers.blog = githubApi.blog;
    answers.bio = githubApi.bio
    answers.followers = githubApi.followers

    /* Email and pinned repos from the graphql API */
    getEmail(username)

    function getEmail(username) {
        let data, dataJSON;
        const query = `query {
                user(login: "${username}") {
                    pinnedItems(first: 4, types: [REPOSITORY, GIST]) {
                        totalCount
                        edges {
                            node {
                                ...on Repository {
                                    name
                                    description
                                }
                            }
                        }
                    }
                    email
                }
            }`;

        try {
            fetch('https://api.github.com/graphql', {
                    method: 'POST',
                    body: JSON.stringify({ query }),
                    headers: {
                        'Authorization': `Bearer ${accessToken}`,
                    },
                }).then(res => res.text())
                .then((body) => {
                    let res = JSON.parse(body)
                    console.log(res, body)
                    data = res.data.user;
                    answers.email = data.email;
                    answers.count = data.pinnedItems.totalCount;
                    answers.pinned = data.pinnedItems.edges;
                    console.log(answers.pinned[1].node)

                })
        } catch (error) {
            console.log(error);
        }

    }



    /* Genreate files after 1s dalay needed for the graphql API call */
    setTimeout(function generateFiles() {
        /* Creating html for pinned repositories */
        const repos = answers.pinned;
        let reposHtml = "";
        for (let i = 0; i < repos.length; i++) {
            reposHtml = reposHtml + "<div class=\"repos\"><h6><b>" +
                repos[i].node.name + "</b><h6><p>" + repos[i].node.description + "</p> </div><br>"
        }
        answers.reposHtml = reposHtml;

        const markdown = generateMarkdown(answers);
        const html = generateHtml(answers);
        writeToFile("README_generated.md", markdown);
        writeToFile("Profil_generated.html", html);
    }, 1000)

}

init();