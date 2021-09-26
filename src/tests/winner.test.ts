import isWinner from '../winner'

describe('isWinner', () => {
  it('Player 1 should win 1st col', () => {
    const winner = isWinner(
      [
        [1, -1, 0],
        [1, -1, -1],
        [1, 0, 0],
      ],
      1,
      [2, 0]
    )
    expect(winner).toBe(true)
  })

  it('Player 2 should win middle col', () => {
    const winner = isWinner(
      [
        [1, -1, 0],
        [1, -1, 1],
        [0, -1, 0],
      ],
      -1,
      [0, 1]
    )
    expect(winner).toBe(true)
  })

  it('Player 1 should win 3rd col', () => {
    const winner = isWinner(
      [
        [0, -1, 1],
        [-1, -1, 1],
        [0, 0, 1],
      ],
      1,
      [2, 2]
    )
    expect(winner).toBe(true)
  })

  it('Player 1 should win top row', () => {
    const winner = isWinner(
      [
        [1, 1, 1],
        [-1, -1, 0],
        [0, 1, 0],
      ],
      1,
      [0, 1]
    )
    expect(winner).toBe(true)
  })

  it('Player 2 should win middle row', () => {
    const winner = isWinner(
      [
        [1, 1, 0],
        [-1, -1, -1],
        [0, 1, 0],
      ],
      -1,
      [1, 2]
    )
    expect(winner).toBe(true)
  })

  it('Player 2 should win bottom row', () => {
    const winner = isWinner(
      [
        [1, 1, 0],
        [0, 1, 0],
        [-1, -1, -1],
      ],
      -1,
      [2, 0]
    )
    expect(winner).toBe(true)
  })

  it('Should be no winner', () => {
    const winner = isWinner(
      [
        [1, -1, 1],
        [1, 1, -1],
        [-1, 1, -1],
      ],
      1,
      [2, 1]
    )
    expect(winner).toBe(false)
  })

  it('Player 1 should win backspace', () => {
    const winner = isWinner(
      [
        [1, -1, 0],
        [0, 1, -1],
        [0, 0, 1],
      ],
      1,
      [2, 2]
    )
    expect(winner).toBe(true)
  })

  it('Player 2 should win /', () => {
    const winner = isWinner(
      [
        [0, 1, -1],
        [1, -1, 0],
        [-1, 1, 0],
      ],
      -1,
      [2, 0]
    )
    expect(winner).toBe(true)
  })
})
