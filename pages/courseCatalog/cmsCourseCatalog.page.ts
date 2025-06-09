import { expect, Page } from '@playwright/test';
import { performSearch } from '../../zeus-playwright/quantum-common/utils/searchListing';
import { waitForPreloaderToHide } from '../../zeus-playwright/quantum-common/utils/waitForPreloader';

export class CMSCourseCatalog {
  private readonly page: Page;

  // Constants for Locators
  private readonly IMPORT_COURSE_BUTTON = '#course-listing-import-btn';
  private readonly POSITIVE_BUTTON = '#positive-btn';
  private readonly YES_BUTTON = '#yes-btn';
  private readonly OK_BUTTON = "#ok-btn";
  private readonly LISTING_SEARCHBAR_FILTER_BTN = '#listing-search-bar-filter-btn';
  private readonly CMS_COURSE_CATALOG_PUBLISHED_TAB = 'div.mat-mdc-tab';
  private readonly CMS_COURSE_CATALOG_DISTRICT_AND_SCHOOL_COLUMN =
    "//a[@class='hyperlink ng-star-inserted']";
  private readonly COURSE_CATALOG_ACTION_COLUMN = "button[aria-label='tooltip text']";
  private readonly COURSE_CATALOG_DELETE_BUTTON = "button[aria-label='Delete'][role='menuitem']";
  private readonly COURSE_LICENSED_POPUP_TEXT = "[automation-id='dialog-box-title-popup-content']";
  private readonly NO_DATA_FOUND = 'div.no-data';
  private readonly DISTRICT_AND_SCHOOL_COUNT_IN_COLUMN = "//*[contains(@automation-id, 'lo-listing-accordion-groups-count')]//div";
  private readonly COURSE_LICENSED_OK_BUTTON = "[automation-id='dialog-box-ok-btn']";
  private readonly DISTRICT_AND_SCHOOL_POPUP_COUNT = `.mat-mdc-subheader > span.ng-star-inserted`;
  private readonly districtAndSchoolPopupDistrictName = (districtName: string, stateName: string) =>
    `//span//div[normalize-space(text()) = '${districtName} (${stateName})']`;

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * @description Locator for Course Catalog action column button
   */
  courseCatalogActionColumn() {
    return this.page.locator(this.COURSE_CATALOG_ACTION_COLUMN);
  }

  /**
   * @description Locator for Course Catalog delete button
   */
  courseCatalogDeleteButton() {
    return this.page.locator(this.COURSE_CATALOG_DELETE_BUTTON);
  }

  /**
   * @description Locator for Course Licensed popup text
   */
  courseLicensedPopupText() {
    return this.page.locator(this.COURSE_LICENSED_POPUP_TEXT);
  }

  /**
   * @description Locator for no data found text
   */
  noCourseFoundText() {
    return this.page.locator(this.NO_DATA_FOUND);
  }

  /**
   * @description Locator for Course Licensed OK button
   */
  courseLicensedOkButton() {
    return this.page.locator(this.COURSE_LICENSED_OK_BUTTON);
  }

  /**
   * @description Locator for Import Course button
   */
  importCourseButton() {
    return this.page.locator(this.IMPORT_COURSE_BUTTON);
  }

  /**
   * @description Locator for the listing search bar filter button
   */
  listingSearchbarFilterBtn() {
    return this.page.locator(this.LISTING_SEARCHBAR_FILTER_BTN);
  }

  /**
   * @description Locator for the published tab in the course catalog
   */
  cmsCourseCatalogPublishedTab() {
    return this.page.locator(this.CMS_COURSE_CATALOG_PUBLISHED_TAB).nth(2);
  }

  /**
   * @description Locator for the positive button on popup
   */
  deletionPopupPostivieButton() {
    return this.page.locator(this.POSITIVE_BUTTON);
  }

  /**
   * @description Locator for the yes button on popup
   */
  deletionPopupYesButton() {
    return this.page.locator(this.YES_BUTTON);
  }

  /**
   * @description Locator for the ok button on popup
   */
  deletionPopupOkButton() {
    return this.page.locator(this.OK_BUTTON);
  }

  /**
   * @description Locator for the district and school column in the course catalog
   */
  cmsCourseCatalogDistrictAndSchoolColumn() {
    return this.page.locator(this.CMS_COURSE_CATALOG_DISTRICT_AND_SCHOOL_COLUMN);
  }

  /**
   * @description Locator for the district and school popup count
   */
  districtCount() {
    return this.page.locator(this.DISTRICT_AND_SCHOOL_POPUP_COUNT).nth(0);
  }

  /**
   * @description Locator for the district and school popup count
   */
  schoolCount() {
    return this.page.locator(this.DISTRICT_AND_SCHOOL_POPUP_COUNT).nth(1);
  }

  /**
   * @description Locator for the district and school count in column
   */
  districtAndSchoolCountInColumn() {
    return this.page.locator(this.DISTRICT_AND_SCHOOL_COUNT_IN_COLUMN).first();
  }

  /**
   * @description Get district and school popup for a specific district
   * @param districtName The name of the district
   * @param stateName The name of the state
   */
  districtAndSchoolPopupDistrict(districtName: string, stateName: string) {
    return this.page.locator(this.districtAndSchoolPopupDistrictName(districtName, stateName));
  }

  /**
   * @description Check if the course catalog page is loaded by verifying the search bar filter button is visible
   */
  async checkIfCourseCatalogLoaded() {
    await expect(this.listingSearchbarFilterBtn()).toBeVisible();
  }

  /**
   * @description Click on the published tab in the course catalog
   */
  async clickOnPublishedTab() {
    await this.cmsCourseCatalogPublishedTab().click();
  }

  /**
   * @description Search for a course
   * @param courseName The name of the course to search for
   */
  async searchCourse(courseName: string) {
    await performSearch(this.page, courseName);
    await waitForPreloaderToHide(this.page);
  }

  /**
   * @description Click on the District and School column in the course catalog
   */
  async clickOnDistrictAndSchoolColumn() {
    await this.cmsCourseCatalogDistrictAndSchoolColumn().click();
    await waitForPreloaderToHide(this.page);
  }

  /**
   * @description Verify the count of district and school count in column
   */
  async verifyDistrictAndSchoolCountInColumn(orgCount: string) {
    await expect(this.districtAndSchoolCountInColumn()).toContainText(orgCount);
  }

  /**
   * @description Verify that district is visible in the district and school popup
   * @param districtName The name of the district
   * @param stateName The name of the state
   */
  async verifyDistrictPresentInDistrictAndSchoolPopup(districtName: string, stateName: string) {
    await expect(this.districtAndSchoolPopupDistrict(districtName, stateName)).toBeVisible();
  }

  /**
   * @description Verifies the absence of school of district and school popup
   * @param schoolName name of the school to verify
   * @param districtName name of the district to verify
   */
  async verifySchoolPresentInDistrictAndSchoolPopup(schoolName: string, districtName: string) {
    await expect(this.districtAndSchoolPopupDistrict(schoolName, districtName)).toBeVisible();
  }

  /**
   * @description Verify that district is not visible in the district and school popup
   * @param districtName The name of the district
   * @param stateName The name of the state
   */
  async verifyDistrictNotPresentInDistrictAndSchoolPopup(districtName: string, stateName: string) {
    await expect(this.districtAndSchoolPopupDistrict(districtName, stateName)).not.toBeVisible();
  }

  /**
   * @description Verify the district and school count in the district and school popup
   * @param districtCount - The expected district count displayed in the popup
   * @param schoolCount - The expected school count displayed in the popup
   */
  async verifyCountOnDistrictAndSchoolPopup(districtCount: string, schoolCount: string) {
    await expect(this.districtCount()).toHaveText(districtCount);
    await expect(this.schoolCount()).toHaveText(schoolCount);
  }

  /**
   * @description Click on the action column button in the course catalog and wait for preloader to hide
   */
  async clickOnCourseCatalogActionColumn() {
    await this.courseCatalogActionColumn().click();
    await waitForPreloaderToHide(this.page);
  }

  /**
   * @description Click on the delete button in the course catalog and wait for preloader to hide
   */
  async clickOnCourseCatalogDeleteButton() {
    await this.courseCatalogDeleteButton().click();
    await waitForPreloaderToHide(this.page);
  }

  /**
   * @description Click on the positive button on deletion popup
   */
  async clickOnThePositiveButton() {
    await this.deletionPopupPostivieButton().click();
  }

  /**
   * @description Click on the yes button on popup
   */
  async clickOnTheYesButtonOnPopup() {
    await this.deletionPopupYesButton().click();
  }

  /**
   * @description Click on the ok button on popup
   */
  async clickOntheOkButtonOnPopup() {
    await this.deletionPopupOkButton().click();
  }

  /**
   * @description Verify the text message displayed in the course card when no courses are present
   * @param noCourseFound - The expected message text when no courses are present
   */
  async verifyNoCourseFoundMessage(noCourseFound: string) {
    await expect(this.noCourseFoundText()).toHaveText(noCourseFound);
  }

  /**
   * @description Verify the text message displayed in the licensed course popup and click OK to close it
   * @param licensedCourseMessage - The expected message text in the licensed course popup
   */
  async verifyTextMessageOfLicensedCourse(licensedCourseMessage: string) {
    await expect(this.courseLicensedPopupText()).toHaveText(licensedCourseMessage);
    await this.courseLicensedOkButton().click();
  }
}
