const puppeteer = require('puppeteer');

(async () => {

const browser = await puppeteer.launch();

const page = await browser.newPage();
const navigationPromise = page.waitForNavigation(); 


const response = await page.goto('https://weblogin.asu.edu/cas/login?service=https%3A%2F%2Fweblogin.asu.edu%2Fcgi-bin%2Fcas-login%3Fcallapp%3Dhttps%253A%252F%252Fweblogin.asu.edu%252Fserviceauth%252Foauth2%252Fnative%252Fallow%253Finit%253Dfalse%2526response_type%253Dcode%2526client_id%253Dinteractive-degree-planner-public-nonprod%2526redirect_uri%253Dhttps%25253A%25252F%25252Finteractive-degree-planner-qa.apps.asu.edu%2526state%253DNkhzNldTT1VVb2laZWh5RDJXV3BFZnJSelJuY05ET1hsOTRmZS5VdnNseA%25253D%25253D%2526code_challenge_method%253DS256%2526code_challenge%253DgNkXhEMwDq8N28S_VyH26xSZN075K0y8NKeEWOo67vY%2526scope%253Dhttps%25253A%25252F%25252Finteractive-degree-planner-nonprod.apps.asu.edu%25252Fauthz%25253Aself%252520https%25253A%25252F%25252Fapi.myasuplat-dpl.asu.edu%25252Fscopes%25252Fperson%25252Fread%25253Aself%252520https%25253A%25252F%25252Fapi.myasuplat-dpl.asu.edu%25252Fscopes%25252Fprincipal%25252Fread%25253Aself%252520https%25253A%25252F%25252Fapi.myasuplat-dpl.asu.edu%25252Fscopes%25252Fphone%25252Fread%25253Aself%252520https%25253A%25252F%25252Fapi.myasuplat-dpl.asu.edu%25252Fscopes%25252Facad-plan%25252Fread%25253Aself');


await page.type('#username', 'spappu3');
await page.type('#password', 'RaJsan136247');

const res  = await page.click('#login > section.form-group.form-actions > div.form-action > input');

console.log("hi1")
await navigationPromise;
console.log("hi2")
console.log('New Page URL:', page.url());


await page.screenshot({ path: 'browserstack.png' });

await page.pdf({ path: 'browserstack.pdf', format: 'A4' });




await browser.close();

})();