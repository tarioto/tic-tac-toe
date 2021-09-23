import request from 'supertest'
import app from './app'
import isWinner from './winner'

describe('TTT game', () => {
  let gameId = ''
  it('Request /create-new-game should return a random string', async () => {
    const result = await request(app).get('/create-new-game').send()
    gameId = result.body.gameId
    expect(result.status).toBe(200)
    expect(typeof result.body.gameId).toBe('string')
    expect(result.body.gameId.length).toBe(5)
  })

  // it('Request /move', async () => {
  //   const result = await request(app)
  //     .post('/move')
  //     .send({
  //       gameId: gameId,
  //       player: 1,
  //       position: [0, 0],
  //     })

  //   expect(result.status).toBe(200)
  //   console.log(result.body)
  //   expect(result.body).toEqual({
  //     game: {
  //       _gameId: gameId,
  //       _board: [
  //         [1, null, null],
  //         [null, null, null],
  //         [null, null, null],
  //       ],
  //       _draw: false,
  //       _winner: 0,
  //       _currentPlayer: 2,
  //     },
  //     message: 'Nice',
  //   })
  // })

  it('Player 1 should win 1st col', () => {
    const winner = isWinner(
      [
        [1, 2, 0],
        [1, 2, 2],
        [1, 0, 0],
      ],
      1
    )
    expect(winner).toBe(true)
  })

  it('Player 2 should win middle col', () => {
    const winner = isWinner(
      [
        [1, 2, 0],
        [1, 2, 1],
        [0, 2, 0],
      ],
      2
    )
    expect(winner).toBe(true)
  })

  it('Should be no winner', () => {
    const winner = isWinner(
      [
        [1, 2, 1],
        [1, 1, 2],
        [2, 1, 2],
      ],
      1
    )
    expect(winner).toBe(false)
  })

  it('Player 1 should win backspace', () => {
    const winner = isWinner(
      [
        [1, 2, 0],
        [0, 1, 2],
        [0, 0, 1],
      ],
      1
    )
    expect(winner).toBe(true)
  })

  it('Player 2 should win /', () => {
    const winner = isWinner(
      [
        [0, 1, 2],
        [1, 2, 0],
        [2, 1, 0],
      ],
      2
    )
    expect(winner).toBe(true)
  })
})
