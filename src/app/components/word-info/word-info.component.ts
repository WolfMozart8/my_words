import { Component, Input } from '@angular/core';
import { State, Word } from '../../interfaces/word';
import { WordsService } from '../../services/words.service';

@Component({
  selector: 'app-word-info',
  standalone: true,
  imports: [],
  templateUrl: './word-info.component.html',
  styleUrl: './word-info.component.scss',
})
export class WordInfoComponent {
  constructor(private wordService: WordsService) {}

  @Input() word: Word | null = null;

  // if word is null
  @Input() newWord: string | undefined = '';
  @Input() newWordState: State = 'known';

  addWord() {
    if (this.newWord) {
      const wordToAdd: Word = {
        word: this.newWord.toLowerCase(),
        state: this.newWordState,
      };

      this.wordService.addWord(wordToAdd);
    }
  }

  selectState(event: any) {
    this.newWordState = event.target.value;
  }
}
