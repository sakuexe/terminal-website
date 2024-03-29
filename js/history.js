export const history = []
let historyIndex = 0

export function addToHistory(cmd) {
  history.push(cmd)
  historyIndex = 1
}

export function getFromHistory(key) {
  // if history's length has increased, index and length counter will be reset
  if (history.length < 0) return

  if (key === 'ArrowUp') {
    if (historyIndex > history.length) return
    historyIndex += 1
    return history[history.length - (historyIndex - 1)]
  }

  if (key === 'ArrowDown') {
    // history index cannot go below 3, because then it will take
    // one extra ArrowUp to get to the second latest history command
    // I know, magic numbers.. ugh. But it works and is now snappy
    if (historyIndex < 3) return

    historyIndex -= 1
    return history[history.length - historyIndex + 1]
  }
}
