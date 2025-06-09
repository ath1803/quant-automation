import { expect, Locator, Page } from "@playwright/test";
import { waitForPreloaderToHide } from "./waitForPreloader";
import { CommonConstants } from "./commonConstants";

export async function selectValueFromDropDown(page: Page, elementSelector: Locator, option: string) {
    await elementSelector.click();
    await page.waitForSelector('mat-option span:not(:empty)', { state: 'visible' });
    const optionElements = await page.$$('mat-option span:not(:empty)');
    for (const ele of optionElements) {
        const text = (await ele.innerText()).trim();
        if (!text) {
            continue;
        }
        if (option === text) {
            await ele.click();
            return;
        }
    }
    await page.waitForTimeout(CommonConstants.ANIMATION_SLEEP);
    await page.keyboard.press('Escape');
    throw new Error(`Option "${option}" not found in the dropdown.`);
}

export async function selectValuesFromMultiSelectDropdown(page: Page, dropdownSelector: Locator, optionsToSelect: string) {
    await waitForPreloaderToHide(page);
    await page.waitForTimeout((CommonConstants.ANIMATION_SLEEP));
    let optionsToBeSelected: string[] = optionsToSelect.split(",");
    await dropdownSelector.click();  
    await page.locator("//button[contains(text(),'CLEAR ALL')]").click();
    for(let option=0;option<optionsToBeSelected.length;option++){
        await page.locator(`//mat-checkbox[@automation-id='${optionsToBeSelected[option]}-custom-dropdown-option']`).click();
    }   
    await dropdownSelector.focus();
    await page.waitForTimeout(CommonConstants.ANIMATION_SLEEP);
    await page.keyboard.press('Escape');
    await waitForPreloaderToHide(page);
}
