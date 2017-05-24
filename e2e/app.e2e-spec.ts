import { AngularNicefishPage } from './app.po';

describe('angular-nicefish App', () => {
  let page: AngularNicefishPage;

  beforeEach(() => {
    page = new AngularNicefishPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
