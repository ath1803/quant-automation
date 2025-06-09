import { Page } from '@playwright/test';
import { waitForPreloaderToHide } from '../../zeus-playwright/quantum-common/utils/waitForPreloader';

export class StudentAttemptPage {
  private readonly page: Page;

  // Constants for Locators
  private readonly COURSE_QUIZ_LAUNCH_BUTTON = '.course-quiz-launch-page button';
  private readonly START_ATTEMPT_BUTTON = '#instruction-dialog-start-btn';
  private readonly ATTEMPT_NEXT_QUESTION_BUTTON =
    "(//button[contains(@class, 'navigation-button-next')])[2]";
  private readonly SINGLE_SELECT_RADIO_OPTION = (optionNumber: string) =>
    `.single-select-option .option:nth-child(${optionNumber}) label`;
  private readonly MULTI_SELECT_CHECKBOX_OPTION = (checkboxNum: string) =>
    `(//div[contains(@class, 'multi-select-option')]//mat-checkbox//label)[${checkboxNum}]`;
  private readonly FIB_INPUT_BOX = (fibNum: string) =>
    `(//app-ckeditor-input-field)[${fibNum}]//div[@contenteditable="true"]`;
  private readonly RESPONSE_MATRIX_RADIO_OPTIONS = (optionNumber: string) =>
    `(//mat-radio-button//div[@class='mdc-radio'])[${optionNumber}]`;
  private readonly DROPDOWN_OPTION = (dropdownNum: string) =>
    `(//div//mat-select//div[contains(@class, 'mat-mdc-select-trigger')])[${dropdownNum}]`;
  private readonly OPTION_IN_DROPDOWN_QUESTION = (dropdownAns: string) =>
    `//app-rte-viewer /div//p[text()='${dropdownAns}']`;
  private readonly CLASSIFY_QUESTION_OPTION = (classifyOption: string) =>
    `(//div//div[contains(@class, 'padding-token')]//button)[${classifyOption}]`;
  private readonly CLASSIFY_QUESTION_TOKEN_OPTION = (tokenNum: string) =>
    `(//div[contains(@class, 'mat-mdc-menu-content')]//button)[${tokenNum}]`;
  private readonly DND_OPTION = (optionNum: string) =>
    `(//div[contains(@class, 'response-box')]//button)[${optionNum}]`;
  private readonly TEXTBOX_IFRAME = '//iframe';
  private readonly TEXT_CONTENT_INPUT_BOX = 'body.cke_editable';
  private readonly SUBMIT_BUTTON = "//*[normalize-space(text())='Submit']";
  private readonly POSITIVE_BUTTON = '#positive-btn';

  // Exit card assignment attempt
  private readonly OK_BUTTON = ".ok-btn";
  private readonly LAUNCH_EC_ASSIGNMENT = ".assignment-launch-btn";
  private readonly START_BUTTON_ON_EC_INSTRUCTIONS_POPUP = "#instruction-dialog-start-btn";

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * @description Locates the cq launch button
   */
  cqLaunchButton() {
    return this.page.locator(this.COURSE_QUIZ_LAUNCH_BUTTON);
  }

  /**
   * @description Locates the start attempt button
   */
  startAttemptButton() {
    return this.page.locator(this.START_ATTEMPT_BUTTON);
  }

  /**
   * @description Locates the next button
   */
  nextQuestion() {
    return this.page.locator(this.ATTEMPT_NEXT_QUESTION_BUTTON);
  }

  /**
   * @description Locates the submit button
   */
  submitButton() {
    return this.page.locator(this.SUBMIT_BUTTON);
  }

  /**
   * @description Locates the positive button popup
   */
  positiveButton() {
    return this.page.locator(this.POSITIVE_BUTTON);
  }

  /**
   * @description Locates the Ok button on popup
   */
  okButton() {
    return this.page.locator(this.OK_BUTTON);
  }

  /**
   * @description Locates the Launch button for exit card assignment
   */
  launchEcAssignment() {
    return this.page.locator(this.LAUNCH_EC_ASSIGNMENT);
  }

  /**
   * @description Locates the start button on exit card instructions popup
   */
  startButtonOnECInstructions() {
    return this.page.locator(this.START_BUTTON_ON_EC_INSTRUCTIONS_POPUP);
  }

  /**
   * @description Locates radio button of optionNumber for single select question
   */
  singleSelectOptionRadio(optionNumber: string) {
    return this.page.locator(this.SINGLE_SELECT_RADIO_OPTION(optionNumber));
  }

  /**
   * @description Locates the checkbox for multi select question
   */
  multiSelectOptionCheckbox(checkboxNum: string) {
    return this.page.locator(this.MULTI_SELECT_CHECKBOX_OPTION(checkboxNum));
  }

  /**
   * @description Locates the text input box of FIB question
   */
  fibInputBox(fibNum: string) {
    return this.page.locator(this.FIB_INPUT_BOX(fibNum));
  }

  /**
   * @description Locates the dropdown question option
   */
  dropdownOptions(dropdownOption: string) {
    return this.page.locator(this.DROPDOWN_OPTION(dropdownOption));
  }

  /**
   * @description Locates the dropdown answers
   */
  dropdownOptionAnswer(dropdownAnswer: string) {
    return this.page.locator(this.OPTION_IN_DROPDOWN_QUESTION(dropdownAnswer));
  }

  /**
   * @description Locates the classify options
   */
  classifyOptions(classifyOption: string) {
    return this.page.locator(this.CLASSIFY_QUESTION_OPTION(classifyOption));
  }

  /**
   * @description Locates the token in each option
   */
  tokenInOptions(tokenNum: string) {
    return this.page.locator(this.CLASSIFY_QUESTION_TOKEN_OPTION(tokenNum));
  }

  /**
   * @description Locates the drag and drop question option
   */
  dndOption(dndOption: string) {
    return this.page.locator(this.DND_OPTION(dndOption));
  }

  /**
   * @description Locates the response matrix radio options
   */
  responseMatrixRadioOption(optionNumber: string) {
    return this.page.locator(this.RESPONSE_MATRIX_RADIO_OPTIONS(optionNumber));
  }

  /**
   * @description Locates the essay text input box
   */
  textContentInputBox() {
    return this.page.frameLocator(this.TEXTBOX_IFRAME).locator(this.TEXT_CONTENT_INPUT_BOX);
  }

  /**
   * @description Launch the cq and click on the start attempt button
   */
  async launchCqAndStartAttempt() {
    await this.cqLaunchButton().click();
    await this.startAttemptButton().click();
  }

  /**
   * @description Attempts the single select question
   * @param optionNumber the radio button option that should be marked
   */
  async attemptSsq(optionNumber: string) {
    await this.singleSelectOptionRadio(optionNumber).click();
    await this.nextQuestion().click();
    await waitForPreloaderToHide(this.page);
  }

  /**
   * @description Attempts the multi select question
   * @param checkboxNum the checkbox option that should be marked
   */
  async attemptMsqWith2Answers(checkboxNum: string, checkboxNum2: string) {
    await this.multiSelectOptionCheckbox(checkboxNum).click();
    await this.multiSelectOptionCheckbox(checkboxNum2).click();
    await this.nextQuestion().click();
    await waitForPreloaderToHide(this.page);
  }

  /**
   * @description Attempts the fib question
   * @param fibNum fib input box
   * @param fibAnswer answer to be filled in given fib inputbox
   */
  async attemptFibWithAnswers(fibPairs: { [key: string]: string }) {
    for (const [fibNum, fibAnswer] of Object.entries(fibPairs)) {
      await this.page.waitForTimeout(200);
      await this.fibInputBox(fibNum).fill(fibAnswer);
    }
    await this.nextQuestion().click();
    await waitForPreloaderToHide(this.page);
  }

  /**
   * @description Attempts the response matrix question
   * @param optionNumber the response matrix option to select
   */
  async attemptResponseMatrixQuestion(optionNumber: string, optionNumber2: string) {
    await this.responseMatrixRadioOption(optionNumber).click();
    await this.responseMatrixRadioOption(optionNumber2).click();
    await this.nextQuestion().click();
    await waitForPreloaderToHide(this.page);
  }

  /**
   * @description Attempts the dropdown question
   * @param dropdownNum dropdowns in question
   * @param dropdownAnswer answer of the dropdown question
   */
  async attemptDropdownQuestions(dropdownPairs: { [key: string]: string }) {
    for (const [dropdownNum, dropdownAnswer] of Object.entries(dropdownPairs)) {
      await this.dropdownOptions(dropdownNum).click();
      await this.dropdownOptionAnswer(dropdownAnswer).click();
    }
    await this.nextQuestion().click();
    await waitForPreloaderToHide(this.page);
  }

  /**
   * @description Attempts the classify question
   * @param classifyNum classify option
   * @param classifyTokenNum token in option
   */
  async attemptClassifyQuestion(classifyPairs: { [key: string]: string }) {
    for (const [classifyNum, classifyTokenNum] of Object.entries(classifyPairs)) {
      await this.classifyOptions(classifyNum).click();
      await this.tokenInOptions(classifyTokenNum).click();
    }
    await this.nextQuestion().click();
    await waitForPreloaderToHide(this.page);
  }

  /**
   * @description Attempts the dnd question
   * @param dndNum dnd option
   * @param tokenNum token in option
   */
  async attemptDNDQuestion(DNDPairs: { [key: string]: string }) {
    for (const [dndNum, tokenNum] of Object.entries(DNDPairs)) {
      await this.dndOption(dndNum).click();
      await this.tokenInOptions(tokenNum).click();
    }
    await this.nextQuestion().click();
    await waitForPreloaderToHide(this.page);
  }

  /**
   * @description Attempts the essay question
   * @param essayAnswer the text to enter in the essay question
   */
  async attemptEssayQuestion(essayAnswer: string, rteSleep: number) {
    await this.textContentInputBox().pressSequentially(essayAnswer);
    if (this.page.frame({ url: /.*iframe.*/ })) {
      await this.page.mainFrame();
    }
    await this.page.waitForTimeout(rteSleep);
  }

  /**
   * @description click on the submit button and the ok button on success popup
   */
  async clickOnSubmitButton() {
    await this.submitButton().click();
    if (await this.positiveButton().isVisible()) {
      await this.positiveButton().click();
    }
  }

  /**
   * @description click on the ok button on instructions popup
   */
  async clickOnOkButton() {
    if (await this.okButton().isVisible()) {
      await this.okButton().click();
    }
  }

  /**
   * @description click on the launch button
   */
  async clickLaunchOnECAssignment() {
    await this.launchEcAssignment().click();
  }

  /**
   * @description click on the start button
   */
  async clickOnStartButton() {
    if (await this.startButtonOnECInstructions().isVisible()) {
      await this.startButtonOnECInstructions().click();
    }
  }
}
