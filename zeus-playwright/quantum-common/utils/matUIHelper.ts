import { Locator, expect } from "@playwright/test";

export class MatUIHelper {
    // Method to check Mat-Checkbox
    static async clickMatCheckbox(checkbox: Locator){
        if(checkbox != null){
            let checkInput: Locator = checkbox.getByRole('checkbox');
            await expect(checkInput).toBeVisible();
            await checkInput.scrollIntoViewIfNeeded();
            await checkInput.click({force: true});
        }
    }

    static async selectOptionMatSelect(dropdownLocator: Locator, dropdownOptionsPanelLocator: Locator, option: string) {
        await expect(dropdownLocator).toBeVisible();
        dropdownLocator.click();
        await dropdownOptionsPanelLocator.getByRole('option', { name: option, exact: true }).click();
        // we need to even check that the dropdown is closed
        await expect(dropdownOptionsPanelLocator).not.toBeVisible();
    }
}