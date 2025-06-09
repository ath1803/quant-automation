import urls from '../../fixtures/constants/urlConstants';
import { IUserData } from '../../fixtures/interfaces/auth.interface';
import { LMSLoginPage } from '../../pages/manualLogin/lmsLogin.page';
import { createBddCustom } from '../common/createBddCustom';

const { Given, When, Then } = createBddCustom();
let lmsLoginPage: LMSLoginPage;

Given('User is on the LMS login page', async function ({ page }) {
    lmsLoginPage = new LMSLoginPage(page);
    await page.goto(urls.LMS_HOST);
    await lmsLoginPage.navigateToTheLoginPage();
});

When('Login form is displayed for different users', async function () {
    await lmsLoginPage.checkIfLoginFormIsAvailable();
});

When('User login with {string} {string} in LMS normal login', async function ({ testData }, userRole: string, credentialType: string) {
    const userData: IUserData = testData.lmsUsers[userRole];
    const loginData1 = credentialType === "Valid Login" ? userData.validLogin : userData.invalidLogin;
    const stateName = testData.lmsUsers[userRole].validLogin.stateName;
    const districtName = testData.lmsUsers[userRole].validLogin.districtName;
    await lmsLoginPage.fillRequiredDetails(stateName, districtName);
    await lmsLoginPage.fillUsernameAndPassword(loginData1);
});

When('User clicks on the login button in LMS login', async function ({}) {
    await lmsLoginPage.clickLoginButton();
});

