import { expect, type Page } from '@playwright/test';

export class TextLO {
  readonly page: Page;

  // Constants for Locators
  private readonly CONTENT_OPTION        = 'xpath=/html/body/app-bootstrap/app-root/div[1]/mat-toolbar/nav/ul/ul/li[1]/button/span[2]/span';
  private readonly LO_OPTION             = 'xpath=/html/body/app-bootstrap/app-root/div[1]/mat-toolbar/nav/ul/ul/li[1]/ul/li[3]/button/span';
  private readonly CREATELO_BUTTON       = 'xpath=/html/body/app-bootstrap/app-root/div[2]/app-lo-library/main/section/button/span[2]';
  private readonly TEXT_OPTION           = 'xpath=//*[@id="lo-library-create-lo-dialog-text-lo-btn"]/span[2]/div/div[1]';
  private readonly LO_LIBRARY_HEADING    = 'xpath=/html/body/app-bootstrap/app-root/div[2]/app-lo-library/main/mat-toolbar/div/h1';
  private readonly CF_DROPDOWN           = 'xpath=/html/body/app-bootstrap/app-root/div[2]/app-create-lo/main/div[1]/div/mat-stepper/div/div[2]/div[1]/form/app-expansion-panel[1]/div/div/mat-card/div/mat-form-field/div[1]/div[2]/div'  
  private readonly CF_SELECTION          = '#course-family-option-157'
  private readonly LO_ENTRY              = 'xpath=/html/body/app-bootstrap/app-root/div[2]/app-create-lo/main/div[1]/div/mat-stepper/div/div[2]/div[1]/form/app-expansion-panel[1]/div/div/mat-card/div/div[2]/mat-form-field/div[1]/div[2]/div'
  private readonly LO_FIELD              = 'xpath=/html/body/app-bootstrap/app-root/div[2]/app-create-lo/main/div[1]/div/mat-stepper/div/div[2]/div[1]/form/app-expansion-panel[1]/div/div/mat-card/div/div[2]/mat-form-field/div[1]/div[2]/div/input'
  // Use text-based locator for popup title
  private readonly CREATE_LO_POPUP_TITLE = 'xpath=/html/body/div/div[2]/div/mat-dialog-container/div/div/app-create-lo-dialog/div/h1';
  private readonly TEXT_LO_PAGE          = 'xpath=/html/body/app-bootstrap/app-root/div[2]/app-create-lo/main/div[1]/div/mat-stepper/div/div[2]/div[1]/form/app-expansion-panel[1]/div/div/mat-card/div/div[2]/mat-form-field/div[1]/div[2]/div/input';
  
  constructor(page: Page) {
    this.page = page;
  }

  async clickContentOption() {
    await this.page.locator(this.CONTENT_OPTION).click();
  }

  async clickLOOption() {
    await this.page.locator(this.LO_OPTION).click();
  }

  async verifyLOLibraryPage() {
    await expect(this.page.locator(this.LO_LIBRARY_HEADING))
      .toBeVisible({ timeout: 60000 });
  }

  async clickCreateLOButton() {
    await this.page.locator(this.CREATELO_BUTTON).click();
  }

  async verifyCreateLOPopup() {
    // wait for the popup header by text
    await expect(this.page.locator(this.CREATE_LO_POPUP_TITLE))
      .toBeVisible({ timeout: 60000 });
  }

  async clickTextOption() {
    await this.page.locator(this.TEXT_OPTION).click();
  }

  async verifyTextLOPage() {
    await expect(this.page.locator(this.TEXT_LO_PAGE))
      .toBeVisible({ timeout: 60000 });
  }

  async clickCFDropdown(){
    await this.page.locator(this.CF_DROPDOWN).click();
  }

  async clickCF(){
    await this.page.locator(this.CF_SELECTION).click();
  }
  
  async clickLO(){
    await this.page.locator(this.LO_ENTRY).click();
  }

  async enterText(){
    await this.page.locator(this.LO_FIELD).fill('Atharva LO');
  }
}



