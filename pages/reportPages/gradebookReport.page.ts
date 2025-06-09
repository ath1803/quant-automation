import { expect, Page } from '@playwright/test';
import { selectValueFromDropDown } from '../../zeus-playwright/quantum-common/utils/selectDropdownValue';
import { waitForPreloaderToHide } from '../../zeus-playwright/quantum-common/utils/waitForPreloader';
import {
  verifyValueNotPresentInDropDown,
  verifyValuePresentInDropDown,
} from '../../zeus-playwright/quantum-common/utils/commonFunction';

export class GradebookReportPage {
  private readonly page: Page;

  // Constants for Locators
  private readonly GRADEBOOK_REPORT_SCHOOL_DROPDOWN = "mat-select[name=schoolDropdown]";
  private readonly GRADEBOOK_REPORT_TEACHER_DROPDOWN = "mat-select[name=teacherDropdown]";
  private readonly GRADEBOOK_REPORT_CLASS_DROPDOWN = "mat-select[name=classDropdown]";
  private readonly GRADEBOOK_REPORT_GROUP_DROPDOWN = "mat-select[name=groupDropdown]";
  private readonly GRADEBOOK_REPORT_GO_BUTTON = "//span[normalize-space()='Go']";
  private readonly COURSE_ON_REPORT_PAGE = (courseName: string) => `//*[normalize-space(text()) = '${courseName}']`;

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * @description Locates the school dropdown on the gradebook Report page
   */
  gradebookReportSchoolDropdown() {
    return this.page.locator(this.GRADEBOOK_REPORT_SCHOOL_DROPDOWN);
  }

  /**
   * @description Locates the teacher dropdown on the gradebook Report page
   */
  gradebookReportTeacherDropdown() {
    return this.page.locator(this.GRADEBOOK_REPORT_TEACHER_DROPDOWN);
  }

  /**
   * @description Locates the class dropdown on the gradebook Report page
   */
  gradebookReportClassDropdown() {
    return this.page.locator(this.GRADEBOOK_REPORT_CLASS_DROPDOWN);
  }

  /**
   * @description Locates the group dropdown on the gradebook Report page
   */
  gradebookReportGroupDropdown() {
    return this.page.locator(this.GRADEBOOK_REPORT_GROUP_DROPDOWN);
  }

  /**
   * @description Locates the Go button on the gradebook Report page
   */
  gradebookReportGoButton() {
    return this.page.locator(this.GRADEBOOK_REPORT_GO_BUTTON);
  }

  /**
   * @description Locates the course name on the gradebook Report page
   */
  courseOnReportPage(courseName: string) {
    return this.page.locator(this.COURSE_ON_REPORT_PAGE(courseName)).first();
  }

  /**
   * @description selects the user from dropdown on gradebook reports page
   */
  async selectUserFromDropdown(role: string, schoolName: string, teacherName: string, className: string) {
    switch (role) {
      case 'DTA':
        await selectValueFromDropDown(this.page, this.gradebookReportSchoolDropdown(), schoolName);
        await selectValueFromDropDown(this.page, this.gradebookReportTeacherDropdown(), teacherName);
        break;
      case 'SA':
        await selectValueFromDropDown(this.page, this.gradebookReportTeacherDropdown(), teacherName);
        break;
      }
      await selectValueFromDropDown(this.page, this.gradebookReportClassDropdown(), className);
  }

  /**
   * @description Verify the given school is not present in dropdown
   */
  async verifyAbsenceOfSchoolInDropdown(schoolName: string) {
    await verifyValueNotPresentInDropDown(this.page, this.gradebookReportSchoolDropdown(), schoolName)
  }

  /**
   * @description Clicks on the go button
   */
  async clickOnGoButton() {
    await this.gradebookReportGoButton().click();
  }

  /**
   * @description Verifies the report with course name is displayed
   */
  async dataOnReportPage(courseName: string) {
    await expect(this.courseOnReportPage(courseName)).toBeVisible();
  }

}