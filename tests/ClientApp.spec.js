const {test, expect}=require ('@playwright/test');


        test('Browser context',async ({page})=>
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
    test.only('UI Controls',async ({page})=>
        {
            await page.goto("https://rahulshettyacademy.com/loginpagePractise");
            //css type fill 
            const userName = page.locator('#username');
            const signInBtn = page.locator('#signInBtn');
            const dropdown = page.locator('select.form-control');
            await dropdown.selectOption('consult');
            await page.locator(".radiotextsty").last().click();
            await page.locator("#okayBtn").click();
            console.log(await page.locator(".radiotextsty").last().isChecked());
            await expect(page.locator(".radiotextsty").last()).toBeChecked();
            await page.locator('#terms').click();
            await expect(page.locator('#terms')).toBeChecked();

            await page.locator('#terms').uncheck();
           expect(await page.locator('#terms').isChecked()).toBeFalsy(); 


           // await page.pause();
        }
    );