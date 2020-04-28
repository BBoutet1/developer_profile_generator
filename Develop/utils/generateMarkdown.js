function generateMarkdown(data) {
    var mark = "`"
    return `
//# Title: ${data.title}

## Descrcription

${data.description}

## Table of contents

* Installation
* Usage
* Licence
* Contributing
* Tests
* Questiions
* Author information

## Installation

${data.installation}

## Usage

${data.usage}

## Licence

${data.licence}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

${data.questions}

## Author information

<img align="left" width="150" height="auto" src="${data.userPicture}">
${mark}
GitHub username: [BBoutet1](${data.github})
Email: [${data.userEmail}](${data.userEmail})
${mark}
`;
}

module.exports = generateMarkdown;
module.exports = generateMarkdown;