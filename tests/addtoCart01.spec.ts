import { test, expect, Page } from '@playwright/test';

test('Add product to cart', async ({ page }) => {
  await login(page);
  await addItemToCart(page);
  await verifyCart(page);
});

async function login(page: Page) {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
}

async function addItemToCart(page: Page) {
  await page.click('button[data-test="add-to-cart-sauce-labs-backpack"]');
  await page.click('.shopping_cart_link');
}

async function verifyCart(page: Page) {
  const item = page.locator('.inventory_item_name');
  await expect(item).toHaveText('Sauce Labs Backpack');
}
