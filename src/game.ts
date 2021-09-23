import isWinner from './winner'

class TicTacToeGame {
  _gameId: string
  _board: number[][]
  _draw: boolean
  _winner: number
  _currentPlayer: number
  _moveCount: number

  constructor(id: string) {
    this._gameId = id
    this._board = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ]
    this._draw = false
    this._winner = 0
    this._currentPlayer = 1
    this._moveCount = 0
  }

  getId(): string {
    return this._gameId
  }

  getBoard(): number[][] {
    return this._board
  }

  getCurrentPlayer(): number {
    return this._currentPlayer
  }

  getWinner(): number {
    return this._winner
  }

  move(x: number, y: number, player: number): string {
    if (this._board[x][y] === 0 && this._currentPlayer === player) {
      this._board[x][y] = player
      this._currentPlayer = player === 1 ? 2 : 1
      this._moveCount++
      if (isWinner(this._board, player)) {
        this._winner = player
        return `Player ${player} wins!`
      }
      if (this._moveCount === 9) {
        this._draw = true
        return 'Nobody wins :('
      }
      return 'Nice'
    } else {
      return 'Invalid move'
    }
  }
}

export default TicTacToeGame
