import { expect, Page } from '@playwright/test';
import { selectValueFromDropDown } from '../../zeus-playwright/quantum-common/utils/selectDropdownValue';
import { waitForPreloaderToHide } from '../../zeus-playwright/quantum-common/utils/waitForPreloader';
import { verifyValueNotPresentInDropDown, verifyValuePresentInDropDown } from '../../zeus-playwright/quantum-common/utils/commonFunction';
import { performSearch } from '../../zeus-playwright/quantum-common/utils/searchListing';
import { CommonConstants } from '../../zeus-playwright/quantum-common/utils/commonConstants';
import fs from 'fs';
import path from 'path';

export class LoginReportPage {
  private readonly page: Page;
  private readonly downloadPath = path.join(__dirname, 'downloads');
  // Constants for Locators
  private readonly LOGIN_REPORT_DTA_TAB = "//span[contains(text(),'District Technical Admin')]";
  private readonly LOGIN_REPORT_SA_TAB = "//span[contains(text(),'School Admin')]";
  private readonly LOGIN_REPORT_TEACHER_TAB = "//span[contains(text(),'Teacher')]";
  private readonly LOGIN_REPORT_STUDENT_TAB = "//span[contains(text(),'Student')]";
  private readonly LOGIN_REPORT_DISTRICT_DROPDOWN = "mat-select[automation-id = 'select-District']";
  private readonly LOGIN_REPORT_SCHOOL_DROPDOWN = "mat-select[automation-id = 'select-School']";
  private readonly LOGIN_REPORT_GO_BUTTON = '#login-report-go-button';
  private readonly LOGIN_REPORT_REPORT_TAB = '//div[normalize-space()="Report"]';
  private readonly LOGIN_REPORT_USERNAME = "(//div[@class='clamped-name']/div)[1]";
  private readonly LOGIN_REPORT_NO_DATA_MESSAGE = '#login-report-no-data-container > span';
  private readonly DISTRICT_DATA_ON_REPORT_PAGE = (username: string) =>
    `//div[normalize-space(text())='${username}']`;

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * @description Locates the District Technical Admin (DTA) tab
   */
  loginReportPageDTATab() {
    return this.page.locator(this.LOGIN_REPORT_DTA_TAB);
  }

  /**
   * @description Locates the School Admin (SA) tab
   */
  loginReportPageSATab() {
    return this.page.locator(this.LOGIN_REPORT_SA_TAB);
  }

  /**
   * @description Locates the Teacher tab
   */
  loginReportPageTeacherTab() {
    return this.page.locator(this.LOGIN_REPORT_TEACHER_TAB).first();
  }

  /**
   * @description Locates the Student tab
   */
  loginReportPageStudentTab() {
    return this.page.locator(this.LOGIN_REPORT_STUDENT_TAB).nth(0);
  }

  /**
   * @description Locates the district dropdown filter
   */
  loginReportDistrictDropdown() {
    return this.page.locator(this.LOGIN_REPORT_DISTRICT_DROPDOWN);
  }

  /**
   * @description Locates the school dropdown
   */
  loginReportSchoolDropdown() {
    return this.page.locator(this.LOGIN_REPORT_SCHOOL_DROPDOWN);
  }

  /**
   * @description Locates the "Go" button on the login report page
   */
  loginReportPageGoButton() {
    return this.page.locator(this.LOGIN_REPORT_GO_BUTTON);
  }

  /**
   * @description Locates the Report tab on the login report page
   */
  loginReportPageReportTab() {
    return this.page.locator(this.LOGIN_REPORT_REPORT_TAB);
  }

  /**
   * @description Locates the username on login reports
   */
  loginReportUsername() {
    return this.page.locator(this.LOGIN_REPORT_USERNAME);
  }

  /**
   * @description Locates the "No Data to Display" message element
   */
  loginReportPageNoDataToDisplayMessage() {
    return this.page.locator(this.LOGIN_REPORT_NO_DATA_MESSAGE);
  }

  /**
   * @description Locates the data from restored district on reports page
   */
  districtDataOnReportsPage(username: string) {
    return this.page.locator(this.DISTRICT_DATA_ON_REPORT_PAGE(username));
  }

  /**
   * @description Verifies that a deleted district is not present in the district dropdown
   * @param districtName The name of the district to verify is not present in the dropdown
   */
  async verifyDistrictNotPresentInDropdown(districtName: string) {
    await verifyValueNotPresentInDropDown(
      this.page,
      this.loginReportDistrictDropdown(),
      districtName,
    );
  }

  /**
   * @description Verifies that a deleted schoolName is not present in the school dropdown
   * @param schoolName The name of the school to verify is not present in the dropdown
   */
  async verifySchoolNotPresentInDropdown(schoolName: string) {
    await verifyValueNotPresentInDropDown(this.page, this.loginReportSchoolDropdown(), schoolName)
  }

  /**
   * @description Verifies that a deleted schoolName is not present in the school dropdown
   * @param schoolName The name of the school to verify is not present in the dropdown
   */
  async verifySchoolIsPresentInDropdown(schoolName: string) {
    await verifyValuePresentInDropDown(this.page, this.loginReportSchoolDropdown(), schoolName)
  }

  /**
   * @description verify district is present in the dropdown and select the district
   * @param districtName The district name to select from the dropdown
   */
  async verifyDistrictInDropdownAndClick(districtName: string, role: string) {
    if (role && role.toLowerCase() !== 'dta') {
      await selectValueFromDropDown(this.page, this.loginReportDistrictDropdown(), districtName);
    }
  }

  /**
   * @description Clicks on the "Go" button to apply the selected filters on the login report page
   */
  async clickOnGoButton() {
    await this.loginReportPageGoButton().click();
    await waitForPreloaderToHide(this.page);
  }

  /**
   * @description verify user login data is present
   * @param username username to verify
   */
  async verifyUserLoginDataIsPresent(username: string) {
    await expect(this.loginReportUsername()).toHaveText(username);
  }

  /**
   * @description Clicks on the Report tab to view the report data
   */
  async clickOnReportTab() {
    await this.loginReportPageReportTab().click();
    await waitForPreloaderToHide(this.page);
  }

  /**
   * @description Performs a search on the Report tab with a district
   * @param namePrefix The name prefix to search for
   */
  async searchReport(districtName: string) {
    await performSearch(this.page, districtName);
    await waitForPreloaderToHide(this.page);
  }

  /**
   * @description Verifies that the "No Data to Display" message displays the expected text
   * @param noDataToDisplayMessage The expected "No Data to Display" message text
   */
  async verifyNoDataErrorMessage(noDataToDisplayMessage: string) {
    await expect(this.loginReportPageNoDataToDisplayMessage()).toHaveText(noDataToDisplayMessage);
  }

  /**
   * @description Clicks on the District Technical Admin (DTA) tab to filter reports by DTA
   */
  async clickOnDtaTab() {
    await this.loginReportPageDTATab().click();
    await waitForPreloaderToHide(this.page);
    await this.page.waitForTimeout(CommonConstants.SLEEPTIME);
  }

  /**
   * @description Clicks on the School Admin (SA) tab to filter reports by SA
   * @param role Role of the user
   */
  async clickOnSaTab(role: string) {
    await this.loginReportPageSATab().click();
    await waitForPreloaderToHide(this.page);
    await this.page.waitForTimeout(CommonConstants.SLEEPTIME);
  }

  /**
   * @description Clicks on the Teacher tab to filter reports by teacher
   * @param role Role of the user
   */
  async clickOnTeacherTab(role: string) {
    await this.loginReportPageTeacherTab().click();
    await waitForPreloaderToHide(this.page);
    await this.page.waitForTimeout(CommonConstants.SLEEPTIME);
  }

  /**
   * @description Clicks on the Student tab to filter reports by student
   */
  async clickOnStudentTab() {
    await this.loginReportPageStudentTab().click();
    await waitForPreloaderToHide(this.page);
    await this.page.waitForTimeout(CommonConstants.SLEEPTIME);
  }

  async verifyExportedReport(schoolName: string, shouldBePresent: boolean) {
    // Ensure the download folder exists or create it dynamically
    if (!fs.existsSync(this.downloadPath)) {
      fs.mkdirSync(this.downloadPath);
    }
  
    const downloadPromise = this.page.waitForEvent('download');
    const download = await downloadPromise;
    const downloadedFilePath = path.join(this.downloadPath, 'login-report.csv');
    await download.saveAs(downloadedFilePath);
  
    // Confirm the file is downloaded
    expect(fs.existsSync(downloadedFilePath)).toBeTruthy();
  
    // Read the file content
    const fileContent = fs.readFileSync(downloadedFilePath, 'utf-8');
  
    if (shouldBePresent) {
      // Assert the school name is present
      expect(fileContent.includes(schoolName)).toBeTruthy();
    } else {
      // Assert the school name is NOT present
      expect(fileContent.includes(schoolName)).toBeFalsy();
    }
  
    // Clean up the downloaded file
    fs.unlinkSync(downloadedFilePath);
  }
}
