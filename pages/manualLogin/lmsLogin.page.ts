import { expect, Page } from '@playwright/test';
import { waitForPreloaderToHide } from '../../zeus-playwright/quantum-common/utils/waitForPreloader';
import { ILoginDetails } from '../../fixtures/interfaces/login.interface';
import { selectValueFromDropDown } from '../../zeus-playwright/quantum-common/utils/selectDropdownValue';
import { verifyValueNotPresentInDropDown } from '../../zeus-playwright/quantum-common/utils/commonFunction';
import urls from '../../fixtures/constants/urlConstants';
import { CommonConstants } from '../../zeus-playwright/quantum-common/utils/commonConstants';

export class LMSLoginPage {
  private readonly page: Page;

  // Constants for Locators
  private readonly LOGIN_FORM = "[id='login']";
  private readonly EMAIL_FIELD = "[name='username']";
  private readonly PASSWORD_FIELD = "[name='password']";
  private readonly LOGIN_BUTTON = "[id='submitBtn']";
  private readonly FAILED_LOGIN_ERROR_TEXT = '#alert-dialog-content';
  private readonly CLOSE_FAILED_LOGIN_DIALOG_BOX = "[id='ok-btn']";
  private readonly LOGIN_PAGE_LOADER = '.preloader';
  private readonly LOGIN_PAGE_USERNAME_ERROR = '(//mat-error)[1]';
  private readonly LOGIN_PAGE_PASSWORD_ERROR = '(//mat-error)[2]';
  private readonly LOGIN_PAGE_CHECKBOX = '#rememberMe';
  private readonly LOGIN_WITH_QUANTUM = '//button[@aria-label="Log in with Quantum"]';
  private readonly STATE_DROPDOWN = "[name='state']";
  private readonly DISTRICT_DROPDOWN = "[name='district']";
  private readonly SAML_LOGIN_BUTTON = 'button.saml-sign-in';
  private readonly SAML_LOGIN_BUTTON_ON_LOGIN_WITH_SAML_PAGE = 'button.saml-button';
  private readonly STATE_IN_SAML_LOGIN_DROPDOWN = "mat-select[name='state']";
  private readonly DISTRICT_IN_SAML_LOGIN_DROPDOWN = "mat-select[name='district']";
  private readonly SCHOOL_NAME_IN_SELECT_SCHOOL_POPUP = (schoolName: string) => `//span[normalize-space(text()) = '${schoolName}']`;
  private readonly NO_DISTRICT_FOUND_IN_DROPDOWN ="//mat-label[text()='No Districts found']";
  private readonly PROFILE_BUTTON = ".profile-btn";
  private readonly PROFILE_LOGOUT_BUTTON = ".profile-Logout";

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * @description Locates the login form container
   */
  loginForm() {
    return this.page.locator(this.LOGIN_FORM);
  }

  /**
   * @description Locates the email/username input field
   */
  emailField() {
    return this.page.locator(this.EMAIL_FIELD);
  }

  /**
   * @description Locates the password input field
   */
  passwordField() {
    return this.page.locator(this.PASSWORD_FIELD);
  }

  /**
   * @description Locates the login button
   */
  loginButton() {
    return this.page.locator(this.LOGIN_BUTTON);
  }

  /**
   * @description Locates the error text displayed on failed login
   */
  failedLoginErrorText() {
    return this.page.locator(this.FAILED_LOGIN_ERROR_TEXT);
  }

  /**
   * @description Locates the button to close the failed login dialog box
   */
  closeFailedLoginDialogBox() {
    return this.page.locator(this.CLOSE_FAILED_LOGIN_DIALOG_BOX);
  }

  /**
   * @description Locator for the district placeholder text on Login with Saml page
   */
  loginWithSamlDistrictDropdown() {
    return this.page.locator(this.DISTRICT_IN_SAML_LOGIN_DROPDOWN);
  }

  /**
   * @description Locator for the school name on select school popup
   */
  schoolNameInSelectSchoolPopup(schoolName: string) {
    return this.page.locator(this.SCHOOL_NAME_IN_SELECT_SCHOOL_POPUP(schoolName));
  }

  /**
   * @description Locator for the no district found message in place of dropdown
   */
  noDistrictsFoundInDropdown() {
    return this.page.locator(this.NO_DISTRICT_FOUND_IN_DROPDOWN);
  }

  /**
   * @description Locator for the state dropdown on Login with Saml page
   */
  loginWithSamlStateDropdown() {
    return this.page.locator(this.STATE_IN_SAML_LOGIN_DROPDOWN);
  }

  /**
   * @description Locates the page loader on the login page
   */
  loginPageLoader() {
    return this.page.locator(this.LOGIN_PAGE_LOADER);
  }

  /**
   * @description Locates the username error message on the login page
   */
  loginPageUsernameError() {
    return this.page.locator(this.LOGIN_PAGE_USERNAME_ERROR);
  }

  /**
   * @description Locates the password error message on the login page
   */
  loginPagePasswordError() {
    return this.page.locator(this.LOGIN_PAGE_PASSWORD_ERROR);
  }

  /**
   * @description Locates the "Remember Me" checkbox on the login page
   */
  loginPageCheckbox() {
    return this.page.locator(this.LOGIN_PAGE_CHECKBOX);
  }

  /**
   * @description Locates the "Log in with Quantum" button
   */
  loginWithQuantum() {
    return this.page.locator(this.LOGIN_WITH_QUANTUM);
  }

  /**
   * @description Locates the state dropdown for selecting a state
   */
  stateDropdown() {
    return this.page.locator(this.STATE_DROPDOWN);
  }

  /**
   * @description Locates the district dropdown for selecting a district
   */
  districtDropdown() {
    return this.page.locator(this.DISTRICT_DROPDOWN);
  }

  /**
   * @description Locator for the login with saml button on LMS
   */
  loginWithSamlButton() {
    return this.page.locator(this.SAML_LOGIN_BUTTON);
  }

  /**
   * @description Locator for the login with saml button on SAML login page
   */
  loginWithSamlButtonOnSamlLoginPage() {
    return this.page.locator(this.SAML_LOGIN_BUTTON_ON_LOGIN_WITH_SAML_PAGE);
  }

  /**
   * @description Locator for the profile button on navbar
   */
  profileButton() {
    return this.page.locator(this.PROFILE_BUTTON);
  }

  /**
   * @description Locator for the logout button in profile dropdown
   */
  profileLogoutButton() {
    return this.page.locator(this.PROFILE_LOGOUT_BUTTON);
  }

  /**
   * @description Logs in a user using provided login details
   * @param loginData The login details containing username and password
   */
  async loginUser(loginData: ILoginDetails) {
    await this.fillUsernameAndPassword(loginData);
    await this.loginButton().click();
  }

  /**
   * @description Checks if the login form and loader are visible
   */
  async checkIfLoginFormIsAvailable() {
    await expect(this.loginForm()).toBeVisible();
    await expect(this.loginPageLoader()).not.toBeVisible();
  }

  /**
   * @description Fills the username and password fields
   * @param loginData The login details containing username and password
   */
  async fillUsernameAndPassword(loginData: ILoginDetails) {
    await this.emailField().click();
    await this.emailField().fill(loginData.username);
    await this.passwordField().click();
    await this.passwordField().fill(loginData.password);
  }

  /**
   * @description Fills the username and password fields
   * @param userName The username to enter on login page
   * @param password The password to enter on login page
   */
  async fillGivenUsernameAndPassword(role: string, password: string, testData: any, dataSection: keyof typeof testData) {
    let userName: string;
    switch (role) {
      case 'DTA':
        userName = testData[dataSection].dtaName;
        break;
      case 'SA':
        userName = testData[dataSection].saName;
        break;
      case 'Teacher':
        userName = testData[dataSection].teacherName;
        break;
      case 'Student':
        userName = testData[dataSection].studentName;
        break;
      default:
        throw new Error(`Unsupported role: ${role}`);
    }
    await this.emailField().fill(userName);
    await this.passwordField().fill(password);
  }

  /**
   * @description Verify the given school is not present on select school popup
   */
  async verifyAbsenceOfSchoolInPopup(schoolName: string) {
    await expect(this.schoolNameInSelectSchoolPopup(schoolName)).toBeHidden();
  }

  /**
   * @description the user gets logged out from the app
   */
  async logout() {
    await this.page.waitForTimeout(CommonConstants.SLEEPTIME);
    await this.profileButton().click();
    await this.profileLogoutButton().click();
    await waitForPreloaderToHide(this.page);
    await this.page.waitForTimeout(CommonConstants.SLEEPTIME);
  }

  /**
   * @description Fills the state and district dropdowns with the specified values
   * @param stateName The state to select from the state dropdown
   * @param districtName The district to select from the district dropdown
   */
  async fillRequiredDetails(stateName: string, districtName: string) {
    await this.selectStateFromStateDropdown(stateName);
    await selectValueFromDropDown(this.page, this.districtDropdown(), districtName);
  }

  /**
   * @description Displays an error message if the login fails
   * @param message The expected error message on failed login
   */
  async displayLoginError(message: string) {
    await expect(this.failedLoginErrorText()).toContainText(message);
    await this.closeFailedLoginDialogBox().click();
  }

  /**
   * @description Clicks the login button
   */
  async clickLoginButton() {
    await this.loginButton().click();
  }

  /**
   * @description Verifies the error message displayed for invalid username
   * @param userNameError The expected error message for username
   */
  async verifyUsernameError(userNameError: string) {
    await expect(this.loginPageUsernameError()).toContainText(userNameError);
  }

  /**
   * @description Verifies the error message displayed for invalid password
   * @param passwordError The expected error message for password
   */
  async verifyPasswordError(passwordError: string) {
    await this.loginPageCheckbox().check();
    await expect(this.loginPagePasswordError()).toContainText(passwordError);
  }

  /**
   * @description Navigates to the login page by clicking the "Log in with Quantum" button
   */
  async navigateToTheLoginPage() {
    await this.loginWithQuantum().click();
    await waitForPreloaderToHide(this.page);
    await expect(this.loginForm()).toBeVisible();
    await expect(this.loginPageLoader()).not.toBeVisible();
  }

  /**
   * @description Navigates to the saml login page by clicking the "Log in with SAML" button
   */
  async navigateToTheSAMLLoginPage() {
    await this.page.goto(urls.LMS_HOST);
    await this.loginWithSamlButton().click();
    await waitForPreloaderToHide(this.page);
    await expect(this.loginForm()).toBeVisible();
    await expect(this.loginPageLoader()).not.toBeVisible();
  }

  /**
   * @description click on the login with saml button on saml login page
   */
  async clickOnLoginWithSamlButton() {
    await this.loginWithSamlButtonOnSamlLoginPage().click();
    await waitForPreloaderToHide(this.page);
  }

  /**
   * @description Selects a state from the state dropdown
   * @param stateName The name of the state to select
   */
  async selectStateFromStateDropdown(stateName: string) {
    await selectValueFromDropDown(this.page, this.stateDropdown(), stateName);
    await waitForPreloaderToHide(this.page);
  }

  /**
   * @description Verifies that a deleted district is not present in the district dropdown
   * @param districtName The district name to verify is not in the dropdown
   */
  async verifyDistrictNotPresentInDropdown(districtName: string) {
    await verifyValueNotPresentInDropDown(this.page, this.districtDropdown(), districtName);
  }

  /**
   * @description Selects the state from state dropdown on Saml login page
   */
  async selectStateOnSamlLoginPage(stateName: string) {
    await selectValueFromDropDown(this.page, this.loginWithSamlStateDropdown(), stateName);
  }

  /**
   * @description Verify the soft deleted Saml district is not present in district dropdown on Saml login page
   * @param noDistrictMessage message displayed when no district is present in dropdown
   */
  async verifyDistrictNotPresentInSamlLoginDropdown(noDistrictMessage: string) {
    await expect(this.noDistrictsFoundInDropdown()).toContainText(noDistrictMessage);
  }

  /**
   * @description to select the district from dropdown on saml login page
   * @param districtName name of the district to select
   */
  async selectDistrictFromDropdownOnSamlLogin(districtName: string) {
    await selectValueFromDropDown(this.page, this.loginWithSamlDistrictDropdown(), districtName);
    await waitForPreloaderToHide(this.page);
  }
}
