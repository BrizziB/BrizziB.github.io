import { GameOfLifePage } from './app.po';

describe('game-of-life App', () => {
  let page: GameOfLifePage;

  beforeEach(() => {
    page = new GameOfLifePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
