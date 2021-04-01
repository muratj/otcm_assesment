require('jasmine');
const using = require('jasmine-data-provider');
const {
    browser
} = require('protractor');
const basePage = require('./pages/basePage');
const quotePage = require('./pages/quotePage');
const testData = require('./testData1.json');
describe('Quote test', function () {
    using(testData, (quote) => {
        it('quote overview', async function () {
            browser.get('https://www.otcmarkets.com/');

            await basePage.getQuote(quote.symbol);

            await quotePage.navigateToTab('Quote');

            const marketCapOnQuote = quotePage.marketCapOnQuote.getText();
            const openPriceOnQuote = quotePage.openPriceOnQuote.getText();

            quotePage.quoteMeta.then((info) => {
                expect(info[0].getText()).toBe(quote.symbol);
                expect(info[1].getText()).toBe(quote.company);
            })

            await quotePage.navigateToTab('Security Details');

            const marketCapOnSequrity = quotePage.marketCapOnSequrity.getText();
            const date = quotePage.date.getText();

            expect(marketCapOnQuote).toBe(marketCapOnSequrity);

            console.log(`Market Cap ${marketCapOnSequrity} on ${date}`);

            browser.sleep(3000);
        });
    })
});