import { test } from '@playwright/test';

test('take screenshot', async ({ page }) => {
  await page.screenshot({ path: 'screenshot.png' });
});