import { expect, Locator, Page } from '@playwright/test';
import * as moment from 'moment';
import { zl } from '../common/zl';
import randomstring from 'randomstring';
import env from '../../src/fixtures/env';
import * as fs from 'fs';
import * as path from 'path';
const deleteKey = require('key-del');

type Points = {
  x: number;
  y: number;
};

type Roles = 'instructor' | 'student';

type APIUserType = 'ATA' | 'ATAS';

type APIFunctions = 'AnnotateDataFetcher';

type ATA = 
    'getCurrentOpenNotebookPanelPageData' //Nb base data
  | 'getCurrentCourseNotebookPanelPageData' //Course specific data
  | 'getCurrentCourseNotebookPanelNotesData' //Student notes data
  | 'getCurrentCourseNotebookPanelFeedbackData' //Feedback data
  | 'getLivefeedData'
  | 'getStreamMediaSettings';

type ATAS =
    'getCurrentOpenNotebookPanelPageData' // Student's content lib data
  | 'getCurrentCourseNotebookPanelPageData' //Course specific data
  | 'getCurrentCourseOpenNotebookPanelPageData' //Non-Course specific data
  | 'getCurrentCourseNotebookPanelNotesData' //Student notes data
  | 'getCurrentCourseNotebookPanelFeedbackData' //Feedback data
  | 'getLivefeedData'
  | 'getProjectionNotebookPanelBasePageData' //livestream base ntbk data
  | 'getProjectionNotebookPanelNotesPageData' //livestream notes data
  | 'getProjectionNotebookPanelFeedbackPageData' //livestream feedback data
  | 'getProjectionCourseNotebookPanelBasePageData'
  | 'getReceiveStreamMediaSettings'; //livestream course specific data 

type APIMethods<T> = T extends 'ATA' ? ATA : T extends 'ATAS' ? ATAS : never;

type testSuiteFolder = //add names of test suites that uses api verifications and create a subfolder for the same in annotationsData folder
    "notebookPublish" 
  | "notebookStudentNotes" 
  | "livestreamStudentNotes" 
  | "courseLivestream" 
  | "openLivestream"
  | "courseMediaLivestream";  

const directoryName = '/src/resources/annotationsData/';

export const helper = {
  compareMaxLength: (selector: Locator, expectedLength: string) => {
    const maxLength = zl.getAttribute(selector, 'maxlength');
    expect(maxLength).toBe(expectedLength);
  },

  truncateString: (str: string, length: number) => {
    return str.substring(0, length);
  },

  appendTitleWithTimeStamp: (title: string) => {
    const currDate = moment(new Date()).format('DD-MMM-YYYY HH:mm:ss');
    return (
      title +
      '-' +
      currDate +
      '-' +
      randomstring.generate({ length: 10, charset: 'alphabetic' })
    );
  },

  verifyListIsInAlphabeticalOrder: async (selector: Locator) => {
    const elements = await selector.allTextContents();
    const unorderedList = [];
    for (let i = 0; i < elements.length; i++) {
      unorderedList.push(elements[i]);
    }
    const orderedList = [...unorderedList].sort();
    console.log(orderedList);
    console.log(unorderedList);
    expect(unorderedList).toEqual(orderedList);
  },

  searchResultContains: async (selector: Locator, searchText: string) => {
    for (let i = 0; i < (await selector.count()); i++) {
      await expect(selector.nth(i)).toContainText(searchText, {
        ignoreCase: true,
      });
    }
  },

  storePoints: (xVal: number, yVal: number, array: Points[]) => {
    array.push({ x: xVal, y: yVal });
  },

  drawUsingCoordinates: async (page: Page, array: Points[]) => {
    await page.mouse.move(array[0].x, array[0].y);
    await page.mouse.down();
    for (let i = 1; i < array.length; i++) {
      await page.waitForTimeout(100);
      if (i == 1) {
        await page.mouse.move(array[i].x, array[i].y);
      }
      await page.mouse.move(array[i].x, array[i].y);
    }
    await page.mouse.up();
  },

  fetchPageData: async <T extends APIUserType>(
    page: Page,
    user: T,
    apiFunction: APIFunctions,
    apimethod: APIMethods<T>,
    pageIndex: number
  ) => {
    const evaluateAPI = `${user}.${apiFunction}.${apimethod}(${pageIndex})`;
    return await page.evaluate(evaluateAPI);
  },

  fetchBaseData: async (user: Roles, fileName: string, testSuite: string) => {
    try {
      const filePath = await helper.getUserFilePath(fileName, user, testSuite);
      const data = fs.readFileSync(filePath, 'utf8');
      return JSON.parse(data);
    } catch (err) {
      console.log(err);
    }
  },

  saveBaseData: async (
    actualData: object,
    fileName: string,
    user: Roles,
    testSuiteOption: testSuiteFolder,
    testSuite: string,
    additionalExcludeFields: Array<string> = []
  ) => {
    const dirPath = path.join(process.cwd(),directoryName,testSuiteOption,'/');
    
    if (process.env.saveBaseData === 'true') {
      helper.createNewDir(dirPath);
      helper.writeToFile(
        await helper.getUserFilePath(fileName, user, testSuite),
        actualData
      );
    } else {
      const baseData = await helper.fetchBaseData(user, fileName, testSuite);
      helper.compareData(actualData, baseData, additionalExcludeFields);
    }
  },

  compareData: async (
    actualData: object,
    baseData: object,
    additionalExcludeFields: Array<string> = []
  ) => {
    const excludeFields = [...env.excludeFields, ...additionalExcludeFields];
    expect(deleteKey(actualData, excludeFields)).toEqual(
      deleteKey(baseData, excludeFields)
    );
  },

  createNewDir: async (newDir: string) => {
    if (!fs.existsSync(newDir)) {
      fs.mkdirSync(newDir, { recursive: true });
    }
  },

  getUserFilePath: async (fileName: string, user: Roles, testSuite: string) => {
    const fileWithExt = fileName + '.json';
    const filePath = `${env.env}-${user}-${testSuite}-${env.projectName}-${fileWithExt}`;
    return path.join(process.cwd(), directoryName, testSuite + '/' + filePath);
  },

  writeToFile: async (fileName: string, actualData: object) => {
    fs.writeFile(fileName, JSON.stringify(actualData, null, 4), (err: any) => {
      if (err) {
        throw err;
      }
      console.log('File is created.');
    });
  },

  clickOnExtensionPopup: async (
    page: Page,
    showToolbar: number,
    hideWhenMinimized: number,
    allowDrawingWhileMinimized: number
  ) => {
    const evaluateAPI = `var msg = {"type" : "annotateAutomatePopUp", "values" : {"annotateAnnotationModeGot" : ${showToolbar}, "annotateMinimizeModeUpdated" : ${hideWhenMinimized}, "annotateAllowMinimizeModeDrawingUpdated": ${allowDrawingWhileMinimized}}};window.postMessage(msg, "*");`;
    await page.evaluate(evaluateAPI);
  },

  resetExtensionPreferences: async (page: Page) => {
    const evaluateAPI =
      'var msg = {"type" :"annotateAutomateResetToolbar" };window.postMessage(msg, "*");';
    await page.evaluate(evaluateAPI);
  },

  loginInGooogle: async (page:Page , accountName: string, password: string) => {
    await page.goto('https://accounts.google.com')
    await page.waitForTimeout(10000)
    if (await page.locator('//*[@class="XY0ASe" and contains(.,"Welcome, ")]').isVisible()){
      await page.waitForTimeout(2000)
    }
    else{
      for(let i=0; i< accountName.length; i++){
        await page.keyboard.press(accountName.charAt(i))
        await page.waitForTimeout(100)
      }
      await page.waitForTimeout(2000)
      await page.locator('#identifierNext').click()
      await page.waitForTimeout(3000)
      const startTime = Date.now()
      while(!(await page.locator('[aria-label="Enter your password"]').isVisible())){
        if (Date.now() - startTime > 60000){
          throw new Error("Timeout waiting for password input")
        }
        if (await page.locator('[aria-label="Try again"]').isVisible()){
          await page.waitForTimeout(2000)
          await page.locator('[aria-label="Try again"]').click()
          await page.waitForTimeout(2000)
          for(let i=0; i< accountName.length; i++){
            await page.keyboard.press(accountName.charAt(i))
            await page.waitForTimeout(100)
          }
          await page.waitForTimeout(2000)
          await page.locator('#identifierNext').click()
          // break;
        }
        await page.waitForTimeout(2000)
        
      }
      await page.locator('[aria-label="Enter your password"]').click()
      await page.locator('[aria-label="Enter your password"]').fill(password)
      await page.locator('#passwordNext').click()
      await page.waitForLoadState('domcontentloaded')
      await page.waitForTimeout(1000)
    }
    

  },

  isScreenshotValid: async (element:Locator, screenshotPath:string, options?:object) => {
      await zl.compareScreenshot(element, screenshotPath, options);
  },

  keyboardPress: async(page:Page,toType:string, options?:object) =>{
    for(let i=0; i< toType.length; i++){
      await page.keyboard.press(toType.charAt(i))
      await page.waitForTimeout(100)
    }
  } 
};
