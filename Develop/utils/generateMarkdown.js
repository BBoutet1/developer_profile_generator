function generateMarkdown(data) {
    return `
# ${data.title}
# Descrcription
${data.description}
# Table of contents
${data.TableOfContents}
# Installation

${data.installation}

# Usage
${data.usage}
# Licence
${data.licence}
# Contributing
${data.contributing}
# Tests
${data.tests}
#Questions
${data.questions}

* GitHub username: [BBoutet1](https://github.com/BBoutet1)
* Email: [${data.userEmail}](${data.userEmail})
* ![](${data.userPicture}| width=300)

`;
}

module.exports = generateMarkdown;