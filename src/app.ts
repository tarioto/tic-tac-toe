import express from 'express'
import TicTacToeGame from './game'
const app = express()
const globalGameState: any = {}

app.use(express.json())
app.use(express.static('tic-tac-toe'))


// TODO: Need an API to call to start a new game.
// The response should give me some kind of ID for me to use in other
// API calls to tell the backend what game I am referring to

app.get('/api/create-new-game', async (req, res) => {
  const gameId = (Math.random() + 1).toString(36).substring(7)
  globalGameState[gameId] = new TicTacToeGame(gameId)
  res.send(globalGameState[gameId])
})

// TODO: Need an API to call to play a move in the game
// The API should take as inputs the Game ID (from the first API),
// a player number (either 1 or 2), and the position of the move being
// played. The response should include a data structure with the
// representation of the full board so that the UI can update itself
// with the latest data on the server. The response should also include
// a flag indicating whether someone has won the game or not and who
// that winner is if so.

app.post('/api/move', async (req, res) => {
  const body = req.body
  const gameId = body.gameId
  const player = body.player
  const position = body.position
  const message = globalGameState[gameId].move(position[0], position[1], player)
  const result = {
    game: globalGameState[gameId],
    message,
  }

  res.send(result)
})

app.get('/api/global', async (req, res) => {
  res.send(globalGameState)
})

export default app

