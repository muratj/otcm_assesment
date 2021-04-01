const {
    browser,
    element
} = require("protractor");

let quotePage = function () {
    this.marketCapOnQuote = element(by.xpath('//*[text()="Market Cap"]/../../following-sibling::p'));
    this.openPriceOnQuote = element(by.xpath('//*[text()="Open"]/following-sibling::p'));
    this.quoteMeta = element.all(by.css('h1'));
    this.marketCapOnSequrity = element(by.xpath('//*[text()="Market Cap"]/../../../../following-sibling::div'));
    this.date = element(by.xpath('//*[text()="Market Cap"]/../../../../following-sibling::div[2]'))

    // Sometimes it throws element not clickable Exception
    // I catch that exception and run again this function
    this.navigateToTab = async (tabName) => {
        try {
            await element(by.xpath(`//a[text()="${tabName}"]`)).click();
        } catch (err) {
            this.navigateToTab(tabName);
        }
    }

    /**
     * Quote tab
     * get quote data
     */
    // this.getQuoteData = () => {
    //     let labels = [];
    //     let data = [];
    //     element.all(by.xpath('//label')).then(elements => {
    //         for (let i = 0; i < elements.length; i++) {
    //             labels.push(elements[i].getText());
    //         }
    //     });
    //     element.all(by.xpath('//label/following::p')).then(elements => {
    //         elements.forEach(element => {
    //             if (/^[0-9.,N/A x]+$/.test(element.getText())) {
    //                 data.push(element.getText());
    //             }
    //         })
    //     });

    //     return labels.length;
    // }

}

module.exports = new quotePage();