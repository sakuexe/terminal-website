import { commands } from "./commands.js"
import { addToHistory } from "./history.js"

const termOutput = document.querySelector('output#stdout')

export async function printOutput(command = {}, cmd = null) {
  if (cmd) addToHistory(cmd)
  const lines = command.lines ?? []
  if (lines.length <= 0) {
    // error message
    // sanitize the cmd from code injection or xss
    const sanitizedCmd = document.createElement("div")
    sanitizedCmd.innerText = cmd
    lines.push(`Command for <span class="command">${sanitizedCmd.innerHTML}</span> not found`)
    lines.push('Try typing <span class="command">help</span> to see available commands')
  }

  // print command to terminal
  if (cmd) {
    termOutput.innerHTML += `<span class="text-mutedPurple">guest@dev.sakukarttunen.com$~</span> <span class="command">${cmd}</span><br>`
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

export function playSound(sound, volume = 0.5) {
  /* 
      plays sound that is passed as argument.
      e.g. playSound('./.sound/sound.mp3')
      volume is an optional parameter, default is 0.5
  */
  let audio = new Audio(sound)
  audio.volume = volume
  audio.play()
}

const delay = (ms) => {
  // ms is a number value of how many milliseconds the delay will last
  return new Promise(resolve => setTimeout(resolve, ms))
}
