import { expect, Page } from '@playwright/test';
import {
  verifyValueNotPresentInDropDown,
  verifyValuePresentInDropDown,
} from '../../zeus-playwright/quantum-common/utils/commonFunction';
import { selectValueFromDropDown } from '../../zeus-playwright/quantum-common/utils/selectDropdownValue';

export class LMSDashboard {
  private readonly page: Page;

  // Constants for Locators
  private readonly CONTENT_BUTTON_SELECTOR = "//span[@class='text-card-title']";
  private readonly DASHBOARD_SHOW_MORE_BUTTON_SELECTOR = '#show-more-button-course > button';
  private readonly DASHBOARD_UNALLOCATED_TAB_SELECTOR = "mat-button-toggle[value='unassigned']";
  private readonly DASHBOARD_SCHOOL_TAB_SELECTOR = "//mat-tab-header//span[contains(normalize-space(text()), 'School')]";
  private readonly USER_GROUP_NAME = 'div.user-group-name';
  private readonly PROFILE_BUTTON = ".profile-btn";
  private readonly ERROR_POPUP = "#dialog-title";
  private readonly OK_BUTTON = "#ok-btn";
  private readonly SCHOOL_TAB_DISTRICT_DROPDOWN_SELECTOR =
    "//mat-select[@aria-label='All Districts']";
  private readonly DASHBOARD_COURSE = (courseName: string) =>
    `//h2[normalize-space()='${courseName}']`;
  private readonly DASHBOARD_COURSE_DISTRICT_DROPDOWN = (courseName: string) =>
    `//h2[normalize-space()='${courseName}']/ancestor::div[contains(@class, 'info-wrapper')]//mat-select[@automation-id='Select District']`;
  private readonly DASHBOARD_COURSE_SCHOOL_DROPDOWN = (courseName: string) =>
    `//h2[normalize-space()='${courseName}']/ancestor::div[contains(@class, 'info-wrapper')]//mat-select[@automation-id='Select School']`;
  private readonly SCHOOL_NAME_ON_CARD = (schoolName: string) => `//h2[normalize-space(text()) = '${schoolName}']`;
  // Constants for Student dashboard Locators
  private readonly NAVBAR_DASHBOARD_BUTTON = "//button[@aria-label='dashboard']";
  private readonly STUDENT_COURSES_TAB = "//span//span[normalize-space(text())='Courses']";
  private readonly STUDENT_ASSIGNMENTS_TAB = "//span//span[normalize-space(text())='Assignments']";
  private readonly DASHBOARD_COURSE_OPEN_BUTTON = (courseName: string) =>
    `//button[@aria-label='Open ${courseName}']`;
  private readonly DASHBOARD_ASSIGNMENT_OPEN_BUTTON = (assignmentName: string) =>
    `//p[contains(text(), '${assignmentName}')]/ancestor::tr//td//button`;

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * @description Locator for Content Button
   */
  contentButton() {
    return this.page.locator(this.CONTENT_BUTTON_SELECTOR);
  }

  /**
   * @description Locator for courses tab on student dashboard page
   */
  studentCoursesTab() {
    return this.page.locator(this.STUDENT_COURSES_TAB);
  }

  /**
   * @description Locator for assignments tab on student dashboard page
   */
  studentAssignmentsTab() {
    return this.page.locator(this.STUDENT_ASSIGNMENTS_TAB);
  }

  /**
   * @description Locator for the profile button on navbar
   */
  profileButton() {
    return this.page.locator(this.PROFILE_BUTTON);
  }

  /**
   * @description Locator for the error popup on login page
   */
  errorPopup() {
    return this.page.locator(this.ERROR_POPUP);
  }

  /**
   * @description Locator for the ok button popup on login page
   */
  okButton() {
    return this.page.locator(this.OK_BUTTON);
  }

  /**
   * @description Locator for the user group name on dashboard
   */
  userGroupName() {
    return this.page.locator(this.USER_GROUP_NAME);
  }

  /**
   * @description Locates the dashboard button on navigation bar
   */
  studentDashboard() {
    return this.page.locator(this.NAVBAR_DASHBOARD_BUTTON);
  }

  /**
   * @description Locator for the open button for the given course
   * @param courseName name of the course
   */
  openButtonForACourse(courseName: string) {
    return this.page.locator(this.DASHBOARD_COURSE_OPEN_BUTTON(courseName));
  }

  /**
   * @description Locator for the open button for the given assignment
   * @param courseName name of the assignment
   */
  openButtonForAnAssignment(assignmentName: string) {
    return this.page.locator(this.DASHBOARD_ASSIGNMENT_OPEN_BUTTON(assignmentName));
  }

  /**
   * @description Locator for Show More Button
   */
  dashboardShowMoreButton() {
    return this.page.locator(this.DASHBOARD_SHOW_MORE_BUTTON_SELECTOR);
  }

  /**
   * @description Locator for Unallocated Tab
   */
  dashboardUnallocatedTab() {
    return this.page.locator(this.DASHBOARD_UNALLOCATED_TAB_SELECTOR);
  }

  /**
   * @description Locator for Schools Tab
   */
  dashboardSchoolTab() {
    return this.page.locator(this.DASHBOARD_SCHOOL_TAB_SELECTOR);
  }

  /**
   * @description Locator for District Dropdown in the School Tab
   */
  schoolTabDistrictDropdown() {
    return this.page.locator(this.SCHOOL_TAB_DISTRICT_DROPDOWN_SELECTOR);
  }

  /**
   * @description Get the locator for a specific course on the dashboard
   * @param courseName The name of the course to locate
   */
  getDashBoardCourses(courseName: string) {
    return this.page.locator(this.DASHBOARD_COURSE(courseName));
  }

  /**
   * @description Get the locator for the district dropdown specific to a course
   * @param courseName The name of the course
   */
  getDashBoardCourseDistrictDropdown(courseName: string) {
    return this.page.locator(this.DASHBOARD_COURSE_DISTRICT_DROPDOWN(courseName));
  }

  /**
   * @description Get the locator for the school dropdown specific to a course
   * @param courseName The name of the course
   */
  getDashboardCourseSchoolDropdown(courseName: string) {
    return this.page.locator(this.DASHBOARD_COURSE_SCHOOL_DROPDOWN(courseName));
  }

  /**
   * @description Locator for the school name on school card
   */
  schoolNameOnCard(schoolName: string) {
    return this.page.locator(this.SCHOOL_NAME_ON_CARD(schoolName));
  }

  /**
   * @description Check if the dashboard content is loaded
   */
  async checkIfDashboardIsLoaded() {
    await expect(this.contentButton()).toBeVisible();
  }

  /**
   * @description Click on the content dropdown button
   */
  async clickContentDropdown() {
    await this.contentButton().click();
  }

  /**
   * @description Click on the Unallocated tab
   */
  async clickOnUnallocatedTab() {
    await this.dashboardUnallocatedTab().click();
  }

  /**
   * @description Click on the Schools tab
   */
  async clickOnSchoolTab() {
    await this.dashboardSchoolTab().click();
  }

  /**
   * @description Verify that a deleted district is not present in the district dropdown in the School Tab
   * @param districtName The name of the district to verify
   */
  async verifyDistrictNotPresentInDropdownOfSchoolTab(districtName: string) {
    await verifyValueNotPresentInDropDown(
      this.page,
      this.schoolTabDistrictDropdown(),
      districtName,
    );
  }

  /**
   * @description Verify that a restored district is present in the district dropdown in the School Tab
   * @param districtName The name of the district to verify
   */
  async verifyDistrictPresentInDropdownOfSchoolTab(districtName: string) {
    await verifyValuePresentInDropDown(this.page, this.schoolTabDistrictDropdown(), districtName);
  }

  /**
   * @description Selects the district from the dropdown
   */
  async selectDistrictFromDropdownOnSchoolTab(districtName: string, role: string) {
    if (['PA', 'TSO'].includes(role) && role !== 'DTA') {
      await selectValueFromDropDown(this.page, this.schoolTabDistrictDropdown(), districtName);
    }
  }

  /**
   * @description Verifies the absence of school in school card
   * @param schoolName Name of the school to verify
   * @param shouldBeVisible Boolean flag: true to check visibility, false to check absence
   */
  async verifyPresenceOfSchoolCard(schoolName: string, shouldBeVisible: boolean) {
    const schoolCard = this.schoolNameOnCard(schoolName);
    if (shouldBeVisible) {
      await expect(schoolCard).toBeVisible();
    } else {
      await expect(schoolCard).toBeHidden();
    }
  }

  /**
   * @description Verify that a district is not present in the district dropdown of a specific course
   * @param courseName The name of the course
   * @param districtName The name of the district to verify
   */
  async verifyDistrictNotPresentInDropdownOfCourse(courseName: string, districtName: string) {
    await verifyValueNotPresentInDropDown(
      this.page,
      this.getDashBoardCourseDistrictDropdown(courseName),
      districtName,
    );
  }

  /**
   * @description Verify that a school is not present in the school dropdown of a specific course
   * @param courseName The name of the course
   * @param schoolName The name of the school to verify
   */
  async verifySchoolNotPresentInDropdownOfCourse(courseName: string, schoolName: string) {
    await verifyValueNotPresentInDropDown(
      this.page,
      this.getDashboardCourseSchoolDropdown(courseName),
      schoolName,
    );
  }

  /**
   * @description Verify that a district is present in the district dropdown of a specific course
   * @param courseName The name of the course
   * @param districtName The name of the district to verify
   */
  async verifyDistrictPresentInDropdownOfCourse(courseName: string, districtName: string) {
    await verifyValuePresentInDropDown(
      this.page,
      this.getDashBoardCourseDistrictDropdown(courseName),
      districtName,
    );
  }

  /**
   * @description Verify that a school is present in the school dropdown of a specific course
   * @param courseName The name of the course
   * @param schoolName The name of the school to verify
   */
  async verifySchoolPresentInDropdownOfCourse(courseName: string, schoolName: string) {
    await verifyValuePresentInDropDown(
      this.page,
      this.getDashboardCourseSchoolDropdown(courseName),
      schoolName,
    );
  }

  /**
   * @description Verify that a deleted district's course is present in the Unallocated tab
   * @param courseName The name of the course to verify
   */
  async verifyCoursePresentInUnallocatedTab(courseName: string) {
    await this.clickShowMoreUntilCoursePresent(courseName);
  }

  /**
   * @description Verify that a restored district's course is not present in the Unallocated tab
   * @param courseName The name of the course to verify
   */
  async verifyCourseIsNotPresentInUnallocatedTab(courseName: string) {
    const courseLocator = this.getDashBoardCourses(courseName);
    const coursePresent = await courseLocator.isVisible();
    if (coursePresent) {
      throw new Error(
        `The course "${courseName}" should not be present on the dashboard, but it was found.`,
      );
    }
  }

  /**
   * @description Click the Show More button until the specified course is visible
   * @param courseName The name of the course to wait for
   */
  async clickShowMoreUntilCoursePresent(courseName: string) {
    let coursePresent = false;
    while (!coursePresent) {
      const courseLocator = this.getDashBoardCourses(courseName);
      coursePresent = await courseLocator.isVisible();
      if (!coursePresent) {
        await this.dashboardShowMoreButton().click();
      }
    }
    if (!coursePresent) {
      throw new Error(`Course "${courseName}" not found.`);
    }
  }

  /**
   * @description Click the courses tab button on student dashboard page
   */
  async clickOnStudentCoursesTab() {
    await this.studentCoursesTab().click();
  }

  /**
   * @description Clicks on the dashboard button
   */
  async clickOnStudentDashboardButton() {
    await this.studentDashboard().click();
  }

  /**
   * @description Click the assignments tab button on student dashboard page
   */
  async clickOnStudentAssignmentsTab() {
    await this.studentAssignmentsTab().click();
  }

  /**
   * @description Click on the open button in a given course card
   * @param courseName name of the course
   */
  async clickOnOpenButtonForACourse(courseName: string) {
    await this.openButtonForACourse(courseName).click();
  }

  /**
   * @description Click on the open button in a given assignment
   * @param courseName name of the assignment
   */
  async clickOnOpenButtonForAnAssignment(assignmentName: string) {
    await this.openButtonForAnAssignment(assignmentName).click();
  }

  /**
   * @description Verifies that the user group name is visible
   */
  async verifyDashboardPageisLoaded() {
    await expect(this.profileButton()).toBeVisible();
  }
  
  /**
   * @description Verifies that the error popup is displayed
   */
  async verifyErrorPopupOnLoginPage() {
    await expect(this.errorPopup()).toBeVisible();
    await this.okButton().click();
  }

}
