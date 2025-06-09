import { expect, Page } from '@playwright/test';
import { waitForPreloaderToHide } from '../../zeus-playwright/quantum-common/utils/waitForPreloader';
import { selectValueFromDropDown } from '../../zeus-playwright/quantum-common/utils/selectDropdownValue';
import { performSearch } from '../../zeus-playwright/quantum-common/utils/searchListing';

export class SamlOrganizationPage {
  readonly page: Page;
  private readonly NO_RESULTS_FOUND_STATUS = '.no-data-container span';
  private readonly LOGIN_WITH_SAML_BUTTON = '//button[@aria-label="Log in with SAML"]';
  private readonly CREATE_NEW_SAML_CONFIG_BUTTON = "//span[text()=' Create New SAML Config ']";
  private readonly HEADER = '#page-title';
  private readonly SELECT_DISTRICT_BUTTON_ON_SAML_CONFIG_PAGE = '.select-district-button';
  private readonly NO_DISTRICT_DISPLAYED_MESSAGE = 'mat-label.empty-data-msg';
  private readonly PAGINATION_COUNT_ON_SELECT_DISTRICT_PAGE = '.show-more-button-container span.show-more-label';
  private readonly DONE_BUTTON_ON_DISTRICT_CARD = '#positive-btn';
  private readonly OK_BUTTON = '#ok-btn';
  private readonly APPLY_BUTTON_ON_SAML_ORG_CONFIGURE_PAGE = '.apply-btn-container button';
  private readonly METADATA_URL_INPUT_FIELD = "input[name='metadataUrl']";
  private readonly ID_ATTRIBUTE_INPUT_FIELD = "input[name='idAttribute']";
  private readonly ERROR_URL_INPUT_FIELD = "input[name='errorUrl']";
  private readonly X509_CERTIFICATE = "textarea[name='x509Certificate']";
  private readonly MATCH_ID_DROPDOWN = '(//mat-form-field)[2]//mat-select';
  private readonly LOGOUT_TYPE_DROPDOWN = '(//mat-form-field)[8]//mat-select';
  private readonly SIGNATURE_ALGORITHM_DROPDOWN = '(//mat-form-field)[10]//mat-select';
  private readonly CONFIGURE_BUTTON = "//button//span[text()='Configure']";
  private readonly LOAD_METADATA_FROM_URL_BUTTON = '.metadata-btn';
  private readonly UNIQUE_URL_ERROR_MESSAGE =
    "(//div[contains(@class, 'mat-mdc-form-field-subscript-wrapper')]//mat-error)[1]";
  private readonly UNIQUE_URL_AVAILABLE_MESSAGE = "(//div[contains(@class, 'mat-mdc-form-field-subscript-wrapper')]//mat-hint)[1]";
  private readonly DISTRICT_RADIO_IN_SELECT_DISTRICT_LIST =
    "//div[@id='groupListContainer']//label";
  private readonly districtNameOnSamlOrganizationListing = (districtName: string) =>
    `//div[normalize-space(text())='${districtName}' and contains(@class, 'text-hyperlink')]`;

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * @description Locator for the no results found status on Saml for organizations page
   */
  verifyTextDisplayedAfterSearchingSamlDistrict() {
    return this.page.locator(this.NO_RESULTS_FOUND_STATUS);
  }

  /**
   * @description Locator for create new Saml config button on organization page
   */
  createNewSamlConfigButton() {
    return this.page.locator(this.CREATE_NEW_SAML_CONFIG_BUTTON);
  }

  /**
   * @description Locator for configure button
   */
  configureButton() {
    return this.page.locator(this.CONFIGURE_BUTTON);
  }

  /**
   * @description Locator for header of the page
   */
  header() {
    return this.page.locator(this.HEADER);
  }

  /**
   * @description Locator for select district button on Saml configuration page
   */
  selectDistrictOnSamlConfigPage() {
    return this.page.locator(this.SELECT_DISTRICT_BUTTON_ON_SAML_CONFIG_PAGE);
  }

  /**
   * @description Locator for the login with Saml button on form page
   */
  loginWithSamlButton() {
    return this.page.locator(this.LOGIN_WITH_SAML_BUTTON);
  }

  /**
   * @description Locator for the No district to display message on Saml for organization page
   */
  noDistrictMessage() {
    return this.page.locator(this.NO_DISTRICT_DISPLAYED_MESSAGE);
  }

  /**
   * @description Locator for Done button on district card
   */
  doneButtonOnDistrictCard() {
    return this.page.locator(this.DONE_BUTTON_ON_DISTRICT_CARD);
  }

  /**
   * @description Locator for the ok button on popup
   */
  okButton() {
    return this.page.locator(this.OK_BUTTON);
  }

  /**
   * @description Locator for the pagination count on Select district card on Saml for organization page
   */
  paginationCount() {
    return this.page.locator(this.PAGINATION_COUNT_ON_SELECT_DISTRICT_PAGE);
  }

  /**
   * @description Locator for the apply button on Saml for organization page
   */
  applyButtonOnConfigureSaml() {
    return this.page.locator(this.APPLY_BUTTON_ON_SAML_ORG_CONFIGURE_PAGE);
  }

  /**
   * @description Locator for the metadata url input field on Saml for organization page
   */
  metadataUrlInputField() {
    return this.page.locator(this.METADATA_URL_INPUT_FIELD);
  }

  /**
   * @description Locator for the id attribute input field on Saml for organization page
   */
  idAttributeInputField() {
    return this.page.locator(this.ID_ATTRIBUTE_INPUT_FIELD);
  }

  /**
   * @description Locator for the error url input field on Saml for organization page
   */
  errorUrlInputField() {
    return this.page.locator(this.ERROR_URL_INPUT_FIELD);
  }

  /**
   * @description Locator for the x509 certificate input field on Saml for organization page
   */
  x509CertificateInputField() {
    return this.page.locator(this.X509_CERTIFICATE);
  }

  /**
   * @description Locator for the match id dropdown on Saml for organization page
   */
  matchIdDropdown() {
    return this.page.locator(this.MATCH_ID_DROPDOWN);
  }

  /**
   * @description Locator for the logout type dropdown on Saml for organization page
   */
  logoutTypeDropdown() {
    return this.page.locator(this.LOGOUT_TYPE_DROPDOWN);
  }

  /**
   * @description Locator for the signature algo dropdown on Saml for organization page
   */
  signatureAlgorithmDropdown() {
    return this.page.locator(this.SIGNATURE_ALGORITHM_DROPDOWN);
  }

  /**
   * @description Locator for the load metadata url button on Saml for organization page
   */
  loadMetaDataFromUrlButton() {
    return this.page.locator(this.LOAD_METADATA_FROM_URL_BUTTON);
  }

  /**
   * @description Locator for the url not unique error messaage on Saml for organization page
   */
  urlNotUniqueErrorMessage() {
    return this.page.locator(this.UNIQUE_URL_ERROR_MESSAGE);
  }

  /**
   * @description Locator for the url is available message on Saml for organization page
   */
  urlAvailableSubtext() {
    return this.page.locator(this.UNIQUE_URL_AVAILABLE_MESSAGE);
  }

  /**
   * @description Locator for district radio button in select district list on Saml for organization page
   */
  districtInSelectDistrictList() {
    return this.page.locator(this.DISTRICT_RADIO_IN_SELECT_DISTRICT_LIST);
  }

  /**
   * @description Get the locator for a specific district on saml organization listing page
   * @param districtName The name of the district to locate
   */
  getDistrictNameOnSamlOrganizationListing(districtName: string) {
    return this.page.locator(this.districtNameOnSamlOrganizationListing(districtName));
  }

  /**
   * @description Verifies that no result found is displayed on Saml org page after searching deleted district
   */
  async verifyAbsenceOfSamlOrganization(districtName: string, statusMessage: string) {
    await performSearch(this.page, districtName);
    await expect(this.verifyTextDisplayedAfterSearchingSamlDistrict()).toContainText(statusMessage);
  }

  /**
   * @description Verifies that restored saml organization district is displayed
   */
  async verifyPresenceOfSamlOrganization(districtName: string) {
    await this.getDistrictNameOnSamlOrganizationListing(districtName).isVisible();
  }

  /**
   * @description Clicks on create new Saml config button on organization page
   */
  async createNewSamlConfigButtonOnOrganization() {
    await this.createNewSamlConfigButton().click();
    await waitForPreloaderToHide(this.page);
  }

  /**
   * @description Verifies user is on the configure Saml for organization page
   */
  async verifyConfigureSamlForOrgHeader(SamlHeader: string) {
    await expect(this.header()).toHaveText(SamlHeader);
  }

  /**
   * @description click on the select district option on configure Saml for organization page
   */
  async clickOnSelectDistrictOnSamlConfigPage() {
    await this.selectDistrictOnSamlConfigPage().click();
    await waitForPreloaderToHide(this.page);
  }

  /**
   * @description Searches for the district on the select district card of configure Saml for organization page
   */
  async searchDistrictOnSamlConfigPage(districtName: string) {
    await performSearch(this.page, districtName);
  }

  /**
   * @description Clicks on Login with Saml button after entering state and district
   */
  async loginWithSamlButtonOnSamlLoginPage() {
    await this.loginWithSamlButton().click();
  }

  /**
   * @description Verifies after search of a deleted district it's not shown for configuration of Saml
   */
  async verifyNoDistrictAfterSearch(noDistrict: string, paginationCount: string) {
    await expect(this.noDistrictMessage()).toHaveText(noDistrict);
    await expect(this.paginationCount()).toHaveText(paginationCount);
  }

  /**
   * @description Clicks on the district radio button and Done button after searching for district
   */
  async clickOnDoneButton() {
    await this.districtInSelectDistrictList().click();
    await this.doneButtonOnDistrictCard().click();
    await waitForPreloaderToHide(this.page);
  }

  /**
   * @description Clicks on Apply button after searching for district
   */
  async clickOnApplyButton() {
    await this.applyButtonOnConfigureSaml().click();
    await waitForPreloaderToHide(this.page);
  }

  /**
   * @description Enter the metadata url and click on load metadata from url
   */
  async enterMetadataUrlAndLoad(metdataUrl: string) {
    await this.metadataUrlInputField().fill(metdataUrl);
    await this.loadMetaDataFromUrlButton().click();
    await waitForPreloaderToHide(this.page);
  }

  /**
   * @description Verify the error message after using same metadata url used in deleted district
   */
  async verifyUrlNotUniqueMessage(noUniqueUrl: string) {
    await expect(this.urlNotUniqueErrorMessage()).toHaveText(noUniqueUrl);
  }

  /**
   * @description Verify the url is available message after using load metadata url
   */
  async verifyUrlIsAvailableMessage(uniqueUrl: string) {
    await expect(this.urlAvailableSubtext()).toHaveText(uniqueUrl);
  }

  /**
   * @description Fill the required metadata to create a saml organization
   * @param idAttribute id attribute value
   * @param matchIdValue matchId value to select from dropdown
   * @param errorUrl error url
   * @param metdataUrl metadata url to load other issuer, login and logout url
   * @param logoutType logout type
   * @param x509Value x509 certificate value
   * @param signatureAlgo signature algorithm to select from dropdown
   */
  async fillSamlOrganizationMetadata(
    idAttribute: string,
    matchIdValue: string,
    errorUrl: string,
    metdataUrl: string,
    logoutType: string,
    x509Value: string,
    signatureAlgo: string,
  ) {
    await this.idAttributeInputField().fill(idAttribute);
    await selectValueFromDropDown(this.page, this.matchIdDropdown(), matchIdValue);
    await this.errorUrlInputField().fill(errorUrl);
    await this.metadataUrlInputField().fill(metdataUrl);
    await this.loadMetaDataFromUrlButton().click();
    await selectValueFromDropDown(this.page, this.logoutTypeDropdown(), logoutType);
    await this.x509CertificateInputField().fill(x509Value);
    await selectValueFromDropDown(this.page, this.signatureAlgorithmDropdown(), signatureAlgo);
    await waitForPreloaderToHide(this.page);
  }

  /**
   * @description CLick on the configure button
   */
  async verifySamlOrganizationCreation() {
    await this.configureButton().click();
    await this.okButton().click();
  }
}
