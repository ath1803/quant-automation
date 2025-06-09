import { expect, Page } from '@playwright/test';
import { performSearch } from '../../zeus-playwright/quantum-common/utils/searchListing';
import { waitForPreloaderToHide } from '../../zeus-playwright/quantum-common/utils/waitForPreloader';

export class LMSCourseCatalog {
  private readonly page: Page;

  // Constants for Locators
  private readonly LMS_COURSE_CATALOG_DISTRICT_AND_SCHOOL_COLUMN_SELECTOR =
    "//span[@class='text-hyperlink ng-star-inserted']";
  private readonly DISTRICT_AND_SCHOOL_POPUP_COUNT = `.mat-mdc-subheader > div > span.ng-star-inserted`;
  private readonly districtAndSchoolPopupDistrictName = (districtName: string) =>
    `//div[@class='list-item']//div[normalize-space(text()) = '${districtName}']`;

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * @description Locator for LMS Course Catalog District and School Column
   */
  lmsCourseCatalogDistrictAndSchoolColumn() {
    return this.page.locator(this.LMS_COURSE_CATALOG_DISTRICT_AND_SCHOOL_COLUMN_SELECTOR).first();
  }

  /**
   * @description Locator for the district and school popup count
   */
  districtCount() {
    return this.page.locator(this.DISTRICT_AND_SCHOOL_POPUP_COUNT).nth(0);
  }

  /**
   * @description Locator for the district and school popup count
   */
  schoolCount() {
    return this.page.locator(this.DISTRICT_AND_SCHOOL_POPUP_COUNT).nth(1);
  }

  /**
   * @description Locator for a District in the District and School Popup
   */
  districtAndSchoolPopupDistrict(districtName: string) {
    return this.page.locator(this.districtAndSchoolPopupDistrictName(districtName));
  }

  // Methods for actions

  /**
   * @description Search course on the LMS course catalog page
   * @param courseName course to search
   */
  async searchCourse(courseName: string) {
    await performSearch(this.page, courseName);
    await waitForPreloaderToHide(this.page);
  }

  /**
   * @description Click on the district and school column value on LMS course catalog
   */
  async clickOnDistrictAndSchoolColumn() {
    await this.lmsCourseCatalogDistrictAndSchoolColumn().click();
    await waitForPreloaderToHide(this.page);
  }

  /**
   * @description Verifies the district is not present in district and school popup
   * @param districtName name of the district to verify
   */
  async verifyDistrictNotPresentInDistrictAndSchoolPopup(districtName: string) {
    await expect(this.districtAndSchoolPopupDistrict(districtName)).not.toBeVisible();
  }

  /**
   * @description Verifies the school is not present in district and school popup
   * @param schoolName name of the school to verify
   */
  async verifySchoolNotPresentInDistrictAndSchoolPopup(schoolName: string) {
    await expect(this.districtAndSchoolPopupDistrict(schoolName)).toBeHidden();
  }

  /**
   * @description Verifies the school is present in district and school popup
   * @param schoolName name of the school to verify
   */
  async verifySchoolIsPresentInDistrictAndSchoolPopup(schoolName: string) {
    await expect(this.districtAndSchoolPopupDistrict(schoolName)).toBeVisible();
  }

  /**
   * @description Verifies the district is present in district and school popup
   * @param districtName name of the district to verify
   */
  async verifyDistrictIsPresentInDistrictAndSchoolPopup(districtName: string) {
    await expect(this.districtAndSchoolPopupDistrict(districtName)).toBeVisible();
  }

  /**
   * @description Check the count on district and school popup
   * @param districtCount Number of district to verify
   * @param schoolCount Number of school to verify
   */
  async verifyCountOnDistrictAndSchoolPopup(districtCount: number, schoolCount: number) {
    const districtText = await this.districtCount().textContent();
    const schoolText = await this.schoolCount().textContent();

    const actualDistrictCount = parseInt(districtText?.replace(/\D/g, '') || '0', 10);
    const actualSchoolCount = parseInt(schoolText?.replace(/\D/g, '') || '0', 10);

    expect(actualDistrictCount).toBeGreaterThanOrEqual(districtCount);
    expect(actualSchoolCount).toBeGreaterThanOrEqual(schoolCount);
  }

  /**
   * @description Check the school count on district and school popup
   * @param schoolCount Number of school to verify
   */
  async verifyCountOnDistrictAndSchoolPopupAsDTA(schoolCount: number) {
    const districtText = await this.districtCount().textContent();
    const actualDistrictCount = parseInt(districtText?.replace(/\D/g, '') || '0', 10);
    expect(actualDistrictCount).toBeGreaterThanOrEqual(schoolCount);
  }
}
