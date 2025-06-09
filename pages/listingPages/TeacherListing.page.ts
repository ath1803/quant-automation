import { expect, Page } from '@playwright/test';
import { waitForPreloaderToHide } from '../../zeus-playwright/quantum-common/utils/waitForPreloader';
import {
  searchOptionFromDropdown,
  verifyValueNotPresentInDropDown,
  verifyValuePresentInDropDown,
} from '../../zeus-playwright/quantum-common/utils/commonFunction';
import { performSearch } from '../../zeus-playwright/quantum-common/utils/searchListing';
import { selectValueFromDropDown } from '../../zeus-playwright/quantum-common/utils/selectDropdownValue';
import { randomBytes } from 'crypto';
import { CommonConstants } from '../../zeus-playwright/quantum-common/utils/commonConstants';

export class TeacherListingPage {
  private readonly page: Page;

  // Constants for Locators
  private readonly SELECT_STATE_DROPDOWN = "[automation-id='user-state-filter-custom-dropdown-select']";
  private readonly SELECT_DISTRICT_DROPDOWN = "[automation-id='user-district-filter-custom-dropdown-select']";
  private readonly SELECT_SCHOOL_DROPDOWN = "[automation-id='user-school-filter-custom-dropdown-select']";
  private readonly APPLY_BUTTON = '//*[@automation-id="apply-filters"]';
  private readonly CLEAR_ALL_BUTTON = ".clear-all-button";
  private readonly NO_TEACHER_FOUND = 'div.no-user-block';
  private readonly TEACHER_NAME_IN_LISTING = 'a.teacher-name';
  private readonly TEACHER_DETAIL_HEADER = '//h1';
  private readonly CREATE_NEW_TEACHER_BUTTON = '#teacher-listing-add-user-button';
  private readonly SELECT_SCHOOL_BUTTON = '#add-user-select-school-btn';
  private readonly TEACHER_FIRSTNAME_FIELD = "input[name='firstName']";
  private readonly TEACHER_EMAIL_FIELD = "input[name='emailId']";
  private readonly TEACHER_USERNAME_FIELD = "input[name='userName']";
  private readonly ADD_USER_BUTTON = '#add-user-save-button';
  private readonly OK_BUTTON = '#ok-btn';
  private readonly SCHOOL_COUNT_COLUMN = "td.school-count-column > a";
  private readonly SCHOOL_NAME_IN_POPUP = ".sub-part > .text-content";
  private readonly SCHOOL_COUNT_POPUP_TITLE = ".sub-part > .sub-part-title";
  private readonly ADD_USER_EMAIL_ID_ERROR_MESSAGE = 'span.error-message';
  private readonly ADD_USER_CANCEL_BUTTON = '#add-user-cacel-btn';
  private readonly SCHOOL_NAME_IN_SCHOOL_SELECTION_POPUP = (schoolName: string) =>
    `//span[normalize-space(text()) = '${schoolName}']`;

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * @description Locates the 'Select State' dropdown
   */
  selectStateDropdown() {
    return this.page.locator(this.SELECT_STATE_DROPDOWN);
  }

  /**
   * @description Locates the 'Select District' dropdown
   */
  selectDistrictDropdown() {
    return this.page.locator(this.SELECT_DISTRICT_DROPDOWN);
  }

  /**
   * @description Locates the 'Select School' dropdown
   */
  selectSchoolDropdown() {
    return this.page.locator(this.SELECT_SCHOOL_DROPDOWN);
  }

  /**
   * @description Locates the clear all button
   */
  clearAllButton() {
    return this.page.locator(this.CLEAR_ALL_BUTTON);
  }

  /**
   * @description Locates the apply filters button
   */
  applyButton() {
    return this.page.locator(this.APPLY_BUTTON);
  }

  /**
   * @description Locator for teacher name on listing page
   */
  teacherNameInListing() {
    return this.page.locator(this.TEACHER_NAME_IN_LISTING);
  }

  /**
   * @description Locates the "No Teacher Found" message
   */
  noTeacherFound() {
    return this.page.locator(this.NO_TEACHER_FOUND);
  }

  /**
   * @description Locates the select school button on Teacher creation page
   */
  selectSchoolBtn() {
    return this.page.locator(this.SELECT_SCHOOL_BUTTON);
  }

  /**
   * @description Locator for first name field on Teacher creation
   */
  TeacherFirstNameTextField() {
    return this.page.locator(this.TEACHER_FIRSTNAME_FIELD);
  }

  /**
   * @description Locates the email id input field on Teacher creation page
   */
  TeacherEmailTextField() {
    return this.page.locator(this.TEACHER_EMAIL_FIELD);
  }

  /**
   * @description Locates the username input field on Teacher creation page
   */
  TeacherUsernameField() {
    return this.page.locator(this.TEACHER_USERNAME_FIELD);
  }

  /**
   * @description Locator for Add user button on Teacher creation page
   */
  AddTeacherUser() {
    return this.page.locator(this.ADD_USER_BUTTON);
  }

  /**
   * @description Locates the alert ok button
   */
  OkButtonOnPopup() {
    return this.page.locator(this.OK_BUTTON);
  }

  /**
   * @description Locates the school count in school column
   */
  schoolCountInColumn() {
    return this.page.locator(this.SCHOOL_COUNT_COLUMN).first();
  }

  /**
   * @description Locates the school name in school popup
   */
  schoolNameInPopup() {
    return this.page.locator(this.SCHOOL_NAME_IN_POPUP).first();
  }

  /**
   * @description Locates the school count in school popup
   */
  schoolCountInPopup() {
    return this.page.locator(this.SCHOOL_COUNT_POPUP_TITLE);
  }

  /**
   * @description Locator for Add User email ID error message
   */
  addUserEmailIdErrorMessage() {
    return this.page.locator(this.ADD_USER_EMAIL_ID_ERROR_MESSAGE);
  }

  /**
   * @description Locator for Add User cancel button
   */
  addUserCancelButton() {
    return this.page.locator(this.ADD_USER_CANCEL_BUTTON);
  }

  /**
   * @description Locates the Create New Teacher button
   */
  createNewTeacherButton() {
    return this.page.locator(this.CREATE_NEW_TEACHER_BUTTON);
  }

  /**
   * @description Locates the school in school selection popup
   */
  schoolNameInSchoolSelectionPopup(schoolName: string) {
    return this.page.locator(this.SCHOOL_NAME_IN_SCHOOL_SELECTION_POPUP(schoolName));
  }

  /**
   * @description Locator for header teacher detail page
   */
  teacherDetailHeader() {
    return this.page.locator(this.TEACHER_DETAIL_HEADER);
  }

  /**
   * @description Apply district filter based on the districtName passed
   * @param districtName The district name to select from dropdowwn
   */
  async selectDistrictOnTeacherListing(districtName: string) {
    await searchOptionFromDropdown(this.page, this.selectDistrictDropdown(), districtName);
    await this.selectDistrictDropdown().focus();
    this.clickOnEscapeButtonAfterSelection();
  }

  /**
   * @description Apply state filter based on the stateName passed
   * @param stateName The state name to select from dropdowwn
   */
  async selectStateOnTeacherListing(stateName: string) {
    await searchOptionFromDropdown(this.page, this.selectStateDropdown(), stateName);
    await this.selectStateDropdown().focus();
    this.clickOnEscapeButtonAfterSelection();
  }

  /**
   * @description verify school is present in the dropdown
   * @param schoolName The school name to verify in the dropdown
   */
  async verifySchoolIsPresentInDropdown(schoolName: string) {
    await verifyValuePresentInDropDown(this.page, this.selectSchoolDropdown(), schoolName);
  }

  /**
   * @description click on the Apply filter button
   */
  async clickOnApplyFilterButton() {
    await this.applyButton().click();
    await waitForPreloaderToHide(this.page);
  }

  /**
   * @description Apply state filter based on district name prefix
   * @param districtName The district name prefix
   */
  async applyDistrictFilter(districtName: string) {
    await this.selectDistrictOnTeacherListing(districtName);
    await this.applyButton().click();
    await waitForPreloaderToHide(this.page);
  }

  /**
   * @description Search for a teacher by name
   * @param teacherName The teacher's name to search for
   */
  async searchTeacherOnTeacherListingPage(teacherName: string) {
    await performSearch(this.page, teacherName);
  }

  /**
   * @description verify the displayed user is same as the one searched
   * @param teacherName teacher name to verify with the search
   */
  async verifyNameOfTeacher(teacherName: string) {
    await expect(this.teacherNameInListing()).toHaveText(teacherName);
  }

  /**
   * @description click on the teacher user in listing
   */
  async clickOnTeacherName() {
    await this.teacherNameInListing().click();
  }

  /**
   * @description Helper function to escape from dropdown
   */
  public async clickOnEscapeButtonAfterSelection() {
    while (await this.clearAllButton().isVisible()) {
      await this.page.keyboard.press('Escape');
      await this.page.waitForTimeout(CommonConstants.SLEEPTIME);
    }
  }

  /**
   * @description verify the user details page header
   * @param userProfile header of the user profile page
   */
  async verifyTeacherDetailsPage(userProfile: string) {
    await expect(this.teacherDetailHeader()).toHaveText(userProfile);
  }

  /**
   * @description Verify that no teacher is found with the given message
   * @param noTeacherFoundMessage The expected "No Teacher Found" message
   */
  async verifyTeacherNotPresentInListing(noTeacherFoundMessage: string) {
    await expect(this.noTeacherFound()).toHaveText(noTeacherFoundMessage);
  }

  /**
   * @description Verify that a district is not present in the district dropdown
   * @param stateName The state name to select
   * @param districtName The district name to verify is not in the dropdown
   */
  async verifyDistrictNotPresentInDropdown(stateName: string, districtName: string) {
    await this.selectStateOnTeacherListing(stateName);
    await verifyValueNotPresentInDropDown(this.page, this.selectDistrictDropdown(), districtName);
  }

  /**
   * @description Verify that a school is not present in the school dropdown
   * @param stateName The state name to select
   * @param districtName The district name to select
   * @param schoolName to verify in the dropdown
   */
  async verifySchoolPresenceInDropdown(stateName: string, districtName: string, schoolName: string, role: string, checkForPresence: boolean) {
    try {
        if (['PA', 'TSO'].includes(role) && role !== 'DTA') {
            await this.selectStateOnTeacherListing(stateName);
            await this.selectDistrictOnTeacherListing(districtName);
        }

        if (checkForPresence) {
            await verifyValuePresentInDropDown(this.page, this.selectSchoolDropdown(), schoolName);
        } else {
            await verifyValueNotPresentInDropDown(this.page, this.selectSchoolDropdown(), schoolName);
        }
    } catch (error) {
        console.log('Error verifying school presence in dropdown:', error instanceof Error ? error.message : String(error));
    }
  }

  /**
   * @description Apply the school from filter dropdown
   * @param schoolName Name of the school to apply filter
   */
  async applySchoolFilter(schoolName: string) {
    await searchOptionFromDropdown(this.page, this.selectSchoolDropdown(), schoolName);
    await this.clearAllButton().isEnabled();
    await this.selectSchoolDropdown().focus();
    this.clickOnEscapeButtonAfterSelection();
    await this.applyButton().click();
    await waitForPreloaderToHide(this.page);
  }

  /**
   * @description Verify the school count in column and in popup
   */
  async verifyCountInSchoolColumnAndPopup(schoolCount: string, schoolName: string) {
    await expect(this.schoolCountInColumn()).toHaveText(schoolCount);
    await this.schoolCountInColumn().click();
    await expect(this.schoolNameInPopup()).toHaveText(schoolName);
    await expect(this.schoolCountInPopup()).toContainText(schoolCount);
  }

  /**
   * @description Click on the create new teacher button
   */
  async clickOnCreateTeacherButton() {
    await this.createNewTeacherButton().click();
    await waitForPreloaderToHide(this.page);
  }

  /**
   * @description verify absence of the given school in select school popup
   */
  async verifyAbsenceOfSchoolInOptionPopup(schoolName: string) {
    await this.selectSchoolBtn().click();
    await expect(this.schoolNameInSchoolSelectionPopup(schoolName)).toBeHidden();
    await this.OkButtonOnPopup().click();
  }

  /**
   * @description select given school from the school popup
   */
  async selectSchoolFromOptionPopup(schoolName: string) {
    await this.selectSchoolBtn().click();
    await this.schoolNameInSchoolSelectionPopup(schoolName).click();
    await this.OkButtonOnPopup().click();
  }

  /**
   * @description Fill the email ID of a deleted school user
   * @param userEmailId The email ID to fill in the field
   */
  async fillEmailIdOfDeletedSchoolUser(userEmailId: string) {
    await this.TeacherEmailTextField().pressSequentially(userEmailId);
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
   * @description Create new Teacher user
   * @param teacherName Teacher user first name for creating new user
   * @param teacherEmail Teacher email id for creating new user
   * @param teacherUsername Teacher username for creating new user
   */
  public async createTeacher(
    schoolName: string,
    teacherName: string,
    teacherEmail: string,
    teacherUsername: string,
    role: string,
    addRoleInSchool: boolean
  ) {
    const randomString = randomBytes(3)
      .toString('base64')
      .replace(/[^a-zA-Z]/g, '')
      .slice(0, 5);
    await this.createNewTeacherButton().click();
    await waitForPreloaderToHide(this.page);
    switch (role) {
      case 'DTA':
        if (addRoleInSchool) {
          await this.selectSchoolBtn().click();
          await this.schoolNameInSchoolSelectionPopup(schoolName + '_' + role).click();
          await this.OkButtonOnPopup().click();
        } else {
          await this.selectSchoolBtn().click();
          await this.schoolNameInSchoolSelectionPopup(schoolName).click();
          await this.OkButtonOnPopup().click();
        }
        break;
      case 'SA':
        break;
      default:
        throw new Error(`Unsupported role: ${role}`);
    }
    await this.TeacherFirstNameTextField().fill(teacherName + '_' + role);
    await this.TeacherUsernameField().pressSequentially(
      teacherUsername + '_' + role + '_' + randomString,
    );
    await this.TeacherEmailTextField().pressSequentially(
      role + '_' + randomString + '_' + teacherEmail,
    );
    await this.AddTeacherUser().click();
    await this.OkButtonOnPopup().click();
    await expect(this.createNewTeacherButton()).toBeVisible();
  }
}
