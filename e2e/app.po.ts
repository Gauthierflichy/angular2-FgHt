import { browser, element, by } from 'protractor';

export class FLICHYGauthierHINFRAYTheoPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('fght-root h1')).getText();
  }
}
