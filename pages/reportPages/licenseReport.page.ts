import { expect, Page } from '@playwright/test';
import { selectValueFromDropDown } from '../../zeus-playwright/quantum-common/utils/selectDropdownValue';
import { waitForPreloaderToHide } from '../../zeus-playwright/quantum-common/utils/waitForPreloader';
import { performSearch } from '../../zeus-playwright/quantum-common/utils/searchListing';
import {
  verifyElementNotInFilterDropdown,
  verifyElementInFilterDropdown,
} from '../../zeus-playwright/quantum-common/utils/commonFunction';
import fs from 'fs';
import path from 'path';

export class LicenseReportPage {
  private readonly page: Page;
  private readonly downloadPath = path.join(__dirname, 'downloads');
  // Constants for Locators
  private readonly LICENSE_REPORT_COURSE_FAMILY = "mat-select[name='courseFamilyDropdown']";
  private readonly LICENSE_REPORT_ASSIGNEE = "mat-select[name='assigneeDropdown']";
  private readonly NO_LICENSE_FOUND = '.no-data-block>p';
  private readonly LICENSE_REPORT_PAGE_GO_BUTTON = '#license-report-go-button';
  private readonly districtNameInLicenseReportListing = (districtName: string) =>
    `//div[normalize-space(text()) = '${districtName}']`;
  private readonly EXPORT_BUTTON = '#license-report-export-button';

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * @description Locates the course family dropdown on the license report page
   */
  licenseReportCourseFamily() {
    return this.page.locator(this.LICENSE_REPORT_COURSE_FAMILY);
  }

  /**
   * @description Locates the district in listing on Product reports page
   */
  districtInLicenseList(districtName: string) {
    return this.page.locator(this.districtNameInLicenseReportListing(districtName)).first();
  }

  /**
   * @description Locates the assignee dropdown on the license report page
   */
  licenseReportAssignee() {
    return this.page.locator(this.LICENSE_REPORT_ASSIGNEE);
  }

  /**
   * @description Locates the "No License Found" message element
   */
  noLicenseFound() {
    return this.page.locator(this.NO_LICENSE_FOUND);
  }

  /**
   * @description Locates the Export button on the license report page
   */
  exportButton() {
    return this.page.locator(this.EXPORT_BUTTON);
  }

  /**
   * @description Locates the "Go" button on the license report page
   */
  licenseReportPageGoButton() {
    return this.page.locator(this.LICENSE_REPORT_PAGE_GO_BUTTON);
  }

  /**
   * @description Selects a course family and an assignee from the respective dropdowns on the license report page
   * @param courseFamily The name of the course family to select
   * @param assignee The name of the assignee to select
   */
  async selectCourseFamilyAndAssignee(courseFamily: string, assignee: string) {
    await this.page.waitForTimeout(500);
    await selectValueFromDropDown(this.page, this.licenseReportCourseFamily(), courseFamily);
    await waitForPreloaderToHide(this.page);
    await selectValueFromDropDown(this.page, this.licenseReportAssignee(), assignee);
    await waitForPreloaderToHide(this.page);
  }

  /**
   * @description Clicks on the "Go" button to apply the selected filters on the license report page
   */
  async clickOnGoButton() {
    await this.licenseReportPageGoButton().click();
    await waitForPreloaderToHide(this.page);
  }

  /**
   * @description Verifies that a license assigned to given is present on the generated report page
   * @param districtName The name of the district to verify is displayed
   */
  async verifyDistrictPresentOnLicenseReportList(districtName: string) {
    await expect(this.districtInLicenseList(districtName)).toBeVisible();
  }

  /**
   * @description Click on the export report button
   */
  async clickOnExportButton() {
    await this.exportButton().click();
  }

  /**
   * @description Searches for a district on the license report page
   * @param districtName The name of the district to search for
   */
  async searchDistrictOnLicenseReportPage(districtName: string) {
    await performSearch(this.page, districtName);
  }

  /**
   * @description Searches for a license on the license report page
   * @param licenseName The name of the license to search for
   */
  async searchDataOnLicenseReportPage(licenseName: string) {
    await performSearch(this.page, licenseName);
  }

  /**
   * @description Verifies that district is not present in the filter dropdown
   * @param districtName The name of the district to verify is not present in the dropdown
   */
  async verifyDistrictNotPresentInFilter(districtName: string) {
    await verifyElementNotInFilterDropdown(this.page, districtName);
  }

  /**
   * @description Verifies that school is not present in the filter dropdown
   * @param schoolName The name of the school to verify is not present in the dropdown
   */
  async verifySchoolNotPresentInFilter(schoolName: string) {
    await verifyElementNotInFilterDropdown(this.page, schoolName);
  }

  /**
   * @description Verifies that district is present in the filter dropdown
   * @param districtName The name of the district to verify is present in the dropdown
   */
  async verifyDistrictPresentInFilter(districtName: string) {
    await verifyElementInFilterDropdown(this.page, districtName);
  }

  /**
   * @description Verifies that the "No License Found" message displays the expected text
   * @param noLicenseFoundMessage The expected "No License Found" message text
   */
  async verifyNoLicenseErrorMessage(noLicenseFoundMessage: string) {
    await expect(this.noLicenseFound()).toHaveText(noLicenseFoundMessage);
  }

  /**
   * @description Verify the exported license report
   * @param textToMatchInCsv verify the text is present in the exported csv
   */
  async verifyExportedReport(textToMatchInCsv: string, shouldContainText: boolean) {
    // Ensure the download folder exists or create it dynamically
    if (!fs.existsSync(this.downloadPath)) {
      fs.mkdirSync(this.downloadPath);
    }
    const downloadPromise = this.page.waitForEvent('download');
    const download = await downloadPromise;
    const downloadedFilePath = path.join(this.downloadPath, 'license-report.csv');
    await download.saveAs(downloadedFilePath);
    // Check that the file is downloaded
    expect(fs.existsSync(downloadedFilePath)).toBeTruthy();

    //Checking if the downloaded CSV file contains the expected string
    const fileContent = fs.readFileSync(downloadedFilePath, 'utf-8');
    if (shouldContainText) {
      // Verify that the text is present
      expect(fileContent.includes(textToMatchInCsv)).toBeTruthy();
    } else {
      // Verify that the text is NOT present
      expect(fileContent.includes(textToMatchInCsv)).toBeFalsy();
    }

    //deleting the exported csv
    fs.unlinkSync(downloadedFilePath);
  }
}
