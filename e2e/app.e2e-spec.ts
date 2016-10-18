import { Angular2DotblogsDemoPage } from './app.po';

describe('angular2-dotblogs-demo App', function() {
  let page: Angular2DotblogsDemoPage;

  beforeEach(() => {
    page = new Angular2DotblogsDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
