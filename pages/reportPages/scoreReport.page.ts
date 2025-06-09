import { expect, Page } from '@playwright/test';
import { selectValueFromDropDown } from '../../zeus-playwright/quantum-common/utils/selectDropdownValue';
import { waitForPreloaderToHide } from '../../zeus-playwright/quantum-common/utils/waitForPreloader';
import {
  verifyValueNotPresentInDropDown,
  verifyValuePresentInDropDown,
} from '../../zeus-playwright/quantum-common/utils/commonFunction';
import { CommonConstants } from '../../zeus-playwright/quantum-common/utils/commonConstants';

export class ScoreReportPage {
  private readonly page: Page;

  // Constants for Locators
  private readonly SCORE_REPORT_COURSE = "//*[normalize-space(text())='Course']/ancestor::div[1]//mat-select";
  private readonly SCORE_REPORT_DISTRICT_DROPDOWN = "mat-select[name='district']";
  private readonly SCORE_REPORT_SCHOOL_DROPDOWN = "mat-select[name='school']";
  private readonly SCORE_REPORT_SCHOOL_YEAR_DROPDOWN = "mat-select[name='schoolYearDropdown']";
  private readonly SCORE_REPORT_GO_BUTTON = "//span[normalize-space()='Go']";
  private readonly SCORE_REPORT_PREVIOUS_SCHOOL_YEAR = "//mat-button-toggle[@value='previous']";
  private readonly SCORE_REPORT_TABLE_VIEW_BUTTON = '#performance-report-table-view-btn-button';
  private readonly DATA_ON_REPORT_PAGE = (orgName: string) => `//*[normalize-space(text())='${orgName}']`;
  private readonly LEARNING_OBJECT_TAB = "(//mat-button-toggle[contains(@class, 'assignment-btn')]//button)[2]";

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * @description Locates the Course dropdown on the Score Report page
   */
  scoreReportCourse() {
    return this.page.locator(this.SCORE_REPORT_COURSE);
  }

  /**
   * @description Locates the District dropdown on the Score Report page
   */
  scoreReportDistrictDropdown() {
    return this.page.locator(this.SCORE_REPORT_DISTRICT_DROPDOWN);
  }

  /**
   * @description Locates the school dropdown on the Score Report page
   */
  scoreReportSchoolDropdown() {
    return this.page.locator(this.SCORE_REPORT_SCHOOL_DROPDOWN);
  }

  /**
   * @description Locates the school year dropdown on the Score report page
   */
  scoreReportSchoolYearDropdown() {
    return this.page.locator(this.SCORE_REPORT_SCHOOL_YEAR_DROPDOWN);
  }

  /**
   * @description Locates the "Go" button to generate the score report
   */
  scoreReportGoButton() {
    return this.page.locator(this.SCORE_REPORT_GO_BUTTON);
  }

  /**
   * @description Locates the toggle for selecting the previous school year in the score report
   */
  scoreReportPreviousSchoolYear() {
    return this.page.locator(this.SCORE_REPORT_PREVIOUS_SCHOOL_YEAR);
  }

  /**
   * @description Locates the button to switch to table view on the score report page
   */
  scoreReportTableViewButton() {
    return this.page.locator(this.SCORE_REPORT_TABLE_VIEW_BUTTON);
  }

  /**
   * @description Locates the organization report on score report page
   */
  dataOnScoreReportPage(orgName: string) {
    return this.page.locator(this.DATA_ON_REPORT_PAGE(orgName));
  }

  /**
   * @description Locator for the learning object tab on student report page
   */
  learningObjectTab() {
    return this.page.locator(this.LEARNING_OBJECT_TAB);
  }

  /**
   * @description Selects a course from the Course dropdown
   * @param courseName The name of the course to select from the dropdown
   */
  async selectCourseOnScoreReportPage(courseName: string) {
    await selectValueFromDropDown(this.page, this.scoreReportCourse(), courseName);
    await waitForPreloaderToHide(this.page);
  }

  /**
   * @description Selects a district from the district dropdown
   * @param districtName The name of the district to select from the dropdown
   */
  async selectDistrictFromDropdown(districtName: string) {
    await selectValueFromDropDown(this.page, this.scoreReportDistrictDropdown(), districtName);
    await waitForPreloaderToHide(this.page);
  }

  /**
   * @description Selects a school year from the sy dropdown
   * @param schoolYear The school year to select from the dropdown
   */
  async selectSYFromDropdown(schoolYear: string) {
    await selectValueFromDropDown(this.page, this.scoreReportSchoolYearDropdown(), schoolYear);
    await waitForPreloaderToHide(this.page);
  }

  /**
   * @description Verifies that a deleted district is not present in the District dropdown
   * @param districtName The name of the district to verify is absent in the dropdown
   */
  async verifyDistrictNotPresentInDropdown(districtName: string) {
    await verifyValueNotPresentInDropDown(
      this.page,
      this.scoreReportDistrictDropdown(),
      districtName,
    );
  }

  /**
   * @description Verifies that a deleted school is not present in the school dropdown
   * @param schoolName The name of the school to verify is absent in the dropdown
   */
  async verifySchoolNotPresentInDropdown(schoolName: string) {
    await verifyValueNotPresentInDropDown(this.page, this.scoreReportSchoolDropdown(), schoolName)}

  /**
   * @description Clicks on the learning object tab
   */
  async clickOnLearningObjectTab() {
    await this.learningObjectTab().click();
  }

  /**
   * @description Clicks on the "Go" button to generate the report with the selected filters
   */
  async clickOnGoButton() {
    await this.scoreReportGoButton().click();
    await waitForPreloaderToHide(this.page);
  }

  /**
   * @description Clicks on the Table View button to switch the report display format
   */
  async clickOnTableViewButton() {
    await this.scoreReportTableViewButton().click();
    await waitForPreloaderToHide(this.page);
    await this.page.waitForTimeout(CommonConstants.ANIMATION_SLEEP * 2); //Required sleep for the table view to load on Score report page
  }

  /**
   * @description Verifies that report of an Organization is not present on the score report page
   * @param orgName Name of the Organization to verify
   */
  async verifyDataIsNotPresentOnReportPage(orgName: string) {
    await expect(this.dataOnScoreReportPage(orgName)).toBeHidden();
  }

  /**
   * @description Verifies that report of an Organization is present on the score report page
   * @param orgName Name of the Organization to verify
   */
  async verifyDataIsPresentOnReportPage(orgName: string, role: string, testData: any, dataSection: keyof typeof testData) {
    switch (role) {
      case 'PA':
      case 'TSO':
        orgName = orgName;
        break;
      case 'DTA':
        orgName = testData[dataSection].schoolName;
        break;
      case 'SA':
        orgName = testData[dataSection].className;
        break;
      case 'Teacher':
        orgName = testData[dataSection].className;
        break;
      case 'Student':
        orgName = testData[dataSection].teacherCqName;
        break;
      default:
        throw new Error(`Unsupported role: ${role}`);
    }
    await expect(this.dataOnScoreReportPage(orgName)).toBeVisible();
  }

  /**
   * @description Selects the previous school year option to filter the score report
   */
  async selectPreviousSchoolYear() {
    await this.scoreReportPreviousSchoolYear().click();
  }

  /**
   * @description verify district is present in the dropdown and select the district
   * @param districtName The district name to select from the dropdown
   * @param allDistricts Another District option in the dropdown
   */
  async verifyDistrictInDropdownAndSelectADistrict(districtName: string, allDistricts: string) {
    await verifyValuePresentInDropDown(this.page, this.scoreReportDistrictDropdown(), districtName);
    await selectValueFromDropDown(this.page, this.scoreReportDistrictDropdown(), allDistricts);
  }

  /**
   * @description verify school is present in the dropdown and select the school
   * @param districtName The school name to select from the dropdown
   * @param allDistricts Another school option in the dropdown
   */
  async verifySchoolInDropdownAndSelectASchool(schoolName: string, allSchools: string) {
    await verifyValuePresentInDropDown(this.page, this.scoreReportSchoolDropdown(), schoolName);
    await selectValueFromDropDown(this.page, this.scoreReportSchoolDropdown(), allSchools);
  }
}
