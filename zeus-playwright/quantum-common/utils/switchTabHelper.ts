import {BrowserContext, Locator, Page } from "@playwright/test";

export async function openAndSwitchToNewTab(context: BrowserContext, elementSelector: Locator): Promise<Page> {
    const [newPage] = await Promise.all([
        context.waitForEvent('page'), // Wait for new tab
        await elementSelector.click() // Click action
    ]);
    await newPage.waitForLoadState(); // Ensure the new tab loads
    return newPage; // Return the new page instance
}