export interface Word {
  word: string;
  // TODO: ENUM?
  state: State;
  isSingleWord?: boolean;
  startDate?: Date;
  lastUpdate?: Date;
  // TODO: ENUM?
  levelMaertry?: string;
  description?: string;
  seen?: number;
}

const exampleWord: Word = {
  word: 'legend',
  state: 'known',
  startDate: new Date('2024-01-01'),
  lastUpdate: new Date('2024-01-02'),
  levelMaertry: 'master',
  description: 'word from a game',
  seen: 39,
};

export type State = 'unknown' | 'known' | 'learning' | 'skipped' | 'ignored';
