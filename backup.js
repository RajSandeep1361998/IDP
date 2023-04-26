const puppeteer = require('puppeteer');
const { PuppeteerScreenRecorder } = require('puppeteer-screen-recorder');
describe("Google", () => {
    beforeAll(async () => {

        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        const recorder = new PuppeteerScreenRecorder(page);

        const token = 'eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJzcGFwcHUzQGFzdS5lZHUiLCJzY29wZSI6WyJodHRwczpcL1wvaW50ZXJhY3RpdmUtZGVncmVlLXBsYW5uZXItbm9ucHJvZC5hcHBzLmFzdS5lZHVcL2F1dGh6OnNlbGYiXSwiaXNzIjoic2VydmljZWF1dGgiLCJhc3VzZXJ2aWNlYXV0aC5jbGllbnRfaWQiOiJpbnRlcmFjdGl2ZS1kZWdyZWUtcGxhbm5lci1wdWJsaWMtbm9ucHJvZCIsImV4cCI6MTY4MTY5MDgwMiwiaWF0IjoxNjgxNjkwMjAyfQ.jb3zd8iDqXWxkikS2kDvp0PH8Knibwez-fGLVZZFp7WNlTPLcs7YapgqSs67TSNjvHbX7NdoVeJqsDqXtIIFqxV5bxSX9ocnmkJtxR1eSGjq0ycm04UJC4__SFCkyAh5G9h-1ZQs36RGBL7bZTfncj4U81tE1Sng0zxxvP9iTmyQaRqwCcCrk5xpYYvW_hSw3TjRy3myclpJ-IsDG_yijUY1mH2dM3tFm4L918-hWCuTl_uNj-ebwzMz81_1KXpXfnuOd9WVSZoEicEEb11c4GbWxSErDa_IgD1EvS9QOq5GhEuU0C01I1YGyvyD6afh0oNUWYETT3qWzlfuAwPGWmnMiWuTPd9BoEJcAJICnfBaOwpmVRYOjSVaco09ZSl--mCFENC_nncHzc7Ntj6cS9JFy7GvuFSnnsVJzedRbu8dq4sVILrvxDiUA4WYEjWAsV2Df9n3WaZogBAb2vK04NpqiK23Iyba_5oNQnaHL9f772jM6dcXHfHIVJj61CaMEVoGjK7uT8hVORI8e7rfVA7AqJ34ENWX3LPT3dYGKrcl_Mp9-xIMvjG4PMjjfejI3ECpnvq8HJklAIN6-WEMb5Qhs6ad65unNuYwpd3ZIOjgezFl2IssvhRs0g6ra8ELfPE9nHXjzSlb1JTcEV4aRwcCYdqaYIuiu8GTceAUHZQ';

        await page.setExtraHTTPHeaders({
          Authorization: 'Bearer eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJzcGFwcHUzQGFzdS5lZHUiLCJzY29wZSI6WyJodHRwczpcL1wvaW50ZXJhY3RpdmUtZGVncmVlLXBsYW5uZXItbm9ucHJvZC5hcHBzLmFzdS5lZHVcL2F1dGh6OnNlbGYiXSwiaXNzIjoic2VydmljZWF1dGgiLCJhc3VzZXJ2aWNlYXV0aC5jbGllbnRfaWQiOiJpbnRlcmFjdGl2ZS1kZWdyZWUtcGxhbm5lci1wdWJsaWMtbm9ucHJvZCIsImV4cCI6MTY4MTY5MjYwNCwiaWF0IjoxNjgxNjkyMDA0fQ.Uti7bd1vBQuJa1Y9DXwBklofeja8owmHbvBJ1YJli_BXHAkYDa_4Iq97K8cSU0M1ICLCw_0G1AMc3YkzuSWwSPLu4YEDH8nbEpfy6HKHP00pveu1DRLv-2JqODCERkQBmi29y6Vxh0gI9WE1y7kPDT18D0S3U2qO_fJobxhT_2x_lKBTp2kGDNJSSvhj8Ft9aG7rK6aK9zWMp6g-vaC5DHLxeS-ObdyyNOLOxF1MulU_xYqW8HP-I5iGRHG3brd7it3C2Cw1W19kLR7CrQ0pvu8WEK7x0lWuT5qV0sN1HDSoRAYM0dmkxH5cXtBQy2BgyCvc2p9IwgYFF9KAmsiVMVy65VVwoNIyQfi2twBF_fpph8MUj2nsoTF7genuW93nSARTrxUUpXen1TYx1iNEVRWP8HK78HRGBuiTBEUsTc1vvLxe7Vcwk1i99HLtXoPpP_33eQWAzea4rl1a8d2YJLVm25JAh3j_HdDxaL59bcunb7t_ErYrCNYTIiQxZbNKXN6EmNtbhjb_kG9qoMQKWOYmK4Txj765rsGye86vKviD7J1jwRs9lTrE8CPoCMiCjSut-TVEXW2FDE1lPj_QnEMzRI_TNXeF-CwXka6kXDdKYO3zXpv-62ifP4SRrlniZjGwL8Q3fxaAdgNJtRFfKHNelR8MtUIFhVcmQfDAnx4',
        });
      

        await page.goto("https://interactive-degree-planner-qa.apps.asu.edu/plan-builder");

        await recorder.start('video1.mp4');
        await animate(page);
        await recorder.stop();

        //{waitUntil: "domcontentloaded"}
        //await page.waitForSelector('#root > main > section', { timeout: 10000 });
       
        //await setTimeout(() => {  console.log("World!"); }, 10000);





        await page.screenshot({ path: 'browserstack.png' });

        await page.pdf({ path: 'browserstack.pdf', format: 'A4' });
    });

    const animate = async (page) => {
        await setTimeout(() => {  console.log("World!"); }, 500);
        await page.evaluate(() => { window.scrollBy({ top: 500, left: 0, behavior: 'smooth' }); });
        await setTimeout(() => {  console.log("World!"); }, 500);
        await page.evaluate(() => { window.scrollBy({ top: 1000, left: 0, behavior: 'smooth' }); });
        await setTimeout(() => {  console.log("World!"); }, 1000);

    };


    
    // it('should be titled "Login"', async () => {
    //     // await page.waitForNavigation();
    //     // console.log('New Page URL:', page.url());
    //     await expect(page.title()).resolves.toMatch("");
    // });
});