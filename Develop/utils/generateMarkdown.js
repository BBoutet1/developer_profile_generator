function generateMarkdown(data) {
    return `
# ${data.title}
# ${data.description}
# ${data.TableOfContents}
# ${data.installation}
# ${data.usage}
# ${data.licence}
# ${data.contributing}
# ${data.tests}
# ${data.questions}
# ${data.userPicture}
# ${data.userEmail}
`;
}

module.exports = generateMarkdown;