import { request, Page } from "@playwright/test";
enum statusCode {
    IN_PROGRESS = 202,
    COMPLETED = 200
}

export class ApiHelper {
  /**
   * 
   * @description call api to return access token.
  */
  public static async getAccessToken(tokenApi: string, requestHeader: Record<string, string>, requestBody: object) {
    const apiContext = await request.newContext();

    const response = await apiContext.post(tokenApi, {
      headers: requestHeader,
      data: requestBody
    });

    if (response.ok()) {
      const responseData = await response.json();
      return responseData.access_token;
    } else {
      throw new Error('Failed to fetch token');
    }
  }

  /**
   * 
   * @description call api to return callback url
  */
  public static async getCallbackUrl(sourceUrl: string, accessToken: string) {
    const apiContext = await request.newContext();
    const response = await apiContext.get(sourceUrl, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });
    
    if (response.ok()) {
      const jsonResponse = await response.json();
      return jsonResponse.callbackURL;
    } else {
      throw new Error('Failed to fetch callback url');
    }
  }

  /**
   * 
   * @description call api with max 5 retries to return user attempts data in json
  */
  public static async getDataFromApi(callbackUrl: string, apiRetryPeriod: number, accessToken: string, page: Page) {
    const apiContext = await request.newContext();
    let response = await apiContext.get(callbackUrl, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });

    // if status is in progress then call get api again with max 3 retries
    let retryCount = 0;
    while (response.status() == statusCode.IN_PROGRESS && retryCount < 5) {
      await page.waitForTimeout(apiRetryPeriod);
      response = await apiContext.get(callbackUrl, {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      });
      retryCount++;
    }

    if (response.ok()) {
      const jsonResponse = await response.json();
      return jsonResponse;
    } else {
      throw new Error('Failed to fetch data');
    }
  }
}