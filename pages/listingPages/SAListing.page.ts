import { expect, Page } from '@playwright/test';
import { waitForPreloaderToHide } from '../../zeus-playwright/quantum-common/utils/waitForPreloader';
import {
  selectOptionFromFilterDropdown,
  verifyValueNotPresentInDropDown,
} from '../../zeus-playwright/quantum-common/utils/commonFunction';
import { performSearch } from '../../zeus-playwright/quantum-common/utils/searchListing';
import { selectValueFromDropDown } from '../../zeus-playwright/quantum-common/utils/selectDropdownValue';
import { randomBytes } from 'crypto';

export class SAListingPage {
  private readonly page: Page;

  // Constants for Locators
  private readonly NO_SA_FOUND = ' div.no-sa-block>P';
  private readonly SELECT_STATE_DROPDOWN = "mat-select[name='state']";
  private readonly CREATE_NEW_SA_BUTTON = '#create-new-sa-button';
  private readonly SELECT_DISTRICT_DROPDOWN = "mat-select[name='district']";
  private readonly ADD_USER_CANCEL_BUTTON = '#add-user-cacel-btn';
  private readonly ADD_USER_EMAIL_ID_ERROR_MESSAGE = 'span.error-message';
  private readonly SELECT_SCHOOL_BUTTON = '#add-user-select-school-btn';
  private readonly SA_FIRSTNAME_FIELD = "input[name='firstName']";
  private readonly SA_EMAIL_FIELD = "input[name='emailId']";
  private readonly SA_USERNAME_FIELD = "input[name='userName']";
  private readonly ADD_USER_BUTTON = '#add-user-save-button';
  private readonly OK_BUTTON = '#ok-btn';
  private readonly BACK_BTN = ".back-btn";
  private readonly SCHOOL_NAME_IN_PROFILE = "dl > dd > span > span:nth-child(2)";
  private readonly SA_NAME_IN_LISTING = (saName: string) => `//div/a[normalize-space(text())='${saName}']`;
  private readonly SCHOOL_NAME_IN_SCHOOL_SELECTION_POPUP = (schoolName: string) =>
    `//span[normalize-space(text()) = '${schoolName}']`;

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * @description Locates the "No SA Found" message
   */
  noSaFound() {
    return this.page.locator(this.NO_SA_FOUND);
  }

  /**
   * @description Locates the state dropdown
   */
  selectStateDropdown() {
    return this.page.locator(this.SELECT_STATE_DROPDOWN);
  }

  /**
   * @description Locates the Create New SA button
   */
  createNewSAButton() {
    return this.page.locator(this.CREATE_NEW_SA_BUTTON);
  }

  /**
   * @description Locates the district dropdown
   */
  selectDistrictDropdown() {
    return this.page.locator(this.SELECT_DISTRICT_DROPDOWN);
  }

  /**
   * @description Locates the alert ok button
   */
  okButtonOnPopup() {
    return this.page.locator(this.OK_BUTTON);
  }

  /**
   * @description Locates the SA name in listing
   */
  saNameInListing(saName: string) {
    return this.page.locator(this.SA_NAME_IN_LISTING(saName));
  }

  /**
   * @description Locates the school in school selection popup
   */
  schoolNameInSchoolSelectionPopup(schoolName: string) {
    return this.page.locator(this.SCHOOL_NAME_IN_SCHOOL_SELECTION_POPUP(schoolName));
  }

  /**
   * @description Locates the Add User cancel button
   */
  addUserCancelButton() {
    return this.page.locator(this.ADD_USER_CANCEL_BUTTON);
  }

  /**
   * @description Locates the Add User email ID error message
   */
  addUserEmailIdErrorMessage() {
    return this.page.locator(this.ADD_USER_EMAIL_ID_ERROR_MESSAGE);
  }

  /**
   * @description Locates the back button
   */
  backButton() {
    return this.page.locator(this.BACK_BTN);
  }

  /**
   * @description Locates the select school button on SA creation page
   */
  selectSchoolBtn() {
    return this.page.locator(this.SELECT_SCHOOL_BUTTON);
  }

  /**
   * @description Locates the School name in profile
   */
  schoolNameInProfile() {
    return this.page.locator(this.SCHOOL_NAME_IN_PROFILE).first();
  }

  /**
   * @description Locator for first name field on SA creation
   */
  saFirstNameTextField() {
    return this.page.locator(this.SA_FIRSTNAME_FIELD);
  }

  /**
   * @description Locates the email id input field on SA creation page
   */
  saEmailTextField() {
    return this.page.locator(this.SA_EMAIL_FIELD);
  }

  /**
   * @description Locates the username input field on SA creation page
   */
  saUsernameField() {
    return this.page.locator(this.SA_USERNAME_FIELD);
  }

  /**
   * @description Locator for Add user button on SA creation page
   */
  addSaUser() {
    return this.page.locator(this.ADD_USER_BUTTON);
  }

  /**
   * @description Apply state filter based on the state name
   * @param stateName The name of the state to select
   */
  async applyStateFilter(stateName: string, role: string) {
    if (['PA', 'TSO'].includes(role) && role !== 'DTA') {
      await selectOptionFromFilterDropdown(this.page, stateName);
    }    
  }

  /**
   * @description Search for an SA by name on the listing page
   * @param saName The name of the SA to search for
   */
  async searchSaOnSaListingPage(saName: string) {
    await performSearch(this.page, saName);
  }

  /**
   * @description Verify that no SA is found with the given message
   * @param noSAFoundMessage The expected "No SA Found" message
   */
  async verifySaNotPresentInListing(noSAFoundMessage: string) {
    await expect(this.noSaFound()).toHaveText(noSAFoundMessage);
  }

  /**
   * @description Clicks on the back button on user creation page
   */
  async clickOnBackButton() {
    await this.backButton().click();
  }

  /**
   * @description Create a new SA and select the state from the dropdown
   * @param stateName The name of the state to select
   */
  async createNewSAAndSelectState(stateName: string, districtName: string, role: string) {
    await this.createNewSAButton().click();
    await waitForPreloaderToHide(this.page);
    if (['PA', 'TSO'].includes(role) && role !== 'DTA') {
      await selectValueFromDropDown(this.page, this.selectStateDropdown(), stateName);
      await selectValueFromDropDown(this.page, this.selectDistrictDropdown(), districtName);
    }
  }

  /**
   * @description Verify that a district name is not present in the district dropdown
   * @param districtName The district name to verify
   */
  async verifyDistrictNotPresentInDropdown(districtName: string) {
    await verifyValueNotPresentInDropDown(this.page, this.selectDistrictDropdown(), districtName);
  }

  /**
   * @description Verify that a school name is not present in the select school option
   * @param schoolName The school name to verify
   */
  async verifySchoolNotPresentInDropdown(schoolName: string) {
    await this.selectSchoolBtn().click();
    await expect(this.schoolNameInSchoolSelectionPopup(schoolName)).toBeHidden();
  }

  /**
   * @description Select school from the options
   * @param schoolName The school name to select
   */
  async selectSchoolFromOption(schoolName: string) {
    await this.schoolNameInSchoolSelectionPopup(schoolName).click();
    await this.okButtonOnPopup().click();
  }

  /**
   * @description ENters the provided mail id on create sa user page
   * @param mailID email id to enter
   */
  async fillEmailIdOfUser(mailID: string) {
    await this.saEmailTextField().pressSequentially(mailID)
  }

  /**
   * @description Click on the SA user in listing
   * @param saName Name of the SA user
   */
  async clickOnUsername(saName: string) {
    await this.saNameInListing(saName).click()
  }

  /**
   * @description Verify the sa user is present on listing page
   * @param saName name of the sa user to verify
   */
  async verifyPresenceOfSaInListing(saName: string) {
    await expect(this.saNameInListing(saName)).toBeVisible();
  }

  /**
   * @description Verifies absence of school on user profile page
   */
  async verifySchoolPresenceOnProfile(schoolName: string, checkForPresence: boolean) {
    try {
        const profileText = await this.schoolNameInProfile().textContent();
        if (!profileText) {
            console.log('No profile text found');
            return checkForPresence ? false : true;
        }

        const schools = profileText.split(',');
        for (let school of schools) {
            const trimmedSchool = school.trim();
            if (trimmedSchool === schoolName) {
                if (checkForPresence) {
                    console.log(trimmedSchool, "is present, as expected");
                    return true;
                } else {
                    console.log(trimmedSchool, "is present, it shouldn't be");
                    return false;
                }
            }
        }

        if (checkForPresence) {
            console.log(schoolName, "is absent, it shouldn't be");
            return false;
        } else {
            console.log(schoolName, "is absent, as expected");
            return true;
        }

    } catch (error) {
        console.log('Error verifying school on profile:', error instanceof Error ? error.message : String(error));
        return false;
    }
  }

  /**
   * @description Select district from the district dropdown
   * @param districtName The district name to select
   */
  async selectDistrictFromDistrictDropdown(districtName: string) {
    await selectValueFromDropDown(this.page, this.selectDistrictDropdown(), districtName);
  }

  /**
   * @description Verify error message when entering an invalid email ID for adding a user
   * @param addUserEmailIdErrorMessage The error message to verify
   */
  async verifyAddUserEmailIdErrorMessage(addUserEmailIdErrorMessage: string) {
    await expect(this.addUserEmailIdErrorMessage()).toHaveText(addUserEmailIdErrorMessage);
    await this.addUserCancelButton().click();
    await waitForPreloaderToHide(this.page);
  }

  /**
   * @description Create new SA user
   * @param districtName The district name to select
   * @param saName SA user first name for creating new user
   * @param saEmail SA email id for creating new user
   * @param saUsername SA username for creating new user
   * @param role User for creds to append while naming the user
   */
  public async createSA(
    stateName: string,
    districtName: string,
    schoolName: string,
    saName: string,
    saEmail: string,
    saUsername: string,
    role: string,
  ) {
    const randomString = randomBytes(3)
      .toString('base64')
      .replace(/[^a-zA-Z]/g, '')
      .slice(0, 5);
    switch (role) {
      case 'PA':
      case 'TSO':
        await this.createNewSAButton().click();
        await selectValueFromDropDown(this.page, this.selectStateDropdown(), stateName);
        this.selectDistrictFromDistrictDropdown(districtName);
        break;
      case 'DTA':
        await this.createNewSAButton().click();
        break;
      default:
        throw new Error(`Unsupported role: ${role}`);
    }
    await this.selectSchoolBtn().click();
    await this.schoolNameInSchoolSelectionPopup(schoolName).click();
    await this.okButtonOnPopup().click();
    await this.saFirstNameTextField().fill(saName + '_' + role);
    await this.saUsernameField().pressSequentially(saUsername + '_' + role + '_' + randomString);
    await this.saEmailTextField().pressSequentially(role + '_' + randomString + '_' + saEmail);
    await this.addSaUser().click();
    await this.okButtonOnPopup().click();
  }
}
