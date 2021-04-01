let basePage = function () {
    const quoteInput = element(by.css('[placeholder="Quote"]'));
    const searchResult = element(by.xpath('//*[@placeholder="Quote"]/../following-sibling::div[1]/div/div[2]'));

    this.getQuote = async (quoteSymbol) => {
        quoteInput.sendKeys(quoteSymbol);
        await searchResult.click();
    }
}

module.exports = new basePage();