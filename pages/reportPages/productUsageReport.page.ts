import { expect, Page } from '@playwright/test';
import { selectValueFromDropDown } from '../../zeus-playwright/quantum-common/utils/selectDropdownValue';
import { waitForPreloaderToHide } from '../../zeus-playwright/quantum-common/utils/waitForPreloader';
import {
  verifyValueNotPresentInDropDown,
  verifyValuePresentInDropDown,
} from '../../zeus-playwright/quantum-common/utils/commonFunction';
import { performSearch } from '../../zeus-playwright/quantum-common/utils/searchListing';
import fs from 'fs';
import path from 'path';

export class ProductUsageReportPage {
  private readonly page: Page;
  private readonly downloadPath = path.join(__dirname, 'downloads');
  // Constants for Locators
  private readonly PRODUCT_USAGE_END_USER_DROPDOWN = "mat-select[name='endUserDropdown']";
  private readonly PRODUCT_USAGE_DISTRICT_DROPDOWN = "mat-select[name='districtDropdown']";
  private readonly PRODUCT_USAGE_SCHOOL_DROPDOWN = "mat-select[name='schoolDropdown']";
  private readonly PRODUCT_USAGE_DATE_RANGE_DROPDOWN = "[name=dateRangeDropdown]";
  private readonly PRODUCT_USAGE_FROM_DATE = "#date-range-filter-custom-date-range-from-field input";
  private readonly PRODUCT_USAGE_TO_DATE = "#date-range-filter-custom-date-range-to-field input";
  private readonly PRODUCT_USAGE_GO_BUTTON = "//span[normalize-space()='Go']";
  private readonly PRODUCT_USAGE_NO_COURSE_FOUND_MESSAGE = 'div.no-user-block';
  private readonly courseNameOnProductReportListing = (courseName: string) =>
    `//div[normalize-space(text()) = '${courseName}']`;

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * @description Locates the End User dropdown on the Product Usage Report page
   */
  productUsageEndUserDropdown() {
    return this.page.locator(this.PRODUCT_USAGE_END_USER_DROPDOWN);
  }

  /**
   * @description Locates the District dropdown on the Product Usage Report page
   */
  productUsageDistrictDropdown() {
    return this.page.locator(this.PRODUCT_USAGE_DISTRICT_DROPDOWN);
  }

  /**
   * @description Locates the School dropdown on the Product Usage Report page
   */
  productUsageSchoolDropdown() {
    return this.page.locator(this.PRODUCT_USAGE_SCHOOL_DROPDOWN);
  }

  /**
   * @description Locates the date range dropdown
   */
  productUsageDateRangeDropdown() {
    return this.page.locator(this.PRODUCT_USAGE_DATE_RANGE_DROPDOWN);
  }

  /**
   * @description Locates the from date input field
   */
  productUsageFromDate() {
    return this.page.locator(this.PRODUCT_USAGE_FROM_DATE);
  }

  /**
   * @description Locates the to date input field
   */
  productUsageToDate() {
    return this.page.locator(this.PRODUCT_USAGE_TO_DATE);
  }

  /**
   * @description Locates the "Go" button to execute search or filter actions on the Product Usage Report page
   */
  productUsageGoButton() {
    return this.page.locator(this.PRODUCT_USAGE_GO_BUTTON);
  }

  /**
   * @description Locates the "No Course Found" message element displayed when no courses are available
   */
  productUsageNoCourseFoundMessage() {
    return this.page.locator(this.PRODUCT_USAGE_NO_COURSE_FOUND_MESSAGE);
  }

  /**
   * @description Locates the course in listing on Product reports page
   */
  courseOnProductReportPage(courseName: string) {
    return this.page.locator(this.courseNameOnProductReportListing(courseName));
  }

  /**
   * @description Selects an End User from the End User dropdown
   * @param EndUser The name of the End User to select from the dropdown
   */
  async selectEndUserOnProductUsageReportPage(EndUser: string) {
    await selectValueFromDropDown(this.page, this.productUsageEndUserDropdown(), EndUser);
    await waitForPreloaderToHide(this.page);
  }

  /**
   * @description Selects an custom date range User from the End User dropdown
   */
  async selectCustomDateOfOneYear(dateRange: string) {
    const currentDate = new Date();
    const startDate = new Date(currentDate);
    startDate.setFullYear(currentDate.getFullYear() - 1);
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const formattedStartDate = `${startDate.getDate()}-${monthNames[startDate.getMonth()]}-${startDate.getFullYear()}`;
    const formattedEndDate = `${currentDate.getDate()}-${monthNames[currentDate.getMonth()]}-${currentDate.getFullYear()}`;
    await selectValueFromDropDown(this.page, this.productUsageDateRangeDropdown(), dateRange);
    await this.productUsageFromDate().pressSequentially(formattedStartDate);
    await this.productUsageToDate().pressSequentially(formattedEndDate);
  }

  /**
   * @description Selects a district from the district dropdown
   * @param districtName The name of the district to select from the dropdown
   */
  async selectDistrictFromDropdown(districtName: string) {
    await selectValueFromDropDown(this.page, this.productUsageDistrictDropdown(), districtName);
    await waitForPreloaderToHide(this.page);
  }

  /**
   * @description Verifies that a deleted district is not present in the District dropdown
   * @param districtName The name of the district to verify is absent in the dropdown
   */
  async verifyDistrictNotPresentInDropdown(districtName: string) {
    await verifyValueNotPresentInDropDown(
      this.page,
      this.productUsageDistrictDropdown(),
      districtName,
    );
    await waitForPreloaderToHide(this.page);
  }

  /**
   * @description Verifies that a deleted school is not present in the school dropdown
   * @param schoolName The name of the school to verify is not present
   */
  async verifySchoolNotPresentInDropdown(schoolName: string) {
    await verifyValueNotPresentInDropDown(this.page, this.productUsageSchoolDropdown(), schoolName)
  }

  /**
   * @description Clicks on the "Go" button to execute the selected filters
   */
  async clickOnGoButton() {
    await this.productUsageGoButton().click();
    await waitForPreloaderToHide(this.page);
  }

  /**
   * @description Searches for a course on the Product Usage Report page
   * @param courseName The name of the course to search for
   */
  async searchCourseOnProductUsageReportPage(courseName: string) {
    await performSearch(this.page, courseName);
    await waitForPreloaderToHide(this.page);
  }

  /**
   * @description Verifies that a course is present on the generated report page
   * @param districtName The name of the course to verify is displayed
   */
  async verifyCoursePresentOnProductReportPage(courseName: string) {
    const count = await this.courseOnProductReportPage(courseName).count();
    expect(count).toBeGreaterThan(0);
  }

  /**
   * @description Verifies that the "No Course Found" message displays the expected text
   * @param noCourseFoundMessage The expected text for the "No Course Found" message
   */
  async verifyNoCourseErrorMessage(noCourseFoundMessage: string) {
    await expect(this.productUsageNoCourseFoundMessage()).toHaveText(noCourseFoundMessage);
  }

  /**
   * @description verify district is present in the dropdown and select the district
   * @param districtName The district name to select from the dropdown
   * @param allDistricts All Districts option in the dropdown
   */
  async verifyDistrictInDropdownAndSelectADistrict(districtName: string, allDistricts: string) {
    await verifyValuePresentInDropDown(
      this.page,
      this.productUsageDistrictDropdown(),
      districtName,
    );
    await selectValueFromDropDown(this.page, this.productUsageDistrictDropdown(), allDistricts);
  }

  /**
   * Verify the school count of given course in exported product usage report
   * @param courseName name of the course
   * @param expectedSchoolCount count to match with the count in report
   */
  async verifyExportedReport(courseName: string, expectedSchoolCount: string) {
    // Ensure the download folder exists or create it dynamically
    if (!fs.existsSync(this.downloadPath)) {
      fs.mkdirSync(this.downloadPath);
    }
    const downloadPromise = this.page.waitForEvent('download');
    const download = await downloadPromise;
    const downloadedFilePath = path.join(this.downloadPath, 'product-usage-report.csv');
    await download.saveAs(downloadedFilePath);
    // Check that the file is downloaded
    expect(fs.existsSync(downloadedFilePath)).toBeTruthy();

    //Checking if the downloaded CSV file contains the expected string
    const fileContent = fs.readFileSync(downloadedFilePath, 'utf-8');
    const lines = fileContent.split('\n').filter(line => line.trim().length > 0);

    const headers = lines[0].split(',');
    const courseNameIndex = headers.indexOf('Course Name');
    const schoolCountIndex = headers.indexOf('Schools');

    expect(courseNameIndex).toBeGreaterThanOrEqual(0);
    expect(schoolCountIndex).toBeGreaterThanOrEqual(0);

    const courseLine = lines.find(line => line.startsWith(`${courseName},`));
    expect(courseLine).toBeTruthy();

    if (courseLine) {
      const columns = courseLine.split(',');
      const actualSchoolCount = parseInt(columns[schoolCountIndex], 10);

      expect(actualSchoolCount).toBe(expectedSchoolCount);
    }

    //deleting the exported csv
    fs.unlinkSync(downloadedFilePath);
  }
}
