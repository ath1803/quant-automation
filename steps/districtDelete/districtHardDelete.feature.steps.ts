import { createBddCustom } from "../common/createBddCustom";
import { DistrictPage } from "../../pages/deleteDistrict/districtSoftDelete.page";
import { HardDeleteDistrictPage } from "../../pages/deleteDistrict/districtHardDelete.page";
import { SamlOrganizationPage } from "../../pages/rosteringPages/samlOrganization.page";
import { SchoolListingPage } from "../../pages/listingPages/schoolListing.page";
import { ClassListingPage } from "../../pages/listingPages/classListing.page";
import { StudentListingPage } from "../../pages/listingPages/studentListing.page";
import { l10n } from "../../zeus-playwright/quantum-common/utils/uiLocalizedStrings";
import { ScoreReportPage } from "../../pages/reportPages/scoreReport.page";
import { ItemAnalysisPage } from "../../pages/reportPages/itemAnalysis.page";
import { ProductUsageReportPage } from "../../pages/reportPages/productUsageReport.page";
import { LicenseReportPage } from "../../pages/reportPages/licenseReport.page";
import { LMSDashboard } from "../../pages/dashboard/lmsDashboard.page";
import { LoginReportPage } from "../../pages/reportPages/loginReport.page";
import { LMSLoginPage } from "../../pages/manualLogin/lmsLogin.page";
import { LMSCourseCatalog } from "../../pages/courseCatalog/lmsCourseCatalog.page";
import { CMSCourseCatalog } from "../../pages/courseCatalog/cmsCourseCatalog.page";
import { LicenseListingPage } from "../../pages/adminPages/licenseListing.page";
import { ImportUserPage } from "../../pages/adminPages/importUser.page";
import { DTAListingPage } from "../../pages/listingPages/DTAListing.page";
import { SAListingPage } from "../../pages/listingPages/SAListing.page";
import { TeacherListingPage } from "../../pages/listingPages/TeacherListing.page";

const { Given, When, Then, Before } = createBddCustom();
let districtName: string;
let stateName1: string;
let stateName2: string;
let schoolPaginationCount: number;
let dtaPaginationCount: number;
let saPaginationCount: number;
let teacherPaginationCount: number;
let studentPaginationCount: number;
let courseQuiz: string;
let metaDataUrl: string;
let ddCourse21Name: string;
let ddCourse13Name: string;
let otherDistrictName: string;
let newDtaName: string;
let dtaEmail: string;
let dtaUsername: string;
let schoolName: string;
let newSaName: string;
let saEmail: string;
let saUsername: string;
let allDistricts: string;
let street: string;
let city: string;
let zipcode: string;
let className: string;
let restoredSchoolName: string;
let dtaName: string;
let saName: string;
let teacherName: string;
let studentName: string;
let staticDistrictForSaml: string;
let samlStateName: string;
let samlOrgPaginationCount: string;
let hardDeletedSamlDistrictName: string;
let userTypeAsDTA: string;
let userTypeAsSA: string;
let cmsDistrictCount: string;
let cmsSchoolCount: string;
let courseFamily: string;
let assignee: string;
let lmsSchoolCount: number;
let lmsDistrictCount: number;
let studentAttempt: string;
let archivedCourseName: string;
let archivedCqName: string;
let archivedDistrict: string;
let archivedStudentAttempt: string;
let namePrefix: string;
let districtUserName: string;
let districtUserMail: string;
let districtUserNumber: string;
let timezone: string;
let softDeleteDistrictPage: DistrictPage;
let districtPage: HardDeleteDistrictPage;
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

Before({ tags: "@districtHardDelete" }, async ({ page, testData }) => {
  softDeleteDistrictPage = new DistrictPage(page);
  districtPage = new HardDeleteDistrictPage(page);
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
  districtName = testData.hardDelete.districtName;
  className = testData.hardDelete.districtName;
  dtaName = testData.hardDelete.districtName;
  saName = testData.hardDelete.districtName;
  teacherName = testData.hardDelete.districtName;
  studentName = testData.hardDelete.districtName;
  namePrefix = testData.hardDelete.districtName;
  stateName1 = testData.hardDelete.stateName1;
  stateName2 = testData.hardDelete.stateName2;
  schoolPaginationCount = Number(testData.paginationCount.schoolPaginationCount);
  dtaPaginationCount = Number(testData.paginationCount.dtaPaginationCount);
  saPaginationCount = Number(testData.paginationCount.saPaginationCount);
  teacherPaginationCount = testData.paginationCount.teacherPaginationCount;
  studentPaginationCount = Number(testData.paginationCount.studentPaginationCount);
  ddCourse21Name = testData.hardDelete.ddCourse21Name;
  ddCourse13Name = testData.hardDelete.ddCourse13Name;
  otherDistrictName = testData.hardDelete.otherDistrictName;
  newDtaName = testData.hardDelete.newDtaName;
  dtaEmail = testData.hardDelete.dtaEmail;
  dtaUsername = testData.hardDelete.dtaUserName;
  schoolName = testData.hardDelete.schoolName;
  restoredSchoolName = testData.hardDelete.restoredSchoolName;
  newSaName = testData.hardDelete.newSaName;
  saEmail = testData.hardDelete.saEmail;
  saUsername = testData.hardDelete.saUsername;
  allDistricts = testData.hardDelete.allDistricts;
  metaDataUrl = testData.hardDelete.metaDataUrl;
  courseQuiz = testData.hardDelete.courseQuiz;
  street = testData.hardDelete.street;
  city = testData.hardDelete.city;
  zipcode = testData.hardDelete.zipcode;
  districtUserName = testData.hardDelete.districtUserName;
  districtUserMail = testData.hardDelete.districtUserMail;
  districtUserNumber = testData.hardDelete.districtUserNumber;
  timezone = testData.hardDelete.timezone;
  samlStateName = testData.hardDelete.samlStateName;
  staticDistrictForSaml = testData.hardDelete.staticDistrictForSaml;
  samlOrgPaginationCount = testData.hardDelete.samlOrgPaginationCount;
  hardDeletedSamlDistrictName = testData.hardDelete.hardDeletedSamlDistrictName;
  userTypeAsDTA = testData.hardDelete.userTypeAsDTA;
  userTypeAsSA = testData.hardDelete.userTypeAsSA;
  cmsDistrictCount = testData.hardDelete.cmsDistrictCount;
  cmsSchoolCount = testData.hardDelete.cmsSchoolCount;
  courseFamily = testData.hardDelete.courseFamily;
  assignee = testData.hardDelete.assignee;
  lmsSchoolCount = Number(testData.hardDelete.lmsSchoolCount);
  lmsDistrictCount = Number(testData.hardDelete.lmsDistrictCount);
  studentAttempt = testData.hardDelete.studentAttempt;
  archivedCourseName = testData.hardDelete.archivedCourseName;
  archivedCqName = testData.hardDelete.archivedCqName;
  archivedStudentAttempt = testData.hardDelete.archivedStudentAttempt;
  archivedDistrict = testData.hardDelete.archivedDistrict;
});

// Scenario 1: Check the state of hard deleted district
Then("run cron for hard deletion", async function ({page}) {
  districtPage = new HardDeleteDistrictPage(page);
  await districtPage.resumeOrTriggerDelete();
});

// Scenario 2: Verify hard deleted district is not visible on district listing page
When("the user searches for the hard-deleted district", async function () {
  await softDeleteDistrictPage.searchDistrictOnDistrictListingPage(
    districtName
  );
});

When(
  "the {string} status message should be displayed",
  async function ({ page }, districtNotFound: string) {
    await districtPage.verifyNoDistrictFound(
      l10n(districtNotFound, "LMS")
    );
  }
);

// Scenario 3: Verify data is not available on school listing page and school can't be created after district hard deletion
Then(
  "the hard deleted district should not be visible in the filter options",
  async function () {
    await softDeleteDistrictPage.verifyOptionNotPresentInFilter(districtName);
  }
);

When(
  "user applies Louisiana state filter on user listing page",
  async function () {
    await schoolListingPage.applyStateFilter(stateName1);
  }
);

Then(
  "the updated pagination count should be displayed on the school listing page",
  async function () {
    await softDeleteDistrictPage.verifyPaginationCount(schoolPaginationCount);
  }
);

When(
  "user search school from the hard deleted district on school listing page",
  async function () {
    await schoolListingPage.searchSchoolOnSchoolListingPage(schoolName);
  }
);

Then(
  "{string} should be displayed on school listing page",
  async function ({page}, noSchoolFoundMessage: string) {
    schoolListingPage = new SchoolListingPage(page);
    await schoolListingPage.verifySchoolNotPresentInListing(
      l10n(noSchoolFoundMessage, "LMS")
    );
  }
);

When(
  "user click on create new school button and selects Louisiana state",
  async function () {
    await schoolListingPage.createNewSchoolAndSelectState(stateName2);
  }
);

Then(
  "the hard deleted district should not be visible in the district dropdown of create school page",
  async function () {
    await schoolListingPage.verifyDistrictNotPresentInDropdown(districtName);
  }
);

// Scenario 4: Verify data is not available on class listing page after district hard deletion
When(
  "user search class from the hard deleted district on class listing page",
  async function () {
    await classListingPage.searchClassOnClassListingPage(className);
  }
);

// Scenario 5: Verify data is not available on DTA listing page and DTA can't be created after district hard deletion
Then(
  "the updated pagination count should be displayed on the DTA listing page",
  async function () {
    await softDeleteDistrictPage.verifyPaginationCount(dtaPaginationCount);
  }
);

When(
  "User searches for DTA from the hard deleted district on the listing page",
  async function () {
    await dtaListingPage.searchDtaOnDtaListingPage(dtaName);
  }
);

// Scenario 6: Verify DTA can be created using the email id and username of a Hard deleted district DTA
Then(
  "user clicks on the create new DTA button and selects the state",
  async function () {
    await dtaListingPage.createNewDtaAndSelectState(stateName2);
  }
);

Then(
  "user checks the availability of hard deleted district in dropdown",
  async function () {
    await dtaListingPage.verifyDistrictNotPresentInDropdown(districtName);
  }
);

Then(
  "user should be able to create the DTA user using the same email and username in another district as a {string}",
  async function ({}, role) {
    await dtaListingPage.createDta(
      otherDistrictName,
      newDtaName,
      dtaEmail,
      dtaUsername,
      role
    );
  }
);

// Scenario 7: Verify data is not available on SA listing page and SA can't be created after district hard deletion
Then(
  "the updated pagination count should be displayed on the SA listing page",
  async function () {
    await softDeleteDistrictPage.verifyPaginationCount(saPaginationCount);
  }
);

When(
  "User searches for SA from the hard deleted district on the listing page",
  async function () {
    await saListingPage.searchSaOnSaListingPage(saName);
  }
);

// Scenario 8: Verify SA can be created using the email id and username of a Hard deleted district SA
When(
  "user clicks on the create new SA button and selects the state as {string}",
  async function ({}, role) {
    await saListingPage.createNewSAAndSelectState(stateName2, otherDistrictName, role);
  }
);

Then(
  "user checks the availability of hard deleted district in district dropdown",
  async function () {
    await saListingPage.verifyDistrictNotPresentInDropdown(districtName);
  }
);

When(
  "user clicks on the back button",
  async function ({page}) {
    saListingPage = new SAListingPage(page);
    await saListingPage.clickOnBackButton();
  }
);

Then(
  "user should be able to create the SA user using the same email and username in another district as a {string}",
  async function ({}, role) {
    await saListingPage.createSA(
      stateName2,
      otherDistrictName,
      restoredSchoolName,
      newSaName,
      saEmail,
      saUsername,
      role
    );
  }
);

// Scenario 9: Verify data is not available on Teacher listing pages after district hard deletion
Then(
  "the hard deleted district should not be visible in the filter options of Teacher listing",
  async function () {
    await teacherListingPage.verifyDistrictNotPresentInDropdown(
      stateName1,
      districtName
    );
  }
);

When(
  "user applies All district filter on Teacher listing page",
  async function () {
    await teacherListingPage.applyDistrictFilter(allDistricts);
  }
);

Then(
  "the updated pagination count should be displayed on the Teacher listing page",
  async function () {
    await softDeleteDistrictPage.verifyPaginationCount(teacherPaginationCount);
  }
);

When(
  "user searches for Teacher from the hard deleted district on the listing page",
  async function () {
    await teacherListingPage.searchTeacherOnTeacherListingPage(teacherName);
  }
);

// Scenario 10: Verify data is not available on Student listing pages after district hard deletion
Then(
  "the hard deleted district should not be visible in the filter options of Student listing",
  async function () {
    await studentListingPage.verifyDistrictNotPresentInDropdown(
      stateName1,
      districtName
    );
  }
);

When(
  "user applies All district filter on Student listing page",
  async function () {
    await studentListingPage.applyStateFilter(allDistricts);
  }
);

Then(
  "the updated pagination count should be displayed on the Student listing page",
  async function () {
    await softDeleteDistrictPage.verifyPaginationCount(studentPaginationCount);
  }
);

When(
  "user searches for Student from the hard deleted district on the listing page",
  async function () {
    await studentListingPage.searchStudentOnStudentListingPage(studentName);
  }
);

// Scenario 11: Verify score reports page do not show hard deleted district data
When(
  "user has selected the course from hard deleted district on score report page",
  async function () {
    await scoreReportPage.selectCourseOnScoreReportPage(ddCourse13Name);
  }
);

Then(
  "the hard deleted district should not be visible in the district dropdown of score report pages",
  async function () {
    await scoreReportPage.verifyDistrictNotPresentInDropdown(districtName);
  }
);

Then(
  "the score reports should not display any data for the hard deleted district",
  async function () {
    await scoreReportPage.verifyDataIsNotPresentOnReportPage(districtName);
  }
);

When('user has selected the course from hard deleted archived district on score report page', async function ({ testData }) {
  await scoreReportPage.selectCourseOnScoreReportPage(archivedCourseName);
});

Then(
  'the hard deleted archived district should not be visible in the district dropdown of score report pages',
  async function () {
    await scoreReportPage.verifyDistrictNotPresentInDropdown(archivedDistrict);
  },
);

Then(
  'the score reports should not display any data for the hard deleted archived district',
  async function () {
    await scoreReportPage.verifyDataIsNotPresentOnReportPage(archivedDistrict);
  },
);

// Scenario 12:Verify item analysis reports page do not show hard deleted district data
When(
  "user has selected the course and course quiz from hard deleted district on item analysis report page",
  async function () {
    await itemAnalysisPage.selectCourseAndCourseQuizOnItemAnalysisReportPage(
      ddCourse13Name,
      courseQuiz
    );
  }
);

Then(
  "the hard deleted district should not be visible in the district dropdown of item analysis report page",
  async function () {
    await itemAnalysisPage.verifyDistrictNotPresentInDropdown(districtName);
  }
);

Then(
  "the item analysis reports should not display attempts from students of the hard deleted district",
  async function () {
    await itemAnalysisPage.verifyStudentAttemptsCount(studentAttempt);
  }
);

When(
  'user has selected the course and course quiz from hard deleted archived district on item analysis report page',
  async function () {
    await itemAnalysisPage.selectCourseAndCourseQuizOnItemAnalysisReportPage(
      archivedCourseName,
      archivedCqName,
    );
  },
);

Then(
  'the hard deleted archived district should not be visible in the district dropdown of item analysis report page',
  async function () {
    await itemAnalysisPage.verifyDistrictNotPresentInDropdown(archivedDistrict);
  },
);

Then(
  'the item analysis reports should not display attempts from students of the hard deleted archived district',
  async function () {
    await itemAnalysisPage.verifyStudentAttemptsCount(archivedStudentAttempt);
  },
);

// Scenario 13: Verify product usage reports page do not show hard deleted district data
When('user selects the end users on product usage report page', async function () {
  await productUsageReportPage.selectEndUserOnProductUsageReportPage(assignee);
});

Then(
  "the hard deleted district should not be visible in the district dropdown of product usage report page",
  async function () {
    await productUsageReportPage.verifyDistrictNotPresentInDropdown(
      districtName
    );
  }
);

When(
  "user search a course which is only assigned to the hard deleted district on product usage reports page",
  async function () {
    await productUsageReportPage.searchCourseOnProductUsageReportPage(
      ddCourse21Name
    );
  }
);

// Scenario 14: Verify license reports page do not show hard deleted district data
When('user selects the course family and assignee on license report page', async function () {
  await licenseReportPage.selectCourseFamilyAndAssignee(courseFamily, assignee);
});

Then(
  "the hard deleted district should not be visible in the filter of license report pages",
  async function () {
    await licenseReportPage.verifyDistrictNotPresentInFilter(districtName);
  }
);

When(
  "user search hard deleted district on license report page",
  async function () {
    await licenseReportPage.searchDistrictOnLicenseReportPage(districtName);
  }
);

// Scenario 15: Verify login reports page do not show hard deleted district data
Then(
  "the hard deleted district should not be visible in the district dropdown of login report pages",
  async function () {
    await loginReportPage.verifyDistrictNotPresentInDropdown(districtName);
  }
);

When(
  "user search hard deleted district user with name prefix on login report page",
  async function () {
    await loginReportPage.searchReport(namePrefix);
  }
);

// Scenario 16: Verify hard deleted district user should not be able to login
When('user selects the state from state dropdown', async function () {
  await lmsLoginPage.selectStateFromStateDropdown(stateName1);
});

Then(
  "the hard deleted district should not be visible in the district dropdown of login with Quantum page",
  async function () {
    await lmsLoginPage.verifyDistrictNotPresentInDropdown(districtName);
  }
);

// Scenario 17: Verify dashboard updates after hard deleting a district
Then(
  "hard deleted district should not be visible on the district dropdowns on course cards tab on the Dashboard",
  async function () {
    await lmsDashboard.clickShowMoreUntilCoursePresent(ddCourse13Name);
    await lmsDashboard.verifyDistrictNotPresentInDropdownOfCourse(
      ddCourse13Name,
      districtName
    );
  }
);

Then(
  "course which are only assigned to the hard deleted district should be present on unallocated tab",
  async function () {
    await lmsDashboard.verifyCoursePresentInUnallocatedTab(ddCourse21Name);
  }
);

Then(
  "the hard deleted district should not be visible on the district dropdowns on schools tab",
  async function () {
    await lmsDashboard.verifyDistrictNotPresentInDropdownOfSchoolTab(
      districtName
    );
  }
);

// Scenario 18: Verify course-related information updates on LMS after hard deleting a district
When(
  "user search a course which is assigned to the hard deleted district on course catalog page",
  async function () {
    await lmsCourseCatalog.searchCourse(ddCourse13Name);
  }
);

Then(
  "the hard deleted district should not be visible on the districts and schools popup on LMS",
  async function () {
    await lmsCourseCatalog.verifyDistrictNotPresentInDistrictAndSchoolPopup(
      districtName
    );
  }
);

Then(
  'districts and schools count should be updated on the districts and schools popup for the hard deleted district course',
  async function () {
    await lmsCourseCatalog.verifyCountOnDistrictAndSchoolPopup(lmsDistrictCount, lmsSchoolCount);
  },
);

// Scenario 19: Verify course-related information updates on CMS after hard deleting a district
Then(
  "the hard deleted district should not be visible on the districts and schools popup on CMS",
  async function () {
    await cmsCourseCatalog.verifyDistrictNotPresentInDistrictAndSchoolPopup(
      districtName,
      stateName1
    );
  }
);

Then(
  'districts and schools count should be updated on districts and schools popup for the hard deleted district course on CMS',
  async function () {
    await cmsCourseCatalog.verifyCountOnDistrictAndSchoolPopup(cmsDistrictCount, cmsSchoolCount);
  },
);

// Scenario 20: Verify delete action should be enabled for course assigned to a hard deleted district on CMS
When(
  "user search a course which is only assigned to the hard deleted district on course catalog page",
  async function () {
    await lmsCourseCatalog.searchCourse(ddCourse21Name);
  }
);

Then(
  "the hard deleted districts course should be deleted and {string} should be displayed",
  async function ({page}, noCourseFound: string) {
    cmsCourseCatalog = new CMSCourseCatalog(page);
    softDeleteDistrictPage = new DistrictPage(page);
    await cmsCourseCatalog.clickOnThePositiveButton();
    await softDeleteDistrictPage.enterCorrectPassphrase();
    await softDeleteDistrictPage.clickOnDialogboxVerifyButton();
    await cmsCourseCatalog.clickOnTheYesButtonOnPopup();
    await cmsCourseCatalog.clickOntheOkButtonOnPopup();
    await cmsCourseCatalog.verifyNoCourseFoundMessage(
      l10n(noCourseFound, "CMS")
    );
  }
);

// Scenario 21: Verify license related information updates on LMS after hard deleting a district
When(
  "user searches for a license which is assigned to the hard deleted district on license listing page",
  async function () {
    await licenseListingPage.searchLicenseOnListing(districtName);
  }
);

When(
  "the user has searched the hard deleted district on district dropdown of license listing page",
  async function () {
    await licenseListingPage.searchDistrictOnDistrictDropdown(districtName);
  }
);

// Scenario 22: Verify no user can be imported in the hard deleted district
When('user has selected user type as District Technical Admin on import users page', async function () {
  await importUserPage.selectUserTypeOnImportUserPage(userTypeAsDTA);
});

When('user has selected user type as School Admin on import users page', async function () {
  await importUserPage.selectUserTypeOnImportUserPage(userTypeAsSA);
});

When('user has selected state on import users page', async function () {
  await importUserPage.selectStateOnImportUserPage(stateName1);
});

Then(
  "hard deleted district should not be visible on the district dropdowns of import users page",
  async function () {
    await importUserPage.verifyDistrictNotPresentOnDistrictDropdown(
      districtName
    );
  }
);

// Scenario 23: Verify SAML hard deleted district is not available on saml for organization page
When(
  "user searches a hard deleted saml district on district listing page",
  async function () {
    await softDeleteDistrictPage.searchDistrictOnDistrictListingPage(
      hardDeletedSamlDistrictName
    );
  }
);

Then(
  "the hard deleted district shouldn't be visible on saml organization listing page and {string} should be displayed",
  async function ({ page }, noResultFound: string) {
    await samlOrganizationPage.verifyAbsenceOfSamlOrganization(
      hardDeletedSamlDistrictName,
      l10n(noResultFound, 'LMS'),
    );
  },
);

When('user searches for a hard deleted district on Select district card', async function () {
  await samlOrganizationPage.searchDistrictOnSamlConfigPage(districtName);
});

When('user searches for a static district to configure saml on select district popup', async function () {
  await samlOrganizationPage.searchDistrictOnSamlConfigPage(staticDistrictForSaml);
  await samlOrganizationPage.clickOnDoneButton();
});

Then(
  '{string} message should be displayed along with the updated pagination count',
  async function ({ page }, noDistrictMsg: string) {
    await samlOrganizationPage.verifyNoDistrictAfterSearch(
      l10n(noDistrictMsg, 'LMS'),
      samlOrgPaginationCount,
    );
  },
);

When(
  "user enters the issuer url used in another hard deleted saml district",
  async function () {
    await samlOrganizationPage.enterMetadataUrlAndLoad(metaDataUrl);
  }
);

Then('{string} success subtext should be displayed', async function ({ page }, uniqueUrl: string) {
  await samlOrganizationPage.verifyUrlIsAvailableMessage(l10n(uniqueUrl, 'LMS'));
});

// Scenario 24: Verify hard deleted saml district user should not be able to login
When('user select the state from dropdown on SAML login page', async function () {
  await lmsLoginPage.selectStateOnSamlLoginPage(samlStateName);
});

// Scenario 25: Verify new district can be created with the same name as the hard deleted district
Then(
  "user clicks on the create new district button and selects the state and district as Other",
  async function () {
    await softDeleteDistrictPage.createNewDistrictAndSelectStateAndDistrict(
      stateName2
    );
  }
);

When(
  "the user enters the hard deleted district name for the new district name",
  async function () {
    await softDeleteDistrictPage.enterDistrictName(districtName);
  }
);

Then(
  "the {string} success subtext should be visible",
  async function ({}, successMessage: string) {
    await districtPage.verifySuccessSubtext(l10n(successMessage, "LMS"));
  }
);

Then(
  "the new district with hard deleted district name should be created successfully",
  async function () {
    await districtPage.createDistrict(
      street,
      city,
      zipcode,
      districtUserName,
      districtUserMail,
      districtUserNumber,
      timezone
    );
  }
);
