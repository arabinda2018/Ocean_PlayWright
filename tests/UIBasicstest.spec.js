const {test, expect}=require ('@playwright/test');


// test ('First Playwright test'function()
// {
//     //playwright code.


// }
// );

// test ('First Playwright test',async function()
// {
//     //playwright code.


// }
// );

//test ('First Playwright test',async ()=>
//{
    //playwright code.
    //step1 : open browser
    //step2 : enter u/p 2 seconds
    //step3 : click on login button
//}
//);


test ('Browser context Playwright test ',async ({browser})=>
{
//chrome  -plugins/cookeies
 const context =await browser.newContext();
 const page =await context.newPage();
 await page.goto('https://rahulshettyacademy.com/loginpagePractise');
});

//test.only ('Page Playwright test',async ({page})=>
    test('Page Playwright test',async ({page})=>
    {
     await page.goto('https://www.google.com');
     //get title  and then put assertion
     console.log(await page.title());
     await expect(page).toHaveTitle('Google');     
    });

    test.only ('Browser context Playwright test details',async ({browser})=>
        {
        //chrome  -plugins/cookeies
         const context =await browser.newContext();
         const page =await context.newPage();
         await page.goto('https://rahulshettyacademy.com/loginpagePractise');
         //css type fill 
         await page.locator('#username').fill('rahulshettyacademy');
         await page .locator('#password').fill('learning');
         await page.locator('#signInBtn').click();

        });