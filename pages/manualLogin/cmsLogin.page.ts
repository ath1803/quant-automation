import { expect, type Page } from '@playwright/test';
import { ILoginDetails } from '../../fixtures/interfaces/login.interface';

export class CMSLoginPage {
    private readonly page: Page;

    // Constants for Locators
    private readonly LOGIN_FORM_LOCATOR = "#login";
    private readonly EMAIL_INPUT_LOCATOR = "[name='username']";
    private readonly PASSWORD_INPUT_LOCATOR = "[name='password']";
    private readonly LOGIN_BUTTON_LOCATOR = "#submitBtn";
    private readonly FAILED_LOGIN_ERROR_TEXT_LOCATOR = "[automation-id='dialog-box-title-popup-content']";
    private readonly CLOSE_FAILED_LOGIN_DIALOG_BOX_LOCATOR = "[automation-id='dialog-box-ok-btn']";
    private readonly LOGIN_PAGE_LOADER_LOCATOR = "[automation-id='dialog-box-ok-btn']";
    private readonly ASSIGNMENT_NAME_TEXTBOX_LOCATOR = "//input[@id='title']";

    constructor(page: Page) {
        this.page = page;
    }

    /**
     * @description Locator for login form
     */
    loginForm() {
        return this.page.locator(this.LOGIN_FORM_LOCATOR);
    }

    /**
     * @description Locator for email input field
     */
    email() {
        return this.page.locator(this.EMAIL_INPUT_LOCATOR);
    }

    /**
     * @description Locator for password input field
     */
    password() {
        return this.page.locator(this.PASSWORD_INPUT_LOCATOR);
    }

    /**
     * @description Locator for login button
     */
    loginButton() {
        return this.page.locator(this.LOGIN_BUTTON_LOCATOR);
    }

    /**
     * @description Locator for failed login error message
     */
    failedLoginErrorText() {
        return this.page.locator(this.FAILED_LOGIN_ERROR_TEXT_LOCATOR);
    }

    /**
     * @description Locator for closing the failed login dialog box
     */
    closeFailedLoginDialogBox() {
        return this.page.locator(this.CLOSE_FAILED_LOGIN_DIALOG_BOX_LOCATOR);
    }

    /**
     * @description Locator for login page loader
     */
    loginPageLoader() {
        return this.page.locator(this.LOGIN_PAGE_LOADER_LOCATOR);
    }

    /**
     * @description Locator for assignment name text box
     */
    assignmentNameTextBox() {
        return this.page.locator(this.ASSIGNMENT_NAME_TEXTBOX_LOCATOR);
    }

    /**
     * @description Log in user with provided credentials
     * @param loginData Object containing username and password
     */
    async loginUser(loginData: ILoginDetails) {
        await this.fillUsernameAndPassword(loginData);
        await this.clickLoginButton();
    }

    /**
     * @description Check if login form is visible and loader is not present
     */
    async checkIfLoginFormIsAvailable() {
        await expect(this.loginForm()).toBeVisible();
        await expect(this.loginPageLoader()).not.toBeVisible();
    }

    /**
     * @description Fill in username and password
     * @param loginData Object containing username and password
     */
    async fillUsernameAndPassword(loginData: ILoginDetails) {
        await this.email().click();
        await this.email().fill(loginData.username);
        await this.password().click();
        await this.password().fill(loginData.password);
    }

    /**
     * @description Display login error message
     * @param message Expected error message text
     */
    async displayLoginError(message: string) {
        await expect(this.failedLoginErrorText()).toContainText(message);
        await this.closeFailedLoginDialogBox().click();
    }

    /**
     * @description Click on the login button
     */
    async clickLoginButton() {
        await this.loginButton().click();
    }
}
