import { createBddCustom } from '../common/createBddCustom';
import { RestoreDistrict } from '../../pages/deleteDistrict/restoreDistrict.page';
import { SamlOrganizationPage } from '../../pages/rosteringPages/samlOrganization.page';
import { AssignmentListingPage } from '../../pages/listingPages/assignmentListing.page';
import { StudentAttemptPage } from '../../pages/attempt/studentAttempt.page';
import { SchoolListingPage } from '../../pages/listingPages/schoolListing.page';
import { ClassListingPage } from '../../pages/listingPages/classListing.page';
import { DTAListingPage } from '../../pages/listingPages/DTAListing.page';
import { SAListingPage } from '../../pages/listingPages/SAListing.page';
import { TeacherListingPage } from '../../pages/listingPages/TeacherListing.page';
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
import { OneloginPage } from '../../pages/rosteringPages/onelogin.page';
import { GradeSubmissionPage } from '../../pages/reportPages/gradeSubmission.page';
import { GradebookReportPage } from '../../pages/reportPages/gradebookReport.page';
import { DistrictPage } from '../../pages/deleteDistrict/districtSoftDelete.page';

const { Given, When, Then, Before } = createBddCustom();
let districtName: string;
let allDistricts: string;
let stateName: string;
let schoolName: string;
let dtaName: string;
let newDtaName: string;
let newDtaEmail: string;
let newSaUsername: string;
let newSaName: string;
let newSaEmail: string;
let newDtaUsername: string;
let saName: string;
let className: string;
let schoolType: string;
let lowestGrade: string;
let highestGrade: string;
let stateName2: string;
let schoolPaginationCount: string;
let classPaginationCount: string;
let dtaPaginationCount: string;
let teacherPaginationCount: string;
let studentPaginationCount: string;
let assignee: string;
let courseName20: string;
let courseName10: string;
let courseQuiz: string;
let courseFamily: string;
let teacherName: string;
let conecticutStateName: string;
let studentName: string;
let password: string;
let lmsDistrictCount: number;
let cmsDistrictCount: string;
let lmsSchoolCount: number;
let cmsSchoolCount: string;
let samlDistrictName: string;
let restoredDistrictSamlConfiguration: string;
let samlDtaUsername: string;
let samlDtaPassword: string;
let idAttribute: string;
let matchIdValue: string;
let errorUrl: string;
let metadataUrl: string;
let logoutType: string;
let x509CertifValue: string;
let signatureAlgo: string;
let newDtaClassName: string;
let newDtaTeacherName: string;
let newDtaGroupName: string;
let dtaTeacherEmail: string;
let dtaTeacherUsername: string;
let rteSleep: number;
let grade: string;
let newSaTeacherName: string;
let newSaStudentName: string;
let saStudentEmail: string;
let saSudentUsername: string;
let newSaClassName: string;
let newSaGroupName: string;
let newTeacherClassName: string;
let newTeacherGroupName: string;
let dtaAssignmentName: string;
let saAssignmentName: string;
let samlStateName: string;
let teacherAssignmentName: string;
let newSchoolName: string;
let schoolID: string;
let dtaFirstName: string;
let saFirstName: string;
let restorationProgressHeader: string;
let essayAcAnswer: string;
let initialDtaCount: string;
let archivedSchoolName: string;
let archivedTeacherName: string;
let archivedClassName: string;
let initialSchoolCount: string;
let teacherCourseName: string;
let teacherAssgCourseName: string;
let teacherCqName: string;
let districtNameWithState: string;
let teacherFirstName: string;
let userTypeAsSA: string;
let userTypeAsDTA: string;
let userTypeDTAFull: string;
let userTypeSAFull: string;
let autoBotPrefix: string;
let districtListingSource: string;
let studentAttempt: string;
let districtStudentAttempt: string;
let archivedDistrict: string;
let archivedCourseName: string;
let archivedCqName: string;
let archivedStudentAttempt: string;
let archivedDistrictStudentAttempt: string;
let districtPage: RestoreDistrict;
let navigateFromDashboard: NavigateFromDashboard;
let schoolListingPage: SchoolListingPage;
let gradebookReportPage: GradebookReportPage;
let assignmentListingPage: AssignmentListingPage;
let studentAttemptPage: StudentAttemptPage;
let studentFirstName: string;
let classListingPage: ClassListingPage;
let dtaListingPage: DTAListingPage;
let saListingPage: SAListingPage;
let teacherListingPage: TeacherListingPage;
let studentListingPage: StudentListingPage;
let scoreReportPage: ScoreReportPage;
let itemAnalysisPage: ItemAnalysisPage;
let oneloginPage: OneloginPage;
let samlOrganizationPage: SamlOrganizationPage;
let gradeSubmissionPage: GradeSubmissionPage;
let productUsageReportPage: ProductUsageReportPage;
let licenseReportPage: LicenseReportPage;
let loginReportPage: LoginReportPage;
let lmsLoginPage: LMSLoginPage;
let lmsDashboard: LMSDashboard;
let lmsCourseCatalog: LMSCourseCatalog;
let cmsCourseCatalog: CMSCourseCatalog;
let licenseListingPage: LicenseListingPage;
let importUserPage: ImportUserPage;

Before({ tags: '@districtRestore' }, async ({ page, testData }) => {
  districtPage = new RestoreDistrict(page);
  navigateFromDashboard = new NavigateFromDashboard(page);
  schoolListingPage = new SchoolListingPage(page);
  classListingPage = new ClassListingPage(page);
  gradebookReportPage = new GradebookReportPage(page);
  dtaListingPage = new DTAListingPage(page);
  gradeSubmissionPage = new GradeSubmissionPage(page);
  saListingPage = new SAListingPage(page);
  oneloginPage = new OneloginPage(page);
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
  assignmentListingPage = new AssignmentListingPage(page);
  studentAttemptPage = new StudentAttemptPage(page);
  samlOrganizationPage = new SamlOrganizationPage(page);
  districtName = testData.RestoreData.districtName;
  schoolName = testData.RestoreData.schoolName;
  dtaName = testData.RestoreData.dtaName;
  dtaFirstName = testData.RestoreData.dtaFirstName;
  saFirstName = testData.RestoreData.saFirstName;
  newDtaName = testData.RestoreData.newDtaName;
  saName = testData.RestoreData.saName;
  newSaName = testData.RestoreData.newSaName;
  newDtaEmail = testData.RestoreData.newDtaEmail;
  newDtaUsername = testData.RestoreData.newDtaUsername;
  newSaEmail = testData.RestoreData.newSaEmail;
  newSaUsername = testData.RestoreData.newSaUsername;
  teacherName = testData.RestoreData.teacherName;
  teacherFirstName = testData.RestoreData.teacherFirstName;
  studentFirstName = testData.RestoreData.studentFirstName;
  restorationProgressHeader = testData.RestoreData.restorationProgressHeader;
  studentName = testData.RestoreData.studentName;
  newDtaClassName = testData.RestoreData.newDtaClassName;
  newDtaTeacherName = testData.RestoreData.newDtaTeacherName;
  newDtaGroupName = testData.RestoreData.newDtaGroupName;
  dtaTeacherEmail = testData.RestoreData.dtaTeacherEmail;
  districtNameWithState = testData.RestoreData.districtNameWithState;
  dtaTeacherUsername = testData.RestoreData.dtaTeacherUsername;
  samlStateName = testData.RestoreData.samlStateName;
  grade = testData.RestoreData.grade;
  allDistricts = testData.RestoreData.allDistricts;
  newSaTeacherName = testData.RestoreData.newSaTeacherName;
  newSaStudentName = testData.RestoreData.newSaStudentName;
  saStudentEmail = testData.RestoreData.saStudentEmail;
  saSudentUsername = testData.RestoreData.saStudentEmail;
  newSaClassName = testData.RestoreData.newSaClassName;
  newSaGroupName = testData.RestoreData.newSaGroupName;
  newTeacherClassName = testData.RestoreData.newTeacherClassName;
  newTeacherGroupName = testData.RestoreData.newTeacherGroupName;
  dtaAssignmentName = testData.RestoreData.dtaAssignmentName;
  saAssignmentName = testData.RestoreData.saAssignmentName;
  teacherAssignmentName = testData.RestoreData.teacherAssignmentName;
  essayAcAnswer = testData.RestoreData.essayAcAnswer;
  teacherCourseName = testData.RestoreData.teacherCourseName;
  teacherAssgCourseName = testData.RestoreData.teacherAssgCourseName;
  teacherCqName = testData.RestoreData.teacherCqName;
  password = testData.RestoreData.password;
  className = testData.RestoreData.className;
  samlDistrictName = testData.RestoreData.samlDistrictName;
  restoredDistrictSamlConfiguration = testData.RestoreData.restoredDistrictSamlConfiguration;
  samlDtaUsername = testData.RestoreData.samlDtaUsername;
  samlDtaPassword = testData.RestoreData.password;
  idAttribute = testData.RestoreData.idAttribute;
  matchIdValue = testData.RestoreData.matchIdValue;
  errorUrl = testData.RestoreData.errorUrl;
  metadataUrl = testData.RestoreData.metadataUrl;
  logoutType = testData.RestoreData.logoutType;
  x509CertifValue = testData.RestoreData.x509CertifValue;
  signatureAlgo = testData.RestoreData.signatureAlgo;
  initialDtaCount = testData.RestoreData.initialDtaCount;
  initialSchoolCount = testData.RestoreData.initialSchoolCount;
  newSchoolName = testData.RestoreData.newSchoolName;
  schoolType = testData.RestoreData.schoolType;
  lowestGrade = testData.RestoreData.lowestGrade;
  highestGrade = testData.RestoreData.highestGrade;
  stateName = testData.RestoreData.stateName1;
  stateName2 = testData.RestoreData.stateName2;
  schoolPaginationCount = testData.paginationCount.listingPageCount2;
  classPaginationCount = testData.paginationCount.listingPageCount2;
  dtaPaginationCount = testData.paginationCount.listingPageCount2;
  teacherPaginationCount = testData.paginationCount.teacherPaginationCount;
  studentPaginationCount = testData.paginationCount.studentPaginationCount;
  assignee = testData.RestoreData.assignee;
  courseName20 = testData.RestoreData.courseName20;
  courseName10 = testData.RestoreData.courseName10;
  courseQuiz = testData.RestoreData.courseQuiz;
  courseFamily = testData.RestoreData.courseFamily;
  lmsDistrictCount = Number(testData.RestoreData.lmsDistrictCount);
  cmsDistrictCount = testData.RestoreData.cmsDistrictCount;
  lmsSchoolCount = Number(testData.RestoreData.lmsSchoolCount);
  cmsSchoolCount = testData.RestoreData.cmsSchoolCount;
  userTypeAsDTA = testData.RestoreData.userTypeAsDTA;
  userTypeAsSA = testData.RestoreData.userTypeAsSA;
  userTypeDTAFull = testData.RestoreData.userTypeDTAFull;
  userTypeSAFull = testData.RestoreData.userTypeSAFull;
  autoBotPrefix = testData.RestoreData.autoBotPrefix;
  districtListingSource = testData.RestoreData.districtListingSource;
  rteSleep = Number(testData.RestoreData.rteSleep);
  schoolID = testData.RestoreData.schoolID;
  archivedStudentAttempt = testData.ArchiveData.archivedStudentAttempt
  archivedDistrictStudentAttempt = testData.ArchiveData.archivedDistrictStudentAttempt;
  studentAttempt = testData.RestoreData.studentAttempt;
  districtStudentAttempt = testData.RestoreData.districtStudentAttempt;
  archivedDistrict = testData.ArchiveData.archivedDistrict;
  conecticutStateName = testData.ArchiveData.stateName;
  archivedCourseName = testData.ArchiveData.archivedCourseName;
  archivedCqName = testData.ArchiveData.teacherCqName;
  archivedSchoolName = testData.ArchiveData.schoolName;
  archivedTeacherName = testData.ArchiveData.teacherFirstName;
  archivedClassName = testData.ArchiveData.className;
});

// Scenario 1: Check the state of restore button and restore a soft deleted district
When('the user search a soft deleted district on district listing page', async function () {
  await districtPage.searchDistrictOnDistrictListingPage(districtName);
});

When('the user search a soft deleted archived district on district listing page', async function () {
  await districtPage.searchDistrictOnDistrictListingPage(archivedDistrict);
});

Then('restore button should be displayed instead of delete button', async function ({page}) {
  districtPage = new RestoreDistrict(page);
  await districtPage.verifyRestoreButtonIsVisible();
});

Then('the restore button should be in enabled state', async function ({page}) {
  districtPage = new RestoreDistrict(page);
  await districtPage.verifyRestoreButtonIsEnabled();
});

When('user clicks on the restore button', async function ({page}) {
  districtPage = new RestoreDistrict(page);
  await districtPage.clickOnDistrictRestoreButton();
});

Then('a restore district popup should appear', async function () {
  await districtPage.verifyPresenceOfRestorePopup();
});

When("the user clicks on 'NO' button on restoration popup", async function () {
  await districtPage.clickOnRestorePopupNoButton();
});

Then('the restoration popup should close', async function () {
  await districtPage.verifyAbsenceOfRestorePopup();
});

When("the user clicks on 'YES' button on restoration popup", async function ({page}) {
  districtPage = new RestoreDistrict(page);
  await districtPage.clickOnRestorePopupYesButton();
});

Then('Restoration in Progress popup should appear', async function ({page}) {
  await districtPage.verifyPresenceOfRestorationInProgressPopup(restorationProgressHeader);
});

When('user clicks on the OK button on the Restoration in progress popup', async function ({page}) {
  districtPage = new RestoreDistrict(page);
  await districtPage.clickOnRestorationProgressOKButton();
});

// Scenario 2: Verify data is updated on the district listing page after restoring a soft deleted district
When('the user search the restored district on district listing page', async function () {
  await districtPage.searchDistrictOnDistrictListingPage(districtName);
});

Then(
  'the Add and Edit action buttons should be enabled on district listing page',
  async function () {
    await districtPage.verifyAddUserButtonIsEnabled();
  },
);

Then(
  'the data in the Source and State columns should be retained after restoring a district',
  async function () {
    await districtPage.verifyDataInSourceAndStateColumn(districtListingSource, stateName);
  },
);

Then(
  'the DTA and school count should be visible on district listing page for the restored district',
  async function () {
    await districtPage.verifyDataInDTAsAndSchoolsColumn(initialDtaCount, initialSchoolCount);
  },
);

Then(
  'delete action button should be visible instead of the restore action button on the district listing page',
  async function () {
    await districtPage.verifyDeleteButtonIsEnabled();
  },
);

Then('the district name link text should be displayed in a clickable state', async function () {
  await districtPage.verifyDistrictNameIsClickable();
});

Then(
  'the action for the course family popup should be enabled on district listing page',
  async function () {
    await districtPage.verifyCourseFamilyIsClickable();
  },
);

//Scenario 3: Verify data is available on school listing page and school can be created after restoration of a Soft deleted district
Then('the restored district should be available in filter district section', async function () {
  await districtPage.verifyDistrictPresentInFilter(districtName);
});

When(
  'user searches school from the soft deleted district which has been restored on school listing page',
  async function () {
    await schoolListingPage.searchSchoolOnSchoolListingPage(schoolName);
  },
);

Then('the school from restored district should be available', async function () {
  await schoolListingPage.verifyVisibilityOfSchoolOnSchoolListingPage(schoolName);
});

When('user applies Louisiana state filter on listing page', async function () {
  await schoolListingPage.applyStateFilter(stateName);
});

Then(
  'the pagination count should be updated on the school listing page after restoring the district',
  async function () {
    await districtPage.verifyPaginationCount(schoolPaginationCount);
  },
);

When(
  'user click on create new school button and selected the state on school creation page',
  async function () {
    await schoolListingPage.createNewSchoolAndSelectState(stateName2);
  },
);

Then(
  'user should be able to create a school in restored district as {string}',
  async function ({}, role) {
    await schoolListingPage.createSchool(
      districtName,
      schoolType,
      newSchoolName,
      lowestGrade,
      highestGrade,
      role,
    );
  },
);

// Scenario 4: Verify data is available on class listing page
When(
  'user searches class from the soft deleted district which has been restored on class listing page',
  async function () {
    await classListingPage.searchClassOnClassListingPage(className);
  },
);

Then('the class from restored district should be available', async function () {
  await classListingPage.verifyVisibilityOfClassOnClassListingPage(className);
});

Then(
  'the pagination count should be updated on the class listing page after restoration of district',
  async function () {
    await districtPage.verifyPaginationCount(classPaginationCount);
  },
);

// Scenario 5: Verify data is available on DTA listing page and DTA user can be created
When(
  'user searches DTA from the soft deleted district which has been restored on DTA listing page',
  async function () {
    await dtaListingPage.searchDtaOnDtaListingPage(dtaName);
  },
);

Then('the DTA user from restored district should be available', async function () {
  await dtaListingPage.verifyVisibilityOfUserOnListingPage(dtaFirstName);
});

Then(
  'the pagination count should be updated on the DTA listing page after restoration of district',
  async function () {
    await districtPage.verifyPaginationCount(dtaPaginationCount);
  },
);

When(
  'user click on create new DTA button and selected the state of the restored district',
  async function () {
    await dtaListingPage.createNewDtaAndSelectState(stateName2);
  },
);

Then(
  'user should be able to create a DTA in restored district as a {string}',
  async function ({}, role) {
    await dtaListingPage.createDta(districtName, newDtaName, newDtaEmail, newDtaUsername, role);
  },
);

// Scenario 6: Verify data is available on SA listing page and SA user can be created
When(
  'user searches SA from the soft deleted district which has been restored on SA listing page',
  async function () {
    await saListingPage.searchSaOnSaListingPage(saName);
  },
);

Then('the SA user from restored district should be available', async function () {
  await dtaListingPage.verifyVisibilityOfUserOnListingPage(saFirstName);
});

Then(
  'the pagination count should be updated on the SA listing page after restoration of district',
  async function () {
    await districtPage.verifyPaginationCount(dtaPaginationCount);
  },
);

Then(
  'user should be able to create a SA in restored district as a {string}',
  async function ({ }, role) {
    await saListingPage.createSA(
      stateName2,
      districtName,
      schoolName,
      newSaName,
      newSaEmail,
      newSaUsername,
      role,
    );
  },
);

// Scenario 7: Verify data is available on teacher listing page
Then('user selects Louisiana from the state dropdown on Teacher listing page', async function () {
  await teacherListingPage.selectStateOnTeacherListing(stateName);
});

Then(
  'user selects the restored district from the district dropdown on Teacher listing page',
  async function () {
    await teacherListingPage.selectDistrictOnTeacherListing(districtName);
  },
);

Then(
  'user checks the availability of school from restored district in school dropdown',
  async function () {
    await teacherListingPage.verifySchoolIsPresentInDropdown(schoolName);
  },
);

When('user clicks on the apply button on Teacher listing page', async function () {
  await teacherListingPage.clickOnApplyFilterButton();
});

Then(
  'the pagination count should be updated on Teacher listing page after restoration',
  async function () {
    await districtPage.verifyPaginationCount(teacherPaginationCount);
  },
);

When('user searches Teacher from the restored district on Teacher listing page', async function () {
  await teacherListingPage.searchTeacherOnTeacherListingPage(teacherName);
});

Then(
  'the teacher from the restored district should be available on the listing page',
  async function () {
    await teacherListingPage.verifyNameOfTeacher(teacherFirstName);
  },
);

When('user clicks on the displayed teacher name on Teacher listing page', async function () {
  await teacherListingPage.clickOnTeacherName();
});

Then('{string} header should be displayed', async function ({ }, userHeader: string) {
  await teacherListingPage.verifyTeacherDetailsPage(l10n(userHeader, 'LMS'));
});

// Scenario 8: Verify data is available on student listing page
Then('user selects Louisiana from the state dropdown on Student listing page', async function () {
  await studentListingPage.selectStateOnStudentListing(stateName);
});

Then(
  'user selects the restored district from the district dropdown on Student listing page',
  async function () {
    await studentListingPage.selectDistrictOnStudentListing(districtName);
  },
);

When('user clicks on the apply button on Student listing page', async function () {
  await teacherListingPage.clickOnApplyFilterButton();
});

Then(
  'the pagination count should be updated on Student listing page after restoration',
  async function () {
    await districtPage.verifyPaginationCount(studentPaginationCount);
  },
);

When('user searches student from the district restored on Student listing page', async function () {
  await studentListingPage.searchStudentOnStudentListingPage(studentName);
});

Then(
  'the student from the restored district should be available on the listing page',
  async function () {
    await studentListingPage.verifyNameOfStudent(studentFirstName);
  },
);

When('user clicks on the displayed student name on Student listing page', async function () {
  await studentListingPage.clickOnStudentName();
});

// Scenario 9: Verify the restored district data is present on Score report page
When('user has selected the restored district course on score report page', async function () {
  await scoreReportPage.selectCourseOnScoreReportPage(courseName20);
});

Then(
  'the restored district should be visible in the district dropdown of score report page',
  async function () {
    await scoreReportPage.verifyDistrictInDropdownAndSelectADistrict(districtName, allDistricts);
  },
);

Then('the score reports should be displayed for the restored district as {string}', async function ({testData}, role) {
  const dataSection = Object.keys(testData)[1];
  await scoreReportPage.verifyDataIsPresentOnReportPage(districtName, role, testData, dataSection);
});

When('user has selected the restored archived district course on score report page', async function () {
  await scoreReportPage.selectCourseOnScoreReportPage(archivedCourseName);
});

When('the user clicks on the learning object tab on student reports page', async function () {
  await scoreReportPage.clickOnLearningObjectTab();
});

Then(
  'the restored archived district should be visible in the district dropdown of score report page',
  async function () {
    await scoreReportPage.verifyDistrictInDropdownAndSelectADistrict(archivedDistrict, allDistricts);
  },
);

Then('the score reports should be displayed for the restored archived district as {string}', async function ({testData}, role) {
  const dataSection = Object.keys(testData)[2];
  await scoreReportPage.verifyDataIsPresentOnReportPage(archivedDistrict, role, testData, dataSection);
});

// Scenario 10: Verify the restored district data is present on Item Analysis report page
When(
  'user has selected the restored district course and course quiz on item analysis report page',
  async function () {
    await itemAnalysisPage.selectCourseAndCourseQuizOnItemAnalysisReportPage(
      courseName20,
      courseQuiz,
    );
  },
);

When(
  'user has selected the restored archived district course and course quiz on item analysis report page',
  async function () {
    await itemAnalysisPage.selectCourseAndCourseQuizOnItemAnalysisReportPage(
      archivedCourseName,
      archivedCqName,
    );
  },
);

Then(
  'the restored district should be visible in the district dropdown of item analysis report page',
  async function () {
    await itemAnalysisPage.verifyDistrictInDropdownAndSelectADistrict(
      districtName,
      allDistricts,
    );
  },
);

Then(
  'the restored archived district should be visible in the district dropdown of item analysis report page',
  async function () {
    await itemAnalysisPage.verifyDistrictInDropdownAndSelectADistrict(
      archivedDistrict,
      allDistricts,
    );
  },
);

Then('the item analysis reports should display data of the restored district', async function () {
  await itemAnalysisPage.verifyStudentAttemptsCount(studentAttempt);
});

Then('the item analysis reports should display the restored district data', async function () {
  await itemAnalysisPage.verifyStudentAttemptsCount(districtStudentAttempt);
});

Then('the item analysis reports should display data of the restored archived district', async function () {
  await itemAnalysisPage.verifyStudentAttemptsCount(archivedStudentAttempt);
});

Then('the item analysis reports should display the restored archived district data', async function () {
  await itemAnalysisPage.verifyStudentAttemptsCount(archivedDistrictStudentAttempt);
});

// Scenario 29: Verify the restored district data is present on Product usage report page
Given(
  'user has selected end users on product usage report page for the restored district',
  async function () {
    await productUsageReportPage.selectEndUserOnProductUsageReportPage(assignee);
  },
);

Then(
  'the restored district should be available in the district dropdown of product usage report page',
  async function () {
    await productUsageReportPage.verifyDistrictInDropdownAndSelectADistrict(
      districtName,
      allDistricts,
    );
  },
);

When(
  'user search a course which is only assigned to the restored district on product usage reports page',
  async function () {
    await productUsageReportPage.searchCourseOnProductUsageReportPage(teacherCourseName);
  },
);

Then('the course should be displayed on product usage report page', async function () {
  await productUsageReportPage.verifyCoursePresentOnProductReportPage(teacherCourseName);
});

// Scenario 11: Verify the restored district data is present on the License reports page
When(
  'user has selected course family and district assignee on license report page',
  async function () {
    await licenseReportPage.selectCourseFamilyAndAssignee(courseFamily, assignee);
  },
);

When('user searches for a restored district license on license report page', async function () {
  await licenseReportPage.searchDistrictOnLicenseReportPage(districtName);
});

Then('the license should be present on the license report page', async function () {
  await licenseReportPage.verifyDistrictPresentOnLicenseReportList(districtName);
});

When('the user clicks on the export button', async function ({page}) {
  licenseReportPage = new LicenseReportPage(page)
  await licenseReportPage.clickOnExportButton();
});

Then(
  'the csv file should be downloaded and should contain the restored district',
  async function () {
    await licenseReportPage.verifyExportedReport(districtName, true);
  },
);

// Scenario 12: Verify restored district users are able to login
When(
  'user select the state from state dropdown and restored district from district dropdown',
  async function () {
    await lmsLoginPage.fillRequiredDetails(stateName, districtName);
  },
);

Then(
  'the user enters the username and password of the restored district {string} user',
  async function ({ testData }, role) {
    const dataSection = Object.keys(testData)[1];
    await lmsLoginPage.fillGivenUsernameAndPassword(role, password, testData, dataSection);
  },
);

When('the user clicks on the login button on LMS login page', async function ({page}) {
  lmsLoginPage = new LMSLoginPage(page);
  await lmsLoginPage.clickLoginButton();
});

Then('the user should be logged in and LMS dashboard page should be visible', async function ({page}) {
  lmsDashboard = new LMSDashboard(page);
  await lmsDashboard.verifyDashboardPageisLoaded();
});

// Scenario 13: Verify the restored district data is present on the Login reports page
Then(
  'the restored district should be present in the district dropdown of login report pages as {string}',
  async function ({page}, role) {
    await loginReportPage.verifyDistrictInDropdownAndClick(districtName, role);
  },
);

When(
  'user searches for a restored district DTA user with name prefix on login report page',
  async function () {
    await loginReportPage.searchReport(dtaFirstName);
  },
);

Then(
  'the restored district DTA user should be displayed with updated page count',
  async function () {
    await loginReportPage.verifyUserLoginDataIsPresent(dtaFirstName);
  },
);

When(
  'user searches for a restored district SA user with name prefix on login report page',
  async function () {
    await loginReportPage.searchReport(saFirstName);
  },
);

Then(
  'the restored district SA user should be displayed with updated page count',
  async function () {
    await loginReportPage.verifyUserLoginDataIsPresent(saFirstName);
  },
);

When(
  'user searches for a restored district teacher user with name prefix on login report page',
  async function () {
    await loginReportPage.searchReport(teacherFirstName);
  },
);

Then(
  'the restored district teacher user should be displayed with updated page count',
  async function () {
    await loginReportPage.verifyUserLoginDataIsPresent(teacherFirstName);
  },
);

When(
  'user searches for a restored district student user with name prefix on login report page',
  async function () {
    await loginReportPage.searchReport(studentFirstName);
  },
);

Then(
  'the restored district student user should be displayed with updated page count',
  async function () {
    await loginReportPage.verifyUserLoginDataIsPresent(studentFirstName);
  },
);

// Scenario 14: verify dashboard updates after restoration of a district
Then(
  'the restored district should be visible on the district dropdowns on course cards tab on the Dashboard',
  async function () {
    await lmsDashboard.clickShowMoreUntilCoursePresent(courseName20);
    await lmsDashboard.verifyDistrictPresentInDropdownOfCourse(courseName20, districtName);
  },
);

Then(
  'courses which are assigned to the restored district should not be present on unallocated tab',
  async function () {
    await lmsDashboard.verifyCourseIsNotPresentInUnallocatedTab(courseName20);
  },
);

Then(
  'the restored district should be visible on the district dropdowns on schools tab',
  async function () {
    await lmsDashboard.verifyDistrictPresentInDropdownOfSchoolTab(districtName);
  },
);

// Scenario 15: Verify course-related infomation updates on LMS after restoring a district
When(
  'user search a course which is assigned to the restored district on course catalog page',
  async function () {
    await lmsCourseCatalog.searchCourse(courseName10);
  },
);

Then(
  'the restored district should be visible on the districts and schools popup on LMS',
  async function () {
    await lmsCourseCatalog.verifyDistrictIsPresentInDistrictAndSchoolPopup(districtNameWithState);
  },
);

Then(
  'districts and schools count should be updated for the restored district course on the districts and schools popup on LMS',
  async function () {
    await lmsCourseCatalog.verifyCountOnDistrictAndSchoolPopup(lmsDistrictCount, lmsSchoolCount);
  },
);

// Scenario 16: Verify course-related information updates on the CMS course catalog page
Then(
  'the restored district should be visible on the districts and schools popup on CMS',
  async function () {
    await cmsCourseCatalog.verifyDistrictPresentInDistrictAndSchoolPopup(districtName, stateName);
  },
);

Then(
  'districts and schools count should be updated for the restored district course on the districts and schools popup on CMS',
  async function () {
    await cmsCourseCatalog.verifyCountOnDistrictAndSchoolPopup(cmsDistrictCount, cmsSchoolCount);
  },
);

// Scenario 17: Verify license-related information updates on LMS after restoring a district
When(
  'user searches for a license which is assigned to a restored district on license listing page',
  async function () {
    await licenseListingPage.searchLicenseOnListing(districtName);
  },
);

Then('the license from the restored district should be displayed', async function () {
  await licenseListingPage.verifyDistrictOfTheLicenseDisplayed(districtName);
});

When(
  'the user searches for the restored district on district dropdown of license listing page',
  async function () {
    await licenseListingPage.searchDistrictOnDistrictDropdown(districtName);
  },
);

Then(
  'the restored district should be visible on district dropdown of license listing page',
  async function () {
    await licenseListingPage.verifyOrgNameInSelectPopup();
  },
);

// Scenario 18: Verify user can be imported after restoring a district
When(
  'user selected user type as District Technical Admin of restored district on import users page',
  async function () {
    await importUserPage.selectUserTypeOnImportUserPage(userTypeDTAFull);
  },
);

When(
  'user selected user type as School Admin of restored district on import users page',
  async function () {
    await importUserPage.selectUserTypeOnImportUserPage(userTypeSAFull);
  },
);

When('user selected Louisiana state on import users page', async function () {
  await importUserPage.selectStateOnImportUserPage(stateName);
});

Then(
  'restored district should be present in the district dropdown of import users page',
  async function () {
    await importUserPage.verifyDistrictPresentOnDistrictDropdown(districtName);
  },
);

Then('user imports a District technical Admin in the restored district', async function () {
  await importUserPage.importUser(autoBotPrefix, userTypeAsDTA, schoolID);
  await importUserPage.clickOnConfirmButton();
});

Then('user imports a School Admin in the restored district', async function () {
  await importUserPage.importUser(autoBotPrefix, userTypeAsSA, schoolID);
  await importUserPage.clickOnConfirmButton();
});

// Scenario 19: Verify restored SAML district is visible on saml for organization page
When('user searches a soft deleted saml district on district listing page', async function () {
  await districtPage.searchDistrictOnDistrictListingPage(samlDistrictName);
});

Then(
  'the restored district should be visible on saml organization listing page',
  async function () {
    await samlOrganizationPage.verifyPresenceOfSamlOrganization(samlDistrictName);
  },
);

When(
  'user searches a soft deleted static district to configure saml organization on district listing page',
  async function () {
    await districtPage.searchDistrictOnDistrictListingPage(restoredDistrictSamlConfiguration);
  },
);

When('user searches for a restored static district on select district popup', async function () {
  await samlOrganizationPage.searchDistrictOnSamlConfigPage(restoredDistrictSamlConfiguration);
  await samlOrganizationPage.clickOnDoneButton();
});

When('user enters the required data to configure saml district', async function () {
  await samlOrganizationPage.fillSamlOrganizationMetadata(
    idAttribute,
    matchIdValue,
    errorUrl,
    metadataUrl,
    logoutType,
    x509CertifValue,
    signatureAlgo,
  );
});

Then('user should be able to create a new saml district', async function () {
  await samlOrganizationPage.verifySamlOrganizationCreation();
});

// Scenario 20: Verify restored SAML district user should be able to login using SAML
When('user selects Alabama from state dropdown on SAML login page', async function () {
  await lmsLoginPage.selectStateOnSamlLoginPage(samlStateName);
});

When(
  'user selects the restored saml district from the district dropdown on SAML login page',
  async function () {
    await lmsLoginPage.selectDistrictFromDropdownOnSamlLogin(samlDistrictName);
  },
);

Then('user clicks on the Log in with SAML button', async function () {
  await lmsLoginPage.clickOnLoginWithSamlButton();
});

When('user enters the saml DTA username on onelogin page', async function () {
  await oneloginPage.enterUsernameAndClickOnContinueButton(samlDtaUsername);
});

Then('user enters the password for the saml DTA user on onelogin page', async function () {
  await oneloginPage.enterPasswordAndClickOnContinueButton(samlDtaPassword);
});

//Scenario 21-22-23: Verify restored district user can create users and organizations
When('user click on create new school button', async function () {
  await schoolListingPage.clickOnCreateNewSchoolButton();
});

When('user click on create new class button and selected the school as {string}', async function ({ }, role) {
  await classListingPage.clickOnCreateNewClassButtonAndSelectSchool(newSchoolName, role);
});

Then('user enters all the metadata on class creation page as DTA', async function () {
  await classListingPage.createClassAsDTA(newDtaClassName, newDtaTeacherName);
});

Then(
  'user should save the class and verify the {string} message on popup',
  async function ({page}, messagePopup: string) {
    classListingPage = new ClassListingPage(page);
    await classListingPage.clickOnSaveClassButton(l10n(messagePopup, 'LMS'));
  },
);

When('user searches for the newly created class on class listing page as DTA', async function () {
  await classListingPage.searchClassOnClassListingPage(newDtaClassName);
});

Then('clicks on the add button to create group in the class', async function ({page}) {
  classListingPage = new ClassListingPage(page);
  await classListingPage.clickOnAddButtonForClass();
});

When('user enters the group name for the newly created class as DTA', async function () {
  await classListingPage.enterGroupName(newDtaGroupName);
});

Then(
  'user verifies the {string} message and clicks on the save button',
  async function ({page}, successMessage: string) {
    classListingPage = new ClassListingPage(page);
    await classListingPage.clickOnSaveGroup(l10n(successMessage, 'LMS'));
  },
);

Then(
  'user should be able to create a Teacher user as a restored district {string} user',
  async function ({}, role) {
    await teacherListingPage.createTeacher(
      newSchoolName,
      newDtaTeacherName,
      dtaTeacherEmail,
      dtaTeacherUsername,
      role,
      true
    );
  },
);

Then('user enters all the metadata on class creation page as SA user', async function () {
  await classListingPage.createClassAsSa(newSaClassName, newSaTeacherName);
});

When('user searches for the newly created class on class listing page as SA', async function () {
  await classListingPage.searchClassOnClassListingPage(newSaClassName);
});

When('user enters the group name for the newly created class as SA', async function () {
  await classListingPage.enterGroupName(newSaGroupName);
});

Then(
  'user should be able to create a Student user as a restored district {string} user',
  async function ({}, role) {
    await studentListingPage.createStudent(
      schoolName,
      newSaStudentName,
      grade,
      saStudentEmail,
      saSudentUsername,
      role,
    );
  },
);

Then('user enters all the metadata on class creation page as Teacher user', async function () {
  await classListingPage.createClassAsTeacher(newTeacherClassName);
});

When(
  'user searches for the newly created class on class listing page as Teacher',
  async function () {
    await classListingPage.searchClassOnClassListingPage(newTeacherClassName);
  },
);

When('user enters the group name for the newly created class as Teacher', async function () {
  await classListingPage.enterGroupName(newTeacherGroupName);
});

// Scenario 24-25-26: Verify a user can assign course to a class and create assignment
Then('user clicks on the displayed class on class listing page', async function ({page}) {
  classListingPage = new ClassListingPage(page);
  await classListingPage.clickOnClassNameInListing();
});

When('user clicks on allocate course on class details page', async function ({page}) {
  classListingPage = new ClassListingPage(page);
  await classListingPage.clickOnAllocateCourseButton();
});

Then('user searches for the static course on course selection page', async function () {
  await classListingPage.searchCourseOnAllocateCoursePage(teacherCourseName);
});

Then(
  'user searches for the static course for assignment creation on course selection page',
  async function () {
    await classListingPage.searchCourseOnAllocateCoursePage(teacherAssgCourseName);
  },
);

When(
  'user clicks on the displayed course radio button on Allocate course page and moves to stepper2',
  async function ({page}) {
    classListingPage = new ClassListingPage(page);
    await classListingPage.clickOnCourseRadioButton();
  },
);

Then('user clicks on the allocate course button on stepper2', async function ({page}) {
  classListingPage = new ClassListingPage(page);
  await classListingPage.clickOnAllocateCourseAfterSelectingCourse();
});

When('the {string} user is on the Assignment listing page', async function ({page}, role) {
  navigateFromDashboard = new NavigateFromDashboard(page);
  await navigateFromDashboard.navigateToAssignmentListingPage(role);
});

Then('user clicks on create new assignment', async function ({page}) {
  assignmentListingPage = new AssignmentListingPage(page);
  await assignmentListingPage.clickOnCreateNewAssignmentButton();
});

When('user clicks on select content on stepper1 of assignment creation page', async function ({page}) {
  assignmentListingPage = new AssignmentListingPage(page);
  await assignmentListingPage.clickOnSelectContentButton();
});

Then('user clicks on the assigned course on the select content popup', async function ({page}) {
  assignmentListingPage = new AssignmentListingPage(page);
  await assignmentListingPage.clickOnCourseNameOnSelectioPopup();
});

When('user clicks on select all checkbox with content as graded', async function ({page}) {
  assignmentListingPage = new AssignmentListingPage(page);
  await assignmentListingPage.clickOnSelectAllCheckbox();
});

Then('user clicks on the Done button on select content popup', async function ({page}) {
  assignmentListingPage = new AssignmentListingPage(page);
  await assignmentListingPage.clickOnDoneButton();
});

Then(
  'user enters the name for the newly created assignment and moves to stepper2 as DTA',
  async function () {
    await assignmentListingPage.enterAssignmentName(dtaAssignmentName);
    await assignmentListingPage.clickOnNextButton();
  },
);

When(
  'user selects the school from school dropdown with class radio button selected as {string}',
  async function ({}, role) {
    await assignmentListingPage.selectSchoolInSchoolDropdownOnCreation(newSchoolName, role);
  },
);

When('the user clicks on the Go button on stepper2 of assignment creation', async function ({page}) {
  assignmentListingPage = new AssignmentListingPage(page);
  await assignmentListingPage.clickOnGoButton();
});

Then(
  'user should check the class checkbox for which the assignment should be assigned as {string}',
  async function ({}, role) {
    await assignmentListingPage.clickOnClassNameCheckbox(newDtaClassName, newSaClassName, className, role);
  },
);

Then(
  'user should check the restored district class checkbox for which the assignment should be assigned as {string}',
  async function ({}, role) {
    await assignmentListingPage.clickOnClassNameCheckbox(newDtaClassName, newSaClassName, className, role);
  },
);

When('user clicks on the Assign button on stepper2 of assignment creation', async function ({page}) {
  assignmentListingPage = new AssignmentListingPage(page);
  await assignmentListingPage.clickOnAssignButtonOnStepper2();
});

Then(
  'user clicks on the positive button on the confirmation popup and OK button on the success popup',
  async function ({page}) {
    assignmentListingPage = new AssignmentListingPage(page);
    await assignmentListingPage.clickOnPositiveButtonOnPopup();
    await assignmentListingPage.clickOnOkayButton();
  },
);

Then('user should unassign the assigned course from the displayed class', async function () {
  await classListingPage.unAssignCourse(teacherCourseName);
});

Then(
  'user enters the name for the newly created assignment and moves to stepper2 as SA',
  async function () {
    await assignmentListingPage.enterAssignmentName(saAssignmentName);
    await assignmentListingPage.clickOnNextButton();
  },
);

Then(
  'user enters the name for the newly created assignment and moves to stepper2 as Teacher',
  async function () {
    await assignmentListingPage.enterAssignmentName(teacherAssignmentName);
    await assignmentListingPage.clickOnNextButton();
  },
);

//Scenario 27: Verify a restored district student user can attempt courses and assignments
When('user is on the courses tab on dashboard page', async function ({page}) {
  lmsDashboard = new LMSDashboard(page);
  await lmsDashboard.clickOnStudentCoursesTab();
});

Then('the user clicks on the open button for the assigned course', async function () {
  await lmsDashboard.clickOnOpenButtonForACourse(teacherCourseName);
});

When('user launches and clicks on the start attempt button', async function ({page}) {
  studentAttemptPage = new StudentAttemptPage(page);
  await studentAttemptPage.launchCqAndStartAttempt();
});

Then('user attempts the single select question of the auto-coded cq and selects option {string}', async function ({page}, answersString) {
  studentAttemptPage = new StudentAttemptPage(page);
  const singleSelectAns = answersString.split(',')[0];
  await studentAttemptPage.attemptSsq(singleSelectAns);
});

Then('user attempts the multiselect question of the auto-coded cq with options {string}', async function ({page}, answersString) {
  studentAttemptPage = new StudentAttemptPage(page);
  const answer = answersString.split(',');
  await studentAttemptPage.attemptMsqWith2Answers(answer[0], answer[1]);
});

Then('user attempts the fill in the blanks question of the auto-coded cq with inputs {string} and answers {string}', async function ({page}, answersString, fibAnswers) {
  studentAttemptPage = new StudentAttemptPage(page);
  const fibOption = answersString.split(',');
  const textAnswers = fibAnswers.split(',');
  await studentAttemptPage.attemptFibWithAnswers({
    [fibOption[0]]: textAnswers[0],
    [fibOption[1]]: textAnswers[1],
  });
});

Then('user attempts the response matrix question of the auto-coded cq with selections {string}', async function ({page}, answersString) {
  studentAttemptPage = new StudentAttemptPage(page);
  const answer = answersString.split(',');
  await studentAttemptPage.attemptResponseMatrixQuestion(answer[1], answer[2]);
});

Then('user attempts the dropdown question of the auto-coded cq with choice {string} and answers {string}', async function ({page}, answersString, ddAnswers) {
  studentAttemptPage = new StudentAttemptPage(page);
  const ddOption = answersString.split(',');
  const ddAnswer = ddAnswers.split(',');
  await studentAttemptPage.attemptDropdownQuestions({
    [ddOption[0]]: ddAnswer[0],
    [ddOption[1]]: ddAnswer[1],
  });
});

Then('user attempts the classify question of the auto-coded cq with categories {string}', async function ({page}, classifyAns) {
  studentAttemptPage = new StudentAttemptPage(page);
  const classifyOption = classifyAns.split(',');
  const tokenOption = classifyAns.split(',');
  await studentAttemptPage.attemptClassifyQuestion({
    [classifyOption[0]]: tokenOption[1],
    [classifyOption[1]]: tokenOption[1],
    [classifyOption[2]]: tokenOption[1],
    [classifyOption[3]]: tokenOption[0],
  });
});

Then('the user attempts the drag and drop question of the auto-coded cq with arrangement {string}', async function ({page}, dndAnswer) {
  studentAttemptPage = new StudentAttemptPage(page);
  const dndOption = dndAnswer.split(',');
  const tokenOption = dndAnswer.split(',');
  await studentAttemptPage.attemptDNDQuestion({
    [dndOption[0]]: tokenOption[0],
    [dndOption[1]]: tokenOption[1],
  });
});

Then('the user attempts the essay question of the cq', async function () {
  await studentAttemptPage.attemptEssayQuestion(essayAcAnswer, rteSleep);
});

Then('the user clicks on the submit button and positive button popup', async function ({page}) {
  studentAttemptPage = new StudentAttemptPage(page);
  await studentAttemptPage.clickOnSubmitButton();
});

When('user is on the assignments tab on dashboard page', async function ({page}) {
  lmsDashboard = new LMSDashboard(page);
  await lmsDashboard.clickOnStudentDashboardButton();
  await lmsDashboard.clickOnStudentAssignmentsTab();
});

Then('the user clicks on the open button for the assignment', async function () {
  await lmsDashboard.clickOnOpenButtonForAnAssignment(teacherAssignmentName);
});

// Scenario 28: Verify a restored district user is able to evaluate student attempts
When('User is on Grade submission page', async function ({page}) {
  navigateFromDashboard = new NavigateFromDashboard(page);
  await navigateFromDashboard.navigateToGradeSubmissionPage();
});

Then('user selects the class from class dropdown on grade submission page', async function () {
  await gradeSubmissionPage.selectClassFromClassDropdown(className);
});

Then('selects the course from the course dropdown on grade submission page', async function () {
  await gradeSubmissionPage.selectCourseFromCourseDropdown(teacherCourseName);
});

When('selects the course quiz from the cq dropdown on grade submission page', async function () {
  await gradeSubmissionPage.selectCqFromCourseQuizDropdown(teacherCqName);
});

Then('user clicks on the go button on grade submission page', async function ({page}) {
  gradeSubmissionPage = new GradeSubmissionPage(page);
  await gradeSubmissionPage.clickOnGoButton();
});

When('user clicks on the grade evaluation button', async function ({page}) {
  gradeSubmissionPage = new GradeSubmissionPage(page);
  await gradeSubmissionPage.clickOnGradeEvalButton();
});

Then('user evaluates the teacher graded question and submits the evaluation', async function ({page}) {
  gradeSubmissionPage = new GradeSubmissionPage(page);
  await gradeSubmissionPage.evaluateAndSubmit();
});

// Scenario 30: Verify restored district, school and class data is present on Score report page
When('the user selects restored district course from dropdown on score report page', async function () {
  await scoreReportPage.selectCourseOnScoreReportPage(teacherCourseName);
});

Then('the score reports should be displayed for the restored district school and class as {string}', async function ({testData}, role) {
  const dataSection = Object.keys(testData)[1];
  await scoreReportPage.verifyDataIsPresentOnReportPage(districtName, role, testData, dataSection);
});

Then('the user logs out of the app', async function ({page}) {
  lmsLoginPage = new LMSLoginPage(page);
  await lmsLoginPage.logout();
});

When(
  'user select the state from state dropdown and restored archived district from district dropdown',
  async function () {
    await lmsLoginPage.fillRequiredDetails(conecticutStateName, archivedDistrict);
  },
);

Then(
  'the user enters the username and password of the restored archived district {string} user',
  async function ({ testData }, role) {
    const dataSection = Object.keys(testData)[2];
    await lmsLoginPage.fillGivenUsernameAndPassword(role, password, testData, dataSection);
  },
);

When('the user selects restored archived district course on score report page', async function () {
  await scoreReportPage.selectCourseOnScoreReportPage(archivedCourseName);
});

Then('the score reports should be displayed for the restored archived district school and class as {string}', async function ({testData}, role) {
  const dataSection = Object.keys(testData)[2];
  await scoreReportPage.verifyDataIsPresentOnReportPage(districtName, role, testData, dataSection);
});

//Scenario 32: Verify restored district school and class data is present on Gradebook report page
When('the user is on the Gradebook report page', async function ({ page }) {
  navigateFromDashboard = new NavigateFromDashboard(page);
  await navigateFromDashboard.navigateToGradebookReportPage();
});

Then('user has selected the school, teacher, and class from dropdown on gradebook report page as {string}', async function ({}, role) {
  await gradebookReportPage.selectUserFromDropdown(role, schoolName, teacherFirstName, className);
});

When('user clicks on go button on gradebook report page', async function ({page}) {
  gradebookReportPage = new GradebookReportPage(page);
  await gradebookReportPage.clickOnGoButton();
});

Then('the gradebook reports should be displayed for the restored district school and class', async function () {
  await gradebookReportPage.dataOnReportPage(teacherCourseName);
});

Then('user has selected the school, teacher, and class from archived district on gradebook report page as {string}', async function ({}, role) {
  await gradebookReportPage.selectUserFromDropdown(role, archivedSchoolName, archivedTeacherName, archivedClassName);
});

Then('the gradebook reports should be displayed for the restored archived district school and class', async function () {
  await gradebookReportPage.dataOnReportPage(archivedCourseName);
});

//Scenario 34: Verify the restored district data is present on Item analysis report page
When('the user selects restored district course and course quiz on item analysis report page', async function () {
  await itemAnalysisPage.selectCourseAndCourseQuizOnItemAnalysisReportPage(teacherCourseName, teacherCqName);
});

