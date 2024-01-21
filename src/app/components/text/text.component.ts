import { Component, OnInit } from '@angular/core';
import { State, Word } from '../../interfaces/word';
import { NgClass } from '@angular/common';
import { WordsService } from '../../services/words.service';

@Component({
  selector: 'app-text',
  standalone: true,
  imports: [NgClass],
  templateUrl: './text.component.html',
  styleUrl: './text.component.scss',
})
export class TextComponent implements OnInit {
  wordList: Word[] = [];
  private readonly reg = /[^a-zA-Z\s]/gi; // remove symbols

  text: string = "Angular creates an instance of the component for every matching HTML element it encounters. The DOM element that matches a component's selector is referred to as that component's host element. The contents of a component's template are rendered inside its host element.";
  // testText: string[] = [];

  constructor(private wordsService: WordsService) {}

  ngOnInit(): void {
    // this.testText = this.text.replace(this.reg, "").split(" ");
    this.wordsService.getList().subscribe({
      next: (list) => {
        this.wordList = list;
      },
    });
  }

  // for test purpose
  addRandomState(): State {
    const stateList: State[] = ['known', 'unknown', 'learning', 'skipped'];
    const random = Math.floor(Math.random() * 4);

    return stateList[random];
  }
}
