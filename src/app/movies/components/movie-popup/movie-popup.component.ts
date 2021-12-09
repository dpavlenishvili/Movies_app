import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Movie} from "../../interfaces/movie.interface";

@Component({
  selector: 'app-movie-popup',
  templateUrl: './movie-popup.component.html',
  styleUrls: ['./movie-popup.component.scss']
})
export class MoviePopupComponent implements OnInit {
  @Input() movie: Movie | undefined;
  @Input() showPopup = false;
  @Output() visibleChange = new EventEmitter<boolean>()

  constructor() { }

  ngOnInit(): void {
  }

  onClose(visible: boolean) {
    this.visibleChange.emit(visible)
  }
}
