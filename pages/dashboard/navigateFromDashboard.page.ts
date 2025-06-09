import { ElementHandle, expect, Page } from '@playwright/test';
import { waitForPreloaderToHide } from '../../zeus-playwright/quantum-common/utils/waitForPreloader';
import { CommonConstants } from '../../zeus-playwright/quantum-common/utils/commonConstants';

export class NavigateFromDashboard {
  private readonly page: Page;

  // Constants for Locators
  private readonly USER_TAB_SELECTOR = "button[aria-label='users']";
  private readonly ORGANIZATIONS_TAB_SELECTOR = "button[aria-label='Organizations']";
  private readonly USERS_TAB_DISTRICTS_SELECTOR = "button[aria-label='Districts']";
  private readonly USERS_TAB_SCHOOL_SELECTOR = "button[aria-label='Schools']";
  private readonly USERS_TAB_CLASS_SELECTOR = "button[aria-label='Classes']";
  private readonly USERS_TAB_USER_ROLE_SELECTOR = "//span[normalize-space()='User Roles']";
  private readonly USERS_TAB_DTA_SELECTOR = "//button[@aria-label='District Technical Admins']";
  private readonly USERS_TAB_SA_SELECTOR = "button[aria-label='School Admins']";
  private readonly USERS_TAB_TEACHER_SELECTOR = "button[aria-label='Teachers']";
  private readonly USERS_TAB_STUDENT_SELECTOR = "button[aria-label='Students']";
  private readonly REPORTS_TAB_SELECTOR =
    "(//button[@aria-label='reports'])[1]";
  private readonly REPORTS_TAB_PRODUCT_USAGE_REPORT_SELECTOR =
    "button[aria-label='Product Usage Report']";
  private readonly REPORTS_TAB_SCORE_SELECTOR = "button[aria-label='Score']";
  private readonly REPORTS_TAB_LICENSE_SELECTOR = "button[aria-label='License Report']";
  private readonly REPORTS_TAB_LOGIN_SELECTOR = "button[aria-label='Login Report']";
  private readonly REPORTS_TAB_GRADE_SUBMISSION_SELECTOR = "button[aria-label='Grade Submission']";
  private readonly REPORTS_TAB_EXIT_CARD_SELECTOR = "button[aria-label='Exit Cards Report']";
  private readonly REPORTS_TAB_ITEM_ANALYSIS_SELECTOR = "button[aria-label='Item Analysis']";
  private readonly REPORTS_TAB_GRADEBOOK_SELECTOR = "button[aria-label='Gradebook']";
  private readonly MY_DISTRICT_SELECTOR = "button[aria-label='My District']";
  private readonly COURSE_FAMILY_SELECTOR = '//div[@aria-label="Success Coach"]';
  private readonly SELECT_PROGRAM = '.select-program-text';
  private readonly CONTENT_TAB_SELECTOR = "button[aria-label='Content']";
  private readonly CONTENT_TAB_COURSE_CATALOG_SELECTOR = "button[aria-label='Course Catalog']";
  private readonly CONTENT_TAB_ASSIGNMENT_SELECTOR = "button[aria-label='Assignments']";
  private readonly CONTENT_TAB_COURSE_ASSIGNMENT_SELECTOR =
    "button[aria-label='Course Assignments']";
  private readonly CONTENT_TAB_EXIT_CARD_ASSIGNMENT_SELECTOR = "button[aria-label='Exit Card Assignments']";
  private readonly ADMIN_TAB_SELECTOR = "button[aria-label='admin']";
  private readonly ADMIN_TAB_LICENSE_CATALOG_SELECTOR = "button[aria-label='License Catalog']";
  private readonly SAML_ACCORDION_IN_ADMINTAB = "button[aria-label='SAML']";
  private readonly SAML_FOR_ORGANIZATIONS_IN_ADMINTAB =
    "button[aria-label='SAML for Organizations']";
  private readonly ADMIN_TAB_IMPORT_USER_SELECTOR = "button[aria-label='Import Users']";

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * @description Locator for User Tab
   */
  userTab() {
    return this.page.locator(this.USER_TAB_SELECTOR);
  }

  /**
   * @description Locator for Organizations Tab
   */
  organizationsTab() {
    return this.page.locator(this.ORGANIZATIONS_TAB_SELECTOR);
  }

  /**
   * @description Locator for Districts Tab in Users Tab
   */
  usersTabDistricts() {
    return this.page.locator(this.USERS_TAB_DISTRICTS_SELECTOR);
  }

  /**
   * @description Locator for Schools Tab in Users Tab
   */
  usersTabSchool() {
    return this.page.locator(this.USERS_TAB_SCHOOL_SELECTOR);
  }

  /**
   * @description Locator for Classes Tab in Users Tab
   */
  usersTabClass() {
    return this.page.locator(this.USERS_TAB_CLASS_SELECTOR);
  }

  /**
   * @description Locator for User Roles Tab in Users Tab
   */
  usersTabUserRole() {
    return this.page.locator(this.USERS_TAB_USER_ROLE_SELECTOR);
  }

  /**
   * @description Locator for District Technical Admins in User Roles Tab
   */
  usersTabDTA() {
    return this.page.locator(this.USERS_TAB_DTA_SELECTOR);
  }

  /**
   * @description Locator for School Admins in User Roles Tab
   */
  usersTabSA() {
    return this.page.locator(this.USERS_TAB_SA_SELECTOR);
  }

  /**
   * @description Locator for Teachers in User Roles Tab
   */
  usersTabTeacher() {
    return this.page.locator(this.USERS_TAB_TEACHER_SELECTOR);
  }

  /**
   * @description Locator for Students in User Roles Tab
   */
  usersTabStudent() {
    return this.page.locator(this.USERS_TAB_STUDENT_SELECTOR);
  }

  /**
   * @description Locator for Reports Tab
   */
  reportsTab() {
    return this.page.locator(this.REPORTS_TAB_SELECTOR);
  }

  /**
   * @description Locator for Product Usage Report in Reports Tab
   */
  reportsTabProductUsageReport() {
    return this.page.locator(this.REPORTS_TAB_PRODUCT_USAGE_REPORT_SELECTOR);
  }

  /**
   * @description Locator for Score Report in Reports Tab
   */
  reportsTabScore() {
    return this.page.locator(this.REPORTS_TAB_SCORE_SELECTOR);
  }

  /**
   * @description Locator for License Report in Reports Tab
   */
  reportsTabLicense() {
    return this.page.locator(this.REPORTS_TAB_LICENSE_SELECTOR);
  }

  /**
   * @description Locator for Login Report in Reports Tab
   */
  reportsTabLogin() {
    return this.page.locator(this.REPORTS_TAB_LOGIN_SELECTOR);
  }

  /**
   * @description Locator for grade submission in Reports Tab
   */
  reportsTabGradeSubmission() {
    return this.page.locator(this.REPORTS_TAB_GRADE_SUBMISSION_SELECTOR);
  }

  /**
   * @description Locator for Exit card reports in Reports Tab
   */
  reportsTabExitCard() {
    return this.page.locator(this.REPORTS_TAB_EXIT_CARD_SELECTOR);
  }

  /**
   * @description Locator for Item Analysis Report in Reports Tab
   */
  reportsTabItemAnalysis() {
    return this.page.locator(this.REPORTS_TAB_ITEM_ANALYSIS_SELECTOR);
  }

  /**
   * @description Locator for Gradebook Report in Reports Tab
   */
  reportsTabGradebook() {
    return this.page.locator(this.REPORTS_TAB_GRADEBOOK_SELECTOR);
  }

  /**
   * @description Locator for My district button in Admin tab
   */
  myDistrict() {
    return this.page.locator(this.MY_DISTRICT_SELECTOR);
  }

  /**
   * @description Locator for Course Family (Success Coach)
   */
  courseFamily() {
    return this.page.locator(this.COURSE_FAMILY_SELECTOR);
  }

  /**
   * @description Locator for the select program text on the Program selection page
   */
  selectProgramText() {
    return this.page.locator(this.SELECT_PROGRAM);
  }

  /**
   * @description Locator for Content Tab
   */
  contentTab() {
    return this.page.locator(this.CONTENT_TAB_SELECTOR);
  }

  /**
   * @description Locator for Course Catalog in Content Tab
   */
  contentTabCourseCatalog() {
    return this.page.locator(this.CONTENT_TAB_COURSE_CATALOG_SELECTOR);
  }

  /**
   * @description Locator for Assignment in Content Tab
   */
  contentTabAssignment() {
    return this.page.locator(this.CONTENT_TAB_ASSIGNMENT_SELECTOR);
  }

  /**
   * @description Locator for the course assignment in Content Tab
   */
  courseAssignment() {
    return this.page.locator(this.CONTENT_TAB_COURSE_ASSIGNMENT_SELECTOR);
  }

  /**
   * @description Locator for the exit card assignment in Content Tab
   */
  exitCardAssignment() {
    return this.page.locator(this.CONTENT_TAB_EXIT_CARD_ASSIGNMENT_SELECTOR);
  }

  /**
   * @description Locator for Admin Tab
   */
  adminTab() {
    return this.page.locator(this.ADMIN_TAB_SELECTOR);
  }

  /**
   * @description Locator for License Catalog in Admin Tab
   */
  adminTabLicenseCatalog() {
    return this.page.locator(this.ADMIN_TAB_LICENSE_CATALOG_SELECTOR);
  }

  /**
   * @description Locator for Import User in Admin Tab
   */
  adminTabImportUser() {
    return this.page.locator(this.ADMIN_TAB_IMPORT_USER_SELECTOR);
  }

  /**
   * @description Locator for Saml accordion in Admin Tab
   */
  samlAccordionInAdminTab() {
    return this.page.locator(this.SAML_ACCORDION_IN_ADMINTAB);
  }

  /**
   * @description Locator for Saml for organization button in Admin Tab
   */
  samlForOrganizationsInAdminTab() {
    return this.page.locator(this.SAML_FOR_ORGANIZATIONS_IN_ADMINTAB);
  }

  /**
   * @description Navigates to the dashboard's main view by clicking the Course Family if present.
   */
  async navigateToDashboard() {
    try {
      // Define the maximum wait time and polling interval (e.g., 1 second)
      const maxWaitTime = 10000;
      const pollingInterval = 500;

      const locator = this.courseFamily();
      let elapsedTime = 0;
      while (elapsedTime < maxWaitTime) {
        // Check if the element is present in the DOM
        if (await locator.isVisible() || await locator.count() > 0) {
              await locator.click();
              await waitForPreloaderToHide(this.page);
              return true;
        }
          
        // If element is not visible, wait for the polling interval and check again
        await this.page.waitForTimeout(pollingInterval);
        elapsedTime += pollingInterval;
      }
      console.log('Course family button not visible after waiting');
      return false;
    } catch (error) {
        console.log('Failed to navigate to dashboard:', error instanceof Error ? error.message : String(error));
        return false;
    }  
  }

  /**
   * @description Navigates to the Districts listing page under the Organizations section in the User tab.
   */
  async navigateToDistrictListingPage() {
    await this.userTab().click();
    await this.organizationsTab().click();
    await this.usersTabDistricts().click();
    await waitForPreloaderToHide(this.page);
  }

  /**
   * @description Navigates to the Schools listing page under the Organizations section in the User tab.
   */
  async navigateToSchoolListingPage() {
    await this.userTab().click();
    await this.organizationsTab().click();
    await this.usersTabSchool().click();
    await waitForPreloaderToHide(this.page);
  }

  /**
   * @description Navigates to the Classes listing page under the Organizations section in the User tab.
   */
  async navigateToClassListingPage() {
    await this.userTab().click();
    await this.organizationsTab().click();
    await this.usersTabClass().click();
    await waitForPreloaderToHide(this.page);
  }

  /**
   * @description Navigates to the District Technical Admin (DTA) listing page in the User Roles tab.
   */
  async navigateToDTAListingPage() {
    await this.userTab().click();
    await this.usersTabUserRole().click();
    await this.usersTabDTA().click();
    await waitForPreloaderToHide(this.page);
  }

  /**
   * @description Navigates to the School Admins (SA) listing page in the User Roles tab.
   */
  async navigateToSAListingPage() {
    await this.userTab().click();
    await this.usersTabUserRole().click();
    await this.usersTabSA().click();
    await waitForPreloaderToHide(this.page);
  }

  /**
   * @description Navigates to the Teachers listing page in the User Roles tab.
   */
  async navigateToTeacherListingPage() {
    await this.userTab().click();
    await this.usersTabUserRole().click();
    await this.usersTabTeacher().click();
    await waitForPreloaderToHide(this.page);
  }

  /**
   * @description Navigates to the Students listing page in the User Roles tab.
   */
  async navigateToStudentListingPage() {
    await this.userTab().click();
    await this.usersTabUserRole().click();
    await this.usersTabStudent().click();
    await waitForPreloaderToHide(this.page);
  }

  /**
   * @description Navigates to the Score Report page in the Reports tab.
   */
  async navigateToScoreReportPage() {
    await this.reportsTab().click();
    await this.reportsTabScore().click();
    await waitForPreloaderToHide(this.page);
  }

  /**
   * @description Navigates to the Item Analysis Report page in the Reports tab.
   */
  async navigateToItemAnalysisReportPage() {
    await this.reportsTab().click();
    await this.reportsTabItemAnalysis().click();
    await waitForPreloaderToHide(this.page);
  }

  /**
   * @description Navigates to the Gradebook Report page in the Reports tab.
   */
  async navigateToGradebookReportPage() {
    await this.reportsTab().click();
    await this.reportsTabGradebook().click();
    await waitForPreloaderToHide(this.page);
  }

  /**
   * @description Navigates to the My District page in the Admin tab.
   */
  async navigateToMyDistrictPage() {
    await this.adminTab().click();
    await this.myDistrict().click();
    await waitForPreloaderToHide(this.page);
  }

  /**
   * @description Navigates to the Product Usage Report page in the Reports tab.
   */
  async navigateToProductUsageReportPage() {
    await this.reportsTab().click();
    await this.reportsTabProductUsageReport().click();
    await waitForPreloaderToHide(this.page);
  }

  /**
   * @description Navigates to the License Report page in the Reports tab.
   */
  async navigateToLicenseReportPage() {
    await this.reportsTab().click();
    await this.reportsTabLicense().click();
    await waitForPreloaderToHide(this.page);
  }

  /**
   * @description Navigates to the Login Report page in the Reports tab.
   */
  async navigateToLoginReportPage() {
    await this.reportsTab().click();
    await this.reportsTabLogin().click();
    await waitForPreloaderToHide(this.page);
  }

  /**
   * @description Navigates to the Grade submission page in the Reports tab.
   */
  async navigateToGradeSubmissionPage() {
    await this.reportsTab().click();
    await this.reportsTabGradeSubmission().click();
    await waitForPreloaderToHide(this.page);
  }

  /**
   * @description Navigates to the Exit card reports page in the Reports tab.
   */
  async navigateToExitCardReportsPage() {
    await this.reportsTab().click();
    await this.reportsTabExitCard().click();
  }

  /**
   * @description Navigates to the Course Catalog page in the Content tab.
   */
  async navigateToCourseCatalogPage() {
    await this.contentTab().click();
    await this.contentTabCourseCatalog().click();
    await waitForPreloaderToHide(this.page);
  }

  /**
   * @description Navigates to the Assignment Listing page in the Content tab.
   */
  async navigateToAssignmentListingPage(role: string) {
    await this.contentTab().click();
    await this.contentTabAssignment().click();
    if (role === 'Teacher') {
      await this.courseAssignment().click();
    }
    await waitForPreloaderToHide(this.page);
  }

  /**
   * @description Navigates to the Exit card Assignment Listing page in the Content tab.
   */
  async navigateToExitCardAssignmentsListingPage() {
    await this.contentTab().click();
    await this.contentTabAssignment().click();
    await this.exitCardAssignment().click();
  }

  /**
   * @description Navigates to the License Catalog page in the Admin tab.
   */
  async navigateToLicenseListingPage() {
    await this.adminTab().click();
    await this.adminTabLicenseCatalog().click();
    await waitForPreloaderToHide(this.page);
  }

  /**
   * @description Navigates to the SAML for Organization page in the Admin tab.
   */
  async navigateToSamlForOrganizationPage() {
    await this.adminTab().click();
    await this.samlAccordionInAdminTab().click();
    await this.samlForOrganizationsInAdminTab().click();
    await waitForPreloaderToHide(this.page);
  }

  /**
   * @description Navigates to the Import User page in the Admin tab.
   */
  async navigateToImportUserPage() {
    await this.adminTab().click();
    await this.adminTabImportUser().click();
    await waitForPreloaderToHide(this.page);
  }
}