import supertest from 'supertest'
import app from '../app'
const request = supertest(app)

describe('TTT game', () => {
  let gameId = ''

  test('GET /api/create-new-game', async () => {
    const result = await request.get('/api/create-new-game').send()
    gameId = result.body._gameId
    expect(result.status).toBe(200)
    expect(typeof result.body._gameId).toBe('string')
    expect(result.body._gameId.length).toBe(5)
  })

  test('POST /api/move', async () => {
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
})
