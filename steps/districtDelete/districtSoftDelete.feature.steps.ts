import { createBddCustom } from '../common/createBddCustom';
import { DistrictPage } from '../../pages/deleteDistrict/districtSoftDelete.page';
import { SamlOrganizationPage } from '../../pages/rosteringPages/samlOrganization.page';
import { SchoolListingPage } from '../../pages/listingPages/schoolListing.page';
import { ClassListingPage } from '../../pages/listingPages/classListing.page';
import { StudentListingPage } from '../../pages/listingPages/studentListing.page';
import { NavigateFromDashboard } from '../../pages/dashboard/navigateFromDashboard.page';
import { l10n } from '../../zeus-playwright/quantum-common/utils/uiLocalizedStrings';
import { ScoreReportPage } from '../../pages/reportPages/scoreReport.page';
import { ItemAnalysisPage } from '../../pages/reportPages/itemAnalysis.page';
import { ProductUsageReportPage } from '../../pages/reportPages/productUsageReport.page';
import { LicenseReportPage } from '../../pages/reportPages/licenseReport.page';
import { LMSDashboard } from '../../pages/dashboard/lmsDashboard.page';
import { LoginReportPage } from '../../pages/reportPages/loginReport.page';
import { LMSLoginPage } from '../../pages/manualLogin/lmsLogin.page';
import { LMSCourseCatalog } from '../../pages/courseCatalog/lmsCourseCatalog.page';
import { CMSCourseCatalog } from '../../pages/courseCatalog/cmsCourseCatalog.page';
import { LicenseListingPage } from '../../pages/adminPages/licenseListing.page';
import { ImportUserPage } from '../../pages/adminPages/importUser.page';
import { DTAListingPage } from '../../pages/listingPages/DTAListing.page';
import { SAListingPage } from '../../pages/listingPages/SAListing.page';
import { TeacherListingPage } from '../../pages/listingPages/TeacherListing.page';
import urls from '../../fixtures/constants/urlConstants';

const { Given, When, Then, Before } = createBddCustom();
let namePrefix: string;
let stateName1: string;
let stateName2: string;
let paginationCount2: number;
let schoolPaginationCount: number;
let dtaPaginationCount: number;
let saPaginationCount: number;
let teacherPaginationCount: number;
let studentPaginationCount: number;
let districtNamePrefix: string;
let assignee: string;
let ddCourse11Name: string;
let ddCourse10Name: string;
let ddCourse20Name: string;
let courseQuiz: string;
let courseFamily: string;
let lmsDistrictCount: number;
let cmsDistrictCount: string;
let lmsSchoolCount: number;
let cmsSchoolCount: string;
let userTypeAsSA: string;
let userTypeAsDTA: string;
let districtListingSource: string;
let dtaUserEmailId: string;
let incorrectPassPhrase: string;
let permanentDeleteSchedule: string;
let deleteInProgressStatus: string;
let toolTipMessage: string;
let samlOrgPaginationCount: string;
let metaDataUrl: string;
let districtPage: DistrictPage;
let navigateFromDashboard: NavigateFromDashboard;
let schoolListingPage: SchoolListingPage;
let classListingPage: ClassListingPage;
let dtaListingPage: DTAListingPage;
let saListingPage: SAListingPage;
let samlOrganizationPage: SamlOrganizationPage;
let teacherListingPage: TeacherListingPage;
let studentListingPage: StudentListingPage;
let scoreReportPage: ScoreReportPage;
let itemAnalysisPage: ItemAnalysisPage;
let productUsageReportPage: ProductUsageReportPage;
let licenseReportPage: LicenseReportPage;
let loginReportPage: LoginReportPage;
let lmsLoginPage: LMSLoginPage;
let lmsDashboard: LMSDashboard;
let lmsCourseCatalog: LMSCourseCatalog;
let cmsCourseCatalog: CMSCourseCatalog;
let licenseListingPage: LicenseListingPage;
let importUserPage: ImportUserPage;
let samlDistrictName: string;
let studentAttempt: string;
let archivedDistrict: string;
let archivedCourseName: string;
let archivedCqName: string;
let samlStateName: string;
let staticDistrictForSaml: string;

Before({ tags: '@districtSoftDelete' }, async ({ page, testData }) => {
  districtPage = new DistrictPage(page);
  navigateFromDashboard = new NavigateFromDashboard(page);
  schoolListingPage = new SchoolListingPage(page);
  classListingPage = new ClassListingPage(page);
  samlOrganizationPage = new SamlOrganizationPage(page);
  dtaListingPage = new DTAListingPage(page);
  saListingPage = new SAListingPage(page);
  teacherListingPage = new TeacherListingPage(page);
  studentListingPage = new StudentListingPage(page);
  scoreReportPage = new ScoreReportPage(page);
  itemAnalysisPage = new ItemAnalysisPage(page);
  productUsageReportPage = new ProductUsageReportPage(page);
  licenseReportPage = new LicenseReportPage(page);
  loginReportPage = new LoginReportPage(page);
  lmsLoginPage = new LMSLoginPage(page);
  lmsDashboard = new LMSDashboard(page);
  lmsCourseCatalog = new LMSCourseCatalog(page);
  cmsCourseCatalog = new CMSCourseCatalog(page);
  licenseListingPage = new LicenseListingPage(page);
  importUserPage = new ImportUserPage(page);
  namePrefix = testData.softDelete.namePrefix;
  stateName1 = testData.softDelete.stateName1;
  stateName2 = testData.softDelete.stateName2;
  paginationCount2 = Number(testData.paginationCount.listingPageCount2);
  schoolPaginationCount = Number(testData.paginationCount.listingPageCount2);
  dtaPaginationCount = Number(testData.paginationCount.listingPageCount2);
  saPaginationCount = Number(testData.paginationCount.listingPageCount2);
  teacherPaginationCount = Number(testData.paginationCount.listingPageCount2);
  studentPaginationCount = Number(testData.paginationCount.listingPageCount2);
  districtNamePrefix = testData.softDelete.districtNamePrefix;
  assignee = testData.softDelete.assignee;
  ddCourse20Name = testData.softDelete.ddCourse20Name;
  ddCourse11Name = testData.softDelete.ddCourse11Name;
  ddCourse10Name = testData.softDelete.ddCourse10Name;
  metaDataUrl = testData.softDelete.metaDataUrl;
  courseQuiz = testData.softDelete.courseQuiz;
  courseFamily = testData.softDelete.courseFamily;
  lmsDistrictCount = Number(testData.softDelete.lmsDistrictCount);
  staticDistrictForSaml = testData.softDelete.staticDistrictForSaml;
  cmsDistrictCount = testData.softDelete.cmsDistrictCount;
  lmsSchoolCount = Number(testData.softDelete.lmsSchoolCount);
  cmsSchoolCount = testData.softDelete.cmsSchoolCount;
  samlDistrictName = testData.softDelete.samlDistrictName;
  samlOrgPaginationCount = testData.softDelete.samlOrgPaginationCount;
  samlStateName = testData.softDelete.samlStateName;
  userTypeAsDTA = testData.softDelete.userTypeAsDTA;
  userTypeAsSA = testData.softDelete.userTypeAsSA;
  districtListingSource = testData.softDelete.districtListingSource;
  dtaUserEmailId = testData.softDelete.dtaUserEmailId;
  incorrectPassPhrase = testData.softDelete.incorrectPassPhrase;
  permanentDeleteSchedule = testData.softDelete.permanentDeleteSchedule;
  deleteInProgressStatus = testData.softDelete.deleteInProgressStatus;
  toolTipMessage = testData.softDelete.toolTipMessage;
  studentAttempt = testData.softDelete.studentAttempt;
  archivedDistrict = testData.softDelete.archivedDistrict;
  archivedCourseName = testData.softDelete.archivedCourseName;
  archivedCqName = testData.softDelete.archivedCqName;
});

//Scenario 1: Check if the delete button is enabled and perform a soft delete a district
Given('User is on the dashboard page', async function ({ page }) {
  navigateFromDashboard = new NavigateFromDashboard(page);
  await navigateFromDashboard.navigateToDashboard();
});

When('User is on the District listing page', async function ({ page }) {
  navigateFromDashboard = new NavigateFromDashboard(page);
  await navigateFromDashboard.navigateToDistrictListingPage();
});

Then('the user searches for a district on district listing page', async function () {
  await districtPage.searchDistrictOnDistrictListingPage(namePrefix);
});

When('the user searches for an archived district on district listing page', async function () {
  await districtPage.searchDistrictOnDistrictListingPage(archivedDistrict);
});

Then('the delete button should be enabled', async function ({page}) {
  await districtPage.verifyDeleteButtonIsEnabled();
});

When(
  'the user clicks on the delete button under the actions column for a district',
  async function () {
    await districtPage.clickOnDistrictDeleteButton();
  },
);

Then(
  'the passphrase popup should display a message {string}',
  async function ({ page }, deleteDistrictText: string) {
    await districtPage.verifyDeleteDistrictDialogBoxText(
      namePrefix,
      l10n(deleteDistrictText, 'LMS'),
    );
  },
);

When('the user clicks the Cancel button under dialog box', async function () {
  await districtPage.clickOnDialogboxCancelButton();
});

Then('the dialog box should no longer be displayed', async function () {
  await districtPage.verifyAbsenceOfDialogBox();
});

When('the user enters an incorrect passphrase under dialog box', async function () {
  await districtPage.fillIncorrectPassphrase(incorrectPassPhrase);
});

When('the user clicks on the Verify button', async function ({page}) {
  districtPage = new DistrictPage(page);
  await districtPage.clickOnDialogboxVerifyButton();
});

Then(
  'an error message should be displayed {string}',
  async function ({ page }, invalidPassPhrase: string) {
    await districtPage.verifyIncorrectPassphraseErrorText(l10n(invalidPassPhrase, 'LMS'));
    await districtPage.clickOnDialogboxCancelButton();
  },
);

When('the user enters the correct passphrase', async function () {
  await districtPage.enterCorrectPassphrase();
});

Then(
  'delete in progress popup should display a message {string}',
  async function ({ page }, deleteInProgressText: string) {
    await districtPage.verifyTextOfDeleteInProgressPopup(l10n(deleteInProgressText, 'LMS'));
  },
);

When('the user click on ok button on delete in progress popup', async function () {
  await districtPage.clickOnDeleteInProgressDialogboxOkButton();
});

Then('the district should be deleted successfully', async function () {
  await districtPage.verifyStatusMessageIsVisible();
});

//Scenario 2: Soft delete a district and verify the status of deletion
Then(
  'the status should show Delete scheduled message with a black tooltip and an appropriate tooltip message',
  async function () {
    await districtPage.searchDistrictOnDistrictListingPage(namePrefix);
    await districtPage.verifyScheduledMessage(permanentDeleteSchedule, deleteInProgressStatus);
    await districtPage.verifyDeleteDistrictTooltipText(toolTipMessage);
  },
);

//Scenario 3:Verify data is updated on the district listing page and on create district page
Then(
  'the Add and Edit action buttons should be disabled on the listing page',
  async function () {
    await districtPage.verifyAddUserButtonIsDisabled();
  },
);

Then(
  'a restore action button should be visible instead of the delete action button on the listing page',
  async function ({page}) {
    districtPage = new DistrictPage(page);
    await districtPage.verifyRestoreButtonIsEnabled();
  },
);

Then('the district name link text should be displayed in a non-clickable state', async function () {
  await districtPage.verifyDistrictNameIsNotClickable();
});

Then(
  'the action for the course family popup should be disabled on the listing page',
  async function () {
    await districtPage.verifyCourseFamilyIsNotClickable();
  },
);

Then('the data in the Source and State columns should be retained', async function () {
  await districtPage.verifyDataInSourceAndStateColumn(districtListingSource, stateName1);
});

Then(
  'hyphen should be visible instead of the DTA and school count on district listing page',
  async function () {
    await districtPage.verifyDataInDTAsAndSchoolsColumn();
  },
);

When(
  'user clicks on the create new district button and selects the state and district as other',
  async function () {
    await districtPage.createNewDistrictAndSelectStateAndDistrict(stateName2);
  },
);

When(
  'the user enters the district with the same name as the soft-deleted district on the create district page',
  async function ({ page }) {
    await districtPage.enterDistrictName(namePrefix);
  },
);

Then(
  '{string} error message should be visible on create district page',
  async function ({}, districtNameErrorMessage: string) {
    await districtPage.verifyDistrictNameErrorMessage(l10n(districtNameErrorMessage, 'LMS'));
  },
);

//Scenario 4: Verify data is not available on school listing pages after soft deletion
When('the user is on the School listing page', async function ({ page }) {
  navigateFromDashboard = new NavigateFromDashboard(page);
  await navigateFromDashboard.navigateToSchoolListingPage();
});

Then('the soft deleted district should not be visible in the filter options', async function () {
  await districtPage.verifyOptionNotPresentInFilter(namePrefix);
});

When('user applies state filter on school listing page', async function () {
  await schoolListingPage.applyStateFilter(stateName1);
});

Then('the pagination count should be updated on the school listing page', async function () {
  await districtPage.verifyPaginationCount(schoolPaginationCount);
});

When('user search school from the soft deleted district on school listing page', async function () {
  await schoolListingPage.searchSchoolOnSchoolListingPage(namePrefix);
});

Then(
  '{string} message should be displayed on school listing page',
  async function ({ page }, noSchoolFoundMessage: string) {
    schoolListingPage = new SchoolListingPage(page);
    await schoolListingPage.verifySchoolNotPresentInListing(l10n(noSchoolFoundMessage, 'LMS'));
  },
);

When('user click on create new school button and selected the state', async function ({ page }) {
  schoolListingPage = new SchoolListingPage(page);
  await schoolListingPage.createNewSchoolAndSelectState(stateName2);
});

Then(
  'the soft deleted district should not be visible in the district dropdown of create school page',
  async function () {
    await schoolListingPage.verifyDistrictNotPresentInDropdown(namePrefix);
  },
);

//Scenario 5: Verify data is not available on class listing pages after soft deletion
When('the user is on the Class listing page', async function ({ page }) {
  navigateFromDashboard = new NavigateFromDashboard(page);
  await navigateFromDashboard.navigateToClassListingPage();
});

When('user search class on class listing page', async function () {
  await classListingPage.searchClassOnClassListingPage(districtNamePrefix);
});

Then('the pagination count should be updated on the class listing page', async function () {
  await districtPage.verifyPaginationCount(paginationCount2);
});

When('user search class from the soft deleted district on class listing page', async function () {
  await classListingPage.searchClassOnClassListingPage(namePrefix);
});

Then(
  '{string} message should be displayed on class listing page',
  async function ({ page }, noClassFoundMessage: string) {
    classListingPage = new ClassListingPage(page);
    await classListingPage.verifyClassNotPresentInListing(l10n(noClassFoundMessage, 'LMS'));
  },
);

//Scenario 6: Verify data is not available on DTA listing pages after soft deletion
When('the user is on the DTA listing page', async function ({ page }) {
  navigateFromDashboard = new NavigateFromDashboard(page);
  await navigateFromDashboard.navigateToDTAListingPage();
});

When('User applies state filter on DTA listing page', async function () {
  await dtaListingPage.applyStateFilter(stateName1);
});

Then('the pagination count should be updated on the DTA listing page', async function () {
  await districtPage.verifyPaginationCount(dtaPaginationCount);
});

When('User searches for DTA from the soft deleted district on the listing page', async function () {
  await dtaListingPage.searchDtaOnDtaListingPage(namePrefix);
});

Then(
  '{string} message should be displayed on DTA listing page',
  async function ({ page }, noDTAFoundMessage: string) {
    dtaListingPage = new DTAListingPage(page);
    await dtaListingPage.verifyDtaNotPresentInListing(l10n(noDTAFoundMessage, 'LMS'));
  },
);

//Scenario 7: Verify DTA cannot be created for the soft-deleted district and uniqueness of emailID
When('user click on create new DTA button and selected the state', async function () {
  await dtaListingPage.createNewDtaAndSelectState(stateName2);
});

Then(
  'the soft deleted district should not be visible in the district dropdown of create DTA page',
  async function () {
    await dtaListingPage.verifyDistrictNotPresentInDropdown(namePrefix);
  },
);

When('user select the district on create new DTA page', async function () {
  await dtaListingPage.selectDistrictFromDistrictDropdown(districtNamePrefix);
});

When('user enter the same emailID as the users of the soft deleted district', async function () {
  await dtaListingPage.fillEmailIdOfDeletedDistrictUser(dtaUserEmailId);
});

Then(
  '{string} message should be displayed on add DTA user page',
  async function ({ page }, addUserEmailIdErrorMessage: string) {
    await dtaListingPage.verifyAddUserEmailIdErrorMessage(l10n(addUserEmailIdErrorMessage, 'LMS'));
  },
);

//Scenario 8: Verify data is not available on SA listing pages after soft deletion
When('the user is on the SA listing page', async function ({ page }) {
  navigateFromDashboard = new NavigateFromDashboard(page);
  await navigateFromDashboard.navigateToSAListingPage();
});

When('User applies state filter on SA listing page as {string}', async function ({}, role) {
  await saListingPage.applyStateFilter(stateName1, role);
});

Then('the pagination count should be updated on the SA listing page', async function () {
  await districtPage.verifyPaginationCount(saPaginationCount);
});

When('User searches for SA from the soft deleted district on the listing page', async function () {
  await saListingPage.searchSaOnSaListingPage(namePrefix);
});

Then(
  '{string} message should be displayed on SA listing page',
  async function ({ page }, noSAFoundMessage: string) {
    saListingPage = new SAListingPage(page);
    await saListingPage.verifySaNotPresentInListing(l10n(noSAFoundMessage, 'LMS'));
  },
);

//Scenario 9: Verify SA cannot be created for the soft-deleted district and uniqueness of emailID
When('user click on create new SA button and selected the state as {string}', async function ({}, role) {
  await saListingPage.createNewSAAndSelectState(stateName2, districtNamePrefix, role);
});

Then(
  'the soft deleted district should not be visible in the district dropdown of create SA page',
  async function () {
    await saListingPage.verifyDistrictNotPresentInDropdown(namePrefix);
  },
);

When('user select the district on create new SA page', async function () {
  await saListingPage.selectDistrictFromDistrictDropdown(districtNamePrefix);
});

Then(
  '{string} message should be displayed on add SA user page',
  async function ({page}, addUserEmailIdErrorMessage: string) {
    saListingPage = new SAListingPage(page);
    await saListingPage.verifyAddUserEmailIdErrorMessage(l10n(addUserEmailIdErrorMessage, 'LMS'));
  },
);

//Scenario 10: Verify data is not available on Teacher listing pages after soft deletion
When('the user is on the Teacher listing page', async function ({ page }) {
  navigateFromDashboard = new NavigateFromDashboard(page);
  await navigateFromDashboard.navigateToTeacherListingPage();
});

Then(
  'the soft deleted district should not be visible in the filter options of Teacher listing',
  async function () {
    await teacherListingPage.verifyDistrictNotPresentInDropdown(stateName1, namePrefix);
  },
);

When('User applies district filter on Teacher listing page', async function () {
  await teacherListingPage.applyDistrictFilter(districtNamePrefix);
});

Then('the pagination count should be updated on the Teacher listing page', async function () {
  await districtPage.verifyPaginationCount(teacherPaginationCount);
});

When(
  'User searches for Teacher from the soft deleted district on the listing page',
  async function () {
    await teacherListingPage.searchTeacherOnTeacherListingPage(namePrefix);
  },
);

Then(
  '{string} message should be displayed on teacher listing page',
  async function ({ page }, noTeacherFoundMessage: string) {
    teacherListingPage = new TeacherListingPage(page);
    await teacherListingPage.verifyTeacherNotPresentInListing(l10n(noTeacherFoundMessage, 'LMS'));
  },
);

//Scenario 11: Verify data is not available on Student listing pages after soft deletion
When('the user is on the Student listing page', async function ({ page }) {
  navigateFromDashboard = new NavigateFromDashboard(page);
  await navigateFromDashboard.navigateToStudentListingPage();
});

Then(
  'the soft deleted district should not be visible in the filter options of Student listing',
  async function () {
    await studentListingPage.verifyDistrictNotPresentInDropdown(stateName1, namePrefix);
  },
);

When('User applies district filter on Student listing page', async function () {
  await studentListingPage.applyDistrictFilter(districtNamePrefix);
});

Then('the pagination count should be updated on the Student listing page', async function () {
  await districtPage.verifyPaginationCount(studentPaginationCount);
});

When(
  'User searches for Student from the soft deleted district on the listing page',
  async function () {
    await studentListingPage.searchStudentOnStudentListingPage(namePrefix);
  },
);

Then(
  '{string} message should be displayed on student listing page',
  async function ({ page }, noStudentsFoundMessage: string) {
    studentListingPage = new StudentListingPage(page);
    await studentListingPage.verifyStudentNotPresentInListing(l10n(noStudentsFoundMessage, 'LMS'));
  },
);

//Scenario 12: Verify score reports page do not show soft deleted district data
When('the user is on the Score report page', async function ({ page }) {
  navigateFromDashboard = new NavigateFromDashboard(page);
  await navigateFromDashboard.navigateToScoreReportPage();
});

When('user has selected the course on score report page', async function ({ testData }) {
  await scoreReportPage.selectCourseOnScoreReportPage(ddCourse20Name);
});

Then(
  'the soft deleted district should not be visible in the district dropdown of score report pages',
  async function () {
    await scoreReportPage.verifyDistrictNotPresentInDropdown(namePrefix);
  },
);

When('user click on go button on score report page', async function ({ page }) {
  scoreReportPage = new ScoreReportPage(page);
  await scoreReportPage.clickOnGoButton();
});

Then(
  'the score reports should not display any data for the soft deleted district',
  async function () {
    await scoreReportPage.verifyDataIsNotPresentOnReportPage(namePrefix);
  },
);

When('user click on table view on score report page', async function ({ page }) {
  scoreReportPage = new ScoreReportPage(page);
  await scoreReportPage.clickOnTableViewButton();
});

When('user select previous school years on score report page', async function ({ page }) {
  scoreReportPage = new ScoreReportPage(page);
  await scoreReportPage.selectPreviousSchoolYear();
});

When('user has selected the archived district course on score report page', async function ({ testData }) {
  await scoreReportPage.selectCourseOnScoreReportPage(archivedCourseName);
});

Then(
  'the soft deleted archived district should not be visible in the district dropdown of score report pages',
  async function () {
    await scoreReportPage.verifyDistrictNotPresentInDropdown(archivedDistrict);
  },
);

Then(
  'the score reports should not display any data for the soft deleted archived district',
  async function () {
    await scoreReportPage.verifyDataIsNotPresentOnReportPage(archivedDistrict);
  },
);

//Scenario 13: Verify item analysis reports page do not show soft deleted district data
When('the user is on the Item Analysis report page', async function ({ page }) {
  navigateFromDashboard = new NavigateFromDashboard(page);
  await navigateFromDashboard.navigateToItemAnalysisReportPage();
});

When(
  'user has selected the course and course quiz on item analysis report page',
  async function () {
    await itemAnalysisPage.selectCourseAndCourseQuizOnItemAnalysisReportPage(
      ddCourse20Name,
      courseQuiz,
    );
  },
);

Then(
  'the soft deleted district should not be visible in the district dropdown of item analysis report page',
  async function () {
    await itemAnalysisPage.verifyDistrictNotPresentInDropdown(namePrefix);
  },
);

When('user click on go button on item analysis report page', async function ({ page }) {
  itemAnalysisPage = new ItemAnalysisPage(page);
  await itemAnalysisPage.clickOnGoButton();
});

Then(
  'the item analysis reports should not display attempts from students of the soft deleted district',
  async function () {
    await itemAnalysisPage.verifyStudentAttemptsCount(studentAttempt);
  },
);

When('user select previous school years on item analysis report page', async function ({ page }) {
  itemAnalysisPage = new ItemAnalysisPage(page);
  await itemAnalysisPage.selectPreviousSchoolYear();
});

When(
  'user has selected the course and course quiz from archived district on item analysis report page',
  async function () {
    await itemAnalysisPage.selectCourseAndCourseQuizOnItemAnalysisReportPage(
      archivedCourseName,
      archivedCqName,
    );
  },
);

Then(
  'the soft deleted archived district should not be visible in the district dropdown of item analysis report page',
  async function () {
    await itemAnalysisPage.verifyDistrictNotPresentInDropdown(archivedDistrict);
  },
);

Then(
  'the item analysis reports should not display attempts from students of the soft deleted archived district',
  async function () {
    await itemAnalysisPage.verifyStudentAttemptsCount(studentAttempt);
  },
);

//Scenario 14: Verify Product Usage reports page do not show soft deleted district data
When('the user is on the Product Usage report page', async function ({ page }) {
  navigateFromDashboard = new NavigateFromDashboard(page);
  await navigateFromDashboard.navigateToProductUsageReportPage();
});

Given('user has selected end users on product usage report page', async function () {
  await productUsageReportPage.selectEndUserOnProductUsageReportPage(assignee);
});

Then(
  'the soft deleted district should not be visible in the district dropdown of product usage report page',
  async function () {
    await productUsageReportPage.verifyDistrictNotPresentInDropdown(namePrefix);
  },
);

When('user click on go button on product usage report page', async function ({ page }) {
  productUsageReportPage = new ProductUsageReportPage(page);
  await productUsageReportPage.clickOnGoButton();
});

When(
  'user search a course which is only assigned to the soft deleted dsitrcit on product usage reports page',
  async function () {
    await productUsageReportPage.searchCourseOnProductUsageReportPage(ddCourse11Name);
  },
);

Then(
  '{string} message should be displayed on product usage report page',
  async function ({ page }, noCourseFoundMessage: string) {
    productUsageReportPage = new ProductUsageReportPage(page);
    await productUsageReportPage.verifyNoCourseErrorMessage(l10n(noCourseFoundMessage, 'LMS'));
  },
);

//Scenario 15: Verify License reports page do not show soft deleted district data
When('the user is on the License report page', async function ({ page }) {
  navigateFromDashboard = new NavigateFromDashboard(page);
  await navigateFromDashboard.navigateToLicenseReportPage();
});

When('user has selected course family and assignee on license report page', async function () {
  await licenseReportPage.selectCourseFamilyAndAssignee(courseFamily, assignee);
});

When('user click on go button on license report page', async function ({ page }) {
  licenseReportPage = new LicenseReportPage(page);
  await licenseReportPage.clickOnGoButton();
});

Then(
  'the soft deleted district should not be visible in the filter of license report pages',
  async function () {
    await licenseReportPage.verifyDistrictNotPresentInFilter(namePrefix);
  },
);

When('user search soft deleted district on license report page', async function () {
  await licenseReportPage.searchDistrictOnLicenseReportPage(namePrefix);
});

Then('{string} message should be visible', async function ({ page }, noLicenseFoundMessage: string) {
  licenseReportPage = new LicenseReportPage(page);
  await licenseReportPage.verifyNoLicenseErrorMessage(l10n(noLicenseFoundMessage, 'LMS'));
});

//Scenario 16: Verify Login reports page do not show soft deleted district data
When('the user is on the Login report page', async function ({ page }) {
  navigateFromDashboard = new NavigateFromDashboard(page);
  await navigateFromDashboard.navigateToLoginReportPage();
});

When('user click on district technical admin tab', async function ({ page }) {
  loginReportPage = new LoginReportPage(page);
  await loginReportPage.clickOnDtaTab();
});

Then(
  'the soft deleted district should not be visible in the district dropdown of login report pages',
  async function () {
    await loginReportPage.verifyDistrictNotPresentInDropdown(namePrefix);
  },
);

When('user click on go button on login report page', async function ({ page }) {
  loginReportPage = new LoginReportPage(page);
  await loginReportPage.clickOnGoButton();
});

When('user click on report tab on login report page', async function ({ page }) {
  loginReportPage = new LoginReportPage(page);
  await loginReportPage.clickOnReportTab();
});

When(
  'user search soft deleted district user with name prefix on login report page',
  async function () {
    await loginReportPage.searchReport(namePrefix);
  },
);

Then('{string} message should be displayed', async function ({ page }, noDataToDisplayMessage: string) {
  loginReportPage = new LoginReportPage(page);
  await loginReportPage.verifyNoDataErrorMessage(l10n(noDataToDisplayMessage, 'LMS'));
});

When('user click on school admin tab', async function ({page}, role) {
  loginReportPage = new LoginReportPage(page)
  await loginReportPage.clickOnSaTab(role);
});

When('user click on teacher tab', async function ({page}, role) {
  loginReportPage = new LoginReportPage(page)
  await loginReportPage.clickOnTeacherTab(role);
});

When('user click on district student tab', async function ({page}) {
  loginReportPage = new LoginReportPage(page)
  await loginReportPage.clickOnStudentTab();
});

//Scenario 17: Verify soft deleted district user should not be able to login
When('user select the state from state dropdown', async function () {
  await lmsLoginPage.selectStateFromStateDropdown(stateName1);
});

Then(
  'the soft deleted district should not be visible in the district dropdown of login with Quantum page',
  async function () {
    await lmsLoginPage.verifyDistrictNotPresentInDropdown(namePrefix);
  },
);

//Scenario 20: Verify Dashboard updates after soft-deleting a district
Then(
  'soft deleted district should not be visible on the district dropdowns on course cards tab on the Dashboard',
  async function () {
    await lmsDashboard.clickShowMoreUntilCoursePresent(ddCourse10Name);
    await lmsDashboard.verifyDistrictNotPresentInDropdownOfCourse(ddCourse10Name, namePrefix);
  },
);

When('user click on unallocated tab', async function ({ page }) {
  lmsDashboard = new LMSDashboard(page);
  await lmsDashboard.clickOnUnallocatedTab();
});

Then(
  'course which are only assigned to the deleted district should be present on unallocated tab',
  async function () {
    await lmsDashboard.verifyCoursePresentInUnallocatedTab(ddCourse11Name);
  },
);

When('user click on schools tab', async function ({ page }) {
  lmsDashboard = new LMSDashboard(page);
  await lmsDashboard.clickOnSchoolTab();
});

Then(
  'the soft deleted district should not be visible on the district dropdowns on on schools tab',
  async function () {
    await lmsDashboard.verifyDistrictNotPresentInDropdownOfSchoolTab(namePrefix);
  },
);

//Scenario 21: Verify course-related information updates on LMS after soft-deleting a district
Given('the user is on the Course Catalog page', async function ({ page }) {
  navigateFromDashboard = new NavigateFromDashboard(page);
  await navigateFromDashboard.navigateToCourseCatalogPage();
});

When(
  'user search a course which is assigned to the soft deleted district on course catalog page',
  async function () {
    await lmsCourseCatalog.searchCourse(ddCourse10Name);
  },
);

When(
  'user click on Districts and schools column on Course Catalog page on LMS',
  async function ({ page }) {
    lmsCourseCatalog = new LMSCourseCatalog(page);
    await lmsCourseCatalog.clickOnDistrictAndSchoolColumn();
  },
);

Then(
  'the soft deleted district should not be visible on the districts and schools popup on LMS',
  async function () {
    await lmsCourseCatalog.verifyDistrictNotPresentInDistrictAndSchoolPopup(namePrefix);
  },
);

Then(
  'districts and schools count should be updated on the districts and schools popup on LMS',
  async function () {
    await lmsCourseCatalog.verifyCountOnDistrictAndSchoolPopup(lmsDistrictCount, lmsSchoolCount);
  },
);

//Scenario 22: Verify course-related information updates on CMS after soft-deleting a district
Given('the user is on the Course Catalog page on CMS', async function ({ page }) {
  cmsCourseCatalog = new CMSCourseCatalog(page);
  await cmsCourseCatalog.checkIfCourseCatalogLoaded();
});

When('User click on published tab on Course Catalog page', async function ({ page }) {
  cmsCourseCatalog = new CMSCourseCatalog(page);
  await cmsCourseCatalog.clickOnPublishedTab();
});

When(
  'user click on Districts and schools column on Course Catalog page on CMS',
  async function ({ page }) {
    cmsCourseCatalog = new CMSCourseCatalog(page);
    await cmsCourseCatalog.clickOnDistrictAndSchoolColumn();
  },
);

Then(
  'the soft deleted district should be visible on the districts and schools popup on CMS',
  async function () {
    await cmsCourseCatalog.verifyDistrictPresentInDistrictAndSchoolPopup(namePrefix, stateName1);
  },
);

Then(
  'districts and schools count should remain the same on districts and schools popup on CMS',
  async function () {
    await cmsCourseCatalog.verifyCountOnDistrictAndSchoolPopup(cmsDistrictCount, cmsSchoolCount);
  },
);

//Scenario 23: Verify course deletion is blocked when the course is assigned to a soft-deleted district on CMS
When('user click on delete course button from action column on cms', async function ({page}) {
  cmsCourseCatalog = new CMSCourseCatalog(page);
  await cmsCourseCatalog.clickOnCourseCatalogActionColumn();
  await cmsCourseCatalog.clickOnCourseCatalogDeleteButton();
});

Then(
  '{string} message should be visible on cms course licensed popup',
  async function ({}, licensedCourseMessage: string) {
    await cmsCourseCatalog.verifyTextMessageOfLicensedCourse(l10n(licensedCourseMessage, 'CMS'));
  },
);

//Scenario 24: Verify license-related information updates on LMS after soft-deleting a district
When('the user is on the license listing page', async function ({ page }) {
  navigateFromDashboard = new NavigateFromDashboard(page);
  await navigateFromDashboard.navigateToLicenseListingPage();
});

When(
  'user searches for a license which is assigned to the soft deleted district on license listing page',
  async function () {
    await licenseListingPage.searchLicenseOnListing(namePrefix);
  },
);

Then(
  '{string} message should be visible on license listing page',
  async function ({ page }, noLicenseFoundMessage: string) {
    licenseListingPage = new LicenseListingPage(page);
    await licenseListingPage.verifyNoLicenseErrorMessage(l10n(noLicenseFoundMessage, 'LMS'));
  },
);

When('user click on active license tab', async function ({ page }) {
  licenseListingPage = new LicenseListingPage(page);
  await licenseListingPage.clickOnActiveLicenseTab();
});

When('user click on expired license tab', async function ({ page }) {
  licenseListingPage = new LicenseListingPage(page);
  await licenseListingPage.clickOnExpiredLicenseTab();
});

When('user click on unassigned license tab', async function ({ page }) {
  licenseListingPage = new LicenseListingPage(page);
  await licenseListingPage.clickOnUnassignedLicenseTab();
});

When('user click on create new license on license listing page', async function ({ page }) {
  licenseListingPage = new LicenseListingPage(page);
  await licenseListingPage.clickOnCreateNewLicenseButton();
});

When(
  'the user searched the soft deleted district on district dropdown of license listing page',
  async ({}) => {
    await licenseListingPage.searchDistrictOnDistrictDropdown(namePrefix);
  },
);

Then(
  '{string} should be visible on district dropdown of license listing page',
  async function ({ page }, noDistrictToDisplayMessage: string) {
    licenseListingPage = new LicenseListingPage(page);
    await licenseListingPage.verifyErrorMessage(l10n(noDistrictToDisplayMessage, 'LMS'));
  },
);

When(
  'user click on school with non district purchases on license creation page',
  async function ({ page }) {
    licenseListingPage = new LicenseListingPage(page);
    await licenseListingPage.clickOnNonDistrictPurchaseSchoolRadioButton();
  },
);

//Scenario 25: Verify no user can be imported on soft-deleting a district
When('the user is on the import users page', async function ({ page }) {
  navigateFromDashboard = new NavigateFromDashboard(page);
  await navigateFromDashboard.navigateToImportUserPage();
});

When('user selected user type as District Technical Admin on import users page', async function () {
  await importUserPage.selectUserTypeOnImportUserPage(userTypeAsDTA);
});

When('user selected state on import users page', async function () {
  await importUserPage.selectStateOnImportUserPage(stateName1);
});

Then(
  'soft deleted district should not be visible on the district dropdowns of import users page',
  async function () {
    await importUserPage.verifyDistrictNotPresentOnDistrictDropdown(namePrefix);
  },
);

When('user selected user type as School Admin on import users page', async function () {
  await importUserPage.selectUserTypeOnImportUserPage(userTypeAsSA);
});

// Scenario 26: Verify SAML soft deleted district is not available on saml for organization page
When('user searches a saml district on district listing page', async function () {
  await districtPage.searchDistrictOnDistrictListingPage(samlDistrictName);
});

When('user is on {string}', async function ({ page }) {
  navigateFromDashboard = new NavigateFromDashboard(page);
  await navigateFromDashboard.navigateToSamlForOrganizationPage();
});

Then(
  "the district shouldn't be visible on saml organization listing page and {string} should be displayed",
  async function ({ page }, noResultFound: string) {
    await samlOrganizationPage.verifyAbsenceOfSamlOrganization(
      samlDistrictName,
      l10n(noResultFound, 'LMS'),
    );
  },
);

When('user clicks on {string} button on {string} page', async function ({ page }) {
  samlOrganizationPage = new SamlOrganizationPage(page);
  await samlOrganizationPage.createNewSamlConfigButtonOnOrganization();
});

Then('user should be on {string} page', async function ({ page }, samlHeader: string) {
  samlOrganizationPage = new SamlOrganizationPage(page);
  await samlOrganizationPage.verifyConfigureSamlForOrgHeader(l10n(samlHeader, 'LMS'));
});

When('user clicks on {string} on {string} page', async function ({ page }) {
  samlOrganizationPage = new SamlOrganizationPage(page);
  await samlOrganizationPage.clickOnSelectDistrictOnSamlConfigPage();
});

When('user searches for a soft deleted district on Select district card', async function () {
  await samlOrganizationPage.searchDistrictOnSamlConfigPage(namePrefix);
});

Then(
  '{string} message should be displayed with the updated pagination count',
  async function ({ page }, noDistrictMsg: string) {
    await samlOrganizationPage.verifyNoDistrictAfterSearch(
      l10n(noDistrictMsg, 'LMS'),
      samlOrgPaginationCount,
    );
  },
);

When('user searches for a static district on select district popup', async function () {
  await samlOrganizationPage.searchDistrictOnSamlConfigPage(staticDistrictForSaml);
  await samlOrganizationPage.clickOnDoneButton();
});

When('user applies the district filter on saml organization page', async function ({ page }) {
  samlOrganizationPage = new SamlOrganizationPage(page);
  await samlOrganizationPage.clickOnApplyButton();
});

When('user enters the issuer url used in another soft deleted saml district', async function () {
  await samlOrganizationPage.enterMetadataUrlAndLoad(metaDataUrl);
});

Then('{string} should be displayed', async function ({ page }, notUniqueUrl: string) {
  samlOrganizationPage = new SamlOrganizationPage(page);
  await samlOrganizationPage.verifyUrlNotUniqueMessage(l10n(notUniqueUrl, 'LMS'));
});

// Scenario 27: Verify soft deleted saml district is not present in district dropdown on saml login page
Given('user is on the LMS SAML login page', async function ({ page }) {
  lmsLoginPage = new LMSLoginPage(page);
  await lmsLoginPage.navigateToTheSAMLLoginPage();
});

When('user select the state from state dropdown on SAML login page', async function () {
  await lmsLoginPage.selectStateOnSamlLoginPage(samlStateName);
});

Then(
  '{string} should be displayed in District dropdown',
  async function ({ page }, noDistrictFound: string) {
    lmsLoginPage = new LMSLoginPage(page);
    await lmsLoginPage.verifyDistrictNotPresentInSamlLoginDropdown(l10n(noDistrictFound, 'LMS'));
  },
);
