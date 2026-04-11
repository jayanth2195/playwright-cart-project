import { test, expect } from '@playwright/test';

test('Add product to cart', async ({ page }) => {
  // Step 1: Open website
  await page.goto('https://www.saucedemo.com/');

  // Step 2: Login
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // Step 3: Add product to cart
  await page.click('button[data-test="add-to-cart-sauce-labs-backpack"]');

  // Step 4: Go to cart
  await page.click('.shopping_cart_link');

  // Step 5: Verify product is added
  const item = await page.locator('.inventory_item_name');
  await expect(item).toHaveText('Sauce Labs Backpack');
});