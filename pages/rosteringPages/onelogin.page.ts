import { expect, Page } from '@playwright/test';

export class OneloginPage {
  private readonly page: Page;

  // Constants for Locators
  private readonly USERNAME_FIELD = '#username';
  private readonly PASSWORD_FIELD = '#password';
  private readonly CONTINUE_BUTTON = "button[type='submit']";
  private readonly PROGRAM_PAGE = '.course-family-banner .family-name';

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * @description Locator for the username input field
   */
  oneloginUserNameInputField() {
    return this.page.locator(this.USERNAME_FIELD);
  }

  /**
   * @description Locator for the password input field
   */
  oneloginPasswordInputField() {
    return this.page.locator(this.PASSWORD_FIELD);
  }

  /**
   * @description Locator for the continue button
   */
  continueButton() {
    return this.page.locator(this.CONTINUE_BUTTON);
  }

  /**
   * @description Locator for the first program on program page
   */
  firstProgramOnProgramPage() {
    return this.page.locator(this.PROGRAM_PAGE);
  }

  /**
   * @description Enter the username on onelogin page
   * @param userName saml username to enter in input field
   */
  async enterUsernameAndClickOnContinueButton(userName: string) {
    await expect(this.continueButton()).toBeVisible;
    await this.oneloginUserNameInputField().fill(userName);
    await this.continueButton().click();
  }

  /**
   * @description Enter the password on onelogin page
   * @param password saml password to enter in input field
   */
  async enterPasswordAndClickOnContinueButton(password: string) {
    await expect(this.oneloginPasswordInputField()).toBeVisible;
    await this.oneloginPasswordInputField().fill(password);
    await this.continueButton().click();
    await expect(this.firstProgramOnProgramPage()).toBeVisible;
  }
}
