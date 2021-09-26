const isWinner = (
  board: number[][],
  player: number,
  position: number[]
): boolean => {
  // check col
  const colSumResult = colSum(board, position[1])
  if (colSumResult === 3 || colSumResult === -3) {
    return true
  }

  // check row
  const rowSumResult = rowSum(board, position[0])
  if (rowSumResult === 3 || rowSumResult === -3) {
    return true
  }

  // check backslash
  if (isBackslash) {
    const backslashCheckResult = backslashCheck(board)
    if (backslashCheckResult === 3 || backslashCheckResult === -3) {
      return true
    }
  }

  // check slash
  if (isSlash) {
    const slashCheckResult = slashCheck(board)
    if (slashCheckResult === 3 || slashCheckResult === -3) {
      return true
    }
  }

  // check middle
  if (isMiddle(position, board.length)) {
    const backslashCheckResult = backslashCheck(board)
    if (backslashCheckResult === 3 || backslashCheckResult === -3) {
      return true
    }
    const slashCheckResult = slashCheck(board)
    if (slashCheckResult === 3 || slashCheckResult === -3) {
      return true
    }
  }
  // if (
  //   (board[0][0] === player &&
  //     board[1][0] === player &&
  //     board[2][0] === player) ||
  //   (board[0][1] === player &&
  //     board[1][1] === player &&
  //     board[2][1] === player) ||
  //   (board[0][2] === player && board[1][2] === player && board[2][2] === player)
  // ) {
  //   return true
  // }
  // if (
  //   (board[0][0] === player &&
  //     board[0][1] === player &&
  //     board[0][2] === player) ||
  //   (board[1][0] === player &&
  //     board[1][1] === player &&
  //     board[1][2] === player) ||
  //   (board[2][0] === player && board[2][1] === player && board[2][2] === player)
  // ) {
  //   return true
  // }
  // if (
  //   board[0][0] === player &&
  //   board[1][1] === player &&
  //   board[2][2] === player
  // ) {
  //   return true
  // }
  // if (
  //   board[0][2] === player &&
  //   board[1][1] === player &&
  //   board[2][0] === player
  // ) {
  //   return true
  // }

  return false
}

const colSum = (arrOfArr: number[][], colIndex: number) => {
  let result = 0

  arrOfArr.forEach((arr) => {
    result += arr[colIndex]
  })

  return result
}

const rowSum = (arrOfArr: number[][], rowIndex: number) => {
  const result = arrOfArr[rowIndex].reduce(
    (previousValue, currentValue) => previousValue + currentValue
  )

  return result
}

const slashCheck = (arrOfArr: number[][]) => {
  let result = 0

  for (let index = 0; index < arrOfArr.length; index++) {
    result += arrOfArr[index][index]
  }

  return result
}

const backslashCheck = (arrOfArr: number[][]) => {
  let result = 0

  for (let index = arrOfArr.length - 1; index >= 0; index--) {
    result += arrOfArr[index][2 - index]
  }

  return result
}

const isSlash = (position: number[], length: number) => {
  if (
    (position[0] === 0 && position[1] === 0) ||
    (position[0] === length - 1 && position[1] === length - 1)
  ) {
    return true
  }
  return false
}

const isBackslash = (position: number[], length: number) => {
  if (
    (position[0] === 0 && position[1] === length - 1) ||
    (position[0] === length - 1 && position[1] === 0)
  ) {
    return true
  }
  return false
}

const isMiddle = (position: number[], length: number) => {
  const middle = Math.floor(length / 2)
  if (position[0] === middle && position[1] === middle) {
    return true
  }
  return false
}

export default isWinner
