import { KiUIPage } from './app.po';

describe('Ki-ui App', function() {
  let page: KiUIPage;

  beforeEach(() => {
    page = new KiUIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
