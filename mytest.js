module.exports = {
    'My Test': function(browser) {
        browser
        .url('http://www.yahoo.com')
        .compareScreenshot('compare-google-screenshot.png')
        .end();
    }
};
