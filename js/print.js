import { commands } from "./commands.js"
import { addToHistory } from "./history.js"
import { delay, getSanitizedInput } from "./utils.js"

const termOutput = document.querySelector('output#stdout')

export async function printOutput(lines = [], cmd = null) {
  if (cmd) addToHistory(cmd)
  if (lines.length <= 0) {
    // error message
    // sanitize the cmd from code injection or xss
    const sanitizedCmd = getSanitizedInput(cmd)
    lines.push(`Command for <span class="command">${sanitizedCmd}</span> not found`)
    lines.push('Try typing <span class="command">help</span> to see available commands')
  }

  // put the output of the command to "stdout"
  for (let line of lines) {
    // scrolls the window to bottom of page
    window.scrollBy(0, window.innerHeight)

    let newLine = document.createElement('p')
    newLine.innerHTML = line
    if (lines === commands.banner) newLine.classList.add('text-mutedPurple')
    termOutput.appendChild(newLine)
    await delay(100)
  }
}

export async function printHelp() {
  addToHistory("help")
  // add a line break before the help for spacing
  termOutput.appendChild(document.createElement('br'))
  // get the longest command, so the description can be aligned nicely
  const longestCommand = Math.max(...Object.keys(commands).map(command => command.length))

  // print each command and their description
  for (let [key, command] of Object.entries(commands)) {
    // skip commands without description
    if (!command.description) continue
    // scrolls the window to bottom of page
    window.scrollBy(0, window.innerHeight)

    const helpRow = document.createElement('p')
    helpRow.innerHTML = `<span class="command">${key.padEnd(longestCommand + 5)}</span> ${command.description}`
    termOutput.appendChild(helpRow)
    await delay(100)
  }
  // add a line break after the help
  termOutput.appendChild(document.createElement('br'))
}
