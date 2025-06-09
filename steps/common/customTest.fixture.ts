import { test as base } from 'playwright-bdd';
import env from '../../fixtures/env';
import * as path from 'path';

export const test = base.extend<{ testData: any, loginData: any }>({
    testData: async ({ page }: any, use: (arg0: any) => any, testInfo: any) => {
        const environment = env["ENVIRONMENT"] || "automation";
        const featureFileName = path.basename(testInfo.file, '.js'); // Extracts the base filename without the .js extension
        const feature = featureFileName.split('.')[0];
        const dataPath = `../../fixtures/${environment}/${feature}/testdata.json`;
        try {
            const testdata = require(dataPath);
            await use(testdata);
        } catch (error) {
            await use(undefined);
        }
    },
    loginData: async ({ page }: any, use: (arg0: any) => any, testInfo: any) => {
        const environment = env["ENVIRONMENT"] || "automation";
        const featureFileName = path.basename(testInfo.file, '.js');
        const feature = featureFileName.split('.')[0];
        const dataPath = `../../fixtures/${environment}/${feature}/loginData.json`;
        const testdata = require(dataPath);
        await use(testdata);
    }
});
