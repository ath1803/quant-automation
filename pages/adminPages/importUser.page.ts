import { expect, Page } from '@playwright/test';
import { waitForPreloaderToHide } from '../../zeus-playwright/quantum-common/utils/waitForPreloader';
import { selectValueFromDropDown } from '../../zeus-playwright/quantum-common/utils/selectDropdownValue';
import { verifyValueNotPresentInDropDown } from '../../zeus-playwright/quantum-common/utils/commonFunction';
import * as fs from 'fs';
import path from 'path';
const IMPORT_USERS_CSV_DIR = path.resolve('./adminPages/importUsersCsv');

export class ImportUserPage {
  private readonly page: Page;

  // Constants for Locators
  private readonly IMPORT_USERS_STATE_DROPDOWN = "mat-select[name='state']";
  private readonly IMPORT_USERS_USER_TYPE = "mat-select[name='userType']";
  private readonly IMPORT_USERS_USER_DISTRICT_DROPDOWN = "mat-select[name='district']";
  private readonly UPLOAD_FILE_BUTTON = 'input.inputfile';
  private readonly CONFIRM_BUTTON = "//span[normalize-space()='Confirm']";
  private readonly IMPORT_STATUS = ".status-label";
  private readonly IMPORT_USER_FAILED_MESSAGE = ".popup-box div.text-content";
  private readonly OK_BUTTON = '#ok-btn';
  private readonly START_OVER_BUTTON = "//span[normalize-space()='Start Over']";

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * @description Locator for the state dropdown on the Import User page
   */
  importUsersStateDropdown() {
    return this.page.locator(this.IMPORT_USERS_STATE_DROPDOWN);
  }

  /**
   * @description Locator for the user type dropdown on the Import User page
   */
  importUsersUserType() {
    return this.page.locator(this.IMPORT_USERS_USER_TYPE);
  }

  /**
   * @description Locates the upload file button
   */
  uploadFileButton() {
    return this.page.locator(this.UPLOAD_FILE_BUTTON);
  }

  /**
   * @description Locator for the confirm button
   */
  confirmButton() {
    return this.page.locator(this.CONFIRM_BUTTON);
  }

  /**
   * @description Locator for the status field
   */
  status() {
    return this.page.locator(this.IMPORT_STATUS).first();
  }

  /**
   * @description Locator for the import user failed popup
   */
  importUserFailedMessage() {
    return this.page.locator(this.IMPORT_USER_FAILED_MESSAGE);
  }

  /**
   * @description Locator for the ok button
   */
  okButton() {
    return this.page.locator(this.OK_BUTTON);
  }

  /**
   * @description Locator for the start over button
   */
  startOverButton() {
    return this.page.locator(this.START_OVER_BUTTON);
  }

  /**
   * @description Locator for the district dropdown on the Import User page
   */
  importUserDistrictDropdown() {
    return this.page.locator(this.IMPORT_USERS_USER_DISTRICT_DROPDOWN);
  }

  /**
   * @description Select a user type from the user type dropdown on the Import User page
   * @param userType The user type to select
   */
  async selectUserTypeOnImportUserPage(userType: string) {
    await selectValueFromDropDown(this.page, this.importUsersUserType(), userType);
    await waitForPreloaderToHide(this.page);
  }

  /**
   * @description Select a state from the state dropdown on the Import User page
   * @param state The state to select
   */
  async selectStateOnImportUserPage(state: string) {
    // Wait for the dropdown options to be visible
    await this.page.waitForTimeout(1000);
    await selectValueFromDropDown(this.page, this.importUsersStateDropdown(), state);
    await waitForPreloaderToHide(this.page);
  }

  /**
   * @description Click on the start over button
   */
  async clickOnStartOverButton() {
    await this.startOverButton().click();
  }

  /**
   * @description Verify that a district is not present in the district dropdown on the Import User page
   * @param districtName The district name to verify is not present
   */
  async verifyDistrictNotPresentOnDistrictDropdown(districtName: string) {
    await verifyValueNotPresentInDropDown(
      this.page,
      this.importUserDistrictDropdown(),
      districtName,
    );
    await waitForPreloaderToHide(this.page);
  }

  /**
   * @description Verify that a district is present in the district dropdown on the Import User page
   * @param districtName The district name to verify is present
   */
  async verifyDistrictPresentOnDistrictDropdown(districtName: string) {
    await this.page.waitForTimeout(1000);
    await selectValueFromDropDown(this.page, this.importUserDistrictDropdown(), districtName);
    await waitForPreloaderToHide(this.page);
  }

  /**
   * @description Generates a dynamic user credentials with unique username and mail
   * @param prefix string prefix to prepend to the generated username
   * @returns A record containing, Password, First Name, Username, and Email
   */
  async getMapCredentials(prefix: string): Promise<Record<string, string>> {
    const now = new Date();
    const dateStr = now.toISOString().replace(/[-:.TZ]/g, '_');
    const randomSuffix = Math.floor(10000 + Math.random() * 90000); // 5-digit random number

    const username = `${prefix}${dateStr}`;
    const emailId = `automation.bot10+${dateStr}${randomSuffix}@zeuslearning.com`;

    return {
      Password: 'Ssiquantum@123',
      'First Name': 'AutomationFirst',
      'Last Name': 'AutomationLast',
      Username: username,
      Email: emailId,
    };
  }

  /**
   * @description Creates a csv file with given user details
   * @param userDetails A record containing key-value pairs representing user details
   * @param fileName Name of the csv file
   */
  async createImportUserCsv(userDetails: Record<string, string>, fileName: string): Promise<void> {
    try {
      const filePath = path.join(IMPORT_USERS_CSV_DIR, `${fileName}.csv`);
      // Ensure the directory exists
      fs.mkdirSync(IMPORT_USERS_CSV_DIR, { recursive: true });
      // Convert the user details to CSV format
      const csvContent = `${Object.keys(userDetails).join(',')}\n${Object.values(userDetails).join(',')}`;

      // Write the CSV to a file
      fs.writeFileSync(filePath, csvContent);
    } catch (error) {
      console.error('Error creating CSV:', error);
      throw error;
    }
  }

  /**
   * @description Uploads a file
   * @param filePath Path to the file being uploaded
   */
  async uploadFile(page: Page, filePath: string): Promise<void> {
    try {
      const absoluteFilePath = path.resolve(process.cwd(), filePath);
      await this.uploadFileButton().setInputFiles(absoluteFilePath);
    } catch (error) {
      console.error('Error uploading file:', error);
      throw error;
    }
  }

  /**
   * @description Generates user credentials, creates a CSV, and uploads it to import users
   * @param userType Type of user to be imported
   */
  async importUser(autoBotPrefix: string, userType: string, schoolID: string) {
    let mapData: Record<string, string>;
    switch (userType) {
      case 'DTA': {
        const prefix = autoBotPrefix + userType + '.';
        mapData = await this.getMapCredentials(`${prefix}`);
        break;
      }
      case 'SA':
      case 'Teacher': {
        const prefix = autoBotPrefix + userType + '.';
        mapData = await this.getMapCredentials(`${prefix}`);
        mapData['School ID(s)'] = schoolID;
        break;
      }
      case 'Student': {
        const prefix = autoBotPrefix + userType + '.';
        mapData = await this.getMapCredentials(`${prefix}`);
        mapData['School ID(s)'] = schoolID;
        mapData['Grade'] = '6'
        break;
      }
      default:
        throw new Error(`Unsupported user type: ${userType}`);
    }
    await this.createImportUserCsv(mapData, userType);
    const filePath = path.join(IMPORT_USERS_CSV_DIR, `${userType}.csv`);
    this.uploadFile(this.page, filePath);
  }

  /**
   * @description Clicks on the confirm button once import is successful
   */
  async clickOnConfirmButton() {
    await this.confirmButton().click();
    await this.okButton().click();
  }

  /**
   * @description Verifies import failure
   * @param error Error count on import user page
   */
  async verifyImportFailed(error: string) {
    await expect(this.status()).toContainText(error);
    await expect(this.confirmButton()).toBeHidden();
  }
}
