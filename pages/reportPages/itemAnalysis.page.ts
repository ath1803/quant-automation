import { expect, Page } from '@playwright/test';
import { waitForPreloaderToHide } from '../../zeus-playwright/quantum-common/utils/waitForPreloader';
import { selectValueFromDropDown } from '../../zeus-playwright/quantum-common/utils/selectDropdownValue';
import {
  verifyValueNotPresentInDropDown,
  verifyValuePresentInDropDown,
} from '../../zeus-playwright/quantum-common/utils/commonFunction';
import fs from 'fs';
import path from 'path';

export class ItemAnalysisPage {
  private readonly page: Page;
  private readonly downloadPath = path.join(__dirname, 'downloads');
  // Constants for Locators
  private readonly ITEM_ANALYSIS_COURSE = "mat-select[name='courseDropdown']";
  private readonly ITEM_ANALYSIS_DISTRICT_DROPDOWN = "mat-select[name='districtDropdown']";
  private readonly ITEM_ANALYSIS_SCHOOL_DROPDOWN = "#item-analysis-report-school-dropdown";
  private readonly ITEM_ANALYSIS_GO_BUTTON = "//span[normalize-space()='Go']";
  private readonly ITEM_ANALYSIS_COURSE_QUIZ = "mat-select[name='assessmentDropdown']";
  private readonly STUDENT_ATTEMPT_COUNT = "#item-analysis-studentattemptcount";
  private readonly ITEM_ANALYSIS_REPORT_PREVIOUS_SCHOOL_YEAR =
    "//mat-button-toggle[@value='previous']";
  private readonly DISTRICT_DATA_ON_REPORT_PAGE = (districtName: string) =>
    `//div[normalize-space(text())='${districtName}']`;

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * @description Locates the course dropdown on the item analysis page
   */
  itemAnalysisCourse() {
    return this.page.locator(this.ITEM_ANALYSIS_COURSE);
  }

  /**
   * @description Locates the district dropdown on the item analysis page
   */
  itemAnalysisDistrictDropdown() {
    return this.page.locator(this.ITEM_ANALYSIS_DISTRICT_DROPDOWN);
  }

  /**
   * @description Locates the school dropdown on the item analysis page
   */
  itemAnalysisSchoolDropdown() {
    return this.page.locator(this.ITEM_ANALYSIS_SCHOOL_DROPDOWN);
  }

  /**
   * @description Locates the "Go" button on the item analysis page
   */
  itemAnalysisGoButton() {
    return this.page.locator(this.ITEM_ANALYSIS_GO_BUTTON);
  }

  /**
   * @description Locates the course quiz dropdown on the item analysis page
   */
  itemAnalysisCourseQuiz() {
    return this.page.locator(this.ITEM_ANALYSIS_COURSE_QUIZ);
  }

  /**
   * @description Locates the student attempt count on Item analysis page
   */
  studentAttemptCount() {
    return this.page.locator(this.STUDENT_ATTEMPT_COUNT);
  }

  /**
   * @description Locates the button to select the previous school year on the item analysis page
   */
  itemAnalysisReportPreviousSchoolYear() {
    return this.page.locator(this.ITEM_ANALYSIS_REPORT_PREVIOUS_SCHOOL_YEAR);
  }

  /**
   * @description Locates the data from restored district on reports page
   */
  districtOnItemAnalysisReportPage(districtName: string) {
    return this.page.locator(this.DISTRICT_DATA_ON_REPORT_PAGE(districtName));
  }

  /**
   * @description Selects a course and course quiz on the item analysis report page
   * @param courseName The name of the course to select
   * @param courseQuiz The name of the course quiz to select
   */
  async selectCourseAndCourseQuizOnItemAnalysisReportPage(courseName: string, courseQuiz: string) {
    await selectValueFromDropDown(this.page, this.itemAnalysisCourse(), courseName);
    await waitForPreloaderToHide(this.page);
    await selectValueFromDropDown(this.page, this.itemAnalysisCourseQuiz(), courseQuiz);
    await waitForPreloaderToHide(this.page);
  }

  /**
   * @description Selects a district from the district dropdown
   * @param districtName The name of the district to select from the dropdown
   */
  async selectDistrictFromDropdown(districtName: string) {
    await selectValueFromDropDown(this.page, this.itemAnalysisDistrictDropdown(), districtName);
    await waitForPreloaderToHide(this.page);
  }

  /**
   * @description Verifies that a deleted district is not present in the district dropdown
   * @param districtName The name of the district to verify is not present
   */
  async verifyDistrictNotPresentInDropdown(districtName: string) {
    await verifyValueNotPresentInDropDown(
      this.page,
      this.itemAnalysisDistrictDropdown(),
      districtName,
    );
  }

  /**
   * @description Verifies that a deleted school is not present in the school dropdown
   * @param schoolName The name of the school to verify is not present
   */
  async verifySchoolNotPresentInDropdown(schoolName: string) {
    await verifyValueNotPresentInDropDown(this.page, this.itemAnalysisSchoolDropdown(), schoolName)
  }

  /**
   * @description Clicks on the "Go" button to generate the report
   */
  async clickOnGoButton() {
    await this.itemAnalysisGoButton().click();
    await waitForPreloaderToHide(this.page);
  }

  /**
   * @description Verifies that a district is not present on the generated report page
   * @param districtName The name of the district to verify is not present
   */
  async verifyDistrictNotPresentOnReportPage(districtName: string) {
    await expect(this.districtOnItemAnalysisReportPage(districtName)).toBeHidden();
  }

  /**
   * @description Verifies the number of students attempting the cq
   * @param studentAttempt number of students attempts shown on the page
   */
  async verifyStudentAttemptsCount(studentAttempt: string) {
    await expect(this.studentAttemptCount()).toHaveText(studentAttempt)
  }

  /**
   * @description Verifies that data from restored district is present on the generated report page
   * @param districtName The name of the district to verify is present
   */
  async verifyDistrictDataPresentOnReportPage(questionName: string) {
    await expect(this.districtOnItemAnalysisReportPage(questionName)).toBeVisible();
  }

  /**
   * @description Selects the previous school year on the item analysis report page
   */
  async selectPreviousSchoolYear() {
    await this.itemAnalysisReportPreviousSchoolYear().click();
  }

  /**
   * @description verify district is present in the dropdown and select the district
   * @param districtName The district name to select from the dropdown
   * @param allDistricts All Districts option in the dropdown
   */
  async verifyDistrictInDropdownAndSelectADistrict(districtName: string, allDistricts: string) {
    await verifyValuePresentInDropDown(
      this.page,
      this.itemAnalysisDistrictDropdown(),
      districtName,
    );
    await selectValueFromDropDown(this.page, this.itemAnalysisDistrictDropdown(), allDistricts);
  }

  /**
   * @description verify school is present in the dropdown and select the school
   * @param schoolName The school name to select from the dropdown
   * @param allSchools Another school option in the dropdown
   */
  async verifySchoolInDropdownAndSelectASchool(schoolName: string, allSchools: string) {
    await verifyValuePresentInDropDown(this.page, this.itemAnalysisSchoolDropdown(), schoolName);
    await selectValueFromDropDown(this.page, this.itemAnalysisSchoolDropdown(), allSchools);
  }

  async verifyExportedReport(expectedAttemptedText: string) {
    // Ensure the download folder exists or create it dynamically
    if (!fs.existsSync(this.downloadPath)) {
      fs.mkdirSync(this.downloadPath);
    }
  
    const downloadPromise = this.page.waitForEvent('download');
    const download = await downloadPromise;
    const downloadedFilePath = path.join(this.downloadPath, 'item-analysis-report.csv');
    await download.saveAs(downloadedFilePath);
  
    // Check that the file is downloaded
    expect(fs.existsSync(downloadedFilePath)).toBeTruthy();
  
    // Read the file content
    const fileContent = fs.readFileSync(downloadedFilePath, 'utf-8');
    const lines = fileContent.split('\n').filter(line => line.trim().length > 0);
  
    // Check that the first line contains the expected attempted students summary
    const firstLine = lines[0];
    expect(firstLine).toBeDefined();
    expect(firstLine.includes(expectedAttemptedText)).toBeTruthy();
  
    // Delete the downloaded CSV
    fs.unlinkSync(downloadedFilePath);
  }
  
}
