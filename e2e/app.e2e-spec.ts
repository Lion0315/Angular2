import { ManagentPage } from './app.po';

describe('managent App', function() {
  let page: ManagentPage;

  beforeEach(() => {
    page = new ManagentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
