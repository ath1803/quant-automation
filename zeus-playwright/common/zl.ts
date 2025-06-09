import { expect, Locator, Page } from '@playwright/test';
import env from '../../src/fixtures/env';

type Points = {
  x: number;
  y: number;
}

export const zl = {
  getAttribute: async (locator: Locator, attribute: string) => {
    await locator.getAttribute(attribute);
  },

  compareScreenshot: async (locator: Locator, name: string, options?: object) => {
    await expect.soft(locator, `screenshot comparision for ${name}`).toHaveScreenshot(`${env.env}-${name}`, 
      options ? options : {maxDiffPixelRatio: 0.1});
  },

  click: async (locator: Locator, options?: object) => {
    await locator.click(options);
  },

  rightClick: async (locator: Locator) => {
    if (env.projectName.toLowerCase() === 'ipad') {
      await locator.click({ delay: 3000 });
    }
    await locator.click({ button: 'right' });
  },

  doubleClick: async (locator: Locator) => {
    await locator.dblclick();
  },

  hover: async (locator: Locator) => {
    await locator.hover();
  },

  scrollByPixels: async (page: Page, xAxis: number, yAxis: number) => {
    await page.mouse.wheel(xAxis, yAxis)
  },

  dragAndDrop: async (source: Locator, target: Locator, page?: Page, sourceCoords?: Points, targetCoords?: Points) => {
    if (page && sourceCoords && targetCoords) {
      //TODO: need to move to bounding box coordinates both here and draw using coordinates method

      /* const sourceBoundingBox = await source.boundingBox()
      const targetBoundingBox = await target.boundingBox()
      await page.mouse.move(sourceBoundingBox.x + sourceCoords.x, sourceBoundingBox.y + sourceCoords.y)
      await page.mouse.down()
      await page.mouse.move(targetBoundingBox.x + targetCoords.x, targetBoundingBox.y + targetCoords.y)
      // eslint-disable-next-line playwright/no-wait-for-timeout
      await page.waitForTimeout(500)
      await page.mouse.up() */

      await page.mouse.move(sourceCoords.x, sourceCoords.y)
      await page.mouse.down()
      await page.mouse.move(targetCoords.x, targetCoords.y)
      // eslint-disable-next-line playwright/no-wait-for-timeout
      await page.waitForTimeout(500)
      await page.mouse.up()
    } else {
      await source.dragTo(target)
    }
  },

  type: async (locator: Locator, value: string) => {
    await locator.fill(value)
  },

  clear: async (locator: Locator) => {
    await locator.clear()
  },

  focus: async (locator: Locator) => {
    await locator.focus()
  },

  blur: async (locator: Locator) => {
    await locator.blur()
  },

  scrollIntoView: async (locator: Locator) => {
    await locator.scrollIntoViewIfNeeded()
  },

  swipe: async (page: Page, locator: Locator, direction: 'up' | 'down' | 'left' | 'right', pixels: number) => {
    let xAxisDist = 0
    let yAxisDist = 0
    switch (direction) {
    case 'up':
      yAxisDist = -pixels
      break
    case 'down':
      yAxisDist = pixels
      break
    case 'left':
      xAxisDist = -pixels
      break
    case 'right':
      xAxisDist = pixels
      break
    default:
      throw new Error('invalid swipe direction')
    }
    const boundingBox = await locator.boundingBox()
    const center = { x: boundingBox.x + boundingBox.width / 2, y: boundingBox.y + boundingBox.height / 2 }
    await page.mouse.move(center.x, center.y)
    await page.mouse.down()
    await page.mouse.move(center.x + xAxisDist, center.y + yAxisDist)
    await page.mouse.up()
  },

  googleAccountLogin: async (page: Page, username: string, password: string) => {
    await page.goto('https://accounts.google.com')
    await page.locator('input[type="email"]').click()
    await page.locator('input[type="email"]').type(username)
    await page.locator('#identifierNext').click()
    await page.waitForTimeout(3000)
    //Added a check for try again page
    const startTime = Date.now()
    while(!(await page.locator('[aria-label="Enter your password"]').isVisible())){
      if (Date.now() - startTime > 60000){
        break
      }
      if (await page.locator('[aria-label="Try again"]').isVisible()){
        await page.locator('[aria-label="Try again"]').click()
        await page.locator('input[type="email"]').fill(username)
        await page.locator('#identifierNext').click()
        break;
      }
    }
    
    await page.locator('[aria-label="Enter your password"]').click()
    await page.locator('[aria-label="Enter your password"]').type(password)
    await page.locator('#passwordNext').click()
    await page.waitForLoadState('domcontentloaded')
    await page.waitForTimeout(1000)
  },
};
