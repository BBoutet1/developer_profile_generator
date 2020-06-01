function generateMarkdown(data) {
    return `
# ${data.title}

###### <p align="center">![Contributions welcome](https://img.shields.io/badge/contributions-welcome-orange.svg)</p>

${data.description}

## Table of contents

<!-- ⛔️ MD-MAGIC-EXAMPLE:START (TOC:collapse=true&collapseText=Click to expand) -->
<details>
<summary>Click to expand</summary>

* [Installation](#installation)
* [Usage](#usage)
* [Licence](#licence)
* [Contributing](#contributing)
* [Questiions](#questions)
* [Author information](#author-information)

</details>
<!-- ⛔️ MD-MAGIC-EXAMPLE:END -->

## Installation

\`\`sh
    ${ data.installation }
\`\`

## Usage

${data.usage}

## Licence

${data.licence}

## Contributing

${data.contributing}


## Questions

${data.questions}

## Author information

| <img align="left" width="150" height="auto" margin="10"  src="${data.userPicture}"> |  \`${data.name}\`<br/>  Email : [${data.email}](${data.email})<br/> GitHub : [${data.user}](https://github.com/${data.github})<br> Blog:  [${data.blog}](https://github.com/${data.blog}) |
| -------- | ----------- |--------------|
`;
}

module.exports = generateMarkdown;