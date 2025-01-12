const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
    });
    const page = await browser.newPage();

    const filePath = path.resolve(__dirname, '../dist/index.html');
    const fileUrl = `file://${filePath}`;
    await page.goto(fileUrl);
    await page.pdf({
        path: 'public/resume.pdf',
        format: 'legal',
        printBackground: true
    });

    await browser.close();

})();
