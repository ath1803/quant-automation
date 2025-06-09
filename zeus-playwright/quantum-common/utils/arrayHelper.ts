export class ArrayHelper {
    // Method to check whether araays are sorted in ascending order
    public static isSortedDesc(array: number[] | string[]) {
        return array.every((value, index) => {
            return index === 0 || value <= array[index - 1];
        });
    }

    // Method to check whether araays are sorted in descending order
    public static isSortedAsc(array: number[] | string[]) {
        return array.every((value, index) => {
            return index === 0 || value >= array[index - 1];
        });
    }

  /**
   * 
   * @description sort json data
  */
  public static sortData(data: any[]) {
    const sortedData = data.sort((a, b) => {
      if (a.school !== b.school) return a.school.localeCompare(b.school);
      if (a.class !== b.class) return a.class.localeCompare(b.class);
      if (a.lastName !== b.lastName) return a.lastName.localeCompare(b.lastName);
      if (a.firstName !== b.firstName) return a.firstName.localeCompare(b.firstName);
      if (a.testName !== b.testName) return a.testName.localeCompare(b.testName);
      return a.attempt - b.attempt;
    });

    return sortedData;
  }

}