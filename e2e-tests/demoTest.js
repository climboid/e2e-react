module.exports = {
  'Home Page header is present' : function (browser) {
    browser
      .url('http://localhost:3000')
      .waitForElementVisible('h2', 10000)
      .assert.containsText('h2', 'Welcome to React')
      .end();
  }
};