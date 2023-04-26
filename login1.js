const puppeteer = require('puppeteer');
const { ScreenRecorder } = require('puppeteer-screen-recorder');

describe('Duo Push-based authentication with screen recording', () => {
  let browser;
  let page;
  let recorder;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    recorder = new ScreenRecorder(page);
    await recorder.start('vidd.mp4');
    await page.goto('https://webapp4.asu.edu/myasu/');
  });

  afterAll(async () => {
    await browser.close();
  });

  it('should login with Duo Push-based authentication', async () => {
    // Enter username and password and submit the login form
    await page.type('#username', 'spappu3');
    await page.type('#password', 'RaJsan136247');
    await page.click('#login > section.form-group.form-actions > div.form-action > input');
    
    // Wait for the Duo authentication prompt to appear
    await page.waitForSelector('#duo_iframe');
    
    // Switch to the Duo iframe and click the "Send Me a Push" button
    const duoFrame = await page.$('#duo_iframe');
    const duoFrameContent = await duoFrame.contentFrame();
    await recorder.stop();
    await duoFrameContent.click('#auth_methods\\.push\\.button');
    
    // Wait for the Duo Push notification to appear on your mobile device and approve it
    // This step needs to be done manually by the user
    
    // Wait for the page to load after successful authentication
    await page.waitForNavigation({ waitUntil: 'networkidle0' });
    
    // Perform actions on the authenticated page
  });
});
