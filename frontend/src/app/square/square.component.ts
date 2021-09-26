import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss'],
})
export class SquareComponent implements OnInit {
  @Input() square!: number
  @Input() rowIndex!: number
  @Input() colIndex!: number
  @Output() squareClicked = new EventEmitter<number[]>()
  constructor() {}

  ngOnInit(): void {}
  squareClick() {
    this.squareClicked.emit([this.rowIndex, this.colIndex])
  }
}
