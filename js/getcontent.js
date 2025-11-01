/** 
 * @param {"portfolio" | "background"} content 
 * @returns {Promise<string>}
*/
async function getContent(content) {
  const contentFile = `../content/${content}.json`;
  const response = await fetch(contentFile);
  if (!response.ok) {
    console.error(`HTTP error! status: ${response.status}`);
    return "";
  }
  return await response.json();
}

/**
 * @typedef {Object} ProjectDetails
 * @property {string} name
 * @property {UmbracoRoute} route
 * @property {ProjectProperties} properties
 */

/** 
 * @typedef {Object} UmbracoRoute 
 * @property {string} path
 */

/**
 * @typedef {Object} ProjectProperties
 * @property {{ markup: string }} details
 * @property {string[]} tags
 * @property {string} startingTime
 * @property {string} endTime
 * @property {Link[]} links
 *

/** 
 * @typedef {Object} Link
 * @property {string} url
 * @property {string} queryString
 * @property {string} title
 * @property {string} target
 */

/** 
 * @returns {Promise<string[]>}
*/
export async function getPortfolioContent() {
  const contentFile = `../content/portfolio.json`;
  const response = await fetch(contentFile);
  if (!response.ok) {
    console.error(`Could not fetch portfolio data! status: ${response.status}`);
    return [];
  }
  const json = await response.json();
  const contentLines = [];

  /** @type {ProjectDetails[]} */
  const projects = json.items

  for (const item of projects) {
    const fullLink = `https://sakukarttunen.com/${item.route.path}`;
    contentLines.push(item.name);
    contentLines.push(`- Tags: ${item.properties.tags.join(", ")}`);
    contentLines.push(`- Link: <a href="${fullLink}" target="_blank">${fullLink}</a>`);
    contentLines.push("<br>")
  }

  return contentLines;
}
