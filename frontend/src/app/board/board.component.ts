import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  @Input() board!: number[][]
  @Input() player!: number
  @Output() makeMove = new EventEmitter<number[]>();
  constructor() { }

  ngOnInit(): void {
  }

  squareClicked(event: any) {
    console.log(event)
    this.makeMove.emit(event);
  }

}
