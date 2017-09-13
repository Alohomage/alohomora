import { AlohomoraPage } from './app.po';

describe('alohomora App', () => {
  let page: AlohomoraPage;

  beforeEach(() => {
    page = new AlohomoraPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
