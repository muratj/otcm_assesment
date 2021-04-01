const {
    browser
} = require("protractor");

let quotePage = function () {
    this.marketCap = element(by.xpath('//*[text()="Market Cap"]/../../following-sibling::p'));
    this.openPrice = element(by.xpath('//*[text()="Open"]/following-sibling::p'));
    this.quoteInfo = element.all(by.css('h1'));

    this.navigateToTab = async (tabName) => {
        await element(by.xpath(`//a[text()="${tabName}"]`)).click();
    }
}

module.exports = new quotePage();