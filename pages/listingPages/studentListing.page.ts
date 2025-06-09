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
import { TeacherListingPage } from './TeacherListing.page';
let teacherListing: TeacherListingPage;

export class StudentListingPage {
  private readonly page: Page;

  // Constants for Locators
  private readonly SELECT_STATE_DROPDOWN = "[automation-id='user-state-filter-custom-dropdown-select']";
  private readonly SELECT_DISTRICT_DROPDOWN = "[automation-id='user-district-filter-custom-dropdown-select']";
  private readonly SELECT_SCHOOL_DROPDOWN = "[automation-id='user-school-filter-custom-dropdown-select']";
  private readonly APPLY_BUTTON = '//*[@automation-id="apply-filters"]';
  private readonly NO_STUDENT_FOUND = 'div.no-user-block';
  private readonly STUDENT_NAME_IN_LISTING = 'a.student-name';
  private readonly STUDENT_DETAIL_HEADER = '//h1';
  private readonly CREATE_NEW_STUDENT_BUTTON = '#create-new-student-button';
  private readonly SELECT_SCHOOL_BUTTON = '#add-user-select-school-btn';
  private readonly STUDENT_FIRSTNAME_FIELD = "input[name='firstName']";
  private readonly STUDENT_EMAIL_FIELD = "input[name='emailId']";
  private readonly GRADE_DROPDOWN = "mat-select[name='grade']";
  private readonly CLASS_COUNT_COLUMN = "td.class-count-column > a";
  private readonly CLASS_NAME_IN_POPUP = ".class-name > div";
  private readonly CLASS_COUNT_POPUP_TITLE = "mat-header-cell.class-name";
  private readonly ADD_USER_EMAIL_ID_ERROR_MESSAGE = 'span.error-message';
  private readonly ADD_USER_CANCEL_BUTTON = '#add-user-cacel-btn';
  private readonly ACCORDION_HEADER_ON_STUDENT_DETAIL = ".accordion-header-btn div.panel-title";
  private readonly STUDENT_USERNAME_FIELD = "input[name='userName']";
  private readonly ADD_USER_BUTTON = '#add-user-save-button';
  private readonly SCHOOL_COUNT_COLUMN = "td.school-column > a";
  private readonly SCHOOL_NAME_IN_POPUP = ".sub-part > .text-content";
  private readonly SCHOOL_COUNT_POPUP_TITLE = ".sub-part > .sub-part-title";
  private readonly SCHOOL_NAME_IN_SCHOOL_SELECTION_POPUP = (schoolName: string) =>
    `//span[normalize-space(text()) = '${schoolName}']`;
  private readonly OK_BUTTON = '#ok-btn';
  private readonly CLOSE_POPUP_BUTTON = ".close-button";

  constructor(page: Page) {
    this.page = page;
    teacherListing = new TeacherListingPage(page);
  }

  /**
   * @description Locates the 'Select State' dropdown
   */
  selectStateDropdown() {
    return this.page.locator(this.SELECT_STATE_DROPDOWN);
  }

  /**
   * @description Locates the Create New Student button
   */
  createNewStudentButton() {
    return this.page.locator(this.CREATE_NEW_STUDENT_BUTTON);
  }

  /**
   * @description Locates the select school button on Student creation page
   */
  selectSchoolBtn() {
    return this.page.locator(this.SELECT_SCHOOL_BUTTON);
  }

  /**
   * @description Locator for first name field on Student creation
   */
  studentFirstNameTextField() {
    return this.page.locator(this.STUDENT_FIRSTNAME_FIELD);
  }

  /**
   * @description Locates the email id input field on Student creation page
   */
  studentEmailTextField() {
    return this.page.locator(this.STUDENT_EMAIL_FIELD);
  }

  /**
   * @description Locates the grade dropdown on student creation page
   */
  studentGradeDropdown() {
    return this.page.locator(this.GRADE_DROPDOWN);
  }

  /**
   * @description Locates the username input field on Student creation page
   */
  studentUsernameField() {
    return this.page.locator(this.STUDENT_USERNAME_FIELD);
  }

  /**
   * @description Locator for Add user button on Student creation page
   */
  addStudentUser() {
    return this.page.locator(this.ADD_USER_BUTTON);
  }

  /**
   * @description Locates the alert ok button
   */
  OkButtonOnPopup() {
    return this.page.locator(this.OK_BUTTON);
  }

  /**
   * @description Locates the close button on popup
   */
  closePopupButton() {
    return this.page.locator(this.CLOSE_POPUP_BUTTON);
  }

  /**
   * @description Locates the school in school selection popup
   */
  schoolNameInSchoolSelectionPopup(schoolName: string) {
    return this.page.locator(this.SCHOOL_NAME_IN_SCHOOL_SELECTION_POPUP(schoolName));
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
   * @description Locates the apply filters button
   */
  applyButton() {
    return this.page.locator(this.APPLY_BUTTON);
  }

  /**
   * @description Locates the "No Student Found" message
   */
  noStudentFound() {
    return this.page.locator(this.NO_STUDENT_FOUND);
  }

  /**
   * @description Locator for student name on listing page
   */
  studentNameInListing() {
    return this.page.locator(this.STUDENT_NAME_IN_LISTING);
  }

  /**
   * @description Locator for header student detail page
   */
  studentDetailHeader() {
    return this.page.locator(this.STUDENT_DETAIL_HEADER);
  }

  /**
   * @description Locates the class count in class column
   */
  classCountInColumn() {
    return this.page.locator(this.CLASS_COUNT_COLUMN).first();
  }

  /**
   * @description Locates the class name in class popup
   */
  classNameInPopup() {
    return this.page.locator(this.CLASS_NAME_IN_POPUP).first();
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
   * @description Locator for classes accordion on Student details page
   */
  classesAccordion() {
    return this.page.locator(this.ACCORDION_HEADER_ON_STUDENT_DETAIL).nth(0);
  }

  /**
   * @description Locator for courses accordion on student details page
   */
  coursesAccordion() {
    return this.page.locator(this.ACCORDION_HEADER_ON_STUDENT_DETAIL).nth(1);
  }

  /**
   * @description Locates the class count in class popup
   */
  classCountInPopup() {
    return this.page.locator(this.CLASS_COUNT_POPUP_TITLE);
  }

  /**
   * @description Apply state filter based on the stateName passed
   * @param stateName The state name to select from dropdowwn
   */
  async selectStateOnStudentListing(stateName: string) {
    await searchOptionFromDropdown(this.page, this.selectStateDropdown(), stateName);
    await this.selectStateDropdown().focus();
    await teacherListing.clickOnEscapeButtonAfterSelection();
  }

  /**
   * @description Apply district filter based on the districtName passed
   * @param districtName The district name to select from dropdowwn
   */
  async selectDistrictOnStudentListing(districtName: string) {
    await searchOptionFromDropdown(this.page, this.selectDistrictDropdown(), districtName);
    await this.selectDistrictDropdown().focus();
    await teacherListing.clickOnEscapeButtonAfterSelection();
  }

  /**
   * @description verify school is present in the dropdown
   * @param schoolName The school name to verify in the dropdown
   */
  async verifySchoolIsPresentInDropdown(schoolName: string) {
    await verifyValuePresentInDropDown(this.page, this.selectSchoolDropdown(), schoolName);
    await this.selectSchoolDropdown().focus();
    await teacherListing.clickOnEscapeButtonAfterSelection();
  }

  /**
   * @description click on the Apply filter button
   */
  async clickOnApplyFilterButton() {
    await this.applyButton().click();
    await waitForPreloaderToHide(this.page);
  }

  /**
   * @description verify the user details page header
   * @param userProfile header of the the user profile page
   */
  async verifyStudentDetailsPage(userProfile: string) {
    await expect(this.studentDetailHeader()).toHaveText(userProfile);
  }

  /**
   * @description verify the displayed user is same as the one searched
   * @param studentName student name to verify with the search
   */
  async verifyNameOfStudent(studentName: string) {
    await expect(this.studentNameInListing()).toHaveText(studentName);
  }

  /**
   * @description click on the student user in listing
   */
  async clickOnStudentName() {
    await this.studentNameInListing().click();
  }

  /**
   * @description Verify the class count in column and in popup
   */
  async verifyCountInClassColumnAndPopup(classCount: string, className: string) {
    //Verify the count in listing
    const actualCountStr = await this.classCountInColumn().textContent();
    const actualCount = parseInt(actualCountStr || "0", 10);
    const expectedCount = parseInt(classCount, 10);
    expect(actualCount).toBeGreaterThanOrEqual(expectedCount);
    //Verify the count in popup
    await this.classCountInColumn().click();
    await expect(this.classNameInPopup()).toContainText(className);
    await expect(this.classCountInPopup()).toContainText(classCount);
    await this.closePopupButton().click();
  }

  /**
   * @description Click on the create new student button
   */
  async clickOnCreateStudentButton() {
    await this.createNewStudentButton().click();
    await waitForPreloaderToHide(this.page);
  }

  /**
   * @description verifies the count of class and courses accordion
   */
  async verifyCourseAndClassCountOnUserPage(classCount: string, courseCount: number) {
    await expect(this.classesAccordion()).toContainText(classCount);
    const coursesAccordionText = await this.coursesAccordion().innerText(); // Await the innerText promise
    const match = coursesAccordionText.match(/\((\d+)\)/);
    const extractedCourseCount = match ? parseInt(match[1], 10) : 0;
    expect(extractedCourseCount).toBeGreaterThanOrEqual(courseCount);
  }

  /**
   * @description Apply state filter based on district name prefix
   * @param districtName The district name prefix
   */
  async applyStateFilter(districtName: string) {
    await searchOptionFromDropdown(this.page, this.selectDistrictDropdown(), districtName);
    await this.selectDistrictDropdown().focus();
    await teacherListing.clickOnEscapeButtonAfterSelection();
  }

  /**
   * @description Search for a student by name
   * @param studentName The student's name to search for
   */
  async searchStudentOnStudentListingPage(studentName: string) {
    await performSearch(this.page, studentName);
  }

  /**
   * @description Apply the school from filter dropdown
   * @param schoolName Name of the school to apply filter
   */
  async applySchoolFilter(schoolName: string) {
    await searchOptionFromDropdown(this.page, this.selectSchoolDropdown(), schoolName);
    await this.selectSchoolDropdown().focus();
    await teacherListing.clickOnEscapeButtonAfterSelection();
    await this.applyButton().click();
    await waitForPreloaderToHide(this.page);
  }

    /**
   * @description Apply state filter based on district name prefix
   * @param districtName The district name prefix
   */
    async applyDistrictFilter(districtName: string) {
      await this.selectDistrictOnStudentListing(districtName);
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
    await this.closePopupButton().click();
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
    await this.studentEmailTextField().pressSequentially(userEmailId);
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
   * @description Verify that no student is found with the given message
   * @param noStudentsFoundMessage The expected "No Student Found" message
   */
  async verifyStudentNotPresentInListing(noStudentsFoundMessage: string) {
    await expect(this.noStudentFound()).toHaveText(noStudentsFoundMessage);
  }

  /**
   * @description Verify that a district is not present in the district dropdown
   * @param stateName The state name to select
   * @param districtName The district name to verify is not in the dropdown
   */
  async verifyDistrictNotPresentInDropdown(stateName: string, districtName: string) {
    await this.selectStateOnStudentListing(stateName);
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
            await this.selectStateOnStudentListing(stateName);
            await this.selectDistrictOnStudentListing(districtName);
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
   * @description Create new Student user
   * @param studentName Student user first name for creating new user
   * @param grade Grade to enter in student creation grade dropdown
   * @param studentEmail Student email id for creating new user
   * @param studentUsername Student username for creating new user
   */
  public async createStudent(
    schoolName: string,
    studentName: string,
    grade: string,
    studentEmail: string,
    studentUsername: string,
    role: string,
  ) {
    const randomString = randomBytes(3)
      .toString('base64')
      .replace(/[^a-zA-Z]/g, '')
      .slice(0, 5);
    await this.createNewStudentButton().click();
    await waitForPreloaderToHide(this.page);
    switch (role) {
      case 'DTA':
        await this.selectSchoolBtn().click();
        await this.schoolNameInSchoolSelectionPopup(schoolName).click();
        await this.OkButtonOnPopup().click();
        break;
      case 'SA':
        break;
      case 'Teacher':
        break;
      default:
        throw new Error(`Unsupported role: ${role}`);
    }
    await this.studentFirstNameTextField().fill(studentName + '_' + role);
    await this.studentUsernameField().pressSequentially(
      studentUsername + '_' + role + '_' + randomString,
    );
    await this.studentEmailTextField().pressSequentially(
      role + '_' + randomString + '_' + studentEmail,
    );
    await selectValueFromDropDown(this.page, this.studentGradeDropdown(), grade);
    await this.addStudentUser().click();
    await this.OkButtonOnPopup().click();
  }
}
