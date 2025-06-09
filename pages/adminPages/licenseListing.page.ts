import { expect, Page } from '@playwright/test';
import { performSearch } from '../../zeus-playwright/quantum-common/utils/searchListing';
import { waitForPreloaderToHide } from '../../zeus-playwright/quantum-common/utils/waitForPreloader';

export class LicenseListingPage {
  private readonly page: Page;

  // Constants for Locators
  private readonly NO_LICENSE_FOUND_MESSAGE = 'div.no-sa-block>p';
  private readonly DIFFERENT_LICENSE_TAB = "div.mat-mdc-tab";
  private readonly CREATE_NEW_LICENSE_BUTTON = '#create-new-license';
  private readonly CREATE_NEW_LICENSE_DISTRICT_DROPDOWN =
    "//button[contains(@class, 'select-district-button') and not(@disabled)]";
  private readonly CREATE_NEW_LICENSE_SELECT_SCHOOL_BUTTON = "//button[contains(@class, 'select-school-button') and not(@disabled)]";
  private readonly SCHOOL_RADIO_BUTTON = ".assign-to-container > div > mat-radio-button";
  private readonly NO_DISTRICT_TO_DISPLAY_MESSAGE = '.empty-data-msg.ng-star-inserted';
  private readonly DISTRICT_DROPDOWN_CANCEL_BUTTON = '#negative-btn';
  private readonly DISTRICT_DROPDOWN_DONE_BUTTON = '#positive-btn';
  private readonly DISTRICT_DROPDOWN_SEARCH_INPUT_BOX = "//div[@id='search-input-box']//input[not(ancestor::*[contains(@style, 'display: none') or contains(@style, 'visibility: hidden')])]";
  private readonly DISTRICT_DROPDOWN_SEARCH_BUTTON = 'mat-dialog-container button.search-btn';
  private readonly LICENSE_NAME_IN_LISTING = "td.license-name-column div.hyperlink";
  private readonly DISTRICT_NAME_IN_LISTING =
    "(//td[contains(@class, 'assigned-to-column')]//div[contains(@class, 'clamp-this')])[1]";
  private readonly ORGANIZATION_NAME_IN_SELECTION_POPUP =
    "//div[contains(@id, 'groupListContainer')]//div[contains(@class, 'text-overflow-ellipsis')]";
  private readonly ORGANIZATIO_NAME_ON_LICENSE_DETAILS_PAGE = (orgName: string) => `//*[contains(@class, 'district-name') and text()='${orgName}']`

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * @description Locator for "No License Found" message
   */
  noLicenseFoundMessage() {
    return this.page.locator(this.NO_LICENSE_FOUND_MESSAGE);
  }

  /**
   * @description Locator for the active license tab
   */
  activeLicenseTab() {
    return this.page.locator(this.DIFFERENT_LICENSE_TAB).first();
  }

  /**
   * @description Locator for the expired license tab
   */
  expiredLicenseTab() {
    return this.page.locator(this.DIFFERENT_LICENSE_TAB).nth(2);
  }

  /**
   * @description Locator for the unassigned license tab
   */
  unassignedLicenseTab() {
    return this.page.locator(this.DIFFERENT_LICENSE_TAB).nth(3);
  }

  /**
   * @description Locator for the "Create New License" button
   */
  createNewLicenseButton() {
    return this.page.locator(this.CREATE_NEW_LICENSE_BUTTON);
  }

  /**
   * @description Locator for the "Create New License" district dropdown button
   */
  createNewLicenseDistrictDropdown() {
    return this.page.locator(this.CREATE_NEW_LICENSE_DISTRICT_DROPDOWN);
  }

  /**
   * @description Locator for the "Create New License" school dropdown button
   */
  selectSchoolPopup() {
    return this.page.locator(this.CREATE_NEW_LICENSE_SELECT_SCHOOL_BUTTON);
  }

  /**
   * @description Locator for the "Non-District Purchase School" radio button
   */
  nonDistrictPurchaseSchoolRadioButton() {
    return this.page.locator(this.SCHOOL_RADIO_BUTTON).nth(1);
  }

  /**
   * @description Locator for the district name on listing page
   */
  districtNameInLicenseListing() {
    return this.page.locator(this.DISTRICT_NAME_IN_LISTING);
  }

  /**
   * @description Locator for the license name on listing page
   */
  licenseNameInListing() {
    return this.page.locator(this.LICENSE_NAME_IN_LISTING).first();
  }

  /**
   * @description Locator for the "No District to Display" message
   */
  noDistrictToDisplayMessage() {
    return this.page.locator(this.NO_DISTRICT_TO_DISPLAY_MESSAGE);
  }

  /**
   * @description Locator for the district dropdown cancel button
   */
  districtDropdownCancelButton() {
    return this.page.locator(this.DISTRICT_DROPDOWN_CANCEL_BUTTON);
  }

  /**
   * @description Locator for the district dropdown cancel button
   */
  districtDropdownDoneButton() {
    return this.page.locator(this.DISTRICT_DROPDOWN_DONE_BUTTON);
  }

  /**
   * @description Locator for the district dropdown search input box
   */
  districtDropdownSearchInputBox() {
    return this.page.locator(this.DISTRICT_DROPDOWN_SEARCH_INPUT_BOX);
  }

  /**
   * @description Locator for the district dropdown search button
   */
  districtDropdownSearchButton() {
    return this.page.locator(this.DISTRICT_DROPDOWN_SEARCH_BUTTON);
  }

  /**
   * @description Locator for the organization name in selection popup
   */
  orgNameInPopup() {
    return this.page.locator(this.ORGANIZATION_NAME_IN_SELECTION_POPUP);
  }

  /**
   * @description Locator for the organization name on license details page
   */
  orgNameOnLicenseDetails(orgName: string) {
    return this.page.locator(this.ORGANIZATIO_NAME_ON_LICENSE_DETAILS_PAGE(orgName)).first();
  }

  /**
   * @description Search for a license assigned to a district
   * @param licenseName The name of the license to search for
   */
  async searchLicenseOnListing(licenseName: string) {
    await performSearch(this.page, licenseName);
    await waitForPreloaderToHide(this.page);
  }

  /**
   * @description Verify the displayed license is assigned to the given district
   * @param districtName The name of the district
   */
  async verifyDistrictOfTheLicenseDisplayed(districtName: string) {
    await expect(this.districtNameInLicenseListing()).toHaveText(districtName);
  }

  /**
   * @description Click on the license name
   */
  async clickOnLicenseName() {
    await this.licenseNameInListing().click();
  }

  /**
   * @description Verify the organization name displayed after searching in select popup
   */
  async verifyOrgNameInSelectPopup() {
    await expect(this.orgNameInPopup()).toBeVisible();
    this.districtDropdownCancelButton().click();
  }

  /**
   * @description Verify organization name is present on license details page
   * @param orgName organization name to verify
   */
  async verifyPresenceOfOrgNameOnLicenseDetailsPage(orgName: string) {
    await expect(this.orgNameOnLicenseDetails(orgName)).toBeVisible();
  }

  /**
   * @description select district from popup and click on done button
   */
  async selectDistrictFromPopup() {
    await this.orgNameInPopup().click();
    await this.districtDropdownDoneButton().click();
  }

  /**
   * @description Verify that the "No License Found" message is displayed
   * @param message Expected message for "No License Found"
   */
  async verifyNoLicenseErrorMessage(message: string) {
    await this.page.waitForTimeout(1000);
    await expect(this.noLicenseFoundMessage()).toHaveText(message);
  }

  /**
   * @description Click on the Active License tab
   */
  async clickOnActiveLicenseTab() {
    await this.activeLicenseTab().click();
    await waitForPreloaderToHide(this.page);
  }

  /**
   * @description Click on the Expired License tab
   */
  async clickOnExpiredLicenseTab() {
    await this.expiredLicenseTab().click();
    await waitForPreloaderToHide(this.page);
  }

  /**
   * @description Click on the Unassigned License tab
   */
  async clickOnUnassignedLicenseTab() {
    await this.unassignedLicenseTab().click();
    await waitForPreloaderToHide(this.page);
  }

  /**
   * @description Click on the "Create New License" button
   */
  async clickOnCreateNewLicenseButton() {
    await this.createNewLicenseButton().click();
    await waitForPreloaderToHide(this.page);
  }

  /**
   * @description Click on the "Non-District Purchase School" radio button
   */
  async clickOnNonDistrictPurchaseSchoolRadioButton() {
    await this.nonDistrictPurchaseSchoolRadioButton().click();
    await waitForPreloaderToHide(this.page);
  }

  /**
   * @description Search for a district in the district dropdown
   * @param districtName The name of the district to search for
   */
  async searchDistrictOnDistrictDropdown(districtName: string) {
    await this.createNewLicenseDistrictDropdown().click();
    await waitForPreloaderToHide(this.page);
    await this.districtDropdownSearchInputBox().fill(districtName);
    await this.districtDropdownSearchButton().click();
  }

  /**
   * @description Search for a school in the school dropdown
   * @param schoolName The name of the school to search for
   */
  async searchSchoolOnPopup(schoolName: string) {
    await this.selectSchoolPopup().click();
    await waitForPreloaderToHide(this.page);
    await this.districtDropdownSearchInputBox().fill(schoolName);
    await this.districtDropdownSearchButton().click();
  }

  /**
   * @description Verify the "No District to Display" message in the district dropdown
   * @param message Expected "No District to Display" message
   */
  async verifyErrorMessage(noDistrictToDisplayMessage: string) {
    await expect(this.noDistrictToDisplayMessage()).toHaveText(noDistrictToDisplayMessage);
    await this.districtDropdownCancelButton().click();
  }
}
