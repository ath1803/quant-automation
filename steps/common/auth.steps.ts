import { createBddCustom } from './createBddCustom';
import urls from '../../fixtures/constants/urlConstants';
import { Page, request } from '@playwright/test';

const { Given } = createBddCustom();

const loginUser = async (site: string, role: string, page: Page, loginData: any) => {
    const context = page.context();
    const apiContext = await request.newContext();
    const loginDetails = getLoginDetails(site, role, loginData);
    console.log(loginDetails.role);
    const apiData = getAPIData(site, role, loginDetails);
    const cookies = await authenticateUser(apiContext, apiData, site);
    await context.addCookies([cookies]);
    await page.goto(getSiteUrl(site));
}

const getLoginDetails = (site: string, role: string, loginData: any) => {
    return site === 'LMS' ? loginData.lmsUsers[role] : loginData.cmsUsers[role];
}

const getAPIData = (site: string, role: string, loginDetails: any) => {
    switch (site) {
        case 'LMS':
            return role !== 'PA' && role !== 'TSO'
                ? getAPIDataWithGroupGuid(loginDetails)
                : getAPIDataForAdmin(loginDetails);

        case 'CMS':
            return getCMSAPIData(loginDetails);
        default:
            throw new Error(`Unknown site: ${site}`);
    }
}

const getCMSAPIData = (loginData: any) => {
    return {
        data: {
            username: loginData["username"],
            password: loginData["password"],
            productType: 1
        }
    }
}

const authenticateUser = async (apiContext: any, data: any, site: string) => {
    const response = await apiContext.post(getAuthUrl(site), data);
    if (!response.ok()) {
        throw new Error(`Login failed: ${response.status()}`);
    }
    return getCookie(response, site);
}

const getAuthUrl = (site: string) => {
    return site === 'LMS' ? urls.LMS_AUTH_LOGIN : urls.CMS_AUTH_LOGIN;
}

const getCookie = (response: any, site: string) => {
    const cookies = response.headers()['set-cookie'];
    const cookiesArray = cookies.split(';');
    const mainCookie = cookiesArray[0].trim();
    const [cookieName, cookieValue] = mainCookie.split('=');
    return {
        name: cookieName,
        value: cookieValue,
        domain: site === 'LMS' ? urls.LMS_DOMAIN : urls.CMS_DOMAIN,
        path: '/',
        httpOnly: true,
        secure: false
    };
}

const getSiteUrl = (site: string) => {
    return site === 'LMS' ? urls.LMS_HOST : urls.CMS_HOST;
}

const getAPIDataWithGroupGuid = (loginData: any) => {
    return {
        data: {
            username: loginData.username,
            password: loginData.password,
            productType: loginData.productType,
            clearanceLevel: loginData.clearanceLevel,
            groupGUID: loginData.groupGUID,
        }
    }
}

const getAPIDataForAdmin = (loginData: any) => {
    return {
        data: {
            username: loginData["username"],
            password: loginData["password"],
            productType: 2,
            clearanceLevel: 4
        }
    }
}

Given(`User login as a {string} in {string}`, async function ({ page, loginData }, role: string, site: string) {
    await loginUser(site, role, page, loginData);
});
