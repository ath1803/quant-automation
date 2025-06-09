import { Page } from '@playwright/test';
import { selectValueFromDropDown } from '../../zeus-playwright/quantum-common/utils/selectDropdownValue';

export class AssignmentListingPage {
  private readonly page: Page;

  // Constants for Locators
  private readonly CREATE_NEW_ASSIGNMENT_BUTTON = '.assignment-btn';
  private readonly SELECT_CONTENT_BUTTON = '#create-assignment-select-content';
  private readonly COURSE_NAME_ON_SELECTION_POPUP = '.course-name-container';
  private readonly SELECT_ALL_CHECKBOX = "//th[@role='columnheader']//mat-checkbox";
  private readonly DONE_BUTTON = '#positive-btn';
  private readonly ASSIGNMENT_NAME_INPUT_FIELD =
    "//textarea[@automation-id='assignment-name-input-field']";
  private readonly NEXT_BUTTON = "//button[@name='step1NextButton']";
  private readonly SELECT_SCHOOL_ON_ASSIGNMENT_CREATION = '#selectSchool';
  private readonly STEPPER2_GO_BUTTON = '#create-assignment-go-btn';
  private readonly ASSIGN_BUTTON_ON_STEPPER2 = '#create-assignment-assign-btn';
  private readonly YES_BUTTON_ON_POPUP = '#positive-btn';
  private readonly OK_BUTTON = '#ok-btn';
  private readonly CLASS_NAME_CHECKBOX_ON_STEPPER2 = (className: string) =>
    `//input[@aria-label= 'class-check-${className}']/parent::div/parent::div`;

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * @description Locates the create new assignment button
   */
  createNewAssignmentButton() {
    return this.page.locator(this.CREATE_NEW_ASSIGNMENT_BUTTON);
  }

  /**
   * @description Locates the select content button on assignment creation stepper 1
   */
  selectContentButton() {
    return this.page.locator(this.SELECT_CONTENT_BUTTON);
  }

  /**
   * @description Locates the course name on selection popup
   */
  courseNameOnSelectionPopup() {
    return this.page.locator(this.COURSE_NAME_ON_SELECTION_POPUP);
  }

  /**
   * @description Locates the select all checkbox
   */
  selectAllCheckbox() {
    return this.page.locator(this.SELECT_ALL_CHECKBOX);
  }

  /**
   * @description Locates the done button on select content popup
   */
  doneButton() {
    return this.page.locator(this.DONE_BUTTON);
  }

  /**
   * @description Locates the assignment name input field
   */
  assignmentName() {
    return this.page.locator(this.ASSIGNMENT_NAME_INPUT_FIELD);
  }

  /**
   * @description Locates the next button
   */
  nextButton() {
    return this.page.locator(this.NEXT_BUTTON);
  }

  /**
   * @description Locates the go button on stepper2
   */
  goButton() {
    return this.page.locator(this.STEPPER2_GO_BUTTON);
  }

  /**
   * @description Locates the assign button on stepper2
   */
  assignButtonOnStepper2() {
    return this.page.locator(this.ASSIGN_BUTTON_ON_STEPPER2);
  }

  /**
   * @description Locates the yes button on assign popup
   */
  yesButtonOnPopup() {
    return this.page.locator(this.YES_BUTTON_ON_POPUP);
  }

  /**
   * @description Locates the ok on alert popup
   */
  okButtonOnAlertPopup() {
    return this.page.locator(this.OK_BUTTON);
  }

  /**
   * @description Locates the select school dropdown on assignment creation page
   */
  selectSchoolDropdownOnCreation() {
    return this.page.locator(this.SELECT_SCHOOL_ON_ASSIGNMENT_CREATION);
  }

  /**
   * @description Locates the class on assignment assignee page
   * @param className name of the class to assign
   */
  classNameCheckboxInStepper2(className: string) {
    return this.page.locator(this.CLASS_NAME_CHECKBOX_ON_STEPPER2(className));
  }

  /**
   * @description Click on create new assignment button
   */
  async clickOnCreateNewAssignmentButton() {
    await this.createNewAssignmentButton().click();
  }

  /**
   * @description Click on select content button
   */
  async clickOnSelectContentButton() {
    await this.selectContentButton().click();
  }

  /**
   * @description Click on course name
   */
  async clickOnCourseNameOnSelectioPopup() {
    await this.courseNameOnSelectionPopup().click();
  }

  /**
   * @description Click on select all checkbox
   */
  async clickOnSelectAllCheckbox() {
    await this.selectAllCheckbox().click();
  }

  /**
   * @description Click on done button
   */
  async clickOnDoneButton() {
    await this.doneButton().click();
  }

  /**
   * @description Enter the assignment name
   */
  async enterAssignmentName(assignmentName: string) {
    await this.assignmentName().fill(assignmentName);
  }

  /**
   * @description Click on the next button
   */
  async clickOnNextButton() {
    await this.nextButton().click();
  }

  /**
   * @description Selects the school from school dropdown on assignment creation stepper2
   */
  async selectSchoolInSchoolDropdownOnCreation(schoolName: string, role: string) {
    await selectValueFromDropDown(this.page, this.selectSchoolDropdownOnCreation(), schoolName + '_' + role);
  }

  /**
   * @description Click on the go button on stepper2
   */
  async clickOnGoButton() {
    await this.goButton().click();
  }

  /**
   * @description Click on the checbox on stepper2
   * @param className class the assignment should be assigned to
   */
  async clickOnClassNameCheckbox(dtaClassName: string, saClassName: string, teacherClassName: string, role: string) {
    switch(role) {
      case 'DTA': {
        await this.classNameCheckboxInStepper2(dtaClassName).click();
        break;
      }
      case 'SA': {
        await this.classNameCheckboxInStepper2(saClassName).click();
        break;
      }
      case 'Teacher': {
        await this.classNameCheckboxInStepper2(teacherClassName).click();
        break;
      }
      default:
        throw new Error(`Unsupported user type: ${role}`);
    }
  }

  /**
   * @description Click on the Assign button on stepper2
   */
  async clickOnAssignButtonOnStepper2() {
    await this.assignButtonOnStepper2().click();
  }

  /**
   * @description Click on the yes button on assign confirmation popup
   */
  async clickOnPositiveButtonOnPopup() {
    await this.yesButtonOnPopup().click();
  }

  /**
   * @description Click on the OK button on alert popup
   */
  async clickOnOkayButton() {
    await this.okButtonOnAlertPopup().click();
  }
}
