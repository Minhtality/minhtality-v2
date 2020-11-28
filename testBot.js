const puppeteer = require  ('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const url = 'https://www.google.com/';
    await page.goto(url);
    await page.screenshot({path: 'testScreenshot.png'});

    await browser.close();
})();