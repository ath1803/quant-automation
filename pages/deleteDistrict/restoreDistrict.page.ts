import { expect, Page } from '@playwright/test';
import { waitForPreloaderToHide } from '../../zeus-playwright/quantum-common/utils/waitForPreloader';
import { verifyElementInFilterDropdown } from '../../zeus-playwright/quantum-common/utils/commonFunction';
import { performSearch } from '../../zeus-playwright/quantum-common/utils/searchListing';
import { CommonConstants } from '../../zeus-playwright/quantum-common/utils/commonConstants';

export class RestoreDistrict {
  readonly page: Page;
  private readonly RESTORE_BUTTON = "//button[@aria-label='Restore']";
  private readonly POPUP_BOX = '.popup-box';
  private readonly POPUP_NO_BUTTON = '#negative-btn';
  private readonly POPUP_YES_BUTTON = '#positive-btn';
  private readonly PAGINATION_RANGE = 'div.mat-mdc-paginator-range-label';
  private readonly POPUP_HEADER = 'h1.mat-mdc-dialog-title';
  private readonly DISTRICT_LISTING_ADD_USER = ".actions-column>button>.icon-add-circle";
  private readonly DISTRICT_LISTING_SCHOOL_COLUMN =
    "//td[contains(@class, 'school-column')]//a";
  private readonly DISTRICT_LISTING_DTA_COLUMN =
    "//td[contains(@class, 'dta-ds-count-column')]//a";
  private readonly DISTRICT_LISTING_DISTRICT_NAME =
    '.districtname-column>div.districtname-container a';
  private readonly DELETE_BUTTON = '#delete-district';
  private readonly DISTRICT_LISTING_COURSE_FAMILY = '.course-family-column>div>a';
  private readonly DISTRICT_LISTING_SOURCE_COLUMN = "(//td[contains(@class, 'cdk-column-groupIdentitySourceId')]//div)[1]";
  private readonly DISTRICT_LISTING_STATE_COLUMN = '.state-column >div.mat-mdc-tooltip-trigger';
  private readonly SHOW_MORE_BUTTON_IN_DISTRICT_FILTER = "button[automation-id = 'show-more-1']";
  private readonly ICON_FILTER = '.icon-Filter';

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * @description Locator for the restore button
   */
  restoreButton() {
    return this.page.locator(this.RESTORE_BUTTON);
  }

  /**
   * @description Locator for the restore popup box
   */
  restorePopup() {
    return this.page.locator(this.POPUP_BOX);
  }

  /**
   * @description Locator for the popup no button
   */
  noButtonOnRestorePopup() {
    return this.page.locator(this.POPUP_NO_BUTTON);
  }

  /**
   * @description Locates the yes button on restore popup
   */
  yesButtonOnRestorePopup() {
    return this.page.locator(this.POPUP_YES_BUTTON);
  }

  /**
   * @description Locator for the restore popup header
   */
  restorePopupHeader() {
    return this.page.locator(this.POPUP_HEADER);
  }

  /**
   * @description Locator for the show more button for district section in filter
   */
  filterDistrictShowMoreButton() {
    return this.page.locator(this.SHOW_MORE_BUTTON_IN_DISTRICT_FILTER);
  }

  /**
   * @description Locator for the pagination range label
   */
  paginationRange() {
    return this.page.locator(this.PAGINATION_RANGE).first();
  }

  /**
   * @description Locator for district listing add user button
   */
  districtListingAddUserButton() {
    return this.page.locator(this.DISTRICT_LISTING_ADD_USER);
  }

  /**
   * @description Locator for icon filter button
   */
  iconFilter() {
    return this.page.locator(this.ICON_FILTER);
  }

  /**
   * @description Locator for the district listing DTA count column
   */
  districtListingDtaCount() {
    return this.page.locator(this.DISTRICT_LISTING_DTA_COLUMN);
  }

  /**
   * @description Locator for the district listing school count column
   */
  districtListingSchoolCount() {
    return this.page.locator(this.DISTRICT_LISTING_SCHOOL_COLUMN);
  }

  /**
   * @description Locator for the district listing source column
   */
  districtListingDistrictSource() {
    return this.page.locator(this.DISTRICT_LISTING_SOURCE_COLUMN);
  }

  /**
   * @description Locator for the district listing state column
   */
  districtListingStateColumn() {
    return this.page.locator(this.DISTRICT_LISTING_STATE_COLUMN);
  }

  /**
   * @description Locator for district name in district listing
   */
  districtListingDistrictName() {
    return this.page.locator(this.DISTRICT_LISTING_DISTRICT_NAME);
  }

  /**
   * @description Locator for the delete button in district listing
   */
  deleteButton() {
    return this.page.locator(this.DELETE_BUTTON);
  }

  /**
   * @description Locator for district listing course family
   */
  districtListingCourseFamily() {
    return this.page.locator(this.DISTRICT_LISTING_COURSE_FAMILY);
  }

  /**
   * @description Verify restore button is visible
   */
  async verifyRestoreButtonIsVisible() {
    await expect(this.restoreButton()).toBeVisible();
  }

  /**
   * @description Verifies the restore button is enabled
   */
  public async verifyRestoreButtonIsEnabled() {
    await expect(this.restoreButton()).toBeEnabled();
  }

  /**
   * @description Clicks on the restore button
   */
  public async clickOnDistrictRestoreButton() {
    await this.restoreButton().click();
  }

  /**
   * @description Verifies the visibility of restore popup
   */
  public async verifyPresenceOfRestorePopup() {
    await this.page.waitForTimeout(CommonConstants.SLEEPTIME)
    await expect(this.restorePopup()).toBeVisible();
  }

  /**
   * @description Click on the 'No' button on restoration popup
   */
  public async clickOnRestorePopupNoButton() {
    await this.noButtonOnRestorePopup().click();
  }

  /**
   * @description Click on the 'Yes' button on restoration popup
   */
  public async clickOnRestorePopupYesButton() {
    await this.yesButtonOnRestorePopup().click();
  }

  /**
   * @description Verify the invisibility of restore popup
   */
  public async verifyAbsenceOfRestorePopup() {
    await expect(this.restorePopup()).toBeHidden();
  }

  /**
   * @description Verify the restoration in popup content
   * @param restorationInProgress Restoration in progress header
   */
  public async verifyPresenceOfRestorationInProgressPopup(restorationInProgress: string) {
    this.verifyPresenceOfRestorePopup();
    await expect(this.restorePopupHeader()).toContainText(restorationInProgress);
  }

  /**
   * @description Click on OK button on restoration in progress popup
   */
  public async clickOnRestorationProgressOKButton() {
    this.clickOnRestorePopupYesButton();
  }

  /**
   * @description Search district on district listing page
   * @param distrcitName Name of the district to search
   */
  public async searchDistrictOnDistrictListingPage(distrcitName: string) {
    await performSearch(this.page, distrcitName);
    await waitForPreloaderToHide(this.page);
  }

  /**
   * @description Helper function for verifyOptionPresentInFilterDropdown
   * @param filterOption The filter option to check for
   * @returns A boolean indicating whether the option is present in the filter
   */
  private async isOptionPresentInFilterDropdown(filterOption: string): Promise<boolean> {
    try {
      await verifyElementInFilterDropdown(this.page, filterOption);
      return true;
    } catch (e) {
      return false;
    }
  }

  /**
   * @description Verifies if a option is present in the filter section. If not, it clicks "Show More" and retries.
   * @param filterOption The filter option to verify.
   * @throws An error if the option is not found and no more options can be loaded.
   */
  async verifyDistrictPresentInFilter(filterOption: string) {
    await this.iconFilter().click();
    while (true) {
      const isOptionPresent = await this.isOptionPresentInFilterDropdown(filterOption);
      if (isOptionPresent) {
        await this.noButtonOnRestorePopup().click();
        await waitForPreloaderToHide(this.page);
        return;
      }
      const isShowMoreButtonVisible = await this.filterDistrictShowMoreButton().isVisible();
      if (!isShowMoreButtonVisible) {
        throw new Error(`Option "${filterOption}" not found.`);
      }
      await this.filterDistrictShowMoreButton().click();
    }
  }

  /**
   * @description Verifies the pagination count in the district listing
   * @param minExpectedCount Expected pagination count
   */
  async verifyPaginationCount(minExpectedCount : string) {
    const paginationText = await this.paginationRange().innerText();
    const match = paginationText.match(/of\s+(\d+)/i);
    if (!match) {
        throw new Error(`Unable to extract total count from pagination text: "${paginationText}"`);
    }
    const totalCount = parseInt(match[1], 10);
    if (isNaN(totalCount)) {
        throw new Error(`Extracted value is not a number from: "${paginationText}"`);
    }
    expect(totalCount).toBeGreaterThanOrEqual(Number(minExpectedCount));
  }

  /**
   * @description Verifies that the Add User button is disabled
   */
  async verifyAddUserButtonIsEnabled() {
    await expect(this.districtListingAddUserButton()).toBeEnabled();
  }

  /**
   * @description Verifies the data in the DTA and Schools columns of the district listing
   * @param initialDtaCount the number of DTA users which are present in the district
   * @param initialSchoolCount the number of schools in the district
   */
  async verifyDataInDTAsAndSchoolsColumn(initialDtaCount: string, initialSchoolCount: string) {
    await expect(this.districtListingDtaCount()).toHaveText(initialDtaCount);
    await expect(this.districtListingSchoolCount()).toHaveText(initialSchoolCount);
  }

  /**
   * @description Verifies that the delete button is enabled
   */
  async verifyDeleteButtonIsEnabled() {
    await expect(this.deleteButton()).toBeEnabled();
  }

  /**
   * @description Verifies that the district name element is clickable
   */
  async verifyDistrictNameIsClickable() {
    await expect(this.districtListingDistrictName()).toBeEnabled();
  }

  /**
   * @description Verifies that the course family element is clickable
   */
  async verifyCourseFamilyIsClickable() {
    await expect(this.districtListingDistrictName()).toBeEnabled();
  }

  /**
   * @description Verifies the data in the source and state columns of the district listing
   * @param districtListingSource The source of the district listing
   * @param stateName The name of the state
   */
  async verifyDataInSourceAndStateColumn(districtListingSource: string, stateName: string) {
    await expect(this.districtListingDistrictSource()).toHaveText(districtListingSource);
    await expect(this.districtListingStateColumn()).toHaveText(stateName);
  }
}
