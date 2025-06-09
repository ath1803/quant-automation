import { expect, Page } from '@playwright/test';
import { selectValueFromDropDown } from '../../zeus-playwright/quantum-common/utils/selectDropdownValue';
import { waitForPreloaderToHide } from '../../zeus-playwright/quantum-common/utils/waitForPreloader';
import {
  verifyValueNotPresentInDropDown,
  verifyValuePresentInDropDown,
} from '../../zeus-playwright/quantum-common/utils/commonFunction';
import exp from 'constants';

export class ExitCardReportPage {
    private readonly page: Page;

  // Constants for Locators
  private readonly EVALUATION_TAB = "//*[normalize-space(text())='Evaluation']";
  private readonly REPORT_TAB = "//*[normalize-space(text())='Report']";
  private readonly EXITCARD_REPORT_CLASS_DROPDOWN = "//span[text()='Select Class']";
  private readonly EXITCARD_REPORT_COURSE_DROPDOWN = "//span[text()='Select Course']";
  private readonly EXITCARD_DROPDOWN = "//span[text()='Select Exit Card']";
  private readonly EXITCARD_REPORT_GROUP_DROPDOWN = "//span[text()='Select Group']";
  private readonly EXITCARD_REPORT_ASSIGNMENT_DROPDOWN = "//span[text()='Select Assignment']";
  private readonly EXITCARD_REPORT_GO_BUTTON = "//span[normalize-space()='Go']";
  private readonly EVALUATION_OPTION = "[automation-id='teacher-evaluation-by-assignment-show-all-radio-btn'] label";
  private readonly BACK_BTN = ".back-btn"
  private readonly EVALUATION_BUTTON_FOR_STUDENT = (studentName: string) => `//*[normalize-space(text())='${studentName}']/ancestor::tr//button[@aria-label='Evaluate' and not(@disabled)]`;
  private readonly STUDENT_COUNT_IN_CIRCLE = ".highlighted-tag";
  private readonly GOT_IT_STUDENT_COUNT = "//span[normalize-space(text())='Got It']/ancestor::tr//span";

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * @description Locates the evaluation tab on exit card Report page
   */
  evaluationTab() {
    return this.page.locator(this.EVALUATION_TAB);
  }

  /**
   * @description Locates the report tab on exit card Report page
   */
  reportTab() {
    return this.page.locator(this.REPORT_TAB);
  }

  /**
   * @description Locates the class dropdown on exit card Report page
   */
  ecReportClassDropdown() {
    return this.page.locator(this.EXITCARD_REPORT_CLASS_DROPDOWN);
  }

  /**
   * @description Locates the course dropdown on exit card Report page
   */
  ecReportCourseDropdown() {
    return this.page.locator(this.EXITCARD_REPORT_COURSE_DROPDOWN);
  }

  /**
   * @description Locates the exit card dropdown on exit card Report page
   */
  ecReportExitCardDropdown() {
    return this.page.locator(this.EXITCARD_DROPDOWN);
  }

  /**
   * @description Locates the Group dropdown on exit card Report page
   */
  ecReportGroupDropdown() {
    return this.page.locator(this.EXITCARD_REPORT_GROUP_DROPDOWN);
  }

  /**
   * @description Locates the assignment dropdown on exit card Report page
   */
  ecReportAssignmentDropdown() {
    return this.page.locator(this.EXITCARD_REPORT_ASSIGNMENT_DROPDOWN);
  }

  /**
   * @description Locates the go button on exit card Report page
   */
  goButton() {
    return this.page.locator(this.EXITCARD_REPORT_GO_BUTTON);
  }

  /**
   * @description Locates the evalaution button for given student on exit card Report page
   */
  evaluationButtonForStudent(studentName: string) {
    return this.page.locator(this.EVALUATION_BUTTON_FOR_STUDENT(studentName));
  }

  /**
   * @description Locates the Got it evaluation button on exit card evaluation page
   */
  gotItEvaluationButton() {
    return this.page.locator(this.EVALUATION_OPTION).first();
  }

  /**
   * @description Locates the Partially got it evaluation button on exit card evaluation page
   */
  PartiallyGotItEvaluationButton() {
    return this.page.locator(this.EVALUATION_OPTION).nth(1);
  }

  /**
   * @description Locates the Didn't got it evaluation button on exit card evaluation page
   */
  DidntGetItEvaluationButton() {
    return this.page.locator(this.EVALUATION_OPTION).nth(2);
  }

  /**
   * @description Locates the back button on exit card Report page
   */
  backButton() {
    return this.page.locator(this.BACK_BTN);
  }

  /**
   * @description Locates the student count in circle on exit card Report page
   */
  studentCountInCircle() {
    return this.page.locator(this.STUDENT_COUNT_IN_CIRCLE);
  }

  /**
   * @description Locates the got it student count on exit card evaluation page
   */
  gotItStudentCount() {
    return this.page.locator(this.GOT_IT_STUDENT_COUNT).nth(1);
  }

  /**
   * @description Locates the got it percentage on exit card evaluation page
   */
  gotItStudentPercentage() {
    return this.page.locator(this.GOT_IT_STUDENT_COUNT).nth(2);
  }

  /**
   * @description Select data from class, course, exit card and assignment dropdown
   */
  async selectValueFromDropdown(className: string, courseName: string, exitCard: string, assignmentName: string) {
    await selectValueFromDropDown(this.page, this.ecReportClassDropdown(), className);
    await selectValueFromDropDown(this.page, this.ecReportCourseDropdown(), courseName);
    await selectValueFromDropDown(this.page, this.ecReportExitCardDropdown(), exitCard);
    await selectValueFromDropDown(this.page, this.ecReportAssignmentDropdown(), assignmentName);
  }

  /**
   * @description Click on the go button on exit card report page
   */
  async clickOnGoButton() {
    await this.goButton().click();
  }

  /**
   * @description Click on the evaluate button for the given user
   */
  async clickOnEvaluateButton(student: string) {
    await this.evaluationButtonForStudent(student).click();
  }

  /**
   * @description Evaluate the ec assignment as Got it
   */
  async clickOnGotItEvaluationOption() {
    await this.gotItEvaluationButton().click();
  }

  /**
   * @description Clicks on the back button
   */
  async clickOnBackButton() {
    await this.backButton().click();
  }

  /**
   * @description Clicks on the report tab
   */
  async clickOnReportTab() {
    await this.reportTab().click();
  }

  /**
   * @description Verify the exit card assignment reports
   * @param studentCount number of student attempts
   * @param studentPercentage percentage of the student
   */
  async verifyEcReports(studentCount: string, studentPercentage: string) {
    await expect(this.studentCountInCircle()).toContainText(studentCount);
    await expect(this.gotItStudentCount()).toContainText(studentCount);
    await expect(this.gotItStudentPercentage()).toContainText(studentPercentage);
  }

}