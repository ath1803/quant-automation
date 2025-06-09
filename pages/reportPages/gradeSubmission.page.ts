import { Page } from '@playwright/test';
import { selectValueFromDropDown } from '../../zeus-playwright/quantum-common/utils/selectDropdownValue';

export class GradeSubmissionPage {
  private readonly page: Page;

  //Constants for Locators
  private readonly GRADE_EVALUATION_BUTTON = '//tr//td//button';
  private readonly CLASS_DROPDOWN = "//span[normalize-space(text())='Select Class']";
  private readonly GROUP_DROPDOWN = "//span[normalize-space(text())='Select Group']";
  private readonly COURSE_DROPDOWN = "//span[normalize-space(text())='Select Course']";
  private readonly ASSIGNMENT_DROPDOWN = "//span[normalize-space(text())='Select Assignment']";
  private readonly COURSE_QUIZ_DROPDOWN = "//span[normalize-space(text())='Select Course Quiz']";
  private readonly GO_BUTTON = "//button//span[contains(text(), 'Go')]";
  private readonly STRATEGIC_RUBRIC_GRADE = "//div[normalize-space(text())='Strategic']/ancestor::label";
  private readonly SUBMIT_EVALUATION_BUTTON = "button[automation-id='attempt-evaluation-submit-points-btn']";

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * @description Locates the class dropdown
   */
  classDropdown() {
    return this.page.locator(this.CLASS_DROPDOWN);
  }

  /**
   * @description Locates the grade evaluation button
   */
  gradeEvaluationButton() {
    return this.page.locator(this.GRADE_EVALUATION_BUTTON);
  }

  /**
   * @description Locates the group dropdown
   */
  groupDropdown() {
    return this.page.locator(this.GROUP_DROPDOWN);
  }

  /**
   * @description Locates the course dropdown
   */
  courseDropdown() {
    return this.page.locator(this.COURSE_DROPDOWN);
  }

  /**
   * @description Locates the assignment dropdown
   */
  assignmentDropdown() {
    return this.page.locator(this.ASSIGNMENT_DROPDOWN);
  }

  /**
   * @description Locates the course quiz dropdown
   */
  cqDropdown() {
    return this.page.locator(this.COURSE_QUIZ_DROPDOWN);
  }

  /**
   * @description Locates the go button
   */
  goButton() {
    return this.page.locator(this.GO_BUTTON).nth(1);
  }

  /**
   * @description Locates the strategic grade radio button
   */
  strategicGrade() {
    return this.page.locator(this.STRATEGIC_RUBRIC_GRADE);
  }

  /**
   * @description Locates the submit button
   */
  submitButton() {
    return this.page.locator(this.SUBMIT_EVALUATION_BUTTON);
  }

  /**
   * @description Select the class from the class dropdown
   * @param className Name of the class to select from the dropdown
   */
  async selectClassFromClassDropdown(className: string) {
    await selectValueFromDropDown(this.page, this.classDropdown(), className);
  }

  /**
   * @description Select the course from the course dropdown
   * @param courseName Name of the course to select from the dropdown
   */
  async selectCourseFromCourseDropdown(courseName: string) {
    await selectValueFromDropDown(this.page, this.courseDropdown(), courseName);
  }

  /**
   * @description Select the course quiz from the course quiz dropdown
   * @param cqName Name of the cq to select from the dropdown
   */
  async selectCqFromCourseQuizDropdown(cqName: string) {
    await selectValueFromDropDown(this.page, this.cqDropdown(), cqName);
  }

  /**
   * @description Click on Go button
   */
  async clickOnGoButton() {
    await this.goButton().click();
  }

  /**
   * @description Click on Grade evaluation button
   */
  async clickOnGradeEvalButton() {
    await this.gradeEvaluationButton().click();
  }

  /**
   * @description Click on strategic grade and submit the evaluation
   */
  async evaluateAndSubmit() {
    await this.strategicGrade().click();
    await this.submitButton().click();
  }
}
