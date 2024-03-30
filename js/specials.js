import { history } from "./history.js";
import { printOutput } from "./print.js";
import { getSanitizedInput } from "./utils.js";
// special functions or easter eggs if you may
export default async function handleSpecials(stdin) {
  switch (stdin.split(' ')[0]) {
    case "sudo":
      printOutput(["User is not in the sudoers file... Sorry :/"], stdin)
      break;

    case "nvim":
    case "vim":
    case "vi":
      printOutput(["Good choice! You clearly have great taste."], stdin)
      break;

    case "emacs":
      printOutput(["Command not found: emacs", "Did you mean: 'vim'?"], stdin)
      break;

    case "echo":
      const echoOutput = getSanitizedInput(stdin.split(' ').slice(1).join(' '))
      printOutput([echoOutput], stdin)
      break;

    case "history":
      printOutput(history, stdin)
      break;

    case "reload":
    case "refresh":
    case "reboot":
      window.location.reload()
      break;

    case "clear":
      // clear the terminal
      document.querySelector('output#stdout').innerHTML = ''
      break;

    default:
      printOutput(undefined, stdin)
      break;
  }
}
