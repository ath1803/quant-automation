import {
  APIResponse,
  expect,
  request,
  type Page,
} from "@playwright/test";
import { selectValueFromDropDown } from "../../zeus-playwright/quantum-common/utils/selectDropdownValue";
import urls from "../../fixtures/constants/urlConstants";
import env from "../../fixtures/env";

export class HardDeleteDistrictPage {
  readonly page: Page;

  // Constants for Locators
  private readonly NO_DATA_FOUND = 'div.no-data';
  private readonly SUCCESS_MESSAGE = "(//span[@class='success-message'])[2]";
  private readonly DISTRICT_ADDRESS_STREET = "//input[@name='districtStreet']";
  private readonly DISTRICT_ADDRESS_CITY = "//input[@name='districtCity']";
  private readonly DISTRICT_ADDRESS_ZIPCODE = "//input[@name='districtZipcode']";
  private readonly DISTRICT_TIMEZONE_DROPDOWN = "//mat-select[@name='timezoneDropDown']";
  private readonly DISTRICT_START_DATE = "//input[@name='startDate']";
  private readonly DISTRICT_END_DATE = "//input[@name='endDate']";
  private readonly DISTRICT_TECHNICAL_ADMIN_NAME = "//input[@name='technicalContactName']";
  private readonly DISTRICT_CURRICULUM_ADMIN_NAME = "//input[@name='curriculumContactName']";
  private readonly DISTRICT_TECHNICAL_ADMIN_MAIL = "//input[@name='technicalContactEmail']";
  private readonly DISTRICT_CURRICULUM_ADMIN_MAIL = "//input[@name='curriculumContactEmail']";
  private readonly DISTRICT_TECHNICAL_ADMIN_NUMBER = "//input[@name='technicalContactPhone']";
  private readonly DISTRICT_CURRICULUM_ADMIN_NUMBER = "//input[@name='curriculumContactPhone']";
  private readonly SAVE_BUTTON = "#save-btn";
  private readonly OK_BUTTON = "#ok-btn";

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * @description Locator for success subtext
   */
  successSubtext() {
    return this.page.locator(this.SUCCESS_MESSAGE);
  }

  /**
   * @description Locator for the no data found text
   */
  noDataFound() {
    return this.page.locator(this.NO_DATA_FOUND);
  }

  /**
   * @description Locator for the district street
   */
  districtAddressStreet() {
    return this.page.locator(this.DISTRICT_ADDRESS_STREET);
  }

  /**
   * @description Locator for the district address city
   */
  districtAddressCity() {
    return this.page.locator(this.DISTRICT_ADDRESS_CITY);
  }

  /**
   * @description Locator for the district zipcode
   */
  districtAddressZipcode() {
    return this.page.locator(this.DISTRICT_ADDRESS_ZIPCODE);
  }

  /**
   * @description Locator for the timezone dropdown
   */
  districtTimezoneDropdown() {
    return this.page.locator(this.DISTRICT_TIMEZONE_DROPDOWN);
  }

  /**
   * @description Locator for the start date
   */
  districtStartDate() {
    return this.page.locator(this.DISTRICT_START_DATE);
  }

  /**
   * @description Locator for the end date
   */
  districtEndDate() {
    return this.page.locator(this.DISTRICT_END_DATE);
  }

  /**
   * @description Locator for technical name input field
   */
  technicalName() {
    return this.page.locator(this.DISTRICT_TECHNICAL_ADMIN_NAME);
  }

  /**
   * @description Locator for curriculum name input field
   */
  curriculumName() {
    return this.page.locator(this.DISTRICT_CURRICULUM_ADMIN_NAME);
  }

  /**
   * @description Locator for technical mail input field
   */
  technicalMail() {
    return this.page.locator(this.DISTRICT_TECHNICAL_ADMIN_MAIL);
  }

  /**
   * @description Locator for curriculum mail input field
   */
  curriculumMail() {
    return this.page.locator(this.DISTRICT_CURRICULUM_ADMIN_MAIL);
  }

  /**
   * @description Locator for technical number input field
   */
  technicalNumber() {
    return this.page.locator(this.DISTRICT_TECHNICAL_ADMIN_NUMBER);
  }

  /**
   * @description Locator for curriculum number input field
   */
  curriculumNumber() {
    return this.page.locator(this.DISTRICT_CURRICULUM_ADMIN_NUMBER);
  }

  /**
   * @description Locator for the save button
   */
  saveButton() {
    return this.page.locator(this.SAVE_BUTTON);
  }

  /**
   * @description Locator for the ok button
   */
  okButton() {
    return this.page.locator(this.OK_BUTTON);
  }

  /**
   * @description verifies the success message on subtext
   * @param successMessage to verify
   */
  async verifySuccessSubtext(successMessage: string) {
    await expect(this.successSubtext()).toHaveText(successMessage);
  }

  /**
   * @description Sends a GET request to trigger hard delete operation in the LMS
   * @returns {Promise<APIResponse>} The response from the server, containing details such as status code
   */
  async resumeOrTriggerDelete(): Promise<APIResponse> {
    const apiContext = await request.newContext();
    let response;
    // Get client secret from environment variable set in Jenkins
    const clientSecret = env["QUANTUM_API_ACCESS_SECRET_KEY"] || "";

    // Obtain OAuth token first
    const tokenResponse = await apiContext.post(`https://${urls.LMS_DOMAIN}/auth/token`, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      form: {
        grant_type: 'client_credentials', //OAuth flow type
        scope: 'limitedAccess',
        client_id: 'automation-cron',
        client_secret: clientSecret,
      },
    });
    if (!tokenResponse.ok()) {
      console.error(tokenResponse.json());
      throw new Error(
        `Fetching token failed with status ${tokenResponse.status()}: ${tokenResponse.statusText()}`
      );
    } else {
      const tokenData = await tokenResponse.json();
      const accessToken = tokenData.access_token;
  
      response = await apiContext.get(
        `https://${urls.LMS_DOMAIN}/lms/group/resume-or-trigger-hard-delete`,
        {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`,
          },
        }
      );
      if (!response.ok()) {
        throw new Error(
          `Hard deletion failed with status ${response.status()}: ${response.statusText()}`
        );
      }
    }

    return response;
  }

  /**
   * @description Verifies the no data found text
   * @param noData displays the no district found text
   */
  async verifyNoDistrictFound(noData: string) {
    await expect(this.noDataFound()).toHaveText(noData)
  }

  /**
   * @description Create new district with name and state already selected
   * @param street Name of the street
   * @param city Name of the city
   * @param zipcode code of the city
   * @param name Name of the user
   * @param mail email id of the user
   * @param number number of the user
   * @param timezone timezone to select from the dropdown
   */
  async createDistrict(
    street: string,
    city: string,
    zipcode: string,
    name: string,
    mail: string,
    number: string,
    timezone: string
  ) {
    await this.districtAddressStreet().fill(street);
    await this.districtAddressCity().fill(city);
    await this.districtAddressZipcode().fill(zipcode);
    const today = new Date();
    const startDate = today
      .toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
      .replace(/ /g, "-");
    await this.districtStartDate().fill(startDate);
    today.setDate(today.getDate() + 350);
    const endDate = today
      .toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
      .replace(/ /g, "-");
    await this.districtEndDate().fill(endDate);
    await this.technicalName().pressSequentially(name);
    await this.technicalMail().pressSequentially(mail);
    await this.technicalNumber().pressSequentially(number);
    await this.curriculumName().pressSequentially(name);
    await this.curriculumMail().pressSequentially(mail);
    await this.curriculumNumber().pressSequentially(number);
    await this.page.waitForTimeout(1000);
    await selectValueFromDropDown(
      this.page,
      this.districtTimezoneDropdown(),
      timezone
    );
    await this.saveButton().click();
    await this.okButton().click();
  }
}
