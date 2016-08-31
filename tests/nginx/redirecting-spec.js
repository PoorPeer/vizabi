/**
 * Created by tvaleriy on 8/30/16.
 */
/*eslint-env protractor, jasmine */
'use strict';
const EC = protractor.ExpectedConditions;
const timeout = 5000;
describe('checking redirecting', () => {
  it('should open https://www.gapminder.org', () => {
    browser.get('https://www.gapminder.org');
    browser.wait(EC.visibilityOf(element(by.css('#logo > a:nth-child(1) > img'))));
    browser.wait(EC.visibilityOf(element(by.css('#footer-logo'))));
    expect(browser.getCurrentUrl()).toEqual('https://www.gapminder.org/');
  });
  it('redirect https://www.gapminder.org/ to https://www.gapminder.org', () => {
    browser.get('https://www.gapminder.org/');
    browser.wait(EC.visibilityOf(element(by.css('#logo > a:nth-child(1) > img'))));
    browser.wait(EC.visibilityOf(element(by.css('#footer-logo'))));
    expect(browser.getCurrentUrl()).toEqual('https://www.gapminder.org/');
  });
  it('redirect http://www.gapminder.org to https://www.gapminder.org', () => {
    browser.get('http://www.gapminder.org');
    browser.wait(EC.visibilityOf(element(by.css('#logo > a:nth-child(1) > img'))));
    browser.wait(EC.visibilityOf(element(by.css('#footer-logo'))));
    expect(browser.getCurrentUrl()).toEqual('https://www.gapminder.org/');
  });
  it('redirect http://www.gapminder.org/ to https://www.gapminder.org', () => {
    browser.get('http://www.gapminder.org/');
    browser.wait(EC.visibilityOf(element(by.css('#logo > a:nth-child(1) > img'))));
    browser.wait(EC.visibilityOf(element(by.css('#footer-logo'))));
    expect(browser.getCurrentUrl()).toEqual('https://www.gapminder.org/');
  });
  it('redirect https://gapminder.org to https://www.gapminder.org', () => {
    browser.get('https://gapminder.org');
    browser.wait(EC.visibilityOf(element(by.css('#logo > a:nth-child(1) > img'))));
    browser.wait(EC.visibilityOf(element(by.css('#footer-logo'))));
    expect(browser.getCurrentUrl()).toEqual('https://www.gapminder.org/');
  });
  it('redirect http://gapminder.org to https://www.gapminder.org', () => {
    browser.get('http://gapminder.org');
    browser.wait(EC.visibilityOf(element(by.css('#logo > a:nth-child(1) > img'))));
    browser.wait(EC.visibilityOf(element(by.css('#footer-logo'))));
    expect(browser.getCurrentUrl()).toEqual('https://www.gapminder.org/');
  });
  it('redirect http://gapminder.org to https://www.gapminder.org', () => {
    browser.get('http://gapminder.org');
    browser.wait(EC.visibilityOf(element(by.css('#logo > a:nth-child(1) > img'))));
    browser.wait(EC.visibilityOf(element(by.css('#footer-logo'))));
    expect(browser.getCurrentUrl()).toEqual('https://www.gapminder.org/');
  });
  it('redirect https://www.gapminder.org/tools to https://www.gapminder.org/tools/#_chart-type=bubbles', () => {
    browser.get('https://www.gapminder.org/tools');
    browser.wait(EC.visibilityOf(element(by.css('body > div.wrapper > div.header > a'))));
    browser.wait(EC.visibilityOf(element(by.css('#vizabi-placeholder > div > div.vzb-tool-stage > ' +
      'div.vzb-tool-timeslider > div > div.vzb-ts-btns > button.vzb-ts-btn-play.vzb-ts-btn > svg'))));
    expect(browser.getCurrentUrl()).toContain('chart-type=bubbles');
  });
  it('redirect http://www.gapminder.org/tools to https://www.gapminder.org/tools/#_chart-type=bubbles', () => {
    browser.get('http://www.gapminder.org/tools');
    browser.wait(EC.visibilityOf(element(by.css('body > div.wrapper > div.header > a'))));
    browser.wait(EC.visibilityOf(element(by.css('#vizabi-placeholder > div > div.vzb-tool-stage > ' +
      'div.vzb-tool-timeslider > div > div.vzb-ts-btns > button.vzb-ts-btn-play.vzb-ts-btn > svg'))));
    expect(browser.getCurrentUrl()).toContain('chart-type=bubbles');
  });
  it('redirect https://gapminder.org/tools to https://www.gapminder.org/tools/#_chart-type=bubbles', () => {
    browser.get('https://gapminder.org/tools');
    browser.wait(EC.visibilityOf(element(by.css('body > div.wrapper > div.header > a'))));
    browser.wait(EC.visibilityOf(element(by.css('#vizabi-placeholder > div > div.vzb-tool-stage > ' +
      'div.vzb-tool-timeslider > div > div.vzb-ts-btns > button.vzb-ts-btn-play.vzb-ts-btn > svg'))));
    expect(browser.getCurrentUrl()).toContain('chart-type=bubbles');
  });
  it('redirect http://gapminder.org/tools to https://www.gapminder.org/tools/#_chart-type=bubbles', () => {
    browser.get('http://gapminder.org/tools');
    browser.wait(EC.visibilityOf(element(by.css('body > div.wrapper > div.header > a'))));
    browser.wait(EC.visibilityOf(element(by.css('#vizabi-placeholder > div > div.vzb-tool-stage > ' +
      'div.vzb-tool-timeslider > div > div.vzb-ts-btns > button.vzb-ts-btn-play.vzb-ts-btn > svg'))));
    expect(browser.getCurrentUrl()).toContain('chart-type=bubbles');
  });
  it('redirect https://www.gapminder.org/tools/ to https://www.gapminder.org/tools/#_chart-type=bubbles', () => {
    browser.get('https://www.gapminder.org/tools/');
    browser.wait(EC.visibilityOf(element(by.css('body > div.wrapper > div.header > a'))));
    browser.wait(EC.visibilityOf(element(by.css('#vizabi-placeholder > div > div.vzb-tool-stage > ' +
      'div.vzb-tool-timeslider > div > div.vzb-ts-btns > button.vzb-ts-btn-play.vzb-ts-btn > svg'))));
    expect(browser.getCurrentUrl()).toContain('chart-type=bubbles');
  });
  it('redirect http://www.gapminder.org/tools/ to https://www.gapminder.org/tools/#_chart-type=bubbles', () => {
    browser.get('http://www.gapminder.org/tools/');
    browser.wait(EC.visibilityOf(element(by.css('body > div.wrapper > div.header > a'))));
    browser.wait(EC.visibilityOf(element(by.css('#vizabi-placeholder > div > div.vzb-tool-stage > ' +
      'div.vzb-tool-timeslider > div > div.vzb-ts-btns > button.vzb-ts-btn-play.vzb-ts-btn > svg'))));
    expect(browser.getCurrentUrl()).toContain('chart-type=bubbles');
  });
  it('redirect https://gapminder.org/tools/ to https://www.gapminder.org/tools/#_chart-type=bubbles', () => {
    browser.get('https://gapminder.org/tools/');
    browser.wait(EC.visibilityOf(element(by.css('body > div.wrapper > div.header > a'))));
    browser.wait(EC.visibilityOf(element(by.css('#vizabi-placeholder > div > div.vzb-tool-stage > ' +
      'div.vzb-tool-timeslider > div > div.vzb-ts-btns > button.vzb-ts-btn-play.vzb-ts-btn > svg'))));
    expect(browser.getCurrentUrl()).toContain('chart-type=bubbles');
  });
  it('redirect http://gapminder.org/tools/ to https://www.gapminder.org/tools/#_chart-type=bubbles', () => {
    browser.get('http://gapminder.org/tools/');
    browser.wait(EC.visibilityOf(element(by.css('body > div.wrapper > div.header > a'))));
    browser.wait(EC.visibilityOf(element(by.css('#vizabi-placeholder > div > div.vzb-tool-stage > ' +
      'div.vzb-tool-timeslider > div > div.vzb-ts-btns > button.vzb-ts-btn-play.vzb-ts-btn > svg'))));
    expect(browser.getCurrentUrl()).toContain('chart-type=bubbles');
  });
  it('redirect https://www.gapminder.org/tools/bubbles to https://www.gapminder.org/tools/#_chart-type=bubbles', () => {
    browser.get('https://www.gapminder.org/tools/bubbles');
    browser.wait(EC.visibilityOf(element(by.css('body > div.wrapper > div.header > a'))));
    browser.wait(EC.visibilityOf(element(by.css('#vizabi-placeholder > div > div.vzb-tool-stage > ' +
      'div.vzb-tool-timeslider > div > div.vzb-ts-btns > button.vzb-ts-btn-play.vzb-ts-btn > svg'))));
    expect(browser.getCurrentUrl()).toContain('chart-type=bubbles');
  });
  it('redirect http://www.gapminder.org/tools/bubbles to https://www.gapminder.org/tools/#_chart-type=bubbles', () => {
    browser.get('http://www.gapminder.org/tools/bubbles');
    browser.wait(EC.visibilityOf(element(by.css('body > div.wrapper > div.header > a'))));
    browser.wait(EC.visibilityOf(element(by.css('#vizabi-placeholder > div > div.vzb-tool-stage > ' +
      'div.vzb-tool-timeslider > div > div.vzb-ts-btns > button.vzb-ts-btn-play.vzb-ts-btn > svg'))));
    expect(browser.getCurrentUrl()).toContain('chart-type=bubbles');
  });
  it('redirect https://gapminder.org/tools/bubbles to https://www.gapminder.org/tools/#_chart-type=bubbles', () => {
    browser.get('https://gapminder.org/tools/bubbles');
    browser.wait(EC.visibilityOf(element(by.css('body > div.wrapper > div.header > a'))));
    browser.wait(EC.visibilityOf(element(by.css('#vizabi-placeholder > div > div.vzb-tool-stage > ' +
      'div.vzb-tool-timeslider > div > div.vzb-ts-btns > button.vzb-ts-btn-play.vzb-ts-btn > svg'))));
    expect(browser.getCurrentUrl()).toContain('chart-type=bubbles');
  });
  it('redirect http://gapminder.org/tools/bubbles to https://www.gapminder.org/tools/#_chart-type=bubbles', () => {
    browser.get('http://gapminder.org/tools/bubbles');
    browser.wait(EC.visibilityOf(element(by.css('body > div.wrapper > div.header > a'))));
    browser.wait(EC.visibilityOf(element(by.css('#vizabi-placeholder > div > div.vzb-tool-stage > ' +
      'div.vzb-tool-timeslider > div > div.vzb-ts-btns > button.vzb-ts-btn-play.vzb-ts-btn > svg'))));
    expect(browser.getCurrentUrl()).toContain('chart-type=bubbles');
  });
  it('redirect https://www.gapminder.org/tools/bubbles/ to https://www.gapminder.org/tools/#_chart-type=bubbles',
    () => {
    browser.get('https://www.gapminder.org/tools/bubbles/');
    browser.wait(EC.visibilityOf(element(by.css('body > div.wrapper > div.header > a'))));
    browser.wait(EC.visibilityOf(element(by.css('#vizabi-placeholder > div > div.vzb-tool-stage > ' +
      'div.vzb-tool-timeslider > div > div.vzb-ts-btns > button.vzb-ts-btn-play.vzb-ts-btn > svg'))));
    expect(browser.getCurrentUrl()).toContain('chart-type=bubbles');
  });
  it('redirect http://www.gapminder.org/tools/bubbles/ to https://www.gapminder.org/tools/#_chart-type=bubbles',
    () => {
    browser.get('http://www.gapminder.org/tools/bubbles/');
    browser.wait(EC.visibilityOf(element(by.css('body > div.wrapper > div.header > a'))));
    browser.wait(EC.visibilityOf(element(by.css('#vizabi-placeholder > div > div.vzb-tool-stage > ' +
      'div.vzb-tool-timeslider > div > div.vzb-ts-btns > button.vzb-ts-btn-play.vzb-ts-btn > svg'))));
    expect(browser.getCurrentUrl()).toContain('chart-type=bubbles');
  });
  it('redirect https://gapminder.org/tools/bubbles/ to https://www.gapminder.org/tools/#_chart-type=bubbles', () => {
    browser.get('https://gapminder.org/tools/bubbles/');
    browser.wait(EC.visibilityOf(element(by.css('body > div.wrapper > div.header > a'))));
    browser.wait(EC.visibilityOf(element(by.css('#vizabi-placeholder > div > div.vzb-tool-stage > ' +
      'div.vzb-tool-timeslider > div > div.vzb-ts-btns > button.vzb-ts-btn-play.vzb-ts-btn > svg'))));
    expect(browser.getCurrentUrl()).toContain('chart-type=bubbles');
  });
  it('redirect http://gapminder.org/tools/bubbles/ to https://www.gapminder.org/tools/#_chart-type=bubbles', () => {
    browser.get('http://gapminder.org/tools/bubbles/');
    browser.wait(EC.visibilityOf(element(by.css('body > div.wrapper > div.header > a'))));
    browser.wait(EC.visibilityOf(element(by.css('#vizabi-placeholder > div > div.vzb-tool-stage > ' +
      'div.vzb-tool-timeslider > div > div.vzb-ts-btns > button.vzb-ts-btn-play.vzb-ts-btn > svg'))));
    expect(browser.getCurrentUrl()).toContain('chart-type=bubbles');
  });
  it('redirect https://www.gapminder.org/tools/#_chart-type=bubbles to https://www.gapminder.org/tools/' +
    '#_chart-type=bubbles', () => {
    browser.get('https://www.gapminder.org/tools/#_chart-type=bubbles');
    browser.wait(EC.visibilityOf(element(by.css('body > div.wrapper > div.header > a'))));
    browser.wait(EC.visibilityOf(element(by.css('#vizabi-placeholder > div > div.vzb-tool-stage > ' +
      'div.vzb-tool-timeslider > div > div.vzb-ts-btns > button.vzb-ts-btn-play.vzb-ts-btn > svg'))));
    expect(browser.getCurrentUrl()).toContain('chart-type=bubbles');
  });
  it('redirect http://www.gapminder.org/tools/#_chart-type=bubbles to https://www.gapminder.org/tools/' +
    '#_chart-type=bubbles', () => {
    browser.get('http://www.gapminder.org/tools/#_chart-type=bubbles');
    browser.wait(EC.visibilityOf(element(by.css('body > div.wrapper > div.header > a'))));
    browser.wait(EC.visibilityOf(element(by.css('#vizabi-placeholder > div > div.vzb-tool-stage > ' +
      'div.vzb-tool-timeslider > div > div.vzb-ts-btns > button.vzb-ts-btn-play.vzb-ts-btn > svg'))));
    expect(browser.getCurrentUrl()).toContain('chart-type=bubbles');
  });
  it('redirect https://gapminder.org/tools/#_chart-type=bubbles to https://www.gapminder.org/tools/' +
    '#_chart-type=bubbles', () => {
    browser.get('https://gapminder.org/tools/#_chart-type=bubbles');
    browser.wait(EC.visibilityOf(element(by.css('body > div.wrapper > div.header > a'))));
    browser.wait(EC.visibilityOf(element(by.css('#vizabi-placeholder > div > div.vzb-tool-stage > ' +
      'div.vzb-tool-timeslider > div > div.vzb-ts-btns > button.vzb-ts-btn-play.vzb-ts-btn > svg'))));
expect(browser.getCurrentUrl()).toContain('chart-type=bubbles');
  });
  it('redirect http://gapminder.org/tools/#_chart-type=bubbles to https://www.gapminder.org/tools/' +
    '#_chart-type=bubbles', () => {
    browser.get('http://gapminder.org/tools/#_chart-type=bubbles');
    browser.wait(EC.visibilityOf(element(by.css('body > div.wrapper > div.header > a'))));
    browser.wait(EC.visibilityOf(element(by.css('#vizabi-placeholder > div > div.vzb-tool-stage > ' +
      'div.vzb-tool-timeslider > div > div.vzb-ts-btns > button.vzb-ts-btn-play.vzb-ts-btn > svg'))));
    expect(browser.getCurrentUrl()).toContain('chart-type=bubbles');
  });
});
describe('checking Teach menu items', () => {
  it('should open for-teachers page', () => {
    browser.get('http://gapminder.org/tools');
    browser.wait(EC.visibilityOf(element(by.css('body > div.wrapper > div.header > a'))));
    browser.wait(EC.visibilityOf(element(by.css('#vizabi-placeholder > div > div.vzb-tool-stage > ' +
      'div.vzb-tool-timeslider > div > div.vzb-ts-btns > button.vzb-ts-btn-play.vzb-ts-btn > svg'))));
    element(by.css('body > div.wrapper > div.header > ul.nav.navbar-nav.navbar-nav-left.desktop.ng-isolate-scope' +
      ' > li > div:nth-child(2) > a')).click();
    element(by.css('body > div.wrapper > div.header > ul.nav.navbar-nav.navbar-nav-left.desktop.ng-isolate-scope' +
      ' > li > div:nth-child(2) > div > div > div > ul > li:nth-child(1) > a > div.column-item-info' +
      ' > div.column-item-heading.ng-binding')).click();
    browser.wait(EC.visibilityOf(element(by.css('#logo > a:nth-child(1) > img'))));
    browser.wait(EC.visibilityOf(element(by.css('#footer-logo'))));
    expect(browser.getCurrentUrl()).toEqual('https://www.gapminder.org/for-teachers/');
  });
  it('should open workshops page', () => {
    browser.get('http://gapminder.org/tools');
    browser.wait(EC.visibilityOf(element(by.css('body > div.wrapper > div.header > a'))));
    browser.wait(EC.visibilityOf(element(by.css('#vizabi-placeholder > div > div.vzb-tool-stage > ' +
      'div.vzb-tool-timeslider > div > div.vzb-ts-btns > button.vzb-ts-btn-play.vzb-ts-btn > svg'))));
    element(by.css('body > div.wrapper > div.header > ul.nav.navbar-nav.navbar-nav-left.desktop.ng-isolate-scope' +
      ' > li > div:nth-child(2) > a')).click();
    element(by.css('body > div.wrapper > div.header > ul.nav.navbar-nav.navbar-nav-left.desktop.ng-isolate-scope' +
      ' > li > div:nth-child(2) > div > div > div > ul > li:nth-child(3) > a' +
      ' > div.column-item-info > div.column-item-heading.ng-binding')).click();
    browser.wait(EC.visibilityOf(element(by.css('body > div:nth-child(2) > div:nth-child(1) > nav > div > ' +
      'div.navbar-header > a > logo > span'))));
    browser.wait(EC.visibilityOf(element(by.css('body > div:nth-child(2) > footer > footer > div > div.footer-top' +
      ' > div.top-primary > a:nth-child(2) > logo > span'))));
    expect(browser.getCurrentUrl()).toEqual('http://www.gapminder.org/workshops/');
  });
  it('should open slideshows page', () => {
    browser.get('http://gapminder.org/tools');
    browser.wait(EC.visibilityOf(element(by.css('body > div.wrapper > div.header > a'))));
    browser.wait(EC.visibilityOf(element(by.css('#vizabi-placeholder > div > div.vzb-tool-stage > ' +
      'div.vzb-tool-timeslider > div > div.vzb-ts-btns > button.vzb-ts-btn-play.vzb-ts-btn > svg'))));
    element(by.css('body > div.wrapper > div.header > ul.nav.navbar-nav.navbar-nav-left.desktop.ng-isolate-scope' +
      ' > li > div:nth-child(2) > a')).click();
    element(by.css('body > div.wrapper > div.header > ul.nav.navbar-nav.navbar-nav-left.desktop.ng-isolate-scope' +
      ' > li > div:nth-child(2) > div > div > div > ul > li:nth-child(2) > a > div.column-item-icon > img')).click();
    browser.wait(EC.visibilityOf(element(by.css('body > div:nth-child(2) > div:nth-child(1) > nav > div > ' +
      'div.navbar-header > a > logo > span'))));
    browser.wait(EC.visibilityOf(element(by.css('body > div:nth-child(2) > footer > footer > div > div.footer-top' +
      ' > div.top-primary > a:nth-child(2) > logo > span'))));
    expect(browser.getCurrentUrl()).toEqual('http://www.gapminder.org/slideshows/');
  });
  it('should open test questions page', () => {
    browser.get('http://gapminder.org/tools');
    browser.wait(EC.visibilityOf(element(by.css('body > div.wrapper > div.header > a'))));
    browser.wait(EC.visibilityOf(element(by.css('#vizabi-placeholder > div > div.vzb-tool-stage > ' +
      'div.vzb-tool-timeslider > div > div.vzb-ts-btns > button.vzb-ts-btn-play.vzb-ts-btn > svg'))));
    element(by.css('body > div.wrapper > div.header > ul.nav.navbar-nav.navbar-nav-left.desktop.ng-isolate-scope' +
      ' > li > div:nth-child(2) > a')).click();
    element(by.css('body > div.wrapper > div.header > ul.nav.navbar-nav.navbar-nav-left.desktop.ng-isolate-scope' +
      ' > li > div:nth-child(2) > div > div > div > ul > li:nth-child(4) > a > div.column-item-icon > img')).click();
    browser.wait(EC.visibilityOf(element(by.css('body > div:nth-child(2) > div:nth-child(1) > nav > div > ' +
      'div.navbar-header > a > logo > span'))));
    browser.wait(EC.visibilityOf(element(by.css('body > div:nth-child(2) > footer > footer > div > div.footer-top' +
      ' > div.top-primary > a:nth-child(2) > logo > span'))));
    expect(browser.getCurrentUrl()).toEqual('http://www.gapminder.org/test-questions/');
  });
});
describe('checking Facts menu items', () => {
  it('should open bubble-chart page', () => {
    browser.get('http://gapminder.org/tools');
    browser.wait(EC.visibilityOf(element(by.css('body > div.wrapper > div.header > a'))));
    browser.wait(EC.visibilityOf(element(by.css('#vizabi-placeholder > div > div.vzb-tool-stage > ' +
      'div.vzb-tool-timeslider > div > div.vzb-ts-btns > button.vzb-ts-btn-play.vzb-ts-btn > svg'))));
    element(by.css('body > div.wrapper > div.header > ul.nav.navbar-nav.navbar-nav-left.desktop.ng-isolate-scope' +
      ' > li > div:nth-child(1) > a')).click();
    element(by.css('body > div.wrapper > div.header > ul.nav.navbar-nav.navbar-nav-left.desktop.ng-isolate-scope' +
      ' > li > div:nth-child(1) > div > div > div > ul > li:nth-child(1) > a > div.column-item-icon > img')).click();
    browser.wait(EC.visibilityOf(element(by.css('#logo > a:nth-child(1) > img'))));
    browser.wait(EC.visibilityOf(element(by.css('#footer-logo'))));
    expect(browser.getCurrentUrl()).toContain('https://www.gapminder.org/world/');
  });
  it('should open massive ignorance page', () => {
    browser.get('http://gapminder.org/tools');
    browser.wait(EC.visibilityOf(element(by.css('body > div.wrapper > div.header > a'))));
    browser.wait(EC.visibilityOf(element(by.css('#vizabi-placeholder > div > div.vzb-tool-stage > ' +
      'div.vzb-tool-timeslider > div > div.vzb-ts-btns > button.vzb-ts-btn-play.vzb-ts-btn > svg'))));
    element(by.css('body > div.wrapper > div.header > ul.nav.navbar-nav.navbar-nav-left.desktop.ng-isolate-scope' +
      ' > li > div:nth-child(1) > a')).click();
    element(by.css('body > div.wrapper > div.header > ul.nav.navbar-nav.navbar-nav-left.desktop.ng-isolate-scope' +
      ' > li > div:nth-child(1) > div > div > div > ul > li:nth-child(3) > a > div.column-item-icon > img')).click();
    browser.wait(EC.visibilityOf(element(by.css('#logo > a:nth-child(1) > img'))));
    browser.wait(EC.visibilityOf(element(by.css('#footer-logo'))));
    expect(browser.getCurrentUrl()).toEqual('https://www.gapminder.org/ignorance/');
  });
  it('should open answers page', () => {
    browser.get('http://gapminder.org/tools');
    browser.wait(EC.visibilityOf(element(by.css('body > div.wrapper > div.header > a'))));
    browser.wait(EC.visibilityOf(element(by.css('#vizabi-placeholder > div > div.vzb-tool-stage > ' +
      'div.vzb-tool-timeslider > div > div.vzb-ts-btns > button.vzb-ts-btn-play.vzb-ts-btn > svg'))));
    element(by.css('body > div.wrapper > div.header > ul.nav.navbar-nav.navbar-nav-left.desktop.ng-isolate-scope' +
      ' > li > div:nth-child(1) > a')).click();
    element(by.css('body > div.wrapper > div.header > ul.nav.navbar-nav.navbar-nav-left.desktop.ng-isolate-scope' +
      ' > li > div:nth-child(1) > div > div > div > ul > li:nth-child(2) > a > div.column-item-icon > img')).click();
    browser.wait(EC.visibilityOf(element(by.css('body > div > div:nth-child(1) > nav > div > div.navbar-header' +
      ' > a > logo > span'))));
    browser.wait(EC.visibilityOf(element(by.css('body > div > footer > footer > div > div.footer-top > ' +
      'div.top-primary > a:nth-child(2) > logo > span'))));
    expect(browser.getCurrentUrl()).toEqual('http://www.gapminder.org/answers/');
  });
  it('should open data page', () => {
    browser.get('http://gapminder.org/tools');
    browser.wait(EC.visibilityOf(element(by.css('body > div.wrapper > div.header > a'))));
    browser.wait(EC.visibilityOf(element(by.css('#vizabi-placeholder > div > div.vzb-tool-stage > ' +
      'div.vzb-tool-timeslider > div > div.vzb-ts-btns > button.vzb-ts-btn-play.vzb-ts-btn > svg'))));
    element(by.css('body > div.wrapper > div.header > ul.nav.navbar-nav.navbar-nav-left.desktop.ng-isolate-scope' +
      ' > li > div:nth-child(1) > a')).click();
    element(by.css('body > div.wrapper > div.header > ul.nav.navbar-nav.navbar-nav-left.desktop.ng-isolate-scope' +
      ' > li > div:nth-child(1) > div > div > div > ul > li:nth-child(4) > a > div.column-item-icon > img')).click();
    browser.wait(EC.visibilityOf(element(by.css('#logo > a:nth-child(1) > img'))));
    browser.wait(EC.visibilityOf(element(by.css('#footer-logo'))));
    expect(browser.getCurrentUrl()).toEqual('https://www.gapminder.org/data/');
  })
});
describe('checking About menu items', () => {
  it('should open our organization page', () => {
    browser.get('http://gapminder.org/tools');
    browser.wait(EC.visibilityOf(element(by.css('body > div.wrapper > div.header > a'))));
    browser.wait(EC.visibilityOf(element(by.css('#vizabi-placeholder > div > div.vzb-tool-stage > ' +
      'div.vzb-tool-timeslider > div > div.vzb-ts-btns > button.vzb-ts-btn-play.vzb-ts-btn > svg'))));
    element(by.css('body > div.wrapper > div.header > ul.nav.navbar-nav.navbar-nav-left.desktop.ng-isolate-scope' +
      ' > li > div:nth-child(3) > a')).click();
    element(by.css('body > div.wrapper > div.header > ul.nav.navbar-nav.navbar-nav-left.desktop.ng-isolate-scope' +
      ' > li > div:nth-child(3) > div > div > div > ul > li:nth-child(1) > a > div.column-item-icon > img')).click();
    browser.wait(EC.visibilityOf(element(by.css('#logo > a:nth-child(1) > img'))));
    browser.wait(EC.visibilityOf(element(by.css('#footer-logo'))));
    expect(browser.getCurrentUrl()).toContain('https://www.gapminder.org/about-gapminder/');
  });
  it('should open faq page', () => {
    browser.get('http://gapminder.org/tools');
    browser.wait(EC.visibilityOf(element(by.css('body > div.wrapper > div.header > a'))));
    browser.wait(EC.visibilityOf(element(by.css('#vizabi-placeholder > div > div.vzb-tool-stage > ' +
      'div.vzb-tool-timeslider > div > div.vzb-ts-btns > button.vzb-ts-btn-play.vzb-ts-btn > svg'))));
    element(by.css('body > div.wrapper > div.header > ul.nav.navbar-nav.navbar-nav-left.desktop.ng-isolate-scope' +
      ' > li > div:nth-child(3) > a')).click();
    element(by.css('body > div.wrapper > div.header > ul.nav.navbar-nav.navbar-nav-left.desktop.ng-isolate-scope' +
      ' > li > div:nth-child(3) > div > div > div > ul > li:nth-child(3) > a > div.column-item-icon > img')).click();
    browser.wait(EC.visibilityOf(element(by.css('#logo > a:nth-child(1) > img'))));
    browser.wait(EC.visibilityOf(element(by.css('#footer-logo'))));
    expect(browser.getCurrentUrl()).toEqual('https://www.gapminder.org/faq_frequently_asked_questions/');
  });
  it('should open news page', () => {
    browser.get('http://gapminder.org/tools');
    browser.wait(EC.visibilityOf(element(by.css('body > div.wrapper > div.header > a'))));
    browser.wait(EC.visibilityOf(element(by.css('#vizabi-placeholder > div > div.vzb-tool-stage > ' +
      'div.vzb-tool-timeslider > div > div.vzb-ts-btns > button.vzb-ts-btn-play.vzb-ts-btn > svg'))));
    element(by.css('body > div.wrapper > div.header > ul.nav.navbar-nav.navbar-nav-left.desktop.ng-isolate-scope' +
      ' > li > div:nth-child(3) > a')).click();
    element(by.css('body > div.wrapper > div.header > ul.nav.navbar-nav.navbar-nav-left.desktop.ng-isolate-scope' +
      ' > li > div:nth-child(3) > div > div > div > ul > li:nth-child(2) > a > div.column-item-icon > img')).click();
    browser.wait(EC.visibilityOf(element(by.css('#logo > a:nth-child(1) > img'))));
    browser.wait(EC.visibilityOf(element(by.css('#footer-logo'))));
    expect(browser.getCurrentUrl()).toEqual('https://www.gapminder.org/news/');
  });
  it('should open open license page', () => {
    browser.get('http://gapminder.org/tools');
    browser.wait(EC.visibilityOf(element(by.css('body > div.wrapper > div.header > a'))));
    browser.wait(EC.visibilityOf(element(by.css('#vizabi-placeholder > div > div.vzb-tool-stage > ' +
      'div.vzb-tool-timeslider > div > div.vzb-ts-btns > button.vzb-ts-btn-play.vzb-ts-btn > svg'))));
    element(by.css('body > div.wrapper > div.header > ul.nav.navbar-nav.navbar-nav-left.desktop.ng-isolate-scope' +
      ' > li > div:nth-child(3) > a')).click();
    element(by.css('body > div.wrapper > div.header > ul.nav.navbar-nav.navbar-nav-left.desktop.ng-isolate-scope' +
      ' > li > div:nth-child(3) > div > div > div > ul > li:nth-child(4) > a > div.column-item-icon > img')).click();
    browser.wait(EC.visibilityOf(element(by.css('body > div:nth-child(2) > div:nth-child(1) > nav > div > ' +
      'div.navbar-header > a > logo > span'))));
    browser.wait(EC.visibilityOf(element(by.css('body > div:nth-child(2) > footer > footer > div > div.footer-top' +
      ' > div.top-primary > a:nth-child(2) > logo > span'))));
    expect(browser.getCurrentUrl()).toEqual('http://www.gapminder.org/free-material/');
  })
})
