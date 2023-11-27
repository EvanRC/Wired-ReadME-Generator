// Function to render a license badge as a Markdown string 
// Takes a license and returns a Markdown formatted badge 
function renderLicenseBadge(license) {
  // Object mapping license identifiers to their respective badge Markdown strings 
  const licenseBadges = {
    // Each key value pair is a license type and it's badge 
    "apache-2.0": `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`,
    "bsl-1.0": `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`,
    "bsd-2-clause": `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`,
    "bsd-3-clause": `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`,
    "cc0-1.0": `[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)`,
    "cc-by-4.0": `[![License: CC BY 4.0](https://licensebuttons.net/l/by/4.0/80x15.png)](https://creativecommons.org/licenses/by/4.0/)`,
    "wtfpl": `[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)`,
    "epl-1.0": `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`,
    "agpl-3.0": `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`,
    "gpl-2.0": `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`,
    "gpl-3.0": `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`,
    "lgpl-3.0": `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`,
    "isc": `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`,
    "mit": `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`,
    "mpl-2.0": `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`,
    "unlicense": `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`,
    "zlib": `[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)`,
  };
  // Returns the badge Markdown if license exists, otherwise returns an empty string 
  return licenseBadges[license] || "";
}


// Functions to render license Link 
// Returns the hyperlink for a given license 

function renderLicenseLink(license) {
  // object mapping license identifiers to their respective URLs
  const licenseLinks = {
    // Each Key value pair is a license type and it's URL
    "apache-2.0": "https://opensource.org/licenses/Apache-2.0",
    "bsl-1.0": "https://www.boost.org/LICENSE_1_0.txt",
    "bsd-2-clause": "https://opensource.org/licenses/BSD-2-Clause",
    "bsd-3-clause": "https://opensource.org/licenses/BSD-3-Clause",
    "cc0-1.0": "http://creativecommons.org/publicdomain/zero/1.0/",
    "cc-by-4.0": "https://creativecommons.org/licenses/by/4.0/",
    "wtfpl": "http://www.wtfpl.net/about/",
    "epl-1.0": "https://opensource.org/licenses/EPL-1.0",
    "agpl-3.0": "https://www.gnu.org/licenses/agpl-3.0",
    "gpl-2.0": "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html",
    "gpl-3.0": "https://www.gnu.org/licenses/gpl-3.0",
    "lgpl-3.0": "https://www.gnu.org/licenses/lgpl-3.0",
    "isc": "https://opensource.org/licenses/ISC",
    "mit": "https://opensource.org/licenses/MIT",
    "mpl-2.0": "https://opensource.org/licenses/MPL-2.0",
    "unlicense": "http://unlicense.org/",
    "zlib": "https://opensource.org/licenses/Zlib",
  };
  // Retrns the license link wrapped in parentheses if license exists, otherwise an empty string 
  return license ? `(${licenseLinks[license]})` : "";

}

// Function to render the license section of a README 
// Includes a link to the license and a brief description 
function renderLicenseSection(license) {
  //fetches license link 
  const licenseLink = renderLicenseLink(license);

  // If there is a license, retyrbs a formmated section with the license link and descriotion 
  // otherwise it returns an epty string
  return licenseLink ? `
        ${licenseLink}

        The license used for this application is: ${license} license. 
        Click on the link above for more information.` : "";
}

// Function to generate the complete markdown content for the README
function generateMarkdown(data) {
  // starts with the project title 
  let markdown = `# ${data.title}/n/n`;
  // adds the license badge section if a license is provided
  if (data.license) {
    markdown += `## License Badge/n${renderLicenseBadge(data.license)}\n\n`;
  }
  // Continues with the description and dynammically generated table of contents 
  markdown += `## Description\n\n${data.description}\n\n## Table of Contents\n\n`;

  // list of sections to include in the table of contents 
  const sections = ['Installations', 'Usage', 'Credits', 'license'];
  // Adds 'Features', 'how to contribute', 'Tests' to the TOC if they have data
  if (data.features) sections.push('Features');
  if (data.contribute) sections.push('How to contribute');
  if (data.tests) sections.push('Tests');

  // Generates the TOC links 
  sections.forEach(section => {
    markdown += `- [${section}](#${section.toLowerCase()})\n`;
  });

  // Adds the Installation, Usage, and credits sections 
  markdown += `\n## Installation\n\n${data.installation}\n\n## Usage\n\n${data.usage}\n\n`;
  markdown += `## Credits\n\n${data.credits}\n\n## License\n\n${renderLicenseSection(data.license)}\n\n`;

  // Optionally adds teh features, How to contribute, and Tests sections if data is available 
  if (data.features) {
    markdown += `## Features\n\n${data.features}\n\n`;
  }

  if (data.contribute) {
    markdown += `## How to Contribute\n\n${data.contribute}\n\n`;
  }

  if (data.tests) {
    markdown += `## Tests\n\n${data.tests}\n\n`;
  }

  // Adds cintact information with GitHub link and enail
  markdown += `## Questions?\n\n`;
  markdown += `[${data.github}](https://github.com/${data.github})\n\n`;
  markdown += `Email: ${data.email}\n`;

  // returns the complete Markdown content
  return markdown;
};

// Exports the generateMarkdown function for use in other parts of the app
module.exports = generateMarkdown;
