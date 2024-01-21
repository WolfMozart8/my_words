import { Injectable } from '@angular/core';
import { Word } from '../interfaces/word';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WordsService {
  private wordsList: Word[] = [];
  private wordListSubject = new Subject<Word[]>();

  constructor() {}

  getList(): Observable<Word[]> {
    return this.wordListSubject.asObservable();
  }

  addWord(word: string) {
    if (!this.isRepeated(word)) {
      // from "Example  " to "example"
      const formatedWord = word.trim().toLowerCase();

      const wordToAdd: Word = {
        word: formatedWord,
        state: 'ignored',
      };
    }
  }

  private isRepeated(word: string): boolean {
    const filteredList = this.wordsList.filter(
      (wordData) => wordData.word === word
    );

    // check if the list is not empty (i.e: the word is repeated)
    return filteredList.length > 0;
  }
}
