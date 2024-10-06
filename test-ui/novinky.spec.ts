import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
    await page.goto('https://www.novinky.cz/');
    await expect(page).toHaveTitle(/Novinky.cz/);
});

test('has atleast one article', async ({ page }) => {
    await page.goto('https://www.novinky.cz/');
    await expect(page.locator('[data-e2e="content-item"]').first()).toBeVisible();
});

test('has krimi section', async ({ page }) => {
    await page.goto('https://www.novinky.cz/');
    await expect(page.getByRole('link', { name: 'Krimi »' })).toBeVisible();
});

test('has accept button to give consent', async ({ page }) => {
    await page.goto('https://www.novinky.cz/');
    await page.getByLabel('záhlaví').getByRole('link', { name: 'Domácí', exact: true }).click()
    await page.waitForURL('**/nastaveni-souhlasu?service**');
    var button = page.getByTestId('cw-button-non-targeted-ad');
    expect(button).toBeDefined();
});


