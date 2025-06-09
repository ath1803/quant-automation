import { createBddCustom } from '../common/createBddCustom';
import { LMSLoginPage } from '../../pages/manualLogin/lmsLogin.page'
import urls from '../../fixtures/constants/urlConstants';
import { LMSDashboard } from '../../pages/dashboard/lmsDashboard.page';
import { ILoginDetails } from '../../fixtures/interfaces/login.interface';

const { Given, When, Then } = createBddCustom();
let lmsLoginPage: LMSLoginPage;

Given('User is on the LMS admin login page', async function ({ page }) {
    lmsLoginPage = new LMSLoginPage(page);
    await page.goto(urls.LMS_ADMIN_LOGIN);
});

When('Login form is displayed', async function ({ page }) {
    await lmsLoginPage.checkIfLoginFormIsAvailable();
});

When('User login with {string} {string} in LMS admin', async function ({ page, loginData }, userRole: string, credentialType: string) {
    const userData: ILoginDetails = loginData.lmsUsers[userRole];
    await lmsLoginPage.fillUsernameAndPassword(userData);
});

When('User clicks on the login button in LMS', async function ({ page }) {
    await lmsLoginPage.clickLoginButton();
});

Then('User should be logged in successfully and redirected to the LMS dashboard', async function ({ page }) {
    const cmsDashboardPage = new LMSDashboard(page);
    await cmsDashboardPage.checkIfDashboardIsLoaded();
});