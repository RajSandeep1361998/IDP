// const puppeteer = require('puppeteer');

// (async () => {

//   const browserURL = 'http://127.0.0.1:9222/json/list';
//   const response = await fetch(browserURL);
//   const json = await response.json();
//   console.log("sdaasd");

//   const pageURL = json[0].webSocketDebuggerUrl; 
// // assuming the first page is the one you want to connect to
//   const browser = await puppeteer.connect({ browserWSEndpoint: pageURL });
//   const page = await browser.newPage();
//   // automate the webpage here...
// })();
const puppeteer = require('puppeteer-core');
const { createBrowserFetcher } = require('puppeteer-core/lib/cjs/puppeteer/node/BrowserFetcher');

(async () => {
  const browserFetcher = createBrowserFetcher();
  const revisionInfo = await browserFetcher.download('1722'); // replace with the revision number of the Edge version you are using
  const browser = await puppeteer.launch({
    executablePath: revisionInfo.executablePath,
    headless: false, // set to true if you don't want to see the browser window
    defaultViewport: null,
    args: [
      `--remote-debugging-port=9222`,
    ],
  });
  const pages = await browser.pages();
  const page = pages[0];
  console.log(await page.title());
  await browser.close();
})();
