const isWinner = (board: number[][], player: number): boolean => {
  // check cols
  if (
    (board[0][0] === player &&
      board[1][0] === player &&
      board[2][0] === player) ||
    (board[0][1] === player &&
      board[1][1] === player &&
      board[2][1] === player) ||
    (board[0][2] === player && board[1][2] === player && board[2][2] === player)
  ) {
    return true
  }
  // check rows
  if (
    (board[0][0] === player &&
      board[0][1] === player &&
      board[0][2] === player) ||
    (board[1][0] === player &&
      board[1][1] === player &&
      board[1][2] === player) ||
    (board[2][0] === player && board[2][1] === player && board[2][2] === player)
  ) {
    return true
  }
  // check backslash
  if (
    board[0][0] === player &&
    board[1][1] === player &&
    board[2][2] === player
  ) {
    return true
  }
  // check slash
  if (
    board[0][2] === player &&
    board[1][1] === player &&
    board[2][0] === player
  ) {
    return true
  }
  return false
}

export default isWinner
