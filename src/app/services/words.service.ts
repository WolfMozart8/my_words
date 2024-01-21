import { Injectable } from '@angular/core';
import { Word } from '../interfaces/word';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WordsService {
  private wordsList: Word[] = [];
  private wordListSubject = new Subject<Word[]>();

  private static wordId: number = 1;

  constructor() {}

  getList(): Observable<Word[]> {
    return this.wordListSubject.asObservable();
  }

  addWord(wordItem: Word) {
    if (!this.isRepeated(wordItem.word)) {

      // TODO: trim() and toLowerCase() to words
      const wordToAdd: Word = {
        ...wordItem,
        id: this.generateId()
      }

      this.wordsList.push(wordToAdd);
      this.wordListSubject.next(this.wordsList);
    }
  }

  private isRepeated(word: string): boolean {
    const filteredList = this.wordsList.filter(
      (wordData) => wordData.word === word
    );

    // check if the list is not empty (i.e: the word is repeated)
    return filteredList.length > 0;
  }

  generateId(): number {
    return WordsService.wordId++
  }
}
