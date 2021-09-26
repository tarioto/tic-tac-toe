import supertest from 'supertest'
import app from '../app'
const request = supertest(app)

describe('TTT game', () => {
  let gameId = ''

  it('GET /api/create-new-game', async () => {
    const result = await request.get('/api/create-new-game').send()
    gameId = result.body._gameId
    expect(result.status).toBe(200)
    expect(typeof result.body._gameId).toBe('string')
    expect(result.body._gameId.length).toBe(5)
  })

  it('POST /api/move', async () => {
    const result = await request.post('/api/move').send({
      gameId: gameId,
      player: 1,
      position: [0, 0],
    })

    expect(result.status).toBe(200)
    expect(result.body).toEqual({
      game: {
        _gameId: gameId,
        _board: [
          [1, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
        ],
        _draw: false,
        _winner: 0,
        _currentPlayer: -1,
        _moveCount: 1,
      },
      message: 'Nice',
    })
  })

  it('POST /api/move should not work', async () => {
    const result = await request.post('/api/move').send({
      gameId: gameId,
      player: 1,
      position: [0, 0],
    })

    expect(result.status).toBe(200)
    expect(result.body).toEqual({
      game: {
        _gameId: gameId,
        _board: [
          [1, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
        ],
        _draw: false,
        _winner: 0,
        _currentPlayer: -1,
        _moveCount: 1,
      },
      message: 'Invalid move',
    })
  })

  it('POST /api/move', async () => {
    const result = await request.post('/api/move').send({
      gameId: gameId,
      player: -1,
      position: [0, 1],
    })

    expect(result.status).toBe(200)
    expect(result.body).toEqual({
      game: {
        _gameId: gameId,
        _board: [
          [1, -1, 0],
          [0, 0, 0],
          [0, 0, 0],
        ],
        _draw: false,
        _winner: 0,
        _currentPlayer: 1,
        _moveCount: 2,
      },
      message: 'Nice',
    })
  })

  it('POST /api/move', async () => {
    const result = await request.post('/api/move').send({
      gameId: gameId,
      player: 1,
      position: [1, 0],
    })

    expect(result.status).toBe(200)
    expect(result.body).toEqual({
      game: {
        _gameId: gameId,
        _board: [
          [1, -1, 0],
          [1, 0, 0],
          [0, 0, 0],
        ],
        _draw: false,
        _winner: 0,
        _currentPlayer: -1,
        _moveCount: 3,
      },
      message: 'Nice',
    })
  })

  it('POST /api/move', async () => {
    const result = await request.post('/api/move').send({
      gameId: gameId,
      player: -1,
      position: [1, 1],
    })

    expect(result.status).toBe(200)
    expect(result.body).toEqual({
      game: {
        _gameId: gameId,
        _board: [
          [1, -1, 0],
          [1, -1, 0],
          [0, 0, 0],
        ],
        _draw: false,
        _winner: 0,
        _currentPlayer: 1,
        _moveCount: 4,
      },
      message: 'Nice',
    })
  })

  it('POST /api/move', async () => {
    const result = await request.post('/api/move').send({
      gameId: gameId,
      player: 1,
      position: [2, 0],
    })

    expect(result.status).toBe(200)
    expect(result.body).toEqual({
      game: {
        _gameId: gameId,
        _board: [
          [1, -1, 0],
          [1, -1, 0],
          [1, 0, 0],
        ],
        _draw: false,
        _winner: 1,
        _currentPlayer: -1,
        _moveCount: 5,
      },
      message: 'Player 1 wins!',
    })
  })
})
