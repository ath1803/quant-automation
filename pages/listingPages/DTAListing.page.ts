import { expect, Page } from '@playwright/test';
import { waitForPreloaderToHide } from '../../zeus-playwright/quantum-common/utils/waitForPreloader';
import {
  selectOptionFromFilterDropdown,
  verifyValueNotPresentInDropDown,
} from '../../zeus-playwright/quantum-common/utils/commonFunction';
import { performSearch } from '../../zeus-playwright/quantum-common/utils/searchListing';
import { selectValueFromDropDown } from '../../zeus-playwright/quantum-common/utils/selectDropdownValue';
import { randomBytes } from 'crypto';

export class DTAListingPage {
  private readonly page: Page;

  // Constants for Locators
  private readonly NO_DTA_FOUND = 'div.no-da-block>p';
  private readonly SELECT_STATE_DROPDOWN = ".district-dropdown[name='state']";
  private readonly CREATE_NEW_DTA_BUTTON = '#create-new-da-button';
  private readonly SELECT_DISTRICT_DROPDOWN = ".district-dropdown[name='district']";
  private readonly ADD_USER_CANCEL_BUTTON = '#add-user-cacel-btn';
  private readonly DTA_NAME_IN_LISTING = '.name-column-div a';
  private readonly ADD_USER_EMAIL_ID_FIELD = "//input[@name='emailId']";
  private readonly ADD_USER_EMAIL_ID_ERROR_MESSAGE = 'span.error-message';
  private readonly DTA_FIRSTNAME_FIELD = "input[name='firstName']";
  private readonly DTA_USERNAME_FIELD = "input[name='userName']";
  private readonly ADD_USER_BUTTON = '#add-user-save-button';

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * @description Locator for "No DTA Found" message
   */
  noDtaFound() {
    return this.page.locator(this.NO_DTA_FOUND);
  }

  /**
   * @description Locator for DTA name in Listing
   */
  dtaNameInListing() {
    return this.page.locator(this.DTA_NAME_IN_LISTING);
  }

  /**
   * @description Locator for state dropdown
   */
  selectStateDropdown() {
    return this.page.locator(this.SELECT_STATE_DROPDOWN);
  }

  /**
   * @description Locator for Create New DTA button
   */
  createNewDtaButton() {
    return this.page.locator(this.CREATE_NEW_DTA_BUTTON);
  }

  /**
   * @description Locator for district dropdown
   */
  selectDistrictDropdown() {
    return this.page.locator(this.SELECT_DISTRICT_DROPDOWN);
  }

  /**
   * @description Locator for DTA first name text field on DTA creation page
   */
  dtaFirstNameTextField() {
    return this.page.locator(this.DTA_FIRSTNAME_FIELD);
  }

  /**
   * @description Locator for Add User cancel button
   */
  addUserCancelButton() {
    return this.page.locator(this.ADD_USER_CANCEL_BUTTON);
  }

  /**
   * @description Locator for Add User email ID field
   */
  addUserEmailIdField() {
    return this.page.locator(this.ADD_USER_EMAIL_ID_FIELD);
  }

  /**
   * @description Locator for Add Username field
   */
  dtaUsernameField() {
    return this.page.locator(this.DTA_USERNAME_FIELD);
  }

  /**
   * @description Locator for Add User button on DTA creation page
   */
  addDtaUser() {
    return this.page.locator(this.ADD_USER_BUTTON);
  }

  /**
   * @description Locator for Add User email ID error message
   */
  addUserEmailIdErrorMessage() {
    return this.page.locator(this.ADD_USER_EMAIL_ID_ERROR_MESSAGE);
  }

  /**
   * @description Apply state filter based on the state name
   * @param stateName The name of the state to select
   */
  async applyStateFilter(stateName: string) {
    await selectOptionFromFilterDropdown(this.page, stateName);
  }

  /**
   * @description Search for a DTA by name on the listing page
   * @param name The name of the DTA to search for
   */
  async searchDtaOnDtaListingPage(name: string) {
    await performSearch(this.page, name);
  }

  /**
   * @description Verify that no DTA is found with the given message
   * @param noDtaFoundMessage The expected "No DTA Found" message
   */
  async verifyDtaNotPresentInListing(noDtaFoundMessage: string) {
    await expect(this.noDtaFound()).toHaveText(noDtaFoundMessage);
  }

  /**
   * @description Create a new DTA and select the state from the dropdown
   * @param stateName The name of the state to select
   */
  async createNewDtaAndSelectState(stateName: string) {
    await this.createNewDtaButton().click();
    await waitForPreloaderToHide(this.page);
    await selectValueFromDropDown(this.page, this.selectStateDropdown(), stateName);
  }

  /**
   * @description Verify that a district name is not present in the district dropdown
   * @param districtName The district name to verify
   */
  async verifyDistrictNotPresentInDropdown(districtName: string) {
    await verifyValueNotPresentInDropDown(this.page, this.selectDistrictDropdown(), districtName);
  }

  /**
   * @description Fill the email ID of a deleted district user
   * @param dtaUserEmailId The email ID to fill in the field
   */
  async fillEmailIdOfDeletedDistrictUser(dtaUserEmailId: string) {
    await this.addUserEmailIdField().pressSequentially(dtaUserEmailId);
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
   * @description Select district from the district dropdown
   * @param districtName The district name to select
   */
  async selectDistrictFromDistrictDropdown(districtName: string) {
    await selectValueFromDropDown(this.page, this.selectDistrictDropdown(), districtName);
  }

  /**
   * @description Verify the DTA user passed is present on listing page
   * @param dtaName DTA user name to verify
   */
  async verifyVisibilityOfUserOnListingPage(dtaName: string) {
    await expect(this.dtaNameInListing()).toContainText(dtaName);
  }

  /**
   * @description Create new DTA user
   * @param districtName The district name to select
   * @param dtaName DTA user first name for creating new user
   * @param dtaEmail DTA email id for creating new user
   * @param dtaUsername DTA username for creating new user
   * @param role User for creds to append while naming the user
   */
  async createDta(
    districtName: string,
    dtaName: string,
    dtaEmail: string,
    dtaUsername: string,
    role: string,
  ) {
    const randomString = randomBytes(3)
      .toString('base64')
      .replace(/[^a-zA-Z]/g, '')
      .slice(0, 5);
    await this.dtaFirstNameTextField().fill(dtaName + '_' + role);
    await this.dtaUsernameField().pressSequentially(dtaUsername + '_' + role + '_' + randomString);
    await this.addUserEmailIdField().pressSequentially(role + '_' + randomString + '_' + dtaEmail);
    this.selectDistrictFromDistrictDropdown(districtName);
    await this.addDtaUser().click();
  }
}
