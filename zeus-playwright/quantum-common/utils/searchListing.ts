import { Page, Locator } from '@playwright/test';
import { waitForPreloaderToHide } from './waitForPreloader';

export async function performSearch(page: Page, searchString: string) {
    const searchBox: Locator = page.locator(".search-box input");
    const searchButton: Locator = page.locator(".search-box button");

    await searchBox.waitFor({ state: 'visible', timeout: 45000 });
    await searchBox.fill(''); 
    await searchBox.fill(searchString); 
    await page.evaluate(() => window.scrollTo(0, 0)); 
    await searchButton.click();
    await waitForPreloaderToHide(page);
}

