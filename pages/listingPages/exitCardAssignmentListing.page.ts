import { test, expect, Locator, Page } from "@playwright/test";
import { selectValueFromDropDown } from "../../zeus-playwright/quantum-common/utils/selectDropdownValue";
import { performSearch } from "../../zeus-playwright/quantum-common/utils/searchListing";

export class ExitCardAssignmentListingPage {
  private readonly page: Page;

  // Constants for Locators
  private readonly CREATE_NEW_ASSIGNMENT_BUTTON = "//span[normalize-space(text())='Create New Assignment']/ancestor::button";
  private readonly SELECT_EXIT_CARD_BUTTON =
    "#create-assignment-select-content";
  private readonly COURSE_DROPDOWN = "#course-dropdown";
  private readonly DONE_BUTTON = "#positive-btn";
  private readonly ASSIGNMENT_NAME_INPUT_FIELD = "#assignment-name-input-field";
  private readonly NEXT_BUTTON = "//button[@name='step1NextButton']";
  private readonly ASSIGN_BUTTON_ON_STEPPER2 =
    "#create-exit-card-assignment-assign-btn";
  private readonly STEPPER2_GO_BUTTON = "#create-assignment-go-btn";
  private readonly ADD_BUTTON_ON_SELECTION =
    "//span[normalize-space(text())='Add']/ancestor::button";
  private readonly YES_BUTTON_ON_POPUP = "#positive-btn";
  private readonly OK_BUTTON = "#ok-btn";
  private readonly EXIT_CARD_RADIO_BUTTON_ON_SELECTION = (exitCard: string) =>
    `//span[normalize-space(text())='${exitCard}']/ancestor::tr//mat-radio-button`;
  private readonly CLASS_NAME_CHECKBOX_ON_STEPPER2 = (className: string) =>
    `//input[@aria-label= 'class-check-${className}']/parent::div/parent::div`;

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * @description Locator for the create new exit card assignment button
   */
  createNewButton() {
    return this.page.locator(this.CREATE_NEW_ASSIGNMENT_BUTTON);
  }

  /**
   * @description Locator for the select exit card button
   */
  selectExitCard() {
    return this.page.locator(this.SELECT_EXIT_CARD_BUTTON);
  }

  /**
   * @description Locator for the course dropdown
   */
  courseDropdown() {
    return this.page.locator(this.COURSE_DROPDOWN);
  }

  /**
   * @description Locator for the assignment name input field
   */
  assignmentName() {
    return this.page.locator(this.ASSIGNMENT_NAME_INPUT_FIELD);
  }

  /**
   * @description Locator for the next button
   */
  nextButton() {
    return this.page.locator(this.NEXT_BUTTON);
  }

  /**
   * @description Locator for the assign button on stepper2
   */
  assignButton() {
    return this.page.locator(this.ASSIGN_BUTTON_ON_STEPPER2);
  }

  /**
   * @description Locator the go button on stepper2
   */
  goButton() {
    return this.page.locator(this.STEPPER2_GO_BUTTON);
  }

  /**
   * @description Locator for the add button on exit card selection page
   */
  addButton() {
    return this.page.locator(this.ADD_BUTTON_ON_SELECTION);
  }

  /**
   * @description Locator for the exit card radio button on selection page
   * @param className name of the exit card to select
   */
  exitCardRadioButton(exitCard: string) {
    return this.page.locator(this.EXIT_CARD_RADIO_BUTTON_ON_SELECTION(exitCard));
  }

  /**
   * @description Locates the class on exitcard assignment assignee page
   * @param className name of the class to assign
   */
  classNameCheckboxInStepper2(className: string) {
    return this.page.locator(this.CLASS_NAME_CHECKBOX_ON_STEPPER2(className));
  }

  /**
   * @description Click on the create new exit card assignment button
   */
  async clickOnCreateNewExitCardButton() {
    await this.createNewButton().click();
  }

  /**
   * @description Click on the select exit card button
   */
  async clickOnSelectExitCardButton() {
    await this.selectExitCard().click();
  }

  /**
   * @description Search for the given exit card on selection page and select the same
   * @param exitCard the exit card to search for
   */
  async searchAndSelectExitCardOnSelectionPage(exitCard: string) {
    await performSearch(this.page, exitCard);
    await this.exitCardRadioButton(exitCard).click();
  }

  /**
   * @description Click on the Add button on exit card selection page
   */
  async clickOnAddButton() {
    await this.addButton().click();
  }

  /**
   * @description Select the course from dropdown on stepper1
   * @param courseName name of the course to select from the dropdown
   */
  async selectCourseFromDropdown(courseName: string) {
    await selectValueFromDropDown(this.page, this.courseDropdown(), courseName);
  }

  /**
   * @description Enter the assignment name on stepper1
   * @param assignmentName name of the newly created ec assignment
   */
  async enterExitCardAssignmentName(assignmentName: string) {
    await this.assignmentName().fill(assignmentName);
  }

  /**
   * @description Click on the Next button
   */
  async clickOnNextButton() {
    await this.nextButton().click();
  }

  /**
   * @description Click on the Go button
   */
  async clickOnGoButton() {
    await this.goButton().click();
  }

  /**
   * @description Click on the given class name checkbox
   * @param className name of the class which the ec assignment should be assigned
   */
  async clickOnClassCheckbox(className: string) {
    await this.classNameCheckboxInStepper2(className).click();
  }

  /**
   * @description Click on the Assign button
   */
  async clickOnAssignButton() {
    await this.assignButton().click();
  }

}
