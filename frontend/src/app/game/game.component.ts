import { Component, OnInit } from '@angular/core'
import { ApiService } from '../api.service'
import { MatDialog } from '@angular/material/dialog'
import { WinnerComponent } from '../winner/winner.component'

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  constructor(private api: ApiService, public dialog: MatDialog) {}
  game: any
  ngOnInit(): void {}

  startNewGame() {
    this.api.createNewGame().subscribe(
      (game: any) => {
        console.log(game, 'game')
        this.game = game
      },
      (error) => {
        console.log('Error retrieving expenses')
        console.error(error)
      }
    )
  }

  makeMove(position: number[]): void {
    const body = {
      gameId: this.game._gameId,
      player: this.game._currentPlayer,
      position: position,
    }
    this.api.move(body).subscribe(
      (res: any) => {
        console.log(res, 'res')
        this.game = res.game
        if (this.game._winner !== 0 || this.game._draw) {
          this.openDialog(res.message)
        }
      },
      (error) => {
        console.log('Error retrieving expenses')
        console.error(error)
      }
    )
  }

  openDialog(message: string): void {
    const dialogRef = this.dialog.open(WinnerComponent, {
      data: { winner: message },
    })

    dialogRef.afterClosed().subscribe((result) => {
      this.startNewGame()
    })
  }
}
