import { expect, type Locator, type Page } from '@playwright/test';

export class Profile {
readonly page: Page;

// Constants for Locators
private readonly PROFILE_ICON = "#global-nav-toolbar-profile-btn";
private readonly PROFILE_OPTION = "#global-nav\\.pa-profile-self\\.title-0-btn";
private readonly USERNAME_FIELD = '//*[@id="profile-title-wrapper"]/div/div[2]/dl/dd[3]/span[2]';


;

constructor(page: Page) {
    this.page = page;
}

/**
 * @description Locator for Profile icon
 */
profileIcon() {
    return this.page.locator(this.PROFILE_ICON);
}

/**
 * @description Click on Profile icon
 */
async clickProfileIcon() {
    await this.profileIcon().click();
}

/**
 * @description Locator for Profile option
 */
profileOption() {
    return this.page.locator(this.PROFILE_OPTION);
}

/**
 * @description Click on Profile Option
 */
async clickProfileOption() {
    await this.profileOption().click();
}

/**


* @description Get the username from the profile page
  \*/
  async getUsername(): Promise<string> {
  const username = await this.page.locator(this.USERNAME_FIELD).textContent();
  if (username === null) {
  throw new Error('Username field was not found or has no text content.');
  }
  return username.trim(); // Optional: trim extra spaces
  }

}


