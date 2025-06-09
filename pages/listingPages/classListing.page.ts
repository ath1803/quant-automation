import { expect, Page } from '@playwright/test';
import { performSearch } from '../../zeus-playwright/quantum-common/utils/searchListing';
import { waitForPreloaderToHide } from '../../zeus-playwright/quantum-common/utils/waitForPreloader';
import { selectValueFromDropDown } from '../../zeus-playwright/quantum-common/utils/selectDropdownValue';
import { CommonConstants } from '../../zeus-playwright/quantum-common/utils/commonConstants';

export class ClassListingPage {
  private readonly page: Page;

  // Constants for Locators
  private readonly NO_CLASS_FOUND = '.no-class-block';
  private readonly CLASS_NAME_IN_LISTING = '.group-name-container a';
  private readonly CREATE_NEW_CLASS_BUTTON = '#class-listing-admin-create-class-button';
  private readonly SELECT_SCHOOL_DROPDOWN = "mat-select[name='school']";
  private readonly CLASS_NAME_INPUT_FIELD = "input[name='className']";
  private readonly SELECT_SUBJECT_BUTTON = '#select-subject-btn';
  private readonly SELECT_GRADE_BUTTON = '#select-grade-btn';
  private readonly SELECT_SUBJECT_CHECKBOXES = 'div#alert-dialog-content mat-checkbox';
  private readonly YES_BUTTON_ON_POPUP = '#positive-btn';
  private readonly DONE_BUTTON = '#ok-btn';
  private readonly SELECT_ALL_GRADES = "//span[text()='Select All']";
  private readonly SCHOOL_YEAR_CHECKBOX = '.sy-term-checkbox mat-checkbox';
  private readonly SELECT_TEACHER_BUTTON = '#select-teacher-btn';
  private readonly ADD_TEACHER_BUTTON = '#teacher-listing-add-student-to-class-button';
  private readonly ADD_STUDENT_BUTTON = '#add-student-btn';
  private readonly SELECT_ALL_TEACHER_CHECKBOX =
    "//th[@role='columnheader']//mat-checkbox";
  private readonly SAVE_BUTTON = '.save-btn';
  private readonly ADD_BUTTON_ON_LISTING = "//button[@aria-label='Add']";
  private readonly CREATE_GROUP_BUTTON = "//button[@aria-label='Create Group']";
  private readonly GROUP_NAME_INPUT_FIELD = "//input[@name='groupName']";
  private readonly GROUP_NAME_SUCCESS_MESSAGE = '.success-message';
  private readonly TEXT_ON_POPUP = '#alert-dialog-content div';
  private readonly CREATE_CLASS_IN_QUANTUM_BUTTON =
    "//button[@aria-labelledby='create-class-thinklink']";
  private readonly ALLOCATE_COURSE_BUTTON = '#assign-course-btn';
  private readonly COURSE_RADIO_BUTTON_ON_ALLOCATE_COURSE_PAGE =
    "//mat-radio-button[@name='courseSelection']";
  private readonly ALLOCATE_COURSE_NEXT_BUTTON = "//button[@name='step1NextButton']";
  private readonly ASSIGN_ALLOCATED_COURSE_BUTTON = '#assign-btn';
  private readonly UNASSIGN_COURSE_BUTTON_IN_OPTIONS = "//span[normalize-space(text())='Unallocate Course']/ancestor::button";
  private readonly COURSE_ACTION_BUTTON = (courseName: string) =>
    `//a[normalize-space(text())='${courseName}']/ancestor-or-self::*/ancestor::tr//button`;

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * @description Locator for "No class found" message
   */
  noClassFound() {
    return this.page.locator(this.NO_CLASS_FOUND);
  }

  /**
   * @description Locator for class name displayed on listing page
   */
  classNameInListing() {
    return this.page.locator(this.CLASS_NAME_IN_LISTING);
  }

  /**
   * @description Locates the Create New class button
   */
  createNewClassButton() {
    return this.page.locator(this.CREATE_NEW_CLASS_BUTTON);
  }

  /**
   * @description Locator for the select school dropdown
   */
  selectSchoolDropdown() {
    return this.page.locator(this.SELECT_SCHOOL_DROPDOWN);
  }

  /**
   * @description Locator for the class name input field on creation page
   */
  classNameInputField() {
    return this.page.locator(this.CLASS_NAME_INPUT_FIELD);
  }

  /**
   * @description Locator for the select subject button
   */
  selectSubjectButton() {
    return this.page.locator(this.SELECT_SUBJECT_BUTTON);
  }

  /**
   * @description Locator for the select grade button
   */
  selectGradeButton() {
    return this.page.locator(this.SELECT_GRADE_BUTTON);
  }

  /**
   * @description Locator for the select all grades checkbox
   */
  selectAllGradesCheckbox() {
    return this.page.locator(this.SELECT_ALL_GRADES);
  }

  /**
   * @description Locator for the subject checkboxes
   */
  selectSubjectCheckbox() {
    return this.page.locator(this.SELECT_SUBJECT_CHECKBOXES);
  }

  /**
   * @description Locator for the Done and Okay button
   */
  doneButton() {
    return this.page.locator(this.DONE_BUTTON);
  }

  /**
   * @description Locator for the message on success popup
   */
  messageOnClassCreationSuccessPopup() {
    return this.page.locator(this.TEXT_ON_POPUP);
  }

  /**
   * @description Locator for the unassign course button in options
   */
  unassignCourseButton() {
    return this.page.locator(this.UNASSIGN_COURSE_BUTTON_IN_OPTIONS);
  }

  /**
   * @description Locator for the school year checkbox
   */
  setSchoolYearAsTermCheckbox() {
    return this.page.locator(this.SCHOOL_YEAR_CHECKBOX);
  }

  /**
   * @description Locator for the select teacher button
   */
  selectTeacherButton() {
    return this.page.locator(this.SELECT_TEACHER_BUTTON);
  }

  /**
   * @description Locator for the add teacher button
   */
  addTeacherButton() {
    return this.page.locator(this.ADD_TEACHER_BUTTON);
  }

  /**
   * @description Locator for the add student button
   */
  addStudentButton() {
    return this.page.locator(this.ADD_STUDENT_BUTTON).first();
  }

  /**
   * @description Locator for the select all teacher checkbox
   */
  selectAllTeacherCheckbox() {
    return this.page.locator(this.SELECT_ALL_TEACHER_CHECKBOX);
  }

  /**
   * @description Locator for the save button
   */
  saveButton() {
    return this.page.locator(this.SAVE_BUTTON);
  }

  /**
   * @description Locator for the add button for class on listing page
   */
  addButtonOnListingPage() {
    return this.page.locator(this.ADD_BUTTON_ON_LISTING);
  }

  /**
   * @description Locator for the create group button
   */
  createGroupButton() {
    return this.page.locator(this.CREATE_GROUP_BUTTON);
  }

  /**
   * @description Locator for the group name input field
   */
  groupNameInput() {
    return this.page.locator(this.GROUP_NAME_INPUT_FIELD);
  }

  /**
   * @description Locator for the group name success message
   */
  groupNameSuccessMessage() {
    return this.page.locator(this.GROUP_NAME_SUCCESS_MESSAGE);
  }

  /**
   * @description Locator for the create class in quantum button
   */
  createClassInQuantum() {
    return this.page.locator(this.CREATE_CLASS_IN_QUANTUM_BUTTON);
  }

  /**
   * @description Locator for allocate course button
   */
  allocateCourseButton() {
    return this.page.locator(this.ALLOCATE_COURSE_BUTTON).first();
  }

  /**
   * @description Locator for the course radio button
   */
  courseRadioButton() {
    return this.page.locator(this.COURSE_RADIO_BUTTON_ON_ALLOCATE_COURSE_PAGE);
  }

  /**
   * @description Locator for the next button
   */
  nextButtonOnAllocateCourse() {
    return this.page.locator(this.ALLOCATE_COURSE_NEXT_BUTTON);
  }

  /**
   * @description Locator for the allocate button after selecting course
   */
  assignButtonOnAllocateCourse() {
    return this.page.locator(this.ASSIGN_ALLOCATED_COURSE_BUTTON);
  }

  /**
   * @description Locates the action button of the given course on class details page
   * @param className name of the course
   */
  courseNameActionButton(courseName: string) {
    return this.page.locator(this.COURSE_ACTION_BUTTON(courseName));
  }

  /**
   * @description Locates the yes button on assign popup
   */
  yesButtonOnPopup() {
    return this.page.locator(this.YES_BUTTON_ON_POPUP);
  }

  /**
   * @description Search for a class by its name on the class listing page
   * @param className The name of the class to search for
   */
  async searchClassOnClassListingPage(className: string) {
    await performSearch(this.page, className);
  }

  /**
   * @description Search for a course by its name on the Allocate course page
   * @param courseName The name of the course to search for
   */
  async searchCourseOnAllocateCoursePage(courseName: string) {
    await performSearch(this.page, courseName);
  }

  /**
   * @description Verify that a class is not present in the listing
   * @param noClassFoundMessage Expected message indicating that the class was not found
   */
  async verifyClassNotPresentInListing(noClassFoundMessage: string) {
    await expect(this.noClassFound()).toHaveText(noClassFoundMessage);
  }

  /**
   * @description Verify that a class present on the listing page
   * @param className Class name to verify on the class listing page
   */
  public async verifyVisibilityOfClassOnClassListingPage(className: string) {
    await expect(this.classNameInListing()).toContainText(className);
  }

  /**
   * @description Click on the class name on listing page
   */
  public async clickOnClassNameInListing() {
    await this.classNameInListing().click();
  }

  /**
   * @description Click on the course radio button and next button on Allocate course page
   */
  public async clickOnCourseRadioButton() {
    await this.courseRadioButton().click();
    await this.nextButtonOnAllocateCourse().click();
  }

  /**
   * @description Click on the allocate course button after selecting course
   */
  public async clickOnAllocateCourseAfterSelectingCourse() {
    await this.assignButtonOnAllocateCourse().click();
    await this.doneButton().click();
  }

  /**
   * @description Click on the allocate course button
   */
  public async clickOnAllocateCourseButton() {
    await this.allocateCourseButton().click();
  }

  /**
   * @description Click on create new class button and select school from dropdown
   * @param schoolName school to select from the dropdown
   */
  async clickOnCreateNewClassButtonAndSelectSchool(schoolName: string, role: string) {
    await this.createNewClassButton().click();
    await waitForPreloaderToHide(this.page);
    await selectValueFromDropDown(this.page, this.selectSchoolDropdown(), schoolName + '_' + role);
  }

  /**
   * @description fill metadata for class creation
   * @param className class name for the new class
   * @param teacherName teacher to add in the class
   */
  async createClassAsDTA(className: string, teacherName: string) {
    await this.classNameInputField().fill(className);
    await this.selectSubjectButton().click();
    const checkboxesCount = await this.selectSubjectCheckbox().count();
    for (let i = 0; i < checkboxesCount; i++) {
      await this.selectSubjectCheckbox().nth(i).click();
    }
    await this.doneButton().click();
    await this.selectGradeButton().click();
    await this.selectAllGradesCheckbox().click();
    await this.yesButtonOnPopup().click();
    await this.setSchoolYearAsTermCheckbox().click();
    await this.selectTeacherButton().click();
    await performSearch(this.page, teacherName);
    await this.selectAllTeacherCheckbox().click();
    await this.addTeacherButton().click();
  }

  /**
   * @description save created class
   * @param successPopupMessage Success popup message to verify
   */
  async clickOnSaveClassButton(successPopupMessage: string) {
    await this.saveButton().click();
    await expect(this.messageOnClassCreationSuccessPopup()).toContainText(successPopupMessage);
    await this.doneButton().click();
  }

  /**
   * @description Click on the add button from the class options
   */
  async clickOnAddButtonForClass() {
    await this.addButtonOnListingPage().click();
    await this.createGroupButton().click();
  }

  /**
   * @description enter the group name
   */
  async enterGroupName(groupName: string) {
    await this.groupNameInput().fill(groupName);
    await this.saveButton().click();
  }

  /**
   * @description Click on save group button
   * @param successMessage Group name success message
   */
  async clickOnSaveGroup(successMessage: string) {
    const actualText = await this.groupNameSuccessMessage().textContent();
    await expect(actualText?.trim()).toBe(successMessage);
    const isDoneButtonVisible = await this.doneButton().isVisible();
    if (isDoneButtonVisible) {
      await this.doneButton().click();
    }
    await this.saveButton().click();
  }

  /**
   * @description fill metadata for class creation
   * @param className class name for the new class
   * @param teacherName teacher to add in the class
   */
  async createClassAsSa(className: string, teacherName: string) {
    await this.createNewClassButton().click();
    await waitForPreloaderToHide(this.page);
    await this.classNameInputField().fill(className);
    await this.selectSubjectButton().click();
    const checkboxesCount = await this.selectSubjectCheckbox().count();
    for (let i = 0; i < checkboxesCount; i++) {
      await this.selectSubjectCheckbox().nth(i).click();
    }
    await this.doneButton().click();
    await this.selectGradeButton().click();
    await this.selectAllGradesCheckbox().click();
    await this.yesButtonOnPopup().click();
    await this.setSchoolYearAsTermCheckbox().click();
    await this.selectTeacherButton().click();
    await performSearch(this.page, teacherName);
    await this.selectAllTeacherCheckbox().click();
    await this.addTeacherButton().click();
  }

  /**
   * @description fill metadata for class creation
   * @param className class name for the new class
   * @param teacherName teacher to add in the class
   */
  async createClassAsTeacher(className: string) {
    await this.createNewClassButton().click();
    await this.createClassInQuantum().click();
    await waitForPreloaderToHide(this.page);
    await this.classNameInputField().fill(className);
    await this.selectSubjectButton().click();
    const checkboxesCount = await this.selectSubjectCheckbox().count();
    for (let i = 0; i < checkboxesCount; i++) {
      await this.selectSubjectCheckbox().nth(i).click();
    }
    await this.doneButton().click();
    await this.selectGradeButton().click();
    await this.selectAllGradesCheckbox().click();
    await this.yesButtonOnPopup().click();
    await this.setSchoolYearAsTermCheckbox().click();
  }

  /**
   * @description unassign the course from class
   */
  async unAssignCourse(courseName: string) {
    const actionButton = this.courseNameActionButton(courseName);
    await actionButton.scrollIntoViewIfNeeded();
    await actionButton.evaluate((el) => {
      const rect = el.getBoundingClientRect();
      window.scrollBy({
        top: rect.top + window.scrollY - window.innerHeight / 2,
        behavior: 'instant'
      });
    });
    await actionButton.click();
    await this.page.waitForTimeout(CommonConstants.SLEEPTIME);
    await this.unassignCourseButton().click();
    await this.yesButtonOnPopup().click();
    await this.doneButton().click();
  }
}
