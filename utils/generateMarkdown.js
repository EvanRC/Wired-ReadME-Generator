// If there is no license, return an empty string
function getLicenseBadgeMarkdown(license) {
  const licenseBadges = {
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

  return licenseBadges[license] || "";
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLinks = {
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

  return license ? `(${licenseLinks[license]})` : "";

 }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const licenseLink = renderLicenseLink(license);
     
  // If there is no license, licenseLink will be an empty string and 
    // the function will return an empty string as well
    return licenseLink ? `
        ${licenseLink}

        This application is covered under the ${license} license. 
        Click on the link above for more information.` : "";
 }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
