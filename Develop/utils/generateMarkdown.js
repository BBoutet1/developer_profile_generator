function generateMarkdown(data) {
    return `
# Title: ${data.title}

${data.summary}

## Descrcription

${data.description}

## Table of contents
<!-- ⛔️ MD-MAGIC-EXAMPLE:START (TOC:collapse=true&collapseText=Click to expand) -->
<details>
<summary>Click to expand</summary>

* [Installation](#installation)
* [Usage](#usage)
* [Licence](#licence)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questiions](#questions)
* [Author information](#author-information)

</details>
<!-- ⛔️ MD-MAGIC-EXAMPLE:END -->

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
* GitHub username: [${data.github}](https://github.com/${data.github})
* Email: [${data.userEmail}](mailto:${data.userEmail})
`;
}

module.exports = generateMarkdown;