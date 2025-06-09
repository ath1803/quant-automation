import { createBddCustom } from '../common/createBddCustom';
import { CMSLoginPage } from '../../pages/manualLogin/cmsLogin.page'
import urls from '../../fixtures/constants/urlConstants';
import { ILoginDetails } from '../../fixtures/interfaces/login.interface';
import { l10n } from '../../zeus-playwright/quantum-common/utils/uiLocalizedStrings';
import { CMSCourseCatalog } from '../../pages/courseCatalog/cmsCourseCatalog.page';


const { Given, When, Then } = createBddCustom();
let cmsLoginPage: CMSLoginPage;

Given('User is on the CMS login page', async function ({ page }) {
    cmsLoginPage = new CMSLoginPage(page);
    await page.goto(urls.CMS_HOST);
});

Given('CMS Login form is displayed', async function ({ page }) {
    await cmsLoginPage.checkIfLoginFormIsAvailable();
});

When('User login with {string} {string} in CMS', async function ({ page, loginData }, userRole: string, credentialType: string) {
    const userData: ILoginDetails = loginData.cmsUsers[userRole];
    await cmsLoginPage.fillUsernameAndPassword(userData);
});

When('User clicks on the login button in CMS', async function ({ page }) {
    await cmsLoginPage.clickLoginButton();
});

Then('User should see the message {string} in CMS', async function ({ page }, messageKey: string) {
    await cmsLoginPage.displayLoginError(l10n(messageKey, 'CMS'));
});

Then('User should be logged in successfully and redirected to the CMS dashboard', async function ({ page }) {
    const cmsCourseCatalog = new CMSCourseCatalog(page);
    await cmsCourseCatalog.checkIfCourseCatalogLoaded();
});