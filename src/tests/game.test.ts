import TicTacToeGame from '../game'

describe('Tic Tac Toe Game', () => {
  it('creates a new game', () => {
    const game = new TicTacToeGame('test')
    expect(game._gameId).toBe('test')
  })
})
