import * as fs from 'fs';

export class FileIOHelper {
  /**
   * 
   * @description call api to return access token.
  */
  public static writeJsonDataInFile(filePath: string, data: string) {
    try {
      fs.writeFileSync(filePath, data);
    } catch (error) {
      throw new Error('writing data to the file failed');
    }
  }

  public static readJsonDataFromFile(filePath: string) {
    try {
      const sharedData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
      return sharedData;
    } catch (error) {
      throw new Error('reading data from the file failed');
    }
  }

}