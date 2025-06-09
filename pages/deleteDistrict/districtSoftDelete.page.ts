import { expect, type Locator, type Page } from '@playwright/test';
import { waitForPreloaderToHide } from '../../zeus-playwright/quantum-common/utils/waitForPreloader';
import { verifyElementNotInFilterDropdown } from '../../zeus-playwright/quantum-common/utils/commonFunction';
import { selectValueFromDropDown } from '../../zeus-playwright/quantum-common/utils/selectDropdownValue';
import { performSearch } from '../../zeus-playwright/quantum-common/utils/searchListing';

export class DistrictPage {
    readonly page: Page;

    // Constants for Locators
    private readonly DELETE_BUTTON = "#delete-district";
    private readonly DIALOG_BOX_TEXT = "#alert-dialog-content > div.pass-phrase-message-section";
    private readonly DIALOG_BOX_DISTRICT_NAME = "#alert-dialog-content > div.list-of-users-section.ng-star-inserted";
    private readonly DIALOG_BOX_VERIFY_BUTTON = "#verify-btn";
    private readonly DIALOG_BOX_CANCEL_BUTTON = "#cancel-btn";
    private readonly DELETE_IN_PROGRESS_DIALOG_BOX_OK_BUTTON = "#positive-btn";
    private readonly STATUS_MESSAGE = "p#group-deletion-status-text";
    private readonly DELETE_DISTRICT_TOOL_TIP = "#group-deletion-status-text+button>mat-icon";
    private readonly DELETE_DISTRICT_TOOL_TIP_MESSAGE = "#custom-tooltip>div";
    private readonly DELETE_DISTRICT_DELETE_IN_PROGRESS_POPUP = "#alert-dialog-content>div";
    private readonly DELETE_DISTRICT_PASS_PHRASE_INPUT = "[name='passPhrase']";
    private readonly INCORRECT_PASSPHRASE_ERROR_TEXT = "mat-hint .error-message";
    private readonly PASS_PHRASE_TEXT_LOCATOR = "#pass-phrase-text";
    private readonly CREATE_NEW_DISTRICT_BUTTON = "//span[normalize-space()='Create New District']";
    private readonly SELECT_STATE_DROP_DOWN = "mat-select[name='stateDropDown']";
    private readonly SELECT_DISTRICT_DROP_DOWN = "mat-select[name='districtDropDown']";
    private readonly ADD_USER_CANCEL_BUTTON = "#cancel-btn";
    private readonly WARNING_YES_BUTTON = "#positive-btn";
    private readonly CREATE_DISTRICT_NAME = "//input[@name='districtName']";
    private readonly CREATE_DISTRICT_ALT_NAME = "//input[@name='districtAltName']";
    private readonly DISTRICT_NAME_NOT_AVAILABLE = "span.error-message";
    private readonly PAGINATION_RANGE = "div.mat-mdc-paginator-range-label";
    private readonly DISTRICT_LISTING_SCHOOL_COLUMN = ".school-column>div.nil-count";
    private readonly DISTRICT_LISTING_SCHOOL_COUNT = ".school-column a";
    private readonly SCHOOL_COUNT_IN_POPUP = ".sub-part-title";
    private readonly SCHOOL_NAME_IN_POPUP = (schoolName: string) => `//div[contains(@class, 'text-content') and normalize-space(text())='${schoolName}']`;
    private readonly SCHOOL_COUNT_IN_DISTRICT_DETAILS = (schoolCount: string) => `//div[normalize-space(text())="${schoolCount}"]`;
    private readonly SCHOOL_IN_ACCORDION_DISTRICT_DETAILS = (schoolName: string) => `//td//a[normalize-space(text())='${schoolName}']`;
    private readonly NUMBER_OF_USERS_ON_MY_DISTRICT_PAGE = ".number-of-users > span";
    private readonly CREATED_BY_SCHOOL_TERM_TAB = "//*[normalize-space(text())='Created by School']";
    private readonly DISTRICT_LISTING_DTA_COLUMN = ".dta-ds-count-column>div.nil-count";
    private readonly DISTRICT_LISTING_SOURCE_COLUMN = "(//td[contains(@class, 'da-column')]//div)[1]";
    private readonly DISTRICT_LISTING_STATE_COLUMN = ".state-column >div.mat-mdc-tooltip-trigger";
    private readonly DISTRICT_LISTING_DISTRICT_NAME = ".districtname-column>div.districtname-container a";
    private readonly DISTRICT_LISTING_COURSE_FAMILY = ".course-family-column>div>a";
    private readonly DISTRICT_LISTING_ADD_USER = ".actions-column>button[aria-label='Add']";
    private readonly DISTRICT_LISTING_RESTORE_BUTTON = ".actions-column>button[aria-label='Restore']";

    constructor(page: Page) {
        this.page = page;
    }

    /**
     * @description Locator for district listing district name
     */
    districtListingDistrictName() {
        return this.page.locator(this.DISTRICT_LISTING_DISTRICT_NAME);
    }

    /**
     * @description Locator for district listing course family
     */
    districtListingCourseFamily() {
        return this.page.locator(this.DISTRICT_LISTING_COURSE_FAMILY);
    }

    /**
     * @description Locator for district listing add user button
     */
    districtListingAddUserButton() {
        return this.page.locator(this.DISTRICT_LISTING_ADD_USER);
    }

    /**
     * @description Locator for the district listing rrstore button
     */
    districtListingRestoreButton() {
        return this.page.locator(this.DISTRICT_LISTING_RESTORE_BUTTON);
    }

    /**
     * @description Locator for delete button
     */
    deleteButton() {
        return this.page.locator(this.DELETE_BUTTON);
    }

    /**
     * @description Locator for the dialog box text
     */
    dialogBoxText() {
        return this.page.locator(this.DIALOG_BOX_TEXT);
    }

    /**
     * @description Locator for the dialog box district name
     */
    dialogBoxDistrictName() {
        return this.page.locator(this.DIALOG_BOX_DISTRICT_NAME);
    }

    /**
     * @description Locator for the dialog box verify button
     */
    dialogBoxVerifyButton() {
        return this.page.locator(this.DIALOG_BOX_VERIFY_BUTTON);
    }

    /**
     * @description Locator for the dialog box cancel button
     */
    dialogBoxCancelButton() {
        return this.page.locator(this.DIALOG_BOX_CANCEL_BUTTON);
    }

    /**
     * @description Locator for the delete in progress dialog box OK button
     */
    deleteInProgressDialogBoxOkButton() {
        return this.page.locator(this.DELETE_IN_PROGRESS_DIALOG_BOX_OK_BUTTON);
    }

    /**
     * @description Locator for the status message
     */
    statusMessage() {
        return this.page.locator(this.STATUS_MESSAGE);
    }

    /**
     * @description Locator for the delete district tooltip
     */
    deleteDistrictToolTip() {
        return this.page.locator(this.DELETE_DISTRICT_TOOL_TIP);
    }

    /**
     * @description Locator for the delete district tooltip message
     */
    deleteDistrictToolTipMessage() {
        return this.page.locator(this.DELETE_DISTRICT_TOOL_TIP_MESSAGE);
    }

    /**
     * @description Locator for the delete district delete in progress popup
     */
    deleteDistrictDeleteInProgressPopup() {
        return this.page.locator(this.DELETE_DISTRICT_DELETE_IN_PROGRESS_POPUP).first();
    }

    /**
     * @description Locator for the passphrase input field
     */
    deleteDistrictPassPhraseInput() {
        return this.page.locator(this.DELETE_DISTRICT_PASS_PHRASE_INPUT);
    }

    /**
     * @description Locator for the incorrect passphrase error text
     */
    incorrectPassphraseErrorText() {
        return this.page.locator(this.INCORRECT_PASSPHRASE_ERROR_TEXT);
    }

    /**
     * @description Locator for the passphrase text
     */
    passPhraseTextLocator() {
        return this.page.locator(this.PASS_PHRASE_TEXT_LOCATOR);
    }

    /**
     * @description Locator for the "Create New District" button
     */
    createNewDistrictButton() {
        return this.page.locator(this.CREATE_NEW_DISTRICT_BUTTON);
    }

    /**
     * @description Locator for the state dropdown
     */
    selectStateDropDown() {
        return this.page.locator(this.SELECT_STATE_DROP_DOWN);
    }

    /**
     * @description Locator for the district dropdown
     */
    selectDistrictDropDown() {
        return this.page.locator(this.SELECT_DISTRICT_DROP_DOWN);
    }

    /**
     * @description Locator for the cancel button on the add user form
     */
    addUserCancelButton() {
        return this.page.locator(this.ADD_USER_CANCEL_BUTTON);
    }

    /**
     * @description Locator for the "Yes" button in the warning
     */
    warningYesButton() {
        return this.page.locator(this.WARNING_YES_BUTTON);
    }

    /**
     * @description Locator for the district name input field
     */
    createDistrictName() {
        return this.page.locator(this.CREATE_DISTRICT_NAME);
    }

    /**
     * @description Locator for the alternative district name input field
     */
    createDistrictAltName() {
        return this.page.locator(this.CREATE_DISTRICT_ALT_NAME);
    }

    /**
     * @description Locator for the "District name not available" error message
     */
    districtNameNotAvailable() {
        return this.page.locator(this.DISTRICT_NAME_NOT_AVAILABLE);
    }

    /**
     * @description Locator for the pagination range label
     */
    paginationRange() {
        return this.page.locator(this.PAGINATION_RANGE).first();
    }

    /**
     * @description Locator for the district listing source column
     */
    districtListingDistrictSource() {
        return this.page.locator(this.DISTRICT_LISTING_SOURCE_COLUMN);
    }

    /**
     * @description Locator for the district listing state column
     */
    districtListingStateColumn() {
        return this.page.locator(this.DISTRICT_LISTING_STATE_COLUMN);
    }

    /**
     * @description Locator for the district listing DTA count column
     */
    districtListingDtaCount() {
        return this.page.locator(this.DISTRICT_LISTING_DTA_COLUMN);
    }

    /**
     * @description Locator for the district listing Nil school count column
     */
    districtListingNilSchoolCount() {
        return this.page.locator(this.DISTRICT_LISTING_SCHOOL_COLUMN);
    }

    /**
     * @description Locator for the school count in school popup
     */
    schoolCountInPopup() {
        return this.page.locator(this.SCHOOL_COUNT_IN_POPUP);
    }

    /**
     * @description Locator for the school name in school popup
     */
    schoolNameInPopup(schoolName: string) {
        return this.page.locator(this.SCHOOL_NAME_IN_POPUP(schoolName));
    }

    /**
     * @description Locator for the school count of accordion on district details
     */
    schoolCountInDistrictDetails(schoolCount: string) {
        return this.page.locator(this.SCHOOL_COUNT_IN_DISTRICT_DETAILS(schoolCount));
    }

    /**
     * @description Locator for the school name in accordion on district details
     */
    schoolNameInDistrictDetails(schoolName: string) {
        return this.page.locator(this.SCHOOL_IN_ACCORDION_DISTRICT_DETAILS(schoolName));
    }

    /**
     * @description Locates the SA user count on my district page
     */
    saUserCountOnMyDistrictPage() {
        return this.page.locator(this.NUMBER_OF_USERS_ON_MY_DISTRICT_PAGE).first();
    }

    /**
     * @description Locates the teacher user count on my district page
     */
    teacherUserCountOnMyDistrictPage() {
        return this.page.locator(this.NUMBER_OF_USERS_ON_MY_DISTRICT_PAGE).nth(1);
    }

    /**
     * @description Locates the student user count on my district page
     */
    studentUserCountOnMyDistrictPage() {
        return this.page.locator(this.NUMBER_OF_USERS_ON_MY_DISTRICT_PAGE).nth(2);
    }

    /**
     * @description Locates the created by school tab on my district page
     */
    createdBySchoolTerm() {
        return this.page.locator(this.CREATED_BY_SCHOOL_TERM_TAB);
    }

    /**
     * @description Locator for the district listing school count column
     */
    districtListingSchoolCount() {
        return this.page.locator(this.DISTRICT_LISTING_SCHOOL_COUNT);
    }

    /**
     * @description Verifies if the delete button is enabled
     */
    async verifyDeleteButtonIsEnabled() {
        await expect(this.deleteButton()).toBeEnabled();
    }

    /**
     * @description Clicks on the district delete button
     */
    async clickOnDistrictDeleteButton() {
        await this.deleteButton().click();
    }

    /**
     * @description Clicks on the dialog box cancel button
     */
    async clickOnDialogboxCancelButton() {
        await this.dialogBoxCancelButton().click();
    }

    /**
     * @description Clicks on the dialog box verify button
     */
    async clickOnDialogboxVerifyButton() {
        await this.dialogBoxVerifyButton().click();
    }

    /**
     * @description Clicks on the delete in progress dialog box OK button
     */
    async clickOnDeleteInProgressDialogboxOkButton() {
        await this.deleteInProgressDialogBoxOkButton().click();
    }

    /**
     * @description Verifies if the status message is visible
     */
    async verifyStatusMessageIsVisible() {
        await this.statusMessage().isVisible();
    }

    /**
     * @description Searches for a district on the district listing page
     * @param districtName Name of the district to search for
     */
    async searchDistrictOnDistrictListingPage(districtName: string) {
        await performSearch(this.page, districtName);
        await waitForPreloaderToHide(this.page);
    }

    /**
     * @description Verifies the text in the delete district dialog box
     * @param districtName Name of the district
     * @param text Expected text in the dialog box
     */
    async verifyDeleteDistrictDialogBoxText(districtName: string, text: string) {
        await this.dialogBoxText().isVisible();
        await expect(this.dialogBoxText()).toHaveText(text);
        await expect(this.dialogBoxDistrictName()).toHaveText(districtName);
        await expect(this.dialogBoxVerifyButton()).toBeEnabled();
        await expect(this.dialogBoxCancelButton()).toBeEnabled();
    }

    /**
     * @description Fills in an incorrect passphrase for district deletion
     */
    async fillIncorrectPassphrase(incorrectPassPhrase: string) {
        await this.deleteDistrictPassPhraseInput().fill(incorrectPassPhrase);
    }

    /**
     * @description Verifies the incorrect passphrase error text
     * @param invalidPassPhrase Expected error text
     */
    async verifyIncorrectPassphraseErrorText(invalidPassPhrase: string) {
        await expect(this.incorrectPassphraseErrorText()).toHaveText(invalidPassPhrase);
    }

    /**
     * @description Enters the correct passphrase for district deletion
     */
    async enterCorrectPassphrase() {
        await expect(this.passPhraseTextLocator()).toBeVisible();
        await expect(this.deleteDistrictPassPhraseInput()).toBeVisible();
        const passphraseText = await this.passPhraseTextLocator().innerText();
        await this.deleteDistrictPassPhraseInput().fill(passphraseText);
    }

    /**
     * @description Verifies the text of the delete in progress popup
     * @param DeleteInProgressText Expected text in the popup
     */
    async verifyTextOfDeleteInProgressPopup(DeleteInProgressText: string) {
        await expect(this.deleteDistrictDeleteInProgressPopup()).toHaveText(DeleteInProgressText);
    }

    /**
     * @description Verifies that the delete district dialog box is hidden
     */
    async verifyAbsenceOfDialogBox() {
        await expect(this.dialogBoxText()).toBeHidden();
    }

    /**
     * @description Verifies the scheduled message for district deletion
     */
    async verifyScheduledMessage(permanentDeleteSchedule: string, deleteInProgressStatus: string) {
        await expect(this.statusMessage()).toContainText(permanentDeleteSchedule || deleteInProgressStatus);
    }

    /**
     * @description Verifies the delete district tooltip text
     */
    async verifyDeleteDistrictTooltipText(toolTipMessage: string) {
        await this.deleteDistrictToolTip().hover();
        await expect(this.deleteDistrictToolTipMessage()).toContainText(toolTipMessage);
    }

    /**
     * @description Verifies that an option is not present in the filter dropdown
     * @param filterOption The filter option to check
     */
    async verifyOptionNotPresentInFilter(filterOption: string) {
        await verifyElementNotInFilterDropdown(this.page, filterOption);
    }

    /**
     * @description Creates a new district and selects the state and district
     * @param stateName Name of the state
     */
    async createNewDistrictAndSelectStateAndDistrict(stateName: string) {
        await this.createNewDistrictButton().click();
        await waitForPreloaderToHide(this.page);
        await selectValueFromDropDown(this.page, this.selectStateDropDown(), stateName);
        await selectValueFromDropDown(this.page, this.selectDistrictDropDown(), "Other");
    }

    /**
     * @description Validates that the district name is unique
     * @param districtName Name of the district
     */
    async enterDistrictName(districtName: string,) {
        await this.createDistrictName().pressSequentially(districtName);
        await this.createDistrictName().blur();
        await this.createDistrictAltName().focus();
    }

    /**
     * @description verify district name error message
     * @param districtNameError error message
     */
    async verifyDistrictNameErrorMessage(districtNameError: string) {
        await expect(this.districtNameNotAvailable()).toHaveText(districtNameError);
        await this.addUserCancelButton().click();
        await this.warningYesButton().click();
        await waitForPreloaderToHide(this.page);
    }

    /**
     * @description Verifies the pagination count in the district listing
     * @param minExpectedCount Expected pagination count
     */
    async verifyPaginationCount(minExpectedCount : number) {
        const paginationText = await this.paginationRange().innerText();
        const match = paginationText.match(/of\s+(\d+)/i);
        if (!match) {
            throw new Error(`Unable to extract total count from pagination text: "${paginationText}"`);
        }
        const totalCount = parseInt(match[1], 10);
        if (isNaN(totalCount)) {
            throw new Error(`Extracted value is not a number from: "${paginationText}"`);
        }
        expect(totalCount).toBeGreaterThanOrEqual(Number(minExpectedCount));
    }

    /**
     * @description Verifies the data in the source and state columns of the district listing
     * @param districtListingSource The source of the district listing
     * @param stateName The name of the state
     */
    async verifyDataInSourceAndStateColumn(districtListingSource: string, stateName: string) {
        await expect(this.districtListingDistrictSource()).toHaveText(districtListingSource);
        await expect(this.districtListingStateColumn()).toHaveText(stateName);
    }

    /**
     * @description Verifies the data in the DTA and Schools columns of the district listing
     */
    async verifyDataInDTAsAndSchoolsColumn() {
        await expect(this.districtListingDtaCount()).toHaveText("-");
        await expect(this.districtListingNilSchoolCount()).toHaveText("-");
    }

    /**
     * @description Verifies the data in the Schools columns of the district listing
     */
    async verifySchoolCountOnListing(schoolCount: string) {
        await expect(this.districtListingSchoolCount()).toHaveText(schoolCount);
    }

    /**
     * @description Click on the school column count
     */
    async clickOnSchoolPopup() {
        await this.districtListingSchoolCount().click();
    }

    /**
     * @description Verifies the count of the Schools in popup
     * @param schoolCount the number of schools to verify in popup
     */
    async verifySchoolCount(schoolCount: string) {
        await expect(this.schoolCountInPopup()).toContainText(schoolCount);
    }

    /**
     * @description Verify school name is not present in the school popup
     */
    async verifySchoolNameIsNotPresentInPopup(schoolName: string) {
        await expect(this.schoolNameInPopup(schoolName)).toBeHidden();
    }

    /**
     * @description Verify school name is present in the school popup
     */
    async verifySchoolNameIsPresentInPopup(schoolName: string) {
        await expect(this.schoolNameInPopup(schoolName)).toBeVisible();
    }

    /**
     * @description Verify the school count
     */
    async verifySchoolCountInAccordion(accordionHeader:string, schoolCount: string) {
        await expect(this.schoolCountInDistrictDetails(accordionHeader)).toContainText(schoolCount);
    }

    /**
     * @description Verify the school is not present in district details accordion
     */
    async verifySchoolNotPresentInAccordion(schoolName: string) {
        await expect(this.schoolNameInDistrictDetails(schoolName)).toBeHidden();
    }

    /**
     * @description Verify the school is present in district details accordion
     */
    async verifySchoolPresentInAccordion(schoolName: string) {
        await expect(this.schoolNameInDistrictDetails(schoolName)).toBeVisible();
    }

    /**
     * @description Click on the district name
     */
    async clickOnDistrictName() {
        await this.districtListingDistrictName().click();
    }

    /**
     * @description Verifies the user count on My district page
     * @param saCount Number of SA users
     * @param teacherCount Number of teacher users
     * @param studentCount Number of student users
     */
    async verifyExactUsersCountOnMyDistrict(saCount: string, teacherCount: string, studentCount: string) {
        await expect(this.saUserCountOnMyDistrictPage()).toContainText(saCount);
        await expect(this.teacherUserCountOnMyDistrictPage()).toContainText(teacherCount);
        await expect(this.studentUserCountOnMyDistrictPage()).toContainText(studentCount);
    }

    /**
     * @description Verifies the user count on My district page
     * @param saCount Number of SA users
     * @param teacherCount Number of teacher users
     * @param studentCount Number of student users
     */
    async verifyUsersCountOnMyDistrict(saCount: number, teacherCount: number, studentCount: number) {
        const schoolAdminText = await this.saUserCountOnMyDistrictPage().textContent();
        const teacherText = await this.teacherUserCountOnMyDistrictPage().textContent();
        const studentText = await this.studentUserCountOnMyDistrictPage().textContent();

        const extractNumber = (text: string | null): number => {
            const match = text?.match(/\d+/); // Get first number
            return match ? Number(match[0]) : 0;
        };

        const actualSaCount = extractNumber(schoolAdminText);
        const actualTeacherCount = extractNumber(teacherText);
        const actualStudentCount = extractNumber(studentText);

        expect(actualSaCount).toBeGreaterThanOrEqual(saCount);
        expect(actualTeacherCount).toBeGreaterThanOrEqual(teacherCount);
        expect(actualStudentCount).toBeGreaterThanOrEqual(studentCount);
    }

    /**
     * Verifies the updated count of terms on My district page
     * @param termCount Number of terms in the accordion
     */
    async verifyCountInTermAccordion(termCount: string) {
        await expect(this.schoolCountInDistrictDetails(termCount)).toHaveText(termCount);
    }

    /**
     * @description verify the term created by given school is not visible on My district page
     * @param termName Name of the term created by school
     */
    async verifyInvisibilityOfTermsCreatedBySchool(termName: string) {
        await this.createdBySchoolTerm().click();
        await expect(this.schoolNameInDistrictDetails(termName)).toBeHidden();
    }

    /**
     * @description verify the term created by given school is visible on My district page
     * @param termName Name of the term created by school
     */
    async verifyTermsCreatedBySchool(termName: string) {
        await this.createdBySchoolTerm().click();
        await expect(this.schoolNameInDistrictDetails(termName)).toBeVisible();
    }

    /**
     * @description Verifies that the district name element is not clickable
     */
    async verifyDistrictNameIsNotClickable() {
        const districtNameLocator = this.districtListingDistrictName();

        // Get the class attribute of the element
        const className = await districtNameLocator.getAttribute('class');

        // Assert that the 'disabled' class is present in the className
        expect(className).toContain('disabled');
    }

    /**
     * @description Verifies that the course family element is not clickable
     */
    async verifyCourseFamilyIsNotClickable() {
        const districtNameLocator = this.districtListingCourseFamily();
        const className = await districtNameLocator.getAttribute('class');
        expect(className).toContain('disabled');
    }

    /**
     * @description Verifies that the Add User button is disabled
     */
    async verifyAddUserButtonIsDisabled() {
        await expect(this.districtListingAddUserButton()).toBeDisabled();
    }

    /**
     * @description Verifies that the Restore button is enabled
     */
    async verifyRestoreButtonIsEnabled() {
        await expect(this.districtListingRestoreButton()).toBeEnabled();
    }

}
