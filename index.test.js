const puppeteer = require('puppeteer');
const { PuppeteerScreenRecorder } = require('puppeteer-screen-recorder');
describe("Google", () => {
    beforeAll(async () => {

        const browser = await puppeteer.connect({
            browserWSEndpoint: 'ws://localhost:9222/devtools/page/F329C4C1DE64F3D12B69C0D54508ADF8'
          });

        // const browser = await puppeteer.launch();
        const page = await browser.newPage();

        const recorder = new PuppeteerScreenRecorder(page);

        // const token = 'eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJzcGFwcHUzQGFzdS5lZHUiLCJzY29wZSI6WyJodHRwczpcL1wvaW50ZXJhY3RpdmUtZGVncmVlLXBsYW5uZXItbm9ucHJvZC5hcHBzLmFzdS5lZHVcL2F1dGh6OnNlbGYiXSwiaXNzIjoic2VydmljZWF1dGgiLCJhc3VzZXJ2aWNlYXV0aC5jbGllbnRfaWQiOiJpbnRlcmFjdGl2ZS1kZWdyZWUtcGxhbm5lci1wdWJsaWMtbm9ucHJvZCIsImV4cCI6MTY4MTY5MDgwMiwiaWF0IjoxNjgxNjkwMjAyfQ.jb3zd8iDqXWxkikS2kDvp0PH8Knibwez-fGLVZZFp7WNlTPLcs7YapgqSs67TSNjvHbX7NdoVeJqsDqXtIIFqxV5bxSX9ocnmkJtxR1eSGjq0ycm04UJC4__SFCkyAh5G9h-1ZQs36RGBL7bZTfncj4U81tE1Sng0zxxvP9iTmyQaRqwCcCrk5xpYYvW_hSw3TjRy3myclpJ-IsDG_yijUY1mH2dM3tFm4L918-hWCuTl_uNj-ebwzMz81_1KXpXfnuOd9WVSZoEicEEb11c4GbWxSErDa_IgD1EvS9QOq5GhEuU0C01I1YGyvyD6afh0oNUWYETT3qWzlfuAwPGWmnMiWuTPd9BoEJcAJICnfBaOwpmVRYOjSVaco09ZSl--mCFENC_nncHzc7Ntj6cS9JFy7GvuFSnnsVJzedRbu8dq4sVILrvxDiUA4WYEjWAsV2Df9n3WaZogBAb2vK04NpqiK23Iyba_5oNQnaHL9f772jM6dcXHfHIVJj61CaMEVoGjK7uT8hVORI8e7rfVA7AqJ34ENWX3LPT3dYGKrcl_Mp9-xIMvjG4PMjjfejI3ECpnvq8HJklAIN6-WEMb5Qhs6ad65unNuYwpd3ZIOjgezFl2IssvhRs0g6ra8ELfPE9nHXjzSlb1JTcEV4aRwcCYdqaYIuiu8GTceAUHZQ';

        // await page.setExtraHTTPHeaders({
        //   Authorization: 'Bearer eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJzcGFwcHUzQGFzdS5lZHUiLCJzY29wZSI6WyJodHRwczpcL1wvaW50ZXJhY3RpdmUtZGVncmVlLXBsYW5uZXItbm9ucHJvZC5hcHBzLmFzdS5lZHVcL2F1dGh6OnNlbGYiXSwiaXNzIjoic2VydmljZWF1dGgiLCJhc3VzZXJ2aWNlYXV0aC5jbGllbnRfaWQiOiJpbnRlcmFjdGl2ZS1kZWdyZWUtcGxhbm5lci1wdWJsaWMtbm9ucHJvZCIsImV4cCI6MTY4MTk4MzEyOSwiaWF0IjoxNjgxOTgyNTI5fQ.SaAimZX3lfvOwpppUnnr-1PNmGdC8znWJkoP6t8ZS3q65j-Npz5qLix0iWNjpSpOYQnAKWkaX1UTn6B9l_mlsJpkEevoFvRWMPBLiWV-R2kcQH1gLNbL3SKFwo841vX5JOlPzxmhmu6mkMlPRcCsZFDI_aBiWtWRSL2FmrkerSKbA1juJVM2xhnOUrDfJbJ_GKAd9hpG03LO-J6oX2BVWT63NxLmi6ipT-ZIKY39ShAc2hsGj4QxLmfXAfp2eXgg1QAPoIUfYKDQ6LUUuxNJIC5P107UI_Y9983OeOBvDMpVnrgA5-nE9Ariair0iyH2kD3jbjyxe9U7i3TXitz3DoL9dVrEqEHDKstgT2uRod7XAVulgjnze96vZ9AD1EDw93WhIXeG0xbo1cGdOhaUwm0XORrWvTkk1xLcoAzs2CSoBB8HyUzZKpXOQXh8_q5Ym1F8R8wKQ70cXlmin21h6IAIZJRNxAvROadkiPfnVHFjkWJoc9YLKMLKevRQ9WbwM7YX18uSv--gCJX9aaGavn0R6ipAVdm9750IKiGNXKUyX2IJIFc5lRxjy-7WpaAQDiZIMUdlHlyC0EzUHQ0g-6npbsr4r2CnJB-wAgJdtXN7FbO5NPXhHPCkKl-caj0VNO54g8SWPOGzYHbTELW6Qqcn_aR-WBh7xl238-KoIOA',
        // });
      
        await page.goto("https://google.com");

        //await page.goto("https://interactive-degree-planner-qa.apps.asu.edu/plan-builder");

        await recorder.start('video111.mp4');
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


    
    it('should be titled "Login"', async () => {
        // await page.waitForNavigation();
        // console.log('New Page URL:', page.url());
        await expect(page.title()).resolves.toMatch("");
    });
});