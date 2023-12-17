const licenseLink = {
    'No License': '',
    'Mozilla Public License 2.0': 'https://opensource.org/licenses/MPL-2.0',
    'Apache License 2.0': 'https://opensource.org/licenses/Apache-2.0',
    'MIT License': 'https://opensource.org/licenses/MIT',
    'The Unlicense': 'http://unlicense.org/',
};
const licenseBadge = {
    'No License': '',
    'Mozilla Public License 2.0': 'https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg',
    'Apache License 2.0': 'https://img.shields.io/badge/License-Apache_2.0-blue.svg',
    'MIT License': 'https://img.shields.io/badge/License-MIT-yellow.svg',
    'The Unlicense': 'https://img.shields.io/badge/license-Unlicense-blue.svg',
};
// renders the license badge on the markdown file based on user choice
// returns empty if none chosen
function renderLicenseBadge(license) {
    return licenseBadge[license] || '';
};

// renders the license link portion of the markdown based on user choice
// returns empty if none chosen 
function renderLicenseLink(license) {
    return licenseLink[license] ? `[${license}](${licenseLink[license]})` : '';
};

// renders the license section of the markdown based on user choice
// returns empty if none chosen 
function renderLicenseSection(license) {
    if (license === 'No License') {
        return '';
    }
    return `## License
    This project is licensed under the ${license} - see the [LICENSE](${licenseLink[license]})
    `;
};

// renders credits portion of markdown file
// returns empty if no additional credits needed
function renderCreditSection(credits) {
    if (credits.includes('None')) {
        return '';
    }
    return `## Credits
    With special thanks to the help of:
    - ${credits.join('\n- ')}
    `;
};

//generates markdown for README
function generateMarkdown(answers) {
    const licenseBadgeMarkdown = renderLicenseBadge(answers.license);
    const licenseLinkMarkdown = renderLicenseLink(answers.license);
    const licenseSectionMarkdown = renderLicenseSection(answers.license);
    const creditsSectionMarkdown = renderCreditSection(answers.credits);
  return `# ${answers.title}
[!${licenseBadgeMarkdown}]
${licenseLinkMarkdown}

## Description
${answers.motivation}

${answers.description}

## Installation
Packages or Software needed for proper usage:
- ${answers.installation.join('\n- ')}

## Usage
${answers.usage}


${creditsSectionMarkdown}


${licenseSectionMarkdown}

## Contact
For any questions on use or further additions contact me at:
GitHub: [${answers.github}](https://github.com/${answers.github})
Email: ${answers.email}
`;
}

module.exports = generateMarkdown;