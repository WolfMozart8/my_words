import { Component, OnInit } from '@angular/core';
import { Word } from '../../interfaces/word';
import { NgClass } from '@angular/common';
import { WordsService } from '../../services/words.service';
import { mockList } from '../../mock/mock_wordList';
import { WordInfoComponent } from '../word-info/word-info.component';

@Component({
  selector: 'app-text',
  standalone: true,
  imports: [NgClass, WordInfoComponent],
  templateUrl: './text.component.html',
  styleUrl: './text.component.scss',
})
export class TextComponent implements OnInit {

  wordList: Word[] = [];
  activeWord: Word | null = null;
  newWordToAdd: string | undefined = "";

  // regex
  readonly regWord = /\w+/gi;

  inputText: string =
  "Angular creates an instance of the component for every matching HTML element it encounters. The DOM element that matches a component's selector is referred to as that component's host element. The contents of a component's template are rendered inside its host element.";
  outputText: any = [];

  constructor(private wordsService: WordsService) {}

  ngOnInit(): void {
    this.wordsService.getList().subscribe({
      next: (list) => {
        this.wordList = list;
      },
    });

    // test
    // mockList.forEach(w => this.wordsService.addWord(w));
    this.getOutputText()
  }

  getOutputText(): void {
    // "Hi, how are you?" -> ["Hi", ",", " ", "how", " ", "are", " ", "you", "?"]
    const wordOrSimbol = /[\w']+|[^a-zA-Z]/gi;
    this.outputText = this.inputText.match(wordOrSimbol)
  }

  setActiveWord(id: number): void {
    this.activeWord = this.wordsService.getWordById(id);
  }

  getNewWordBySelection(): void {
    this.newWordToAdd = window.getSelection()?.toString();
    // restart the selected active word
    this.activeWord = null;
  }

}
