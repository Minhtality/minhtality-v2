const puppeteer = require  ('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    page.setViewport({width: 1980, height: 1080});
    const url = 'https://www.newegg.com/western-digital-black-sn750-nvme-1tb/p/N82E16820250110?Item=N82E16820250110&quicklink=true';
    await page.goto(url, {"waitUntil" : "networkidle2"});
    await page.click('button.btn.btn-primary.btn-wide');
    await page.waitForSelector('.modal-content');
    // await page.waitForSelector('button.a-button-close');
    await page.screenshot({path: 'testScreenshot.png'});

    await browser.close();
})();