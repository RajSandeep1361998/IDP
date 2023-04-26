const puppeteer = require('puppeteer');

(async () => {

const browser = await puppeteer.launch();

const page = await browser.newPage();

const response = await page.goto('https://interactive-degree-planner-qa.apps.asu.edu/dashboard');

const chain = response.request().redirectChain();
console.log(chain.length); // Return 1
console.log(chain[0].url());


await page.screenshot({ path: 'browserstack.png' });

await page.pdf({ path: 'browserstack.pdf', format: 'A4' });




await browser.close();

})();