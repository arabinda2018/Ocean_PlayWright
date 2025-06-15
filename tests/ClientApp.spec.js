const {test, expect}=require ('@playwright/test');


        test.only('Browser context',async ({page})=>
            {
                await page.goto('https://rahulshettyacademy.com/client');
                await page .locator('#userEmail').fill("arabindamohanty41@gmail.com ");
                await page.locator('#userPassword').fill("Autmoation@06");
                await page.locator("[value='Login']").click();
              //  await page.waitForLoadState('networkidle');
              await page.locator(".card-body b").first().waitFor();
                const titles=await page.locator('.card-body b').allTextContents();
                console.log(titles);

                       });
    
        