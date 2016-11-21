import { FLICHYGauthierHINFRAYTheoPage } from './app.po';

describe('flichy-gauthier-hinfray-theo App', function() {
  let page: FLICHYGauthierHINFRAYTheoPage;

  beforeEach(() => {
    page = new FLICHYGauthierHINFRAYTheoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('fght works!');
  });
});
