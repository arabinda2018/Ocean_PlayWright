import { defineConfig, devices } from '@playwright/test';


/**
 * See https://playwright.dev/docs/test-configuration.
 */
const config  =({
  testDir: './tests',
  timeout: 30 * 1000,
  expect: {
    timeout: 48 *1000,
  },
  use:{
    browserName: 'chromium',
    headless: false
  },
  reporter : 'html',
});
module.exports = config;
  
  

  

 