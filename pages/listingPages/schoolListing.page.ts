import { expect, Page } from '@playwright/test';
import {
  selectOptionFromFilterDropdown,
  verifyElementInFilterDropdown,
  verifyElementNotInFilterDropdown,
  verifyValueNotPresentInDropDown,
  verifyValuePresentInDropDown,
} from '../../zeus-playwright/quantum-common/utils/commonFunction';
import { performSearch } from '../../zeus-playwright/quantum-common/utils/searchListing';
import { waitForPreloaderToHide } from '../../zeus-playwright/quantum-common/utils/waitForPreloader';
import { selectValueFromDropDown } from '../../zeus-playwright/quantum-common/utils/selectDropdownValue';

export class SchoolListingPage {
  private readonly page: Page;

  // Constants for Locators
  private readonly NO_SCHOOL_FOUND = ' div.no-data';
  private readonly SELECT_STATE_DROPDOWN = "mat-select[name='stateDropDown']";
  private readonly CREATE_NEW_SCHOOL_BUTTON = '#school-listing-create-new-school-btn';
  private readonly SELECT_DISTRICT_DROPDOWN = "mat-select[name='district']";
  private readonly ADD_USER_CANCEL_BUTTON = '#cancel-btn';
  private readonly WARNING_YES_BUTTON = '#positive-btn';
  private readonly POPUP_NO_BUTTON = '#negative-btn';
  private readonly OK_BUTTON = '#ok-btn';
  private readonly SCHOOL_NAME_ON_LISTING = '#school-listing-school-name-link p';
  private readonly SCHOOL_NAME_TEXTFIELD = '.school-name input';
  private readonly SELECT_LOWEST_GRADE = "mat-select[name='lowestGrade']";
  private readonly SELECT_HIGHEST_GRADE = "mat-select[name='highestGrade']";
  private readonly SAVE_SCHOOL_BUTTON = '#save-btn';
  private readonly SELECT_SCHOOL_DROPDOWN = "mat-select[name='schoolDropDown']";
  // Delete School
  private readonly DELETE_BUTTON = "[aria-label='Delete school']";
  private readonly STATUS_MESSAGE = "p#group-deletion-status-text";
  private readonly DELETE_SCHOOL_TOOL_TIP = "#group-deletion-status-text+button>mat-icon";
  private readonly DELETE_SCHOOL_TOOL_TIP_MESSAGE = "div#custom-tooltip>div";
  private readonly PASS_PHRASE_TEXT_LOCATOR = "#pass-phrase-text";
  private readonly DELETE_SCHOOL_PASS_PHRASE_INPUT = "[name='passPhrase']";
  private readonly SCHOOL_LISTING_SCHOOL_NAME = "#school-listing-school-name-link";
  private readonly NIL_COUNT_IN_USER_COLUMN = ".nil-count";
  private readonly SA_COUNT_IN_COLUMN = "td.sa-column a";
  private readonly TEACHER_COUNT_IN_COLUMN = "td.teacher-column a";
  private readonly STUDENT_COUNT_IN_COLUMN = "td.students-column a";
  private readonly PAGINATION_RANGE = "div.mat-mdc-paginator-range-label";
  private readonly EDIT_SCHOOL_BUTTON_ON_LISTING = ".actions-column>button[aria-label='Edit school']";
  private readonly SHOW_MORE_BUTTON_IN_SCHOOL_FILTER = "button[automation-id = 'show-more-2']";
  private readonly ICON_FILTER = '.icon-Filter';

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * @description Locates the "No School Found" message
   */
  noSchoolFound() {
    return this.page.locator(this.NO_SCHOOL_FOUND);
  }

  /**
   * @description Locates the state dropdown
   */
  selectStateDropdown() {
    return this.page.locator(this.SELECT_STATE_DROPDOWN);
  }

  /**
   * @description Locates the Create New School button
   */
  createNewSchoolButton() {
    return this.page.locator(this.CREATE_NEW_SCHOOL_BUTTON);
  }

  /**
   * @description Locates the district dropdown
   */
  selectDistrictDropdown() {
    return this.page.locator(this.SELECT_DISTRICT_DROPDOWN);
  }

  /**
   * @description Locates the Add User cancel button
   */
  addUserCancelButton() {
    return this.page.locator(this.ADD_USER_CANCEL_BUTTON);
  }

  /**
   * @description Locates the "Yes" button in the warning popup
   */
  warningYesButton() {
    return this.page.locator(this.WARNING_YES_BUTTON);
  }

  /**
   * @description Locator for the popup no button
   */
  noButtonOnRestorePopup() {
    return this.page.locator(this.POPUP_NO_BUTTON);
  }

  /**
   * @description Locates the ok button
   */
  okButton() {
    return this.page.locator(this.OK_BUTTON);
  }

  /**
   * @description Locator for school name input field
   */
  schoolNameTextField() {
    return this.page.locator(this.SCHOOL_NAME_TEXTFIELD);
  }

  /**
   * @description Locator for the school name on listing page
   */
  schoolNameOnListing() {
    return this.page.locator(this.SCHOOL_NAME_ON_LISTING);
  }

  /**
   * @description Locator for delete button
   */
  deleteButton() {
    return this.page.locator(this.DELETE_BUTTON);
  }

  /**
   * @description Locator for the status message
   */
  statusMessage() {
    return this.page.locator(this.STATUS_MESSAGE);
  }

  /**
   * @description Locator for the passphrase text
   */
  passPhraseTextLocator() {
    return this.page.locator(this.PASS_PHRASE_TEXT_LOCATOR);
  }

  /**
   * @description Locator for the delete school tooltip
   */
  deleteSchoolToolTip() {
    return this.page.locator(this.DELETE_SCHOOL_TOOL_TIP);
  }

  /**
   * @description Locator for the passphrase input field
   */
  deleteSchoolPassPhraseInput() {
    return this.page.locator(this.DELETE_SCHOOL_PASS_PHRASE_INPUT);
  }

  /**
   * @description Locator for the delete district tooltip message
   */
  deleteSchoolToolTipMessage() {
    return this.page.locator(this.DELETE_SCHOOL_TOOL_TIP_MESSAGE);
  }

  /**
   * @description Locator for school listing district name
   */
  schoolListingSchoolName() {
    return this.page.locator(this.SCHOOL_LISTING_SCHOOL_NAME);
  }

  /**
   * @description Locator for SA user nil count
   */
  schoolListingNilSaCount() {
    return this.page.locator(this.NIL_COUNT_IN_USER_COLUMN).first();
  }

  /**
   * @description Locator for Teacher user nil count
   */
  schoolListingNilTeacherCount() {
    return this.page.locator(this.NIL_COUNT_IN_USER_COLUMN).nth(1);
  }

  /**
   * @description Locator for Student user nil count
   */
  schoolListingNilStudentCount() {
    return this.page.locator(this.NIL_COUNT_IN_USER_COLUMN).nth(2);
  }

  /**
   * @description Locator for the sa count in sa column
   */
  schoolListingSaCount() {
    return this.page.locator(this.SA_COUNT_IN_COLUMN);
  }

  /**
   * @description Locator for the teacher count in teacher column
   */
  schoolListingTeacherCount() {
    return this.page.locator(this.TEACHER_COUNT_IN_COLUMN);
  }

  /**
   * @description Locator for the student count in student column
   */
  schoolListingStudentCount() {
    return this.page.locator(this.STUDENT_COUNT_IN_COLUMN);
  }

  /**
   * @description Locator for the show more button for school section in filter
   */
  filterSchoolShowMoreButton() {
    return this.page.locator(this.SHOW_MORE_BUTTON_IN_SCHOOL_FILTER);
  }

  /**
   * @description Locator for icon filter button
   */
  iconFilter() {
    return this.page.locator(this.ICON_FILTER);
  }

  /**
   * @description Locator for the pagination range label
   */
  paginationRange() {
    return this.page.locator(this.PAGINATION_RANGE).first();
  }

  /**
   * @description Locator for the select school dropdown
   */
  selectSchoolDropdown() {
    return this.page.locator(this.SELECT_SCHOOL_DROPDOWN);
  }

  /**
   * @description Locates the select lowest grade dropdown
   */
  selectLowestGrade() {
    return this.page.locator(this.SELECT_LOWEST_GRADE);
  }

  /**
   * @description Locates the select highest grade dropdown
   */
  selectHighestGrade() {
    return this.page.locator(this.SELECT_HIGHEST_GRADE);
  }

  /**
   * @description Locator for save school button
   */
  saveSchoolButton() {
    return this.page.locator(this.SAVE_SCHOOL_BUTTON);
  }

  /**
   * @description Locator for school listing edit user button
   */
  schoolListingEditButton() {
    return this.page.locator(this.EDIT_SCHOOL_BUTTON_ON_LISTING);
  }

  /**
   * @description Apply state filter based on the state name
   * @param stateName The name of the state to select
   */
  async applyStateFilter(stateName: string) {
    await selectOptionFromFilterDropdown(this.page, stateName);
  }

  /**
   * @description Search for a school by name on the listing page
   * @param schoolName The name of the school to search for
   */
  async searchSchoolOnSchoolListingPage(schoolName: string) {
    await performSearch(this.page, schoolName);
  }

  /**
   * @description Verify that no school is found with the given message
   * @param noSchoolFoundMessage The expected "No School Found" message
   */
  async verifySchoolNotPresentInListing(noSchoolFoundMessage: string) {
    await expect(this.noSchoolFound()).toHaveText(noSchoolFoundMessage);
  }

  /**
   * @description Click on the create new school button
   */
  async clickOnCreateNewSchoolButton() {
    await this.createNewSchoolButton().click();
    await waitForPreloaderToHide(this.page);
  }

  /**
   * @description Create a new school and select the state from the dropdown
   * @param stateName The name of the state to select
   */
  async createNewSchoolAndSelectState(stateName: string) {
    await this.createNewSchoolButton().click();
    await waitForPreloaderToHide(this.page);
    await selectValueFromDropDown(this.page, this.selectStateDropdown(), stateName);
  }

  /**
   * @description Verify that a district name is not present in the district dropdown
   * @param districtName The district name to verify
   */
  async verifyDistrictNotPresentInDropdown(districtName: string) {
    await verifyValueNotPresentInDropDown(this.page, this.selectDistrictDropdown(), districtName);
    await this.addUserCancelButton().click();
    await this.warningYesButton().click();
    await waitForPreloaderToHide(this.page);
  }

  /**
   * @description Verify that a school is present on listing page
   * @param schoolName School name to verify on listing page
   */
  public async verifyVisibilityOfSchoolOnSchoolListingPage(schoolName: string) {
    await expect(this.schoolNameOnListing()).toBeVisible();
    await expect(this.schoolNameOnListing()).toContainText(schoolName);
  }

  /**
   * @description Verify that a district name is present in the district dropdown
   * @param districtName The district name to verify
   */
  public async verifyDistrictPresentInDistrictDropdown(districtName: string) {
    await verifyValuePresentInDropDown(this.page, this.selectDistrictDropdown(), districtName);
  }

  /**
   * @description Create new school
   * @param districtName The district name to select
   * @param schoolType School type to select from dropdown
   * @param schoolName School Name to enter for the new school
   * @param lowestGrade Lowest grade to select from dropdown
   * @param highestGrade Higest grade to select from dropdown
   */
  public async createSchool(
    districtName: string,
    schoolType: string,
    schoolName: string,
    lowestGrade: string,
    highestGrade: string,
    role: string,
  ) {
    switch (role) {
      case 'PA':
      case 'TSO':
        await selectValueFromDropDown(this.page, this.selectDistrictDropdown(), districtName);
        break;
    }
    await selectValueFromDropDown(this.page, this.selectSchoolDropdown(), schoolType);
    await this.schoolNameTextField().fill(schoolName + '_' + role);
    await selectValueFromDropDown(this.page, this.selectLowestGrade(), lowestGrade);
    await selectValueFromDropDown(this.page, this.selectHighestGrade(), highestGrade);
    await this.saveSchoolButton().click();
    await this.okButton().click();
  }

  /**
     * @description Verifies if the delete button is enabled
     */
  async verifyDeleteButtonIsEnabled() {
    await expect(this.deleteButton()).toBeEnabled();
  }

  /**
   * @description Enters the correct passphrase for district deletion
   */
  async enterCorrectPassphrase() {
    await expect(this.passPhraseTextLocator()).toBeVisible();
    await expect(this.deleteSchoolPassPhraseInput()).toBeVisible();
    const passphraseText = await this.passPhraseTextLocator().innerText();
    await this.deleteSchoolPassPhraseInput().fill(passphraseText);
  }

  /**
   * @description Clicks on the school delete button
  */
  public async clickOnSchoolDeleteButton() {
    await this.deleteButton().click();
  }

  /**
   * @description Verifies if the status message is visible
   */
  async verifyStatusMessageIsVisible() {
    await this.statusMessage().isVisible();
  }

  /**
   * @description Verifies the scheduled message for school deletion
   */
  async verifyScheduledMessage(permanentDeleteSchedule: string, deleteInProgressStatus: string) {
    await expect(this.statusMessage()).toContainText(permanentDeleteSchedule || deleteInProgressStatus);
  }

  /**
   * @description Verifies the state of edit button is disabled
   */
  async verifyEditButtonIsDisabled() {
    await expect(this.schoolListingEditButton()).toBeDisabled();
  }
  
  /**
   * @description Verifies the delete school tooltip text
   */
  async verifyDeleteSchoolTooltipText(toolTipMessage: string) {
    await this.deleteSchoolToolTip().hover();
    await expect(this.deleteSchoolToolTipMessage()).toContainText(toolTipMessage);
  }

  /**
   * @description Verifies the tooltip is visible
   */
  async verifyVisibilityOfToolTip() {
    await expect(this.deleteSchoolToolTip()).toBeVisible();
  }

  /**
   * @description Verifies that the school name element is not clickable
   */
  async verifySchoolNameIsNotClickable() {
    const schoolNameLocator = this.schoolListingSchoolName();

    // Get the class attribute of the element
    const className = await schoolNameLocator.getAttribute('class');

    // Assert that the 'disabled' class is present in the className
    expect(className).toContain('disabled');
  }

  /**
   * @description Verifies the data is not displayed in the SA, Teacher, and Student columns of the school listing
   */
  async verifyNilUserCountSchoolListingColumn() {
    await expect(this.schoolListingNilSaCount()).toHaveText("-");
    await expect(this.schoolListingNilTeacherCount()).toHaveText("-");
    await expect(this.schoolListingNilStudentCount()).toHaveText("-");
  }

  /**
   * @description Verifies the data is displayed in the SA, Teacher, and Student columns of the school listing
   * @param saCount count of the sa user in the sa column
   * @param teacherCount count of the teacher user in the teacher column
   * @param studentCount count of the student user in the student column
   */
  async verifyUserCountSchoolListingColumn(saCount: string, teacherCount: string, studentCount: string) {
    await expect(this.schoolListingSaCount()).toHaveText(saCount);
    await expect(this.schoolListingTeacherCount()).toHaveText(teacherCount);
    await expect(this.schoolListingStudentCount()).toHaveText(studentCount);
  }

  /**
   * @description Verifies the pagination count in the district listing
   * @param minExpectedCount Expected pagination count
   */
  async verifyPaginationCount(minExpectedCount : number) {
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
   * @description Verifies that the Edit button are enabled
   */
  async verifyEditButtonIsEnabled() {
    await expect(this.schoolListingEditButton()).toBeEnabled();
  }

  /**
   * @description Verifies that an option is not present in the filter dropdown
   * @param filterOption The filter option to check
   */
  async verifyOptionNotPresentInFilter(filterOption: string) {
    await verifyElementNotInFilterDropdown(this.page, filterOption);
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
  async verifySchoolPresentInFilter(filterOption: string) {
    await this.iconFilter().click();
    while (true) {
      const isOptionPresent = await this.isOptionPresentInFilterDropdown(filterOption);
      if (isOptionPresent) {
        await this.noButtonOnRestorePopup().click();
        await waitForPreloaderToHide(this.page);
        return;
      }
      const isShowMoreButtonVisible = await this.filterSchoolShowMoreButton().isVisible();
      if (!isShowMoreButtonVisible) {
        throw new Error(`Option "${filterOption}" not found.`);
      }
      await this.filterSchoolShowMoreButton().click();
    }
  }

}
