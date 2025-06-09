import { Page, Locator, expect } from '@playwright/test';
import { waitForPreloaderToHide } from './waitForPreloader';
import { CommonConstants } from './commonConstants';
import { performSearch } from './searchListing';
import { getExpiryDate } from './getCurrentDateTime';

export class CommonFunctions {
    private readonly page: Page;

    private readonly className = (className: string) => `//div[contains(@class, "group-name-container")]//a[text()=" ${className} "]`;
    private readonly classDetailsCourseTableActionBtn = (n: number) => `mat-table.study-material-table tr:nth-child(${n}) mat-cell.mat-column-actions > button > span > mat-icon`;
    private readonly COURSE_UNASSIGN_BTN = '[aria-label="Unassign Course"]';
    private readonly ASSIGN_COURSE_BTN = '#assign-course-btn';
    private readonly chooseCourse = (n: number) => `[matsortactive='courseName'] mat-row:nth-child(${n}) mat-cell:nth-child(1) mat-radio-button`;
    private readonly ASSIGN_COURSE_PAGE_STEP1_NEXTBTN = '[name="step1NextButton"]';
    private readonly STEP2_ASSIGN_COURSE_BTN = '//button[contains(@id, "assign-btn")]//span[contains(@class, "mat-button-wrapper")]';

    private readonly CREATE_NEW_ASSIGNMENT_BTN = '//button[text()=" CREATE NEW ASSIGNMENT "]';
    private readonly SELECT_CONTENT_FOR_ASSIGNMENT = "button[aria-label='Select Content']";
    private readonly selectCourseForAssignment = (courseName: string) => `//div[text()=" ${courseName} "]`;
    private readonly SELECT_ALL_CHECKBOX = 'th mat-checkbox';
    private readonly ASSIGNMENT_NAME_ON_STEP1 = "//*[@automation-id='assignment-name-input-field']";
    private readonly DUE_DATE_FIELD = "//*[@automation-id='date-input-assignment-due-date']";
    private readonly ASSIGNMENT_CREATION_STEP1_NEXT_BUTTON = "//*[@automation-id='next-button']//button";
    private readonly GO_BTN_ON_STEP2 = "#create-assignment-go-btn";
    private readonly CHECKALL_STEP2 = "div#group-component-container>div>app-student-listing-table>app-expansion-panel>mat-checkbox>label";
    private readonly ASSIGNBTN_STEP2 = 'button[automation-id="create-assignment-assign-btn"]';
    private readonly WARNING_POPUP_YES_BTN = "//button[contains(@id, 'positive-btn')]//span[1]";
    private readonly SUCCESS_POPUP_OK_BTN = 'button[automation-id="dialog-box-ok-btn"]';
    private readonly PROGRESS_BAR = "//div[contains(@class, 'processing-bar-popup')]//mat-dialog-content//app-report-progress-bar[contains(@class, 'report-progress-bar')]";
    private readonly ACTIONS_ICON = "mat-icon[aria-label='Action']";
    private readonly actionMenuItem = (index: number) => "button[role='menuitem']:nth-child(" + index + ")";
    private readonly RUBRIC_NAME_INPUT = "[name='name']";
    private readonly PUBLISH_RUBRIC_BUTTON = "button[id='create-rubric-publish-button']";
    private readonly POPUP_OK_BUTTON = "button[id='ok-btn']";
    private readonly SAVE_BUTTON_HEADER = "button#create-rubric-save-button";
    private readonly SAVE_BTN = ".mat-menu-content button[aria-label='save']";
    private readonly UNLOCK_BUTTON = "button#create-rubric-unlock-button";
    private readonly PROFILE_BUTTON = "//button[contains(@id,'profile-btn')]"
    private readonly SWITCH_SCHOOL_BUTTON = "//button[contains(text(),'Switch School')]"
    private readonly schoolRadioButton = (schoolName: string) => `//span[contains(text(),'${schoolName}')]//ancestor::mat-radio-button`
    private readonly SWITCH_SCHOOL_DONE_BUTTON = "//button//span[contains(text(),'DONE')]"
    private readonly MORE_ACTION_BUTTON = "button[aria-label='More Actions']";
    private readonly LOGIN_AS_STUDENT_BUTTON = "button#student-listing-log-in-as-student-btn0";
    private readonly ASSIGNMENT_TAB = '//div[text()="Assignments"]';
    private readonly ASSIGNMENT_OPEN_BUTTON = "//button[@automation-id='action-button-0']";
    private readonly RESUME_BUTTON = '//span[text()="resume"]';
    private readonly POPUP_RESUME_BUTTON = "//app-instruction-dialog/div/div[3]/button[2]";
    private readonly SUBMIT_BUTTON = '//span[text()="Submit"]';
    private readonly POSITIVE_BUTTON = "button#positive-btn";
    private readonly DASHBOARD_BUTTON = "button[aria-label='dashboard']";
    private readonly viewDetailsButton = (courseName: string) => `button[aria-label="View Details ${courseName}"]`;
    private readonly openAssignmentButton = (cqName: string) => `button[aria-label="Open ${cqName}"]`;
    private readonly NAV_MENU = 'button[aria-label="Navigation Menu"]';
    private readonly COMPLETED_TAB = '//div[text()="Completed"]';
    private readonly OVERDUE_TAB = '//div[text()="Overdue"]';
    private readonly assignmentName = (assignmentName: string) => `//p[contains(text(), "${assignmentName}")]`;
    private readonly LOG_BACK_AS_USER_BTN = "div.log-back button";

    constructor(page: Page) {
        this.page = page;
    }
    /**
   * @description course name link
   */
    classNameLink(className: string) {
        return this.page.locator(this.className(className));
    }

    /**
     * @description Gets the action button icon from the course details table for the nth row
     * @param {number} n - Row number in the table
     */
    classDetailsCourseTableActionButton(n: number) {
        n++;
        return this.page.locator(this.classDetailsCourseTableActionBtn(n));
    }

    /**
     * @description Unassign course button
     */
    courseUnassignButton() {
        return this.page.locator(this.COURSE_UNASSIGN_BTN);
    }

    /**
     * @description Assign course button
     */
    assignCourseButton() {
        return this.page.locator(this.ASSIGN_COURSE_BTN);
    }

    /**
     * @description Choose a course to assign from the list (nth course)
     * @param {number} n - Row number in the course list
     */
    chooseCourseToAssign(n: number) {
        n++;
        return this.page.locator(this.chooseCourse(n));
    }

    /**
     * @description Step 1 Next button on Assign Course page
     */
    assignCoursePageStep1NextButton() {
        return this.page.locator(this.ASSIGN_COURSE_PAGE_STEP1_NEXTBTN);
    }

    /**
     * @description Step 2 Assign course button
     */
    step2AssignCourseButton() {
        return this.page.locator(this.STEP2_ASSIGN_COURSE_BTN);
    }
    /**
     * @description Button to create a new assignment
     */
    createNewAssignmentButton() {
        return this.page.locator(this.CREATE_NEW_ASSIGNMENT_BTN);
    }

    /**
     * @description Button to select content for an assignment
     */
    selectContentForAssignmentButton() {
        return this.page.locator(this.SELECT_CONTENT_FOR_ASSIGNMENT);
    }

    /**
     * @description Selector for a specific course
     */
    selectCourse(courseName: string) {
        return this.page.locator(this.selectCourseForAssignment(courseName));
    }

    /**
     * @description Checkbox to select all content
     */
    selectAllCheckbox() {
        return this.page.locator(this.SELECT_ALL_CHECKBOX);
    }

    /**
     * @description Input field for the assignment name on Step 1
     */
    assignmentNameInputField() {
        return this.page.locator(this.ASSIGNMENT_NAME_ON_STEP1);
    }

    /**
     * @description Input field for the due date of the assignment
     */
    dueDateField() {
        return this.page.locator(this.DUE_DATE_FIELD);
    }

    /**
     * @description Next button on Step 1 of assignment creation
     */
    assignmentCreationStep1NextButton() {
        return this.page.locator(this.ASSIGNMENT_CREATION_STEP1_NEXT_BUTTON);
    }

    /**
     * @description Go button on Step 2 of assignment creation
     */
    goButtonOnStep2() {
        return this.page.locator(this.GO_BTN_ON_STEP2);
    }

    /**
     * @description Checkbox to select all classes for Step 2
     */
    checkAllCheckboxStep2() {
        return this.page.locator(this.CHECKALL_STEP2);
    }

    /**
     * @description Assign button on Step 2 of assignment creation
     */
    assignButtonStep2() {
        return this.page.locator(this.ASSIGNBTN_STEP2);
    }

    /**
     * @description warning popup "Yes" button
     *
     */
    warningPopupYesBtn() {
        return this.page.locator(this.WARNING_POPUP_YES_BTN);
    }

    /**
     * @description success popup OK button
     *
     */
    successPopupOkBtn() {
        return this.page.locator(this.SUCCESS_POPUP_OK_BTN);
    }

    /**
     * @description progress bar locator
     * 
     */
    progressBar() {
        return this.page.locator(this.PROGRESS_BAR);
    }

    /**
 * @description actions icon element
 */
    actionsIcon() {
        return this.page.locator(this.ACTIONS_ICON);
    }

    /**
    * @description actions menu element
    */
    actionMenu(index: number) {
        return this.page.locator(this.actionMenuItem(index)).first();
    }

    /**
   * @description rubric name input locator
   */
    rubricNameInput() {
        return this.page.locator(this.RUBRIC_NAME_INPUT);
    }

    /**
    * @description publish rubric button
    */
    publishRubricButton() {
        return this.page.locator(this.PUBLISH_RUBRIC_BUTTON);
    }

    /**
    * @description success popup ok button
    */
    popupOkButton() {
        return this.page.locator(this.POPUP_OK_BUTTON);
    }

    /**
  * @description save button in header
  */
    saveButtonHeader() {
        return this.page.locator(this.SAVE_BUTTON_HEADER);
    }

    /**
    * @description save button
    */
    saveButton() {
        return this.page.locator(this.SAVE_BTN);
    }

    /**
    * @description unlock button
    */
    unlockButton() {
        return this.page.locator(this.UNLOCK_BUTTON);
    }

    /**
    * @description profile button
    */
    profileButton() {
        return this.page.locator(this.PROFILE_BUTTON);
    }

   /**
   * @description more action button
   */
    moreActionButton() {
        return this.page.locator(this.MORE_ACTION_BUTTON);
    }

    /**
    * @description Switch School button
    */
    switchSchoolButton() {
        return this.page.locator(this.SWITCH_SCHOOL_BUTTON);
    }

   /**
   * @description login As Student Button
   */
    loginAsStudentButton() {
        return this.page.locator(this.LOGIN_AS_STUDENT_BUTTON);
    }

    /**
    * @description Locator for school radio buttons present in switch school popup
    */
    selectSchoolRadioButton(schoolName: string) {
        return this.page.locator(this.schoolRadioButton(schoolName));
    }

   /**
   * @description assignment Tab
   */
    assignmentTab() {
        return this.page.locator(this.ASSIGNMENT_TAB);
    }

    /**
    * @description switch school done button
    */
    switchSchoolDoneButton() {
        return this.page.locator(this.SWITCH_SCHOOL_DONE_BUTTON);
    }

   /**
   * @description assignment open button
   */
    assignmentOpenButton() {
        return this.page.locator(this.ASSIGNMENT_OPEN_BUTTON);
    }

    /**
   * @description resume button
   */
    resumeButton() {
        return this.page.locator(this.RESUME_BUTTON);
    }

    /**
   * @description popup resume button
   */
    popupResumeButton() {
        return this.page.locator(this.POPUP_RESUME_BUTTON);
    }

    /**
   * @description submit button
   */
    submitButton() {
        return this.page.locator(this.SUBMIT_BUTTON);
    }

    /**
   * @description positive button
   */
    positiveButton() {
        return this.page.locator(this.POSITIVE_BUTTON);
    }

    /**
   * @description dashboard Button
   */
    dashboardButton() {
        return this.page.locator(this.DASHBOARD_BUTTON);
    }

    /**
     * @description view details button of the course
     */
    viewDetailsButtonOfCourse(courseName: string) {
        return this.page.locator(this.viewDetailsButton(courseName));
    }

    /**
    * @description view details button of the course
    */
    openAssignmentButtonOfCourse(cqName: string) {
        return this.page.locator(this.openAssignmentButton(cqName));
    }

    /**
    * @description navigation menu
    */
    navigationMenu() {
        return this.page.locator(this.NAV_MENU);
    }

    /**
    * @description completed Tab
    */
    completedTab() {
        return this.page.locator(this.COMPLETED_TAB);
    }

    /**
    * @description overdue Tab
    */
     overdueTab() {
        return this.page.locator(this.OVERDUE_TAB);
    }

    /**
    * @description assignment Name Locator
    */
    assignmentNameLocator(assignmentName: string) {
        return this.page.locator(this.assignmentName(assignmentName));
    }

    /**
    * @description log Back In As User Button
    */
    logBackInAsUserButton() {
        return this.page.locator(this.LOG_BACK_AS_USER_BTN);
    }

    public async unassignAndAssignCourse(className: string, courseName: string) {
        await this.page.waitForTimeout(CommonConstants.ANIMATION_SLEEP);
        await this.classNameLink(className).click();
        await waitForPreloaderToHide(this.page);
        await this.page.waitForTimeout(CommonConstants.ANIMATION_SLEEP);
        await this.classDetailsCourseTableActionButton(1).click();
        await this.courseUnassignButton().click();
        await this.warningPopupYesBtn().click();
        await waitForPreloaderToHide(this.page);
        await this.page.waitForTimeout(CommonConstants.ANIMATION_SLEEP);
        await this.successPopupOkBtn().click();


        await this.assignCourseButton().click();
        await waitForPreloaderToHide(this.page);
        await this.page.waitForTimeout(CommonConstants.ANIMATION_SLEEP);
        await performSearch(this.page, courseName);
        await this.chooseCourseToAssign(1).click();
        await this.assignCoursePageStep1NextButton().click();
        await waitForPreloaderToHide(this.page);
        await this.page.waitForTimeout(CommonConstants.ANIMATION_SLEEP);
        await this.step2AssignCourseButton().click();
        await this.successPopupOkBtn().click();
        await waitForPreloaderToHide(this.page);
    }

    public async createNewAssignment(assignmentName: string, courseName: string) {
        await this.createNewAssignmentButton().click();
        await waitForPreloaderToHide(this.page);
        await this.selectContentForAssignmentButton().click();
        await this.page.waitForTimeout(CommonConstants.ANIMATION_SLEEP);
        await performSearch(this.page, courseName);
        await waitForPreloaderToHide(this.page);
        await this.selectCourse(courseName).click();
        await waitForPreloaderToHide(this.page);
        await this.selectAllCheckbox().click();
        await this.warningPopupYesBtn().click();
        await waitForPreloaderToHide(this.page);
        await this.assignmentNameInputField().fill(assignmentName);
        const nextDate = getExpiryDate();
        console.log(nextDate);
        await this.dueDateField().fill(nextDate);
        await this.assignmentCreationStep1NextButton().click();
        await waitForPreloaderToHide(this.page);
        await this.goButtonOnStep2().click();
        await waitForPreloaderToHide(this.page);
        await this.checkAllCheckboxStep2().click();
        await this.assignButtonStep2().click();
        await expect(this.progressBar()).toBeHidden({ timeout: 5000 });
        await this.warningPopupYesBtn().click();
        await waitForPreloaderToHide(this.page);
        await expect(this.progressBar()).toBeHidden({ timeout: 5000 });
        await this.successPopupOkBtn().click();
        await waitForPreloaderToHide(this.page);
    }

    public async editRubricNameAndPublish(page: Page, rubricName: string) {
        await this.actionsIcon().click();
        await this.actionMenu(1).click();
        await waitForPreloaderToHide(this.page);

        await page.waitForTimeout(CommonConstants.INPUT_TEXT_SLEEP);
        await this.rubricNameInput().fill('');
        await page.waitForTimeout(CommonConstants.INPUT_TEXT_SLEEP);
        await this.rubricNameInput().fill(rubricName);

        await this.publishRubricButton().click();
        await waitForPreloaderToHide(this.page);
        await page.waitForTimeout(CommonConstants.ANIMATION_SLEEP);

        await this.warningPopupYesBtn().click();

        await this.popupOkButton().click();
        await waitForPreloaderToHide(this.page);
        await page.waitForTimeout(CommonConstants.ANIMATION_SLEEP);
    }

    public async publishRubric(rubricName: string) {
        await performSearch(this.page, rubricName);

        await this.actionsIcon().click();
        await this.actionMenu(1).click();
        await waitForPreloaderToHide(this.page);
    }

    public async saveRubric() {
        await this.saveButtonHeader().click();
        await this.saveButton().click();
        await waitForPreloaderToHide(this.page);
        await this.popupOkButton().click();
    }

    public async saveAndUnlockRubric(rubricName: string) {
        await this.page.waitForTimeout(CommonConstants.ANIMATION_SLEEP);
        await this.publishRubric(rubricName);

        await this.saveRubric();
        await this.unlockButton().click();
        await this.warningPopupYesBtn().click();
        await this.popupOkButton().click();
    }

    public getLastEditedByName(role: string, testdata: any) {
        let lastEditedByName = testdata.lastEditedByPA;
        switch (role) {
            case "CA":
                lastEditedByName = testdata.lastEditedByCA;
                break;
            case "CE":
                lastEditedByName = testdata.lastEditedByCE;
                break;
        }
        return lastEditedByName;
    }

    public async verifyTooltipOfAnElement(locator: Locator, tooltipLocator: Locator, tooltipText: string) {
        await locator.hover();
        await tooltipLocator.waitFor({ state: 'visible', timeout: 5000 });
        const text = await tooltipLocator.innerText();
        const text2 = text.replace('\n', ' ');
        await expect(text2).toBe(tooltipText);
    }

    public async logInAsAUser(userName: string) {
        await performSearch(this.page, userName);
        await this.moreActionButton().click();
        await this.loginAsStudentButton().click();
        await this.warningPopupYesBtn().click();
        await waitForPreloaderToHide(this.page);
        await this.page.waitForTimeout(CommonConstants.ANIMATION_SLEEP);
    }

    /**
   * @description launch and attempt the reopen assignment just by resuming and submitting the quiz
   */
    public async launchAndAttemptReopenedAssignment(isOverdue: boolean) {
        await this.assignmentTab().click();
        if (isOverdue) {
            await this.overdueTab().click();
        }
        await this.assignmentOpenButton().click();
        await this.page.waitForTimeout(CommonConstants.ANIMATION_SLEEP);
        await waitForPreloaderToHide(this.page);
        await this.attemptReopenedAssessment();
    }

    /**
    * @description attempt the reopen assignment just by resuming and submitting the quiz
   */
    public async attemptReopenedAssessment() {
        await this.resumeAssessment();
        await this.submitAssessent();
    }

    /**
     * @description resume the assessment
    */
    public async resumeAssessment() {
        await this.resumeButton().click();
        await this.popupResumeButton().click();
    }

    /**
     * @description submit the assessment
    */
    public async submitAssessent() {
        await this.submitButton().click();
        await this.positiveButton().click();
        await this.page.waitForTimeout(CommonConstants.ANIMATION_SLEEP);
        await waitForPreloaderToHide(this.page);
    }

    /**
    * @description Click on profile button
    *
    */
    public async clickOnProfileButton() {
        await this.profileButton().click();
    }

    /**
    * @description Click on Switch School button
    *
    */
    public async clickOnSwitchSchoolButton() {
        await this.switchSchoolButton().click();
    }

    /**
    * @description Click on radio button for a school
    *
    */
    public async clickOnSelectSchoolRadioButton(schoolName: string) {
        await this.selectSchoolRadioButton(schoolName).click();
    }

    /**
    * @description Click on Switch School Done Button
    *
    */
    public async clickOnSwitchSchoolDoneButton() {
        await this.switchSchoolDoneButton().click();
        await waitForPreloaderToHide(this.page);
    }

    /**
    * @description Switch to a particular schhol
    *
    */
    public async switchToAParticularSchool(schoolName: string) {
        await this.clickOnProfileButton();
        await this.clickOnSwitchSchoolButton();
        await this.clickOnSelectSchoolRadioButton(schoolName);
        await this.clickOnSwitchSchoolDoneButton();
    }

    /**
    * @description click on dashboard
    */
    public async clickOnDashboardButton() {
        await this.dashboardButton().click();
    }

    /**
    * @description click On Assignment Tab
    */
    public async clickOnAssignmentTab() {
        await this.assignmentTab().click();
    }

    /**
    * @description click On Completed Tab
    */
    public async clickOnCompletedTab() {
        await this.completedTab().click();
    }

    public async clickOnAssignmentName(assignmentName: string) {
        await this.assignmentNameLocator(assignmentName).click();
        await waitForPreloaderToHide(this.page);
    }

    public async clickOnLogBackAsUserButton() {
        await this.logBackInAsUserButton().click();
    }

    /**
    * @description click On View Details Button Of Course
    */
    public async clickOnViewDetailsButtonOfCourse(courseName: string) {
        await this.viewDetailsButtonOfCourse(courseName).click();
        await waitForPreloaderToHide(this.page);
    }

    /**
    * @description click On Open Button Of the assignment
    */
    public async clickOnOpenAssignmentButton(cqName: string) {
        await this.openAssignmentButtonOfCourse(cqName).click();
        await waitForPreloaderToHide(this.page);
    }

    /**
    * @description click On Navigation Menu
    */
    public async clickOnNavigationMenu() {
        await this.navigationMenu().click();
        await this.page.waitForTimeout(CommonConstants.ANIMATION_SLEEP);
    }
}

export async function selectOptionFromFilterDropdown(page: Page, selectOption: string) {
    const manageFilter: Locator = page.locator(".icon-Filter");
    await manageFilter.click();
    const optionLocator: Locator = page.locator("//div[text()=' " + selectOption + " ']");
    await optionLocator.click();
    await page.mouse.move(100, 200);
    await page.locator("#positive-btn").click();
    await waitForPreloaderToHide(page);
}

//selectOption is not present in filter dropdown
export async function verifyElementNotInFilterDropdown(page: Page, selectOption: string) {
    const manageFilter: Locator = page.locator(".icon-Filter");
    await manageFilter.click();
    const optionLocator: Locator = page.locator(`//div[contains(@class, 'clampThis') and normalize-space(text()) = '${selectOption}']`);
    const count = await optionLocator.count();
    if (count > 0) {
        throw new Error(`The option "${selectOption}" is present in the filter dropdown, but it should not be.`);
    }
    await page.locator("button#negative-btn").click();
    await waitForPreloaderToHide(page);
}

// Check the presence of selectOption in filter
export async function verifyElementInFilterDropdown(page: Page, selectOption: string) {
    const optionLocator: Locator = page.locator(`//div[contains(@class, 'clampThis') and normalize-space(text()) = '${selectOption}']`);
    const count = await optionLocator.count();
    if (count == 0) {
        throw new Error(`The option "${selectOption}" is not present in the filter dropdown, but it was expected to be.`);
    }
}

export async function searchOptionFromDropdown(page: Page, Element: Locator, Option: string) {
    await Element.click();
    if (Option.trim().toLowerCase() === 'select all') {
        await page.locator('.buttons-all label').first().click();
      } else {
        await page.locator('//input[@aria-label="Search"]').pressSequentially(Option);
        const optionLocator = "mat-option[name='fieldName'] > span";
        await page.locator(optionLocator).first().click();
      }
    await page.waitForTimeout(CommonConstants.ANIMATION_SLEEP * 2);
    await page.keyboard.press('Escape');
    await waitForPreloaderToHide(page);
}

export async function verifyValueNotPresentInDropDown(page: Page, elementSelector: Locator, option: string) {
    await elementSelector.click();
    const optionLocator: Locator = page.locator(`//*[normalize-space(text()) = '${option}']`);
    const count = await optionLocator.count();
    if (count > 0) {
        throw new Error(`The option "${option}" is present in the dropdown, but it should not be.`);
    }
    await page.waitForTimeout(CommonConstants.ANIMATION_SLEEP);
    await page.keyboard.press('Escape');
}

export async function verifyValuePresentInDropDown(page: Page, elementSelector: Locator, option: string) {
    await elementSelector.click();
    const optionLocator: Locator = page.locator(`//*[normalize-space(text())='${option}']`);
    const count = await optionLocator.count();
    if (count == 0) {
        throw new Error(`The option "${option}" is not present in the dropdown, but it was expected to be.`);
    }
    await page.waitForTimeout(CommonConstants.ANIMATION_SLEEP);
    await page.keyboard.press('Escape');
}

export async function waitForElementToBeVisible(locator: Locator, timeout: number) {
    try {
        await locator.waitFor({ state: 'visible', timeout });
    } catch (error) {
        throw new Error(`Element not visible within ${timeout} ms: ${error.message}`);
    }
}