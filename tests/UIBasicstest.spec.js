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

    test('Browser context Playwright test details',async ({browser})=>
        {
        //chrome  -plugins/cookeies
         const context =await browser.newContext();
         const page =await context.newPage();
         await page.goto('https://rahulshettyacademy.com/loginpagePractise');
         //css type fill 
         await page.locator('#username').fill('rahulshettyacademy');
         await page .locator('#password').fill('learning');
         await page.locator('#signInBtn').click();
        // console.log(await page.locator("[style*='block']").textContent());
       // await expect(page.locator("[style*='block']")).toContainText('Incorrect');
        });
        test.only('Browser context',async ({browser})=>
            {
            const context =await browser.newContext();
            const page =await context.newPage();
            const userName=page.locator('#username');
            const signInBtn=page.locator('#signInBtn');
            const cardTitles=page.locator(".card-body a")
             await page.goto('https://rahulshettyacademy.com/loginpagePractise');
             //css type fill 
             await userName.fill('rahulshetty');
             await page .locator('#password').fill('learning');
             await signInBtn.click();
             console.log(await page.locator("[style*='block']").textContent());
             await expect(page.locator("[style*='block']")).toContainText('Incorrect');

             await userName.fill("");
                await userName.fill('rahulshettyacademy');
                await signInBtn.click();
              // console.log(await cardTitles.first().textContent());
              // console.log(await cardTitles.nth(1).textContent());
               const allTitles=await cardTitles.allTextContents();
               console.log(allTitles);
              //  console.log(await page.locator(".card-body a").first().textContent());
               // console.log(await page.locator(".card-body a").nth(0).textContent());
                       });
    
        