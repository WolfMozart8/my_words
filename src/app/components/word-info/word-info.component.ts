import { Component, Input } from '@angular/core';
import { Word } from '../../interfaces/word';

@Component({
  selector: 'app-word-info',
  standalone: true,
  imports: [],
  templateUrl: './word-info.component.html',
  styleUrl: './word-info.component.scss'
})
export class WordInfoComponent {

  @Input() word: Word | null = null;
}
