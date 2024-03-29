import { commands } from './commands.js'
import { printOutput, printHelp } from './print.js'
import { getFromHistory } from './history.js'

const termInput = document.querySelector('#terminal-input')

const delay = (ms) => {
  // ms is a number value of how many milliseconds the delay will last
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function keepFocus(element) {
  // function for keeping the text input in focus at all times
  await delay(500)
  element.focus({ focusVisible: true })
}

function enterCommand() {
  const stdin = termInput.value.toLowerCase().trim()
  const command = commands[stdin]
  termInput.value = ''
  if (command === commands.help) {
    printHelp()
    return
  }
  if (command) {
    printOutput(command, stdin)
    return
  }
  console.log(stdin)
  // special functions or easter eggs if you may
  switch (stdin) {
    case "sudo":
      printOutput(["User is not in the sudoers file... Sorry :/"], stdin)
      break;

    default:
      printOutput(undefined, stdin)
      break;
  }
}

termInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    enterCommand()
    return
  }
  const previousCommand = getFromHistory(event.key)
  if (previousCommand) termInput.value = previousCommand
})

termInput.addEventListener('blur', () => keepFocus(termInput))

printOutput(commands.banner)
