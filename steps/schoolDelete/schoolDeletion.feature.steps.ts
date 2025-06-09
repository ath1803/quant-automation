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
import { GradebookReportPage } from '../../pages/reportPages/gradebookReport.page';
import { AssignmentListingPage } from '../../pages/listingPages/assignmentListing.page';
import { GradeSubmissionPage } from '../../pages/reportPages/gradeSubmission.page';
import { StudentAttemptPage } from '../../pages/attempt/studentAttempt.page';
import { ExitCardAssignmentListingPage } from '../../pages/listingPages/exitCardAssignmentListing.page';
import { ExitCardReportPage } from '../../pages/reportPages/exitCardReport.page';
import { RestoreDistrict } from '../../pages/deleteDistrict/restoreDistrict.page';

const { Given, When, Then, Before } = createBddCustom();
let schoolName: string;
let schoolNameWithDistrict: string;
let namePrefix: string;
let stateName1: string;
let stateName2: string;
let paginationCount2: number;
let schoolListingPaginationCount: number;
let districtName: string;
let saPaginationCount: number;
let teacherPaginationCount: number;
let studentPaginationCount: number;
let schoolCount: number;
let schoolCountString: string;
let classPaginationCount: number;
let assignee: string;
let restoreSchoolCount: string;
let hardDeleteSchoolCount: number;
let ddCourse10Name: string;
let myDistrictSACount: string;
let myDistrictTeacherCount: string;
let myDistrictStudentCount: string;
let restoreMyDistrictSACount: string;
let restoreMyDistrictTeacherCount: string;
let restoreMyDistrictStudentCount: string;
let hdMyDistrictSACount: number;
let hdMyDistrictTeacherCount: number;
let hdMyDistrictStudentCount: number;
let courseQuiz: string;
let courseFamily: string;
let multiUserSchoolCount: string;
let lmsDistrictCount: number;
let cmsDistrictCount: string;
let lmsSchoolCount: number;
let autoBotPrefix: string;
let error: string;
let schoolID: string;
let cmsSchoolCount: string;
let userTypeAsSAFull: string;
let userTypeAsSA: string;
let termCount: string;
let restoreTermCount: string;
let saUserInMultiSchool: string;
let saUserInMultiSchoolFirstName: string;
let userTypeAsTeacher: string;
let userTypeAsStudent: string;
let termName: string;
let className: string;
let saName: string
let schoolName2: string;
let permanentDeleteSchedule: string;
let deleteInProgressStatus: string;
let toolTipMessage: string;
let saUserEmailID: string;
let allSchools: string;
let selectAll: string;
let districtPage: DistrictPage;
let navigateFromDashboard: NavigateFromDashboard;
let schoolListingPage: SchoolListingPage;
let classListingPage: ClassListingPage;
let assignmentListingPage: AssignmentListingPage;
let gradebookReportPage: GradebookReportPage;
let courseName: string;
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
let gradeSubmissionPage: GradeSubmissionPage;
let studentAttemptPage: StudentAttemptPage;
let exitcardAssignmentListingPage: ExitCardAssignmentListingPage;
let exitCardReportPage: ExitCardReportPage;
let lmsCourseCatalog: LMSCourseCatalog;
let cmsCourseCatalog: CMSCourseCatalog;
let licenseListingPage: LicenseListingPage;
let importUserPage: ImportUserPage;
let teacherUserInMultiSchool: string;
let teacherUserInMultiSchoolFirstName: string;
let studentUserMultiSchoolFirstName: string;
let studentUserMultiSchool: string;
let teacherEmailID: string;
let classCount: string;
let classNameSchool1: string;
let coursesCount: number;
let studentAttempt: string;
let archivedDistrict: string;
let teacherName: string;
let saFirstName: string;
let studentName: string;
let singleSchoolCourse: string;
let studentEmailID: string;
let courseName3: string;
let hardDeleteCmsSchoolCount: string;
let customDateRange: string;
let password: string;
let restoreClassPaginationCount: number;
let archivedCourseName: string;
let accordionHeader: string;
let accordionHeaderAfterRestore: string;
let restoreSaListingPageCount: number;
let restoreTeacherPaginationCount: number;
let newSaName: string;
let newSaEmail: string;
let newSaUsername: string;
let teacherFirstName: string;
let newTeacherName: string;
let newTeacherEmail: string;
let newTeacherUsername: string;
let restoreStudentPaginationCount: number;
let hdStudentPaginationCount: number;
let studentFirstName: string;
let newStudentName: string;
let newStudentEmail: string;
let newSudentUsername: string;
let grade: string;
let newTeacherClassName: string;
let newSaClassName: string;
let newSaGroupName: string;
let newTeacherGroupName: string;
let teacherAssgCourseName: string;
let teacherCourseName: string;
let teacherCqName: string;
let teacherAssignmentName: string;
let saAssignmentName: string;
let essayAcAnswer: string;
let rteSleep: number;
let archivedCqName: string;
let archivedStudentAttempt: string;
let restoreStudentAttempt: string;
let archivedDistrictSchool: string;
let archivedTeacherFirstName: string;
let archivedClassName: string;
let restoreClassCount: string;
let restoreArchivedStudentAttempt: string;
let exitCardAssignmentName: string;
let allDistricts: string;
let exitCard: string;
let ecReportStudentCount: string;
let ecReportStudentPercentage: string;
let singleSelectAns: string;
let staticExitCardAssignment: string;
let classNamePrefix: string;
let restorationProgressHeader: string;
let samlStateName: string;
let staticDistrictForSaml: string;
let schoolNonDistrictPurchaseAssignee: string;
let restoreDistrictPage: RestoreDistrict;
let hardDeletedSchool: string;
let hdSchoolCount: string;
let districtAssignee: string;
let hdAccordionHeader: string;
let hdTermCount: string;
let hdTermName: string;
let hdClassName: string;
let hdSaEmail: string;
let hdSaName: string;
let hdTeacherEmail: string;
let hdTeacherName: string;
let hdStudentEmail: string;
let hdStudentName: string;
let hdTeacherPaginationCount: number;
let hdSaPaginationCount: number;
let archivedHardDeletedSchool: string;
let hdClassCount: string
let hardDeleteNamePrefix: string;
let singleHardDeleteSchoolCourse: string;
let hdSchoolID: string;
let hardDeleteSchoolCountString: string;
let restoreStudentCountInSchoolListing: string;
let restoreTeacherCountInSchoolListing: string;
let restoreSaCountInSchoolListing: string;

Before({ tags: '@schoolDeletion' }, async ({ page, testData }) => {
  districtPage = new DistrictPage(page);
  restoreDistrictPage = new RestoreDistrict(page);
  navigateFromDashboard = new NavigateFromDashboard(page);
  schoolListingPage = new SchoolListingPage(page);
  classListingPage = new ClassListingPage(page);
  samlOrganizationPage = new SamlOrganizationPage(page);
  saListingPage = new SAListingPage(page);
  assignmentListingPage = new AssignmentListingPage(page);
  exitcardAssignmentListingPage = new ExitCardAssignmentListingPage(page);
  exitCardReportPage = new ExitCardReportPage(page);
  teacherListingPage = new TeacherListingPage(page);
  studentListingPage = new StudentListingPage(page);
  gradeSubmissionPage = new GradeSubmissionPage(page);
  studentAttemptPage = new StudentAttemptPage(page);
  scoreReportPage = new ScoreReportPage(page);
  itemAnalysisPage = new ItemAnalysisPage(page);
  productUsageReportPage = new ProductUsageReportPage(page);
  licenseReportPage = new LicenseReportPage(page);
  loginReportPage = new LoginReportPage(page);
  lmsLoginPage = new LMSLoginPage(page);
  lmsDashboard = new LMSDashboard(page);
  lmsCourseCatalog = new LMSCourseCatalog(page);
  gradebookReportPage = new GradebookReportPage(page);
  cmsCourseCatalog = new CMSCourseCatalog(page);
  licenseListingPage = new LicenseListingPage(page);
  importUserPage = new ImportUserPage(page);
  schoolName = testData.softDelete.namePrefix;
  schoolNameWithDistrict = testData.softDelete.schoolNameWithDistrict;
  namePrefix = testData.softDelete.namePrefix;
  stateName1 = testData.softDelete.stateName1;
  stateName2 = testData.softDelete.stateName2;
  paginationCount2 = Number(testData.paginationCount.listingPageCount2);
  schoolListingPaginationCount = Number(testData.paginationCount.listingPageCount2);
  restoreClassPaginationCount = Number(testData.paginationCount.restoreClassPaginationCount);
  districtName = testData.softDelete.districtName;
  saUserInMultiSchool = testData.multiSchoolUser.saName;
  saUserInMultiSchoolFirstName = testData.multiSchoolUser.saFirstName;
  myDistrictSACount = testData.softDelete.myDistrictSACount;
  myDistrictTeacherCount = testData.softDelete.myDistrictTeacherCount;
  myDistrictStudentCount = testData.softDelete.myDistrictStudentCount;
  restoreMyDistrictSACount = testData.restoreData.myDistrictSACount;
  restoreSaCountInSchoolListing = testData.restoreData.saCountInSchoolListing;
  restoreTeacherCountInSchoolListing = testData.restoreData.teacherInSchoolListing;
  restoreStudentCountInSchoolListing = testData.restoreData.studentInSchoolListing;
  restoreMyDistrictTeacherCount = testData.restoreData.myDistrictTeacherCount;
  restoreMyDistrictStudentCount = testData.restoreData.myDistrictStudentCount;
  hdMyDistrictSACount = Number(testData.hardDelete.myDistrictSACount);
  hdMyDistrictTeacherCount = Number(testData.hardDelete.myDistrictTeacherCount);
  hdMyDistrictStudentCount = Number(testData.hardDelete.myDistrictStudentCount);
  restoreSaListingPageCount = Number(testData.paginationCount.restoreSaListingPageCount);
  hdSaPaginationCount = Number(testData.paginationCount.restoreSaListingPageCount);
  restoreTeacherPaginationCount = Number(testData.paginationCount.restoreTeacherPaginationCount);
  archivedHardDeletedSchool = testData.hardDelete.archivedHardDeletedSchool;
  hdTeacherPaginationCount = Number(testData.paginationCount.restoreTeacherPaginationCount);
  restoreStudentPaginationCount = Number(testData.paginationCount.restoreStudentPaginationCount);
  hdStudentPaginationCount = Number(testData.paginationCount.restoreStudentPaginationCount);
  saPaginationCount = Number(testData.paginationCount.saListingPageCount);
  classPaginationCount = Number(testData.paginationCount.classListingPageCount);
  teacherPaginationCount = Number(testData.paginationCount.teacherListingPageCount);
  studentPaginationCount = Number(testData.paginationCount.studentListingPageCount);
  schoolCount = Number(testData.softDelete.courseCount);
  hardDeleteCmsSchoolCount = testData.hardDelete.cmsDistrictCount;
  schoolCountString = testData.softDelete.schoolCount;
  hardDeleteSchoolCountString = testData.softDelete.courseCount;
  ecReportStudentCount = testData.softDelete.courseCount;
  ecReportStudentPercentage = testData.restoreData.exitCardPercentage;
  restoreSchoolCount = testData.restoreData.schoolCount;
  hardDeleteSchoolCount = Number(testData.restoreData.schoolCount);
  hdSchoolCount = testData.restoreData.schoolCount;
  hdClassName = testData.hardDelete.className;
  coursesCount = Number(testData.softDelete.courseCount);
  classNamePrefix = testData.softDelete.districtName;
  classNameSchool1 = testData.softDelete.classNameSchool1;
  singleSelectAns = testData.softDelete.courseCount;
  districtAssignee = testData.softDelete.districtAssignee;
  courseName3 = testData.softDelete.courseName3;
  password = testData.softDelete.password;
  assignee = testData.softDelete.assignee;
  studentFirstName = testData.softDelete.studentFirstName;
  termCount = testData.softDelete.termCount;
  hdTermCount = testData.hardDelete.termCount;
  hdTermName = testData.hardDelete.termName;
  restoreTermCount = testData.hardDelete.termCount;
  ddCourse10Name = testData.softDelete.ddCourse10Name;
  allSchools = testData.softDelete.allSchools;
  allDistricts = testData.softDelete.allDistricts;
  customDateRange = testData.softDelete.customDateRange;
  selectAll = testData.softDelete.selectAll;
  courseQuiz = testData.softDelete.courseQuiz;
  courseFamily = testData.softDelete.courseFamily;
  lmsDistrictCount = Number(testData.softDelete.lmsDistrictCount);
  teacherEmailID = testData.softDelete.teacherUserEmailID;
  staticDistrictForSaml = testData.softDelete.staticDistrictForSaml;
  cmsDistrictCount = testData.softDelete.cmsDistrictCount;
  schoolID = testData.softDelete.schoolID;
  error = testData.softDelete.error;
  autoBotPrefix = testData.softDelete.autoBotPrefix;
  lmsSchoolCount = Number(testData.softDelete.schoolCount);
  accordionHeader = testData.softDelete.schoolAccordionCount;
  accordionHeaderAfterRestore = testData.restoreData.schoolAccordionCount;
  hdAccordionHeader = testData.restoreData.schoolAccordionCount;
  cmsSchoolCount = testData.softDelete.cmsDistrictCount;
  teacherUserInMultiSchool = testData.multiSchoolUser.teacherName;
  teacherUserInMultiSchoolFirstName = testData.multiSchoolUser.teacherFirstName;
  studentUserMultiSchoolFirstName = testData.multiSchoolUser.studentFirstName;
  studentUserMultiSchool = testData.multiSchoolUser.studentName;
  saUserEmailID = testData.softDelete.saUserEmailId;
  samlStateName = testData.softDelete.samlStateName;
  termName = testData.softDelete.termName;
  userTypeAsSAFull = testData.softDelete.userTypeAsSAFull;
  userTypeAsSA = testData.softDelete.userTypeAsSA
  userTypeAsTeacher = testData.softDelete.userTypeAsTeacher;
  userTypeAsStudent = testData.softDelete.userTypeAsStudent;
  className = testData.softDelete.className;
  saName = testData.softDelete.saName;
  saFirstName = testData.softDelete.saFirstName;
  teacherName = testData.softDelete.teacherName;
  teacherAssgCourseName = testData.restoreData.teacherAssgCourseName;
  teacherCourseName = testData.restoreData.teacherCourseName;
  teacherCqName = testData.restoreData.teacherCqName;
  teacherFirstName = testData.softDelete.teacherFirstName;
  restoreStudentAttempt =  testData.restoreData.restoreStudentAttempt;
  restoreClassCount = testData.restoreData.restoreClassCount;
  restoreArchivedStudentAttempt = testData.archiveData.restoreArchivedStudentAttempt;
  newSaClassName = testData.restoreData.newSaClassName;
  newTeacherClassName = testData.restoreData.newTeacherClassName;
  newSaGroupName = testData.restoreData.newSaGroupName;
  newTeacherGroupName = testData.restoreData.newTeacherGroupName;
  teacherAssignmentName = testData.restoreData.teacherAssignmentName;
  saAssignmentName = testData.restoreData.saAssignmentName;
  essayAcAnswer = testData.restoreData.essayAcAnswer;
  rteSleep = Number(testData.restoreData.rteSleep);
  singleSchoolCourse = testData.softDelete.singleSchoolCourse;
  studentName = testData.softDelete.studentName;
  schoolName2 = testData.softDelete.schoolName2;
  courseName = testData.softDelete.courseName;
  permanentDeleteSchedule = testData.softDelete.permanentDeleteSchedule;
  deleteInProgressStatus = testData.softDelete.deleteInProgressStatus;
  multiUserSchoolCount = testData.softDelete.schoolCount;
  toolTipMessage = testData.softDelete.toolTipMessage;
  archivedStudentAttempt = testData.softDelete.archivedStudentAttempt;
  studentAttempt = testData.softDelete.studentAttempt;
  archivedDistrict = testData.archiveData.archivedDistrict;
  archivedDistrictSchool = testData.archiveData.schoolName;
  archivedTeacherFirstName = testData.archiveData.archivedTeacherFirstName;
  archivedClassName = testData.archiveData.className;
  archivedCourseName = testData.archiveData.archivedCourseName;
  studentEmailID = testData.softDelete.studentUserEmailID;
  classCount = testData.softDelete.classCount;
  archivedCqName = testData.archiveData.teacherCqName;
  schoolNonDistrictPurchaseAssignee = testData.softDelete.schoolNonDistrictPurchaseAssignee;
  newSaName = testData.restoreData.saFirstName;
  newSaEmail = testData.restoreData.saUserEmailId;
  newSaUsername = testData.restoreData.saName;
  newTeacherName = testData.restoreData.newTeacherName;
  newTeacherEmail = testData.restoreData.newTeacherEmail;
  newTeacherUsername = testData.restoreData.newTeacherUsername;
  newStudentName = testData.restoreData.newStudentName;
  newStudentEmail = testData.restoreData.newStudentEmail;
  newSudentUsername = testData.restoreData.newSudentUsername;
  exitCard = testData.restoreData.exitCard;
  exitCardAssignmentName = testData.restoreData.exitCardAssignmentName;
  restorationProgressHeader = testData.restoreData.restorationProgressHeader;
  staticExitCardAssignment = testData.restoreData.staticExitCardAssignment;
  grade = testData.restoreData.grade;
  hardDeletedSchool = testData.hardDelete.schoolName;
  hdSaName = testData.hardDelete.saName;
  hdTeacherName = testData.hardDelete.teacherName;
  hdStudentName = testData.hardDelete.studentName;
  hdSaEmail = testData.hardDelete.saUserEmailId;
  hdTeacherEmail = testData.hardDelete.teacherUserEmailID;
  hdClassCount = testData.restoreData.restoreClassCount;
  hdStudentEmail = testData.hardDelete.studentUserEmailID;
  hardDeleteNamePrefix = testData.hardDelete.schoolName;
  singleHardDeleteSchoolCourse = testData.hardDelete.singleHardDeleteSchoolCourse;
  hdSchoolID = testData.hardDelete.hdSchoolID;
});

//Scenario 1: Check if the delete button is enabled and perform a soft delete a district
Then('the user searches for a School on listing page', async function () {
  await schoolListingPage.searchSchoolOnSchoolListingPage(schoolName);
});

Then('the user searches for an archived School on listing page', async function () {
  await schoolListingPage.searchSchoolOnSchoolListingPage(archivedDistrictSchool);
});

When('the user searches for school from archived district on listing page', async function () {
  await districtPage.searchDistrictOnDistrictListingPage(archivedDistrict);
});

Then('the delete button should be enabled on school listing page', async function ({page}) {
  await schoolListingPage.verifyDeleteButtonIsEnabled();
});

When('the user enters the correct passphrase for school deletion', async function ({page}) {
  await schoolListingPage.enterCorrectPassphrase();
});

When('the user clicks on the delete button under the actions column for a school', async function () {
  await schoolListingPage.clickOnSchoolDeleteButton();
});

Then(
  'the tooltip should be visible for the soft deleted district',
  async function () {
    await schoolListingPage.verifyVisibilityOfToolTip();
  },
);

Then(
  'the passphrase popup should display a message for school deletion {string}',
  async function ({ page }, deleteSchoolText: string) {
    await districtPage.verifyDeleteDistrictDialogBoxText(
      schoolName,
      l10n(deleteSchoolText, 'LMS'),
    );
  },
);

Then(
  'the passphrase popup should display a message for archived school deletion {string}',
  async function ({ page }, deleteSchoolText: string) {
    await districtPage.verifyDeleteDistrictDialogBoxText(
      archivedDistrictSchool,
      l10n(deleteSchoolText, 'LMS'),
    );
  },
);

Then('the school should be deleted successfully', async function () {
  await schoolListingPage.verifyStatusMessageIsVisible();
});

//Scenario 2: Soft delete a district and verify the status of deletion
Then(
  'the status should show Delete scheduled message with a black tooltip and an appropriate tooltip message for the soft deleted school',
  async function () {
    await schoolListingPage.verifyScheduledMessage(permanentDeleteSchedule, deleteInProgressStatus);
    await schoolListingPage.verifyDeleteSchoolTooltipText(toolTipMessage);
  },
);

//Scenario 3:Verify data is updated on the district listing page and on create district page
Then('the school name link text should be displayed in a non-clickable state', async function () {
  await schoolListingPage.verifySchoolNameIsNotClickable();
});

Then(
  'hyphen should be visible for the counts of SA, Teachers, and Student on school listing page',
  async function () {
    await schoolListingPage.verifyNilUserCountSchoolListingColumn();
  },
);

Then(
  'the Add and Edit action buttons should be disabled on the school listing page',
  async function () {
    await schoolListingPage.verifyEditButtonIsDisabled();
  },
);

Then(
  'the pagination count on the school listing page should not be updated',
  async function () {
    await schoolListingPage.verifyPaginationCount(schoolListingPaginationCount);
  },
);

//Scenario 4:  Verify school is not present on district listing pages after soft deletion
Then('the user searches for a District on listing page', async function () {
  await districtPage.searchDistrictOnDistrictListingPage(districtName);
});

Then('verifies the change in school count for district', async function () {
  await districtPage.verifySchoolCountOnListing(schoolCountString);
});

Then('verifies the change in school count for district after hard deletion', async function () {
  await districtPage.verifySchoolCountOnListing(hardDeleteSchoolCountString);
});

When('user clicks on the Schools popup on district listing page', async function () {
  await districtPage.clickOnSchoolPopup();
});

Then("the school count should be updated and soft deleted school shouldn't be displayed on the popup", async function () {
  await districtPage.verifySchoolCount(schoolCountString);
  await districtPage.verifySchoolNameIsNotPresentInPopup(schoolName);
});

//Scenario 5: Verify school is not present on district details page after soft deletion
Then('the user clicks on the district name to open the details page', async function () {
  await districtPage.clickOnDistrictName();
});

Then('the number of users count should be updated on district details page', async function () {
  await districtPage.verifySchoolCountInAccordion(accordionHeader, schoolCountString);
});

Then('the soft deleted school should not be visible in the school accordion list', async function () {
  await districtPage.verifySchoolNotPresentInAccordion(schoolName);
});

//Scenario 6: Verify data is not present on My district page after soft deletion
When('the user is on My District page', async function () {
  await navigateFromDashboard.navigateToMyDistrictPage();
});

Then('the number of users count should be updated on My District page', async function () {
  await districtPage.verifyExactUsersCountOnMyDistrict(myDistrictSACount, myDistrictTeacherCount, myDistrictStudentCount);
});

Then('the count on the terms accordion should be updated', async function () {
  await districtPage.verifyCountInTermAccordion(termCount);
});

Then("the terms created by the soft deleted schools shouldn't be present", async function () {
  await districtPage.verifyInvisibilityOfTermsCreatedBySchool(termName);
});

//Scenario 5: Verify data is not available on class listing pages after soft deletion
When('the soft deleted school should not be visible in the filter options', async function () {
  await schoolListingPage.verifyOptionNotPresentInFilter(schoolName);
});

When('user searches class on class listing page', async function () {
  await classListingPage.searchClassOnClassListingPage(classNamePrefix);
});

Then('the pagination count should be updated on the class listing page after soft deletion', async function () {
  await districtPage.verifyPaginationCount(classPaginationCount);
});

When('user search class from the soft deleted school on class listing page', async function () {
  await classListingPage.searchClassOnClassListingPage(className);
});

//Scenario 8: Verify data is not available on SA listing pages after soft deletion
When('User applies state filter on SA listing page to verify the pagination count as {string}', async function ({}, role) {
  await saListingPage.applyStateFilter(stateName1, role);
});

Then('the pagination count should be updated on the SA listing page after school soft deletion', async function () {
  await districtPage.verifyPaginationCount(saPaginationCount);
});

Then('User searches for SA from the soft deleted school on the listing page', async function () {
  await saListingPage.searchSaOnSaListingPage(saName);
});

//Scenario 9: Verify SA cannot be created for the soft-deleted district and uniqueness of emailID
When('user click on create new SA button and selected the state and district as {string}', async function ({}, role) {
  await saListingPage.createNewSAAndSelectState(stateName2, districtName, role);
});

Then(
  'the soft deleted school should not be visible in the school option of create SA page',
  async function () {
    await saListingPage.verifySchoolNotPresentInDropdown(schoolName);
  },
);

When('user selects a different school on create new SA page', async function () {
  await saListingPage.selectSchoolFromOption(schoolName2);
});

When('user enter the same emailID as the users of the soft deleted school SA user', async function () {
  await saListingPage.fillEmailIdOfUser(saUserEmailID);
});

//Scenario 10: Verify soft deleted school is not present on profile page of a SA user
Then('user searches for SA user which is present in multiple schools on the listing page', async function () {
  await saListingPage.searchSaOnSaListingPage(saUserInMultiSchool);
});

When('the user clicks on the name of the SA user', async function () {
  await saListingPage.clickOnUsername(saUserInMultiSchoolFirstName);
});

Then('the soft deleted school should not be visible on the user profile page', async function () {
  await saListingPage.verifySchoolPresenceOnProfile(schoolName, false);
});

//Scenario 11: Verify data is not available on Teacher listing pages after soft deletion
Then('the soft deleted school should not be visible in the filter options on Teacher listing page as {string}', async function ({}, role) {
  await teacherListingPage.verifySchoolPresenceInDropdown(stateName1, districtName, schoolName, role, false)
});

When('User applies All school filter on Teacher listing page', async function () {
  await teacherListingPage.applySchoolFilter(selectAll);
});

Then('the pagination count should be updated on the Teacher listing page after soft deletion of school', async function () {
  await districtPage.verifyPaginationCount(teacherPaginationCount);
});

When(
  'user searches for Teacher from the soft deleted school on the listing page',
  async function () {
    await teacherListingPage.searchTeacherOnTeacherListingPage(teacherName);
  },
);

When(
  'user searches for teacher present in multiple school',
  async function () {
    await teacherListingPage.searchTeacherOnTeacherListingPage(teacherUserInMultiSchool);
  },
);

Then(
  'the teacher present in multiple schools should be visible',
  async function () {
    await teacherListingPage.verifyNameOfTeacher(teacherUserInMultiSchoolFirstName);
  },
);

When(
  'the school column count and the count in school popup should be updated',
  async function () {
    await teacherListingPage.verifyCountInSchoolColumnAndPopup(multiUserSchoolCount, schoolName2);
  },
);

When('the school column count and the count in school popup should be updated for student user', async function () {
  await studentListingPage.verifyCountInSchoolColumnAndPopup(multiUserSchoolCount, schoolName2);
});

//Scenario 12: Verify teacher cannot be created for the soft deleted school and uniqueness of emailID
When('user click on create new teacher button', async function () {
  await teacherListingPage.clickOnCreateTeacherButton();
});

Then('the soft deleted school should not be visible in the school dropdown of create teacher page', async function () {
  await teacherListingPage.verifyAbsenceOfSchoolInOptionPopup(schoolName);
});

When('user selects a different school on create teacher page', async function () {
  await teacherListingPage.selectSchoolFromOptionPopup(schoolName2);
});

When('user enter the same emailID as the users of the soft deleted school teacher user', async function () {
  await teacherListingPage.fillEmailIdOfDeletedSchoolUser(teacherEmailID);
});

Then(
  '{string} message should be displayed on add teacher user page',
  async function ({}, addUserEmailIdErrorMessage: string) {
    await teacherListingPage.verifyAddUserEmailIdErrorMessage(l10n(addUserEmailIdErrorMessage, 'LMS'));
  });

//Scenario 13: Verify soft deleted school is not present on profile page of a teacher user
When('the user clicks on the name of the teacher user', async function () {
  await teacherListingPage.clickOnTeacherName();
});

//Scenario 14: Verify data is not available on Student listing pages after soft deletion
Then(
  'the soft deleted school should not be visible in the filter options of Student listing page as {string}',
  async function ({}, role) {
    await studentListingPage.verifySchoolPresenceInDropdown(stateName1, districtName, schoolName, role, false);
  },
);

When('User applies All school filter on Student listing page', async function () {
  await studentListingPage.applySchoolFilter(selectAll);
});

Then('the pagination count should be updated on the Student listing page after soft deletion of school', async function () {
  await districtPage.verifyPaginationCount(studentPaginationCount);
});

When(
  'user searches for Student from the soft deleted school on the listing page',
  async function () {
    await studentListingPage.searchStudentOnStudentListingPage(studentName);
  },
);

When(
  'user searches for Student from multiple schools on the listing page',
  async function () {
    await studentListingPage.searchStudentOnStudentListingPage(studentUserMultiSchool);
  },
);

Then('the student present in multiple schools should be visible', async function() {
  await studentListingPage.verifyNameOfStudent(studentUserMultiSchoolFirstName);
});

Then('the class column count and the count in class popup should be updated as well', async function() {
  await studentListingPage.verifyCountInClassColumnAndPopup(classCount, classNameSchool1);
});

//Scenario 15: Verify student cannot be created for the soft deleted school and uniqueness of emailID
When('user click on create new student button', async function () {
  await studentListingPage.clickOnCreateStudentButton();
});

Then('the soft deleted school should not be visible in the school dropdown of create student page', async function () {
  await studentListingPage.verifyAbsenceOfSchoolInOptionPopup(schoolName);
});

When('user selects a different school on create student page', async function () {
  await studentListingPage.selectSchoolFromOptionPopup(schoolName2);
});

When('user enter the same emailID as the users of the soft deleted school student user', async function () {
  await studentListingPage.fillEmailIdOfDeletedSchoolUser(studentEmailID);
});

Then(
  '{string} message should be displayed on add student user page',
  async function ({}, addUserEmailIdErrorMessage: string) {
    await studentListingPage.verifyAddUserEmailIdErrorMessage(l10n(addUserEmailIdErrorMessage, 'LMS'));
  });

//Scenario 13: Verify soft deleted school is not present on profile page of a teacher user
When('the user clicks on the name of the student user', async function () {
  await studentListingPage.clickOnStudentName();
});

When('the class count and course count should be updated as well', async function () {
  await studentListingPage.verifyCourseAndClassCountOnUserPage(classCount, coursesCount);
});

When('the class count and course count should be updated as well after hard deletion', async function () {
  await studentListingPage.verifyCourseAndClassCountOnUserPage(restoreClassCount, coursesCount);
});

//Scenario 12: Verify score reports page do not show soft deleted district data
Then('user has selected the course from soft deleted school on score report page', async function () {
  await scoreReportPage.selectCourseOnScoreReportPage(courseName3);
});

Then(
  'the user selects the district from district dropdown on score report page',
  async function ({}, role) {
    await scoreReportPage.selectDistrictFromDropdown(districtName);
  },
);

Then(
  'the soft deleted school should not be visible in the school dropdown of score report pages',
  async function () {
    await scoreReportPage.verifySchoolNotPresentInDropdown(schoolName);
  },
);

Then(
  'the score reports should not display any data for the soft deleted school',
  async function () {
    await scoreReportPage.verifyDataIsNotPresentOnReportPage(schoolName);
  },
);

Then('user selects the archived district course on score report page', async function () {
  await scoreReportPage.selectCourseOnScoreReportPage(archivedCourseName);
});

When('the user selects the archived district from district dropdown on score report page', async function () {
  await scoreReportPage.selectDistrictFromDropdown(archivedDistrict);
});

Then(
  'the soft deleted archived school should not be visible in the school dropdown of score report pages',
  async function () {
    await scoreReportPage.verifySchoolNotPresentInDropdown(archivedDistrictSchool);
  },
);

Then(
  'the score reports should not display any data for the soft deleted archived school',
  async function () {
    await scoreReportPage.verifyDataIsNotPresentOnReportPage(archivedDistrictSchool);
  },
);

//Scenario 13: Verify item analysis reports page do not show soft deleted district data
Then(
  'user has selected the course and course quiz from the soft deleted school on item analysis report page',
  async function () {
    await itemAnalysisPage.selectCourseAndCourseQuizOnItemAnalysisReportPage(courseName3, courseQuiz)
  });

When(
  'the user selects the district from district dropdown on item analysis report page',
  async function () {
    await itemAnalysisPage.selectDistrictFromDropdown(districtName);
  },
);

Then(
  'the soft deleted school should not be visible in the school dropdown of item analysis report page',
  async function () {
    await itemAnalysisPage.verifySchoolNotPresentInDropdown(schoolName);
  },
);

Then(
  'the item analysis reports should not display attempts from students of the soft deleted school',
  async function () {
    await itemAnalysisPage.verifyStudentAttemptsCount(studentAttempt);
  },
);

Then(
  'user has selected the course and course quiz from archived school on item analysis report page',
  async function () {
    await itemAnalysisPage.selectCourseAndCourseQuizOnItemAnalysisReportPage(
      archivedCourseName,
      archivedCqName,
    );
  },
);

When(
  'the user selects the archived district from district dropdown on item analysis report page',
  async function () {
    await itemAnalysisPage.selectDistrictFromDropdown(archivedDistrict);
  },
);

Then(
  'the soft deleted archived school should not be visible in the school dropdown of item analysis report page',
  async function () {
    await itemAnalysisPage.verifyDistrictNotPresentInDropdown(archivedDistrictSchool);
  },
)

Then(
  'the item analysis reports should not display attempts from students of the soft deleted archived school',
  async function () {
    await itemAnalysisPage.verifyStudentAttemptsCount(archivedStudentAttempt);
  },
);

//Scenario 20: Verify Gradebook reports page do not show soft deleted school data
Then('the soft deleted school should not be present in the school dropdown on gradebook report page', async function () {
  await gradebookReportPage.verifyAbsenceOfSchoolInDropdown(schoolName);
});

//Scenario 14: Verify Product Usage reports page do not show soft deleted district data
Then('user selects end users on product usage report page', async function () {
  await productUsageReportPage.selectEndUserOnProductUsageReportPage(districtAssignee);
});

When(
  'the user selects the district on product usage report page',
  async function () {
    await productUsageReportPage.selectDistrictFromDropdown(districtName);
  },
);

Then(
  'the soft deleted school should not be visible in the school dropdown of the product usage report page',
  async function () {
    await productUsageReportPage.verifySchoolNotPresentInDropdown(schoolName);
  },
);

Then('user selects non-district purchase end users on product usage report page', async function () {
  await productUsageReportPage.selectEndUserOnProductUsageReportPage(schoolNonDistrictPurchaseAssignee);
});

Then('user selects custom date range of 1 year on product usage report page', async function() {
  await  productUsageReportPage.selectCustomDateOfOneYear(customDateRange);
});

When(
  'user search a course which is assigned to the soft deleted school on product usage reports page',
  async function () {
    await productUsageReportPage.searchCourseOnProductUsageReportPage(singleSchoolCourse);
  },
);

//Scenario 15: Verify License reports page do not show soft deleted school data
When('user selects course family and school assignee on license report page', async function () {
  await licenseReportPage.selectCourseFamilyAndAssignee(courseFamily, assignee);
});

Then(
  'the soft deleted school should not be visible in the filter of license report pages',
  async function () {
    await licenseReportPage.verifySchoolNotPresentInFilter(schoolName);
  },
);

When('user searches for soft deleted school on license report page', async function () {
  await licenseReportPage.searchDataOnLicenseReportPage(schoolName);
});

//Scenario 16: Verify Login reports page do not show soft deleted school data
Then('the user selects the district on the login reports page as {string}', async function ({page}, role) {
  await loginReportPage.verifyDistrictInDropdownAndClick(districtName, role);
});

Then(
  'the soft deleted school should not be visible in the school dropdown of login report pages',
  async function () {
    await loginReportPage.verifySchoolNotPresentInDropdown(schoolName);
  },
);

When(
  'user search soft deleted school user with name prefix on login report page',
  async function () {
    await loginReportPage.searchReport(namePrefix);
  },
);

//Scenario 17: Verify soft deleted school user should not be able to login
When(
  'user select the state from state dropdown and district with soft deleted school from district dropdown',
  async function () {
    await lmsLoginPage.fillRequiredDetails(stateName1, archivedDistrict);
  },
);

When('the user enters the username and password of the archived soft deleted school user as {string}', async function ({testData}, role) {
  const dataSection = Object.keys(testData)[3];
  await lmsLoginPage.fillGivenUsernameAndPassword(role, password, testData, dataSection);
});

When('the user enters the username and password of the user present in multiple schools as {string}', async function ({testData}, role) {
  const dataSection = Object.keys(testData)[2];
  await lmsLoginPage.fillGivenUsernameAndPassword(role, password, testData, dataSection)
});

When('the user enters the username and password of the soft deleted school user as {string}', async function ({testData}, role) {
  const dataSection = Object.keys(testData)[1];
  await lmsLoginPage.fillGivenUsernameAndPassword(role, password, testData, dataSection)
});

Then('the error popup should be displayed on login page', async function() {
  await lmsDashboard.verifyErrorPopupOnLoginPage();
})

When('the user should login and soft deleted school should not be present in school selection popup', async function () {
  await lmsLoginPage.verifyAbsenceOfSchoolInPopup(schoolName);
});

//Scenario 24: Verify Dashboard updates after soft-deleting a school
Then(
  'soft deleted school should not be visible on the school dropdowns on course cards tab on the Dashboard',
  async function () {
    await lmsDashboard.clickShowMoreUntilCoursePresent(courseName3);
    await lmsDashboard.verifySchoolNotPresentInDropdownOfCourse(courseName3, schoolName);
  },
);

When(
  'the user selects the district from district dropdown on the school tab as {string}',
  async function ({}, role) {
    await lmsDashboard.selectDistrictFromDropdownOnSchoolTab(districtName, role);
  },
);

Then('the soft deleted school card should not be visible on the school tab', async function() {
  await lmsDashboard.verifyPresenceOfSchoolCard(schoolName, false);
});

//Scenario 25: Verify course-related information updates on LMS after soft-deleting a school
When(
  'user search a course which is assigned to the soft deleted school on course catalog page',
  async function () {
    await lmsCourseCatalog.searchCourse(singleSchoolCourse);
  },
);

When(
  'user search a course which is assigned to the soft deleted school on lms course catalog page',
  async function () {
    await lmsCourseCatalog.searchCourse(courseName3);
  },
);

Then(
  'the soft deleted school should not be visible on the districts and schools popup on LMS',
  async function () {
    await lmsCourseCatalog.verifySchoolNotPresentInDistrictAndSchoolPopup(schoolName);
  },
);

Then(
  'schools count should be updated on the districts and schools popup on LMS',
  async function () {
    await lmsCourseCatalog.verifyCountOnDistrictAndSchoolPopup(lmsDistrictCount, lmsSchoolCount);
  },
);

Then(
  'schools count should be updated on the districts and schools popup for DTA user',
  async function () {
    await lmsCourseCatalog.verifyCountOnDistrictAndSchoolPopupAsDTA(lmsSchoolCount);
  },
);

//Scenario 22: Verify course-related information updates on CMS after soft-deleting a district
Then(
  'the soft deleted school should be visible on the districts and schools popup on CMS',
  async function () {
    await cmsCourseCatalog.verifySchoolPresentInDistrictAndSchoolPopup(schoolName, districtName);
  },
);

Then(
  'schools count should remain the same on districts and schools popup on CMS',
  async function () {
    await cmsCourseCatalog.verifyCountOnDistrictAndSchoolPopup(cmsDistrictCount, cmsSchoolCount);
  },
);

//Scenario 28: Verify license-related information updates on LMS after soft-deleting a school
When(
  'user searches for a license which is assigned to the soft deleted school on license listing page',
  async function () {
    await licenseListingPage.searchLicenseOnListing(schoolName);
  },
);

When(
  'the user selects the district from district popup of license listing page',
  async function () {
    await licenseListingPage.searchDistrictOnDistrictDropdown(districtName);
    await licenseListingPage.selectDistrictFromPopup();
  },
);

When('the user searched the soft deleted school on school popup of license listing page', async function() {
  await licenseListingPage.searchSchoolOnPopup(schoolName);
});

Then(
  '{string} should be displayed on school selection popup of license listing page',
  async function ({ page }, noSchoolToDisplayMessage: string) {
    await licenseListingPage.verifyErrorMessage(l10n(noSchoolToDisplayMessage, 'LMS'));
  },
);

//Scenario 29: Verify no user can be imported on soft-deleting a district
When('user selects user type as School Admin on import users page', async function () {
  await importUserPage.selectUserTypeOnImportUserPage(userTypeAsSAFull);
});

When('user selects user type as Teacher on import users page', async function () {
  await importUserPage.selectUserTypeOnImportUserPage(userTypeAsTeacher);
});

When('user selects user type as Student on import users page', async function () {
  await importUserPage.selectUserTypeOnImportUserPage(userTypeAsStudent);
});

Then('user clicks on the start over button', async function ({page}) {
  importUserPage = new ImportUserPage(page);
  await importUserPage.clickOnStartOverButton();
})

When('user selects the state and district on import users page', async function () {
  await importUserPage.selectStateOnImportUserPage(stateName1);
  await importUserPage.verifyDistrictPresentOnDistrictDropdown(districtName);
});

Then("school admin user of the soft deleted school shouldn't get imported", async function() {
  await importUserPage.importUser(autoBotPrefix, userTypeAsSA, schoolID);
  await importUserPage.verifyImportFailed(error);
});

Then("teacher user of the soft deleted school shouldn't get imported", async function() {
  await importUserPage.importUser(autoBotPrefix, userTypeAsTeacher, schoolID);
  await importUserPage.verifyImportFailed(error);
});

Then("student user of the soft deleted school shouldn't get imported", async function() {
  await importUserPage.importUser(autoBotPrefix, userTypeAsStudent, schoolID);
  await importUserPage.verifyImportFailed(error);
});

//RESTORE SCHOOL
Then('School restoration in Progress popup should appear', async function ({page}) {
  await restoreDistrictPage.verifyPresenceOfRestorationInProgressPopup(restorationProgressHeader);
});

Then(
  'the SA, Teachers, and Student count should be visible on school listing page for the restored school',
  async function () {
    await schoolListingPage.verifyUserCountSchoolListingColumn(restoreSaCountInSchoolListing, restoreTeacherCountInSchoolListing, restoreStudentCountInSchoolListing);
  },
);

Then(
  'the Edit action button should be enabled on school listing page',
  async function () {
    await schoolListingPage.verifyEditButtonIsEnabled();
  },
);

Then(
  'delete action button should be visible instead of the restore action button on the school listing page',
  async function () {
    await schoolListingPage.verifyDeleteButtonIsEnabled();
});

Then(
  'the school name link text should be displayed in a clickable state',
  async function () {
    await schoolListingPage.verifyVisibilityOfSchoolOnSchoolListingPage(schoolName);
});

Then(
  'verifies the change in school count after restoration for district',
  async function () {
    await districtPage.verifySchoolCountOnListing(restoreSchoolCount);
});

//TODO
Then("the school count should be updated and restored school should be displayed on the popup", async function () {
  await districtPage.verifySchoolCount(restoreSchoolCount);
  await districtPage.verifySchoolNameIsPresentInPopup(schoolName);
});

Then('the number of users count should be updated after restoration on district details page', async function () {
  await districtPage.verifySchoolCountInAccordion(accordionHeaderAfterRestore, restoreSchoolCount);
});

Then('the restored school should be visible in the school accordion list', async function () {
  await districtPage.verifySchoolPresentInAccordion(schoolName);
});


Then('the number of users count should be updated after restoration on My District page', async function () {
  await districtPage.verifyExactUsersCountOnMyDistrict(restoreMyDistrictSACount, restoreMyDistrictTeacherCount, restoreMyDistrictStudentCount);
});

Then('the count on the terms accordion should be updated after restoration', async function () {
  await districtPage.verifyCountInTermAccordion(restoreTermCount);
});

Then("the terms created by the soft deleted schools should be present", async function () {
  await districtPage.verifyTermsCreatedBySchool(termName);
});

Then("the restored school should be visible in the filter options", async function () {
  await schoolListingPage.verifySchoolPresentInFilter(schoolName);
});

Then('the pagination count should be updated on the class listing page after restoration of school', async function () {
  await districtPage.verifyPaginationCount(restoreClassPaginationCount);
});

Then('the restored school class should be present on the class listing page', async function () {
  await classListingPage.verifyVisibilityOfClassOnClassListingPage(className);
});

When('User applies state filter on SA listing page to verify the pagination count after restoration as {string}', async function ({}, role) {
  await saListingPage.applyStateFilter(stateName1, role);
});

Then('the pagination count should be updated on the SA listing page after school restoration', async function () {
  await districtPage.verifyPaginationCount(restoreSaListingPageCount);
});

Then('the SA user should be present on the SA listing page', async function () {
  await saListingPage.verifyPresenceOfSaInListing(saFirstName);
});

Then(
  'user should be able to create a SA in restored school as a {string}',
  async function ({ }, role) {
    await saListingPage.createSA(stateName2, districtName, schoolName, newSaName, newSaEmail, newSaUsername, role);
  });

Then('the restored school should be visible on the user profile page', async function () {
  await saListingPage.verifySchoolPresenceOnProfile(schoolName, true);
});

Then('the restored school should be visible in the filter options on Teacher listing page as {string}', async function ({}, role) {
  await teacherListingPage.verifySchoolPresenceInDropdown(stateName1, districtName, schoolName, role, true)
});

Then('the pagination count should be updated on the Teacher listing page after restoration of school', async function () {
  await districtPage.verifyPaginationCount(restoreTeacherPaginationCount);
});

Then('the teacher user should be displayed',async function () {
  await teacherListingPage.verifyNameOfTeacher(teacherFirstName);
});

When(
  'the school column count and the count in school popup should be updated after restoration',
  async function () {
    await teacherListingPage.verifyCountInSchoolColumnAndPopup(restoreSchoolCount, schoolName);
  },
);

When(
  'the school column count and the count in school popup should be updated for student user after restoration',
  async function () {
    await studentListingPage.verifyCountInSchoolColumnAndPopup(restoreSchoolCount, schoolName);
});

Then('user should be able to create a Teacher user as a restored school {string} user', async function ({}, role) {
  await teacherListingPage.createTeacher(schoolName, newTeacherName, newTeacherEmail, newTeacherUsername, role, false);
});

Then('the restored school should be visible in the filter options on Student listing page as {string}', async function ({}, role) {
  await studentListingPage.verifySchoolPresenceInDropdown(stateName1, districtName, schoolName, role, true)
});

Then('the pagination count should be updated on the Student listing page after restoration of school', async function () {
  await districtPage.verifyPaginationCount(restoreStudentPaginationCount);
});

Then('the student user should be displayed',async function () {
  await studentListingPage.verifyNameOfStudent(studentFirstName);
});

Then('the class column count and the count in class popup should be updated as well after restoration', async function() {
  await studentListingPage.verifyCountInClassColumnAndPopup(restoreClassCount, className);
});

Then('user should be able to create a Student user as a restored school {string} user', async function ({}, role) {
  await studentListingPage.createStudent(schoolName, newStudentName, grade, newStudentEmail, newSudentUsername, role,);
});

Then('the restored school should be visible in the school dropdown of score report pages',
  async function () {
    await scoreReportPage.verifySchoolInDropdownAndSelectASchool(schoolName, allSchools);
});

Then('the score reports should be displayed for the restored school as {string}', async function ({testData}, role) {
  const dataSection = Object.keys(testData)[4];
  await scoreReportPage.verifyDataIsPresentOnReportPage(schoolName, role, testData, dataSection);
});

Then('the restored archived school should be visible in the school dropdown of score report pages',
  async function () {
    await scoreReportPage.verifySchoolInDropdownAndSelectASchool(archivedDistrictSchool, allSchools);
});

Then('the score reports should be displayed for the restored archived school as {string}', async function ({testData}, role) {
  const dataSection = Object.keys(testData)[3];
  await scoreReportPage.verifyDataIsPresentOnReportPage(archivedDistrictSchool, role, testData, dataSection);
});

Then('the restored school should be visible in the school dropdown of item analysis report page', async function () {
  await itemAnalysisPage.verifySchoolInDropdownAndSelectASchool(schoolName, allSchools);
});

Then('the item analysis reports should display attempts from students of the restored school', async function () {
  await itemAnalysisPage.verifyStudentAttemptsCount(restoreStudentAttempt);
});

Then('the restored archived school should be visible in the school dropdown of item analysis report page', async function () {
  await itemAnalysisPage.verifySchoolInDropdownAndSelectASchool(archivedDistrictSchool, allSchools);
});

Then('the item analysis reports should display attempts from students of the restored archived school', async function () {
  await itemAnalysisPage.verifyStudentAttemptsCount(restoreArchivedStudentAttempt);
});

Then('the restored school license should be present on the license report page', async function () {
  await licenseReportPage.verifyDistrictPresentOnLicenseReportList(schoolName);
});

Then('the csv file should be downloaded and should contain the restored school', async function () {
  await licenseReportPage.verifyExportedReport(schoolName, true);
});

When('user select the state from state dropdown and district with restored school from district dropdown', async function () {
  await lmsLoginPage.fillRequiredDetails(stateName1, districtName);
});

Then('the restored school should be visible in the school dropdown of login report pages', async function () {
  await loginReportPage.verifySchoolIsPresentInDropdown(schoolName);
});

When(
  'user searches for a restored school SA user with name prefix on login report page',
  async function () {
    await loginReportPage.searchReport(saFirstName);
  },
);

When(
  'user searches for a restored school Teacher user with name prefix on login report page',
  async function () {
    await loginReportPage.searchReport(teacherFirstName);
  },
);

When(
  'user searches for a restored school Student user with name prefix on login report page',
  async function () {
    await loginReportPage.searchReport(studentFirstName);
  },
);

Then(
  'the restored school should be visible in the school dropdowns on course cards tab on the Dashboard',
  async function () {
    await lmsDashboard.clickShowMoreUntilCoursePresent(courseName3);
    await lmsDashboard.verifySchoolPresentInDropdownOfCourse(courseName3, schoolName);
  },
);

Then('the restored school card should be visible on the school tab', async function() {
  await lmsDashboard.verifyPresenceOfSchoolCard(schoolName, true);
});

Then('the restored school SA user should be displayed with updated page count', async function () {
  await loginReportPage.verifyUserLoginDataIsPresent(saFirstName);
});

Then('the restored school teacher user should be displayed with updated page count', async function () {
  await loginReportPage.verifyUserLoginDataIsPresent(teacherFirstName);
});

Then('the restored school student user should be displayed with updated page count', async function () {
  await loginReportPage.verifyUserLoginDataIsPresent(studentFirstName);
});

Then('the restored school should be visible on the districts and schools popup on LMS', async function () {
  await lmsCourseCatalog.verifySchoolIsPresentInDistrictAndSchoolPopup(schoolNameWithDistrict);
});

When(
  'user searches for a license which is only assigned to the restored school on license listing page',
  async function () {
    await licenseListingPage.searchLicenseOnListing(schoolName);
  },
);

Then('the license from the restored school should be displayed', async function () {
  await licenseListingPage.verifyDistrictOfTheLicenseDisplayed(schoolName);
});

Then('the restored school should be visible on school popup of license listing page', async function () {
  await licenseListingPage.verifyOrgNameInSelectPopup();
});

When('the user clicks on the name of the displayed license', async function () {
  await licenseListingPage.clickOnLicenseName();
});

Then('the school name should be present on the license details page', async function () {
  await licenseListingPage.verifyPresenceOfOrgNameOnLicenseDetailsPage(schoolName);
});

Then('user imports a School Admin in the restored school', async function () {
  await importUserPage.importUser(autoBotPrefix, userTypeAsSA, schoolID);
  await importUserPage.clickOnConfirmButton();
});

Then('teacher user of the soft deleted school should be imported', async function () {
  await importUserPage.importUser(autoBotPrefix, userTypeAsTeacher, schoolID);
  await importUserPage.clickOnConfirmButton();
});

Then('student user of the soft deleted school should be imported', async function () {
  await importUserPage.importUser(autoBotPrefix, userTypeAsStudent, schoolID);
  await importUserPage.clickOnConfirmButton();
});

Then('user enters all the metadata on class creation page as a restored school SA user', async function () {
  await classListingPage.createClassAsSa(newSaClassName, newTeacherName);
});

Then('user enters all the metadata on class creation page as a restored school Teacher user', async function () {
  await classListingPage.createClassAsTeacher(newTeacherClassName);
});

When('user searches for the newly created class on class listing page as a restored school SA user', async function () {
  await classListingPage.searchClassOnClassListingPage(newSaClassName);
});

When('user enters the group name for the newly created class as a restored school SA user', async function () {
  await classListingPage.enterGroupName(newSaGroupName);
});

When('user enters the group name for the newly created class as a restored school Teacher user', async function () {
  await classListingPage.enterGroupName(newTeacherGroupName);
});

When('user searches for the newly created class on class listing page as a restored school Teacher user', async function () {
  await classListingPage.searchClassOnClassListingPage(newTeacherClassName);
});

Then('user searches for the static course on course selection page for assigning', async function () {
  await classListingPage.searchCourseOnAllocateCoursePage(teacherCourseName);
});

Then('user searches for the static course for assignment creation to assign on course selection page', async function () {
  await classListingPage.searchCourseOnAllocateCoursePage(teacherAssgCourseName);
});

Then(
  'user enters the name for the newly created assignment and moves to stepper2 as a restored school SA user',
  async function () {
    await assignmentListingPage.enterAssignmentName(saAssignmentName);
    await assignmentListingPage.clickOnNextButton();
  },
);

Then(
  'user enters the name for the newly created assignment and moves to stepper2 as a restored school Teacher user',
  async function () {
    await assignmentListingPage.enterAssignmentName(teacherAssignmentName);
    await assignmentListingPage.clickOnNextButton();
  },
);

Then(
  'user should check the restored school class checkbox for which the assignment should be assigned as {string}',
  async function ({}, role) {
    await assignmentListingPage.clickOnClassNameCheckbox(newSaClassName, newSaClassName, className, role);
  },
);

Then('user should unassign the newly assigned course from the displayed class', async function () {
  await classListingPage.unAssignCourse(teacherCourseName);
});

Then('the user clicks on the open button for the course assigned to restored school', async function () {
  await lmsDashboard.clickOnOpenButtonForACourse(teacherCourseName);
});

Then('the user attempts the essay question of the given cq', async function () {
  await studentAttemptPage.attemptEssayQuestion(essayAcAnswer, rteSleep);
});

Then('the user clicks on the open button for the given assignment', async function () {
  await lmsDashboard.clickOnOpenButtonForAnAssignment(teacherAssignmentName);
});

Then('user selects the restored class from class dropdown on grade submission page', async function () {
  await gradeSubmissionPage.selectClassFromClassDropdown(className);
});

Then('selects the newly assigned course from the course dropdown on grade submission page', async function () {
  await gradeSubmissionPage.selectCourseFromCourseDropdown(teacherCourseName);
});

When('selects the course quiz of the newly assigned course from the cq dropdown on grade submission page', async function () {
  await gradeSubmissionPage.selectCqFromCourseQuizDropdown(teacherCqName);
});

Then('user has selected the restored school, teacher, and class from dropdown on gradebook report page as {string}', async function ({}, role) {
  await gradebookReportPage.selectUserFromDropdown(role, schoolName, teacherFirstName, className);
});

Then('the gradebook reports should be displayed for the restored school and class', async function () {
  await gradebookReportPage.dataOnReportPage(singleSchoolCourse);
});

Then('user has selected the restored school, teacher, and class from archived district on gradebook report page as {string}', async function ({}, role) {
  await gradebookReportPage.selectUserFromDropdown(role, archivedDistrictSchool, archivedTeacherFirstName, archivedClassName);
});

Then('the gradebook reports should be displayed for the restored archived school and class', async function () {
  await gradebookReportPage.dataOnReportPage(archivedCourseName);
});

When('user is on the Exit card assignments page', async function ({ page }) {
  navigateFromDashboard = new NavigateFromDashboard(page);
  await navigateFromDashboard.navigateToExitCardAssignmentsListingPage();
});

When('user clicks on the create new assignment button on exit card assignments page', async function ({ page }) {
  exitcardAssignmentListingPage = new ExitCardAssignmentListingPage(page);
  await exitcardAssignmentListingPage.clickOnCreateNewExitCardButton();
});

Then('user clicks on the select exit card button', async function ({ page }) {
  exitcardAssignmentListingPage = new ExitCardAssignmentListingPage(page);
  await exitcardAssignmentListingPage.clickOnSelectExitCardButton();
});

When('user searches for the given exit card and selects the exit card', async function () {
  await exitcardAssignmentListingPage.searchAndSelectExitCardOnSelectionPage(exitCard);
});

Then('user clicks on the Add button on select exit card page', async function ({ page }) {
  exitcardAssignmentListingPage = new ExitCardAssignmentListingPage(page);
  await exitcardAssignmentListingPage.clickOnAddButton();
});

When('user selects the course from the dropdown on assign exit card page', async function () {
  await exitcardAssignmentListingPage.selectCourseFromDropdown(courseName3);
});

When('user enters the exit card assignment name', async function () {
  await exitcardAssignmentListingPage.enterExitCardAssignmentName(exitCardAssignmentName);
});

Then('user clicks on the next button and navigates to stepper2', async function ({ page }) {
  exitcardAssignmentListingPage = new ExitCardAssignmentListingPage(page);
  await exitcardAssignmentListingPage.clickOnNextButton();
});

When('user clicks on the go button on stepper2 of the assign exit card page', async function ({ page }) {
  exitcardAssignmentListingPage = new ExitCardAssignmentListingPage(page);
  await exitcardAssignmentListingPage.clickOnGoButton();
});

Then('user selects the class and clicks on the assign button', async function () {
  await exitcardAssignmentListingPage.clickOnClassCheckbox(className);
  await exitcardAssignmentListingPage.clickOnAssignButton();
});

Then('the user clicks on the open button for the exit card assignment', async function () {
  await lmsDashboard.clickOnOpenButtonForAnAssignment(exitCardAssignmentName);
});

Then('user clicks on the ok button on instructions popup', async function ({page}) {
  studentAttemptPage = new StudentAttemptPage(page);
  await studentAttemptPage.clickOnOkButton();
});

Then('user clicks on the launch exit card assignment button', async function ({page}) {
  studentAttemptPage = new StudentAttemptPage(page);
  await studentAttemptPage.clickLaunchOnECAssignment();
});

Then('user clicks on the start button of exit card instructions popup', async function ({page}) {
  studentAttemptPage = new StudentAttemptPage(page);
  await studentAttemptPage.clickOnStartButton();
});

Then('user selects the first option of the ec assignment single select question', async function () {
  await studentAttemptPage.attemptSsq(singleSelectAns);
});

When('user is on the Exit card report page', async function ({ page }) {
  navigateFromDashboard = new NavigateFromDashboard(page);
  await navigateFromDashboard.navigateToExitCardReportsPage();
});

Then('user selects the class, course, exit card, and newly created assignment from dropdown on exit card report page', async function () {
  await exitCardReportPage.selectValueFromDropdown(className, courseName3, exitCard, exitCardAssignmentName);
});

Then('user selects the class, course, exit card, and assignment from dropdown on exit card report page', async function () {
  await exitCardReportPage.selectValueFromDropdown(className, courseName, exitCard, staticExitCardAssignment);
});

When('user clicks on the go button on exit card report page', async function ({page}) {
  exitCardReportPage = new ExitCardReportPage(page);
  await exitCardReportPage.clickOnGoButton();
});

Then('user clicks on the evaluate button of the given student on exit card report page', async function () {
  await exitCardReportPage.clickOnEvaluateButton(studentName);
});

When('user clicks on the Got it radio button', async function ({page}) {
  exitCardReportPage = new ExitCardReportPage(page);
  await exitCardReportPage.clickOnGotItEvaluationOption();
});

Then('user clicks on the back button on ec assignment evaluation page', async function ({page}) {
  exitCardReportPage = new ExitCardReportPage(page);
  await exitCardReportPage.clickOnBackButton();
});

When('user clicks on the report tab on exit card report page', async function ({page}) {
  exitCardReportPage = new ExitCardReportPage(page);
  await exitCardReportPage.clickOnReportTab();
});

Then('user verifies the number of student attempts and percentage on exit card reports page', async function () {
  await exitCardReportPage.verifyEcReports(ecReportStudentCount, ecReportStudentPercentage);
});

// HARD DELETION
When('the user searches for the hard-deleted school', async function () {
  await schoolListingPage.searchSchoolOnSchoolListingPage(hardDeletedSchool);
});

Then("the school count should be updated and hard deleted school shouldn't be displayed on the popup", async function () {
  await districtPage.verifySchoolCount(hdSchoolCount);
  await districtPage.verifySchoolNameIsNotPresentInPopup(hardDeletedSchool);
});

Then('the number of users count should be updated on district details page after hard deletion of school', async function () {
  await districtPage.verifySchoolCountInAccordion(hdAccordionHeader, hdSchoolCount);
});

Then('the hard deleted school should not be visible in the school accordion list', async function () {
  await districtPage.verifySchoolNotPresentInAccordion(hardDeletedSchool);
});

Then('the number of users count should be updated on My District page after hard deletion of school', async function () {
  await districtPage.verifyUsersCountOnMyDistrict(hdMyDistrictSACount, hdMyDistrictTeacherCount, hdMyDistrictStudentCount);
});

Then('the count on the terms accordion should be updated after hard deletion of school', async function () {
  await districtPage.verifyCountInTermAccordion(hdTermCount);
});

Then("the terms created by the hard deleted schools shouldn't be present", async function () {
  await districtPage.verifyInvisibilityOfTermsCreatedBySchool(hdTermName);
});

When('the hard deleted school should not be visible in the filter options', async function () {
  await schoolListingPage.verifyOptionNotPresentInFilter(hardDeletedSchool);
});

When('user search class from the hard deleted school on class listing page', async function () {
  await classListingPage.searchClassOnClassListingPage(hdClassName);
});

Then('the pagination count should be updated on the SA listing page after school hard deletion', async function () {
  await districtPage.verifyPaginationCount(hdSaPaginationCount);
});

Then('User searches for SA from the hard deleted school on the listing page', async function () {
  await saListingPage.searchSaOnSaListingPage(hdSaName);
});

Then('the hard deleted school should not be visible in the school option of create SA page', async function () {
  await saListingPage.verifySchoolNotPresentInDropdown(hardDeletedSchool);
});

Then('user should be able to create the SA user using the same email and username in another school as a {string}', async function ({}, role) {
  await saListingPage.createSA(stateName2, districtName, schoolName, newSaName, hdSaEmail, newSaUsername, role);
});

Then('the hard deleted school should not be visible on the user profile page', async function () {
  await saListingPage.verifySchoolPresenceOnProfile(hardDeletedSchool, false);
});

Then('the hard deleted school should not be visible in the filter options on Teacher listing page as {string}', async function ({}, role) {
  await teacherListingPage.verifySchoolPresenceInDropdown(stateName1, districtName, hardDeletedSchool, role, false)
});

Then('the pagination count should be updated on the Teacher listing page after hard deletion of school', async function () {
  await districtPage.verifyPaginationCount(hdTeacherPaginationCount);
});

When('user searches for Teacher from the hard deleted school on the listing page', async function () {
  await teacherListingPage.searchTeacherOnTeacherListingPage(hdTeacherName);
});

When('the school column count and the count in school popup should be updated after hard deletion of school', async function () {
  await teacherListingPage.verifyCountInSchoolColumnAndPopup(restoreSchoolCount, schoolName);
});

When('the school column count and the count in school popup should be updated for student user after hard deletion of school', async function () {
  await studentListingPage.verifyCountInSchoolColumnAndPopup(restoreSchoolCount, schoolName);
});

Then('the hard deleted school should not be visible in the school dropdown of create teacher page', async function () {
  await teacherListingPage.verifyAbsenceOfSchoolInOptionPopup(hardDeletedSchool);
});

Then('user should be able to create the Teacher user using the same email and username in another school as a {string}', async function ({}, role) {
  await teacherListingPage.createTeacher(schoolName, newTeacherName, hdTeacherEmail, newTeacherUsername, role, false);
});

Then('the hard deleted school should not be visible in the filter options of Student listing page as {string}', async function ({}, role) {
  await studentListingPage.verifySchoolPresenceInDropdown(stateName1, districtName, hardDeletedSchool, role, false);
});

Then('the pagination count should be updated on the Student listing page after hard deletion of school', async function () {
  await districtPage.verifyPaginationCount(hdStudentPaginationCount);
});

When('user searches for Student from the hard deleted school on the listing page', async function () {
  await studentListingPage.searchStudentOnStudentListingPage(hdStudentName);
});

Then('the class column count and the count in class popup should be updated after hard deletion of school', async function() {
  await studentListingPage.verifyCountInClassColumnAndPopup(hdClassCount, className);
});

Then('the hard deleted school should not be visible in the school dropdown of create student page', async function () {
  await studentListingPage.verifyAbsenceOfSchoolInOptionPopup(hardDeletedSchool);
});

Then('user should be able to create the Student user using the same email and username in another school as a {string}', async function ({}, role) {
  await studentListingPage.createStudent(schoolName, newStudentName, grade, hdStudentEmail, newSudentUsername, role);
});

Then('the hard deleted school should not be visible in the school dropdown of score report pages', async function () {
  await scoreReportPage.verifySchoolNotPresentInDropdown(hardDeletedSchool);
});

Then('the score reports should not display any data for the hard deleted school', async function () {
  await scoreReportPage.verifyDataIsNotPresentOnReportPage(hardDeletedSchool);
});

Then('the score reports should not display any data for the hard deleted archived school', async function () {
  await scoreReportPage.verifyDataIsNotPresentOnReportPage(archivedHardDeletedSchool);
});

Then('the hard deleted archived school should not be visible in the school dropdown of item analysis report page', async function () {
  await itemAnalysisPage.verifySchoolNotPresentInDropdown(hardDeletedSchool);
});

Then(
  'the hard deleted school should not be visible in the school dropdown of item analysis report page',
  async function () {
    await itemAnalysisPage.verifySchoolNotPresentInDropdown(hardDeletedSchool);
  },
);

Then('the item analysis reports should not display attempts from students of the hard deleted school', async function () {
  await itemAnalysisPage.verifyStudentAttemptsCount(restoreStudentAttempt);
});

Then('the hard deleted archived school should not be visible in the school dropdown of score report pages', async function () {
  await scoreReportPage.verifySchoolNotPresentInDropdown(archivedHardDeletedSchool);
});

Then('the item analysis reports should not display attempts from students of the hard deleted archived school', async function () {
  await itemAnalysisPage.verifyStudentAttemptsCount(restoreArchivedStudentAttempt);
});

Then('the hard deleted school should not be present in the school dropdown on gradebook report page', async function () {
  await gradebookReportPage.verifyAbsenceOfSchoolInDropdown(hardDeletedSchool);
});

Then('the hard deleted school should not be visible in the school dropdown of the product usage report page', async function () {
  await productUsageReportPage.verifySchoolNotPresentInDropdown(hardDeletedSchool);
});

When('user search a course which is assigned to the hard deleted school on product usage reports page', async function () {
  await productUsageReportPage.searchCourseOnProductUsageReportPage(singleHardDeleteSchoolCourse);
});

Then('the hard deleted school should not be visible in the filter of license report pages', async function () {
  await licenseReportPage.verifySchoolNotPresentInFilter(hardDeletedSchool);
});

When('user searches for hard deleted school on license report page', async function () {
  await licenseReportPage.searchDataOnLicenseReportPage(hardDeletedSchool);
});

Then('the csv file should be downloaded and should not contain the hard deleted school', async function () {
  await licenseReportPage.verifyExportedReport(hardDeletedSchool, false);
});

Then('the hard deleted school should not be visible in the school dropdown of login report pages', async function () {
  await loginReportPage.verifySchoolNotPresentInDropdown(hardDeletedSchool);
});

When('user search hard deleted school user with name prefix on login report page', async function () {
  await loginReportPage.searchReport(hardDeleteNamePrefix);
});

When('the user enters the username and password of the hard deleted school user as {string}', async function ({testData}, role) {
  const dataSection = Object.keys(testData)[5];
  await lmsLoginPage.fillGivenUsernameAndPassword(role, password, testData, dataSection);
});

When('the user should login and hard deleted school should not be present in school selection popup', async function () {
  await lmsLoginPage.verifyAbsenceOfSchoolInPopup(hardDeletedSchool);
});

Then('hard deleted school should not be visible on the school dropdowns on course cards tab on the Dashboard', async function () {
  await lmsDashboard.clickShowMoreUntilCoursePresent(courseName3);
  await lmsDashboard.verifySchoolNotPresentInDropdownOfCourse(courseName3, hardDeletedSchool);
});

Then('the hard deleted school card should not be visible on the school tab', async function() {
  await lmsDashboard.verifyPresenceOfSchoolCard(hardDeletedSchool, false);
});

Then('the hard deleted school should not be visible on the districts and schools popup on LMS', async function () {
  await lmsCourseCatalog.verifySchoolNotPresentInDistrictAndSchoolPopup(hardDeletedSchool);
});

Then('schools count should be updated on the districts and schools popup after hard deletion of school on LMS', async function () {
  await lmsCourseCatalog.verifyCountOnDistrictAndSchoolPopup(lmsDistrictCount, hardDeleteSchoolCount);
});

Then('schools count should be updated on the districts and schools popup after hard deletion of school for DTA user', async function () {
  await lmsCourseCatalog.verifyCountOnDistrictAndSchoolPopupAsDTA(hardDeleteSchoolCount);
});

When('user search a course which is assigned to the hard deleted school on lms course catalog page', async function () {
  await lmsCourseCatalog.searchCourse(courseName3);
});

When('user search a course which is only assigned to the hard deleted school on course catalog page', async function () {
  await lmsCourseCatalog.searchCourse(singleHardDeleteSchoolCourse);
});

When(
  'user search a course which is assigned to the hard deleted school on course catalog page',
  async function () {
    await lmsCourseCatalog.searchCourse(courseName3);
  },
);

Then(
  'the district and school column count should be updated on cms for the hard deleted district course',
  async function () {
    await cmsCourseCatalog.verifyDistrictAndSchoolCountInColumn(hardDeleteCmsSchoolCount);
  },
);

When('user searches for a license which is assigned to the hard deleted school on license listing page', async function () {
  await licenseListingPage.searchLicenseOnListing(hardDeletedSchool);
});

When('the user searched the hard deleted school on school popup of license listing page', async function() {
  await licenseListingPage.searchSchoolOnPopup(hardDeletedSchool);
});

Then("school admin user of the hard deleted school shouldn't get imported", async function() {
  await importUserPage.importUser(autoBotPrefix, userTypeAsSA, hdSchoolID);
  await importUserPage.verifyImportFailed(error);
});

Then("teacher user of the hard deleted school shouldn't get imported", async function() {
  await importUserPage.importUser(autoBotPrefix, userTypeAsTeacher, hdSchoolID);
  await importUserPage.verifyImportFailed(error);
});

Then("student user of the hard deleted school shouldn't get imported", async function() {
  await importUserPage.importUser(autoBotPrefix, userTypeAsStudent, hdSchoolID);
  await importUserPage.verifyImportFailed(error);
});