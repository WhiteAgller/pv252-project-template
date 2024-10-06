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

test('first article has image', async ({ page }) => {
    await page.goto('https://www.novinky.cz/');
    var article = page.locator('[data-e2e="content-item"]').first();
    var img = article.locator('.c_s');
    await expect(img).toBeVisible();
    await expect(img).toHaveAttribute('src');
});
