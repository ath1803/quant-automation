export function getCurrentDateTime(): string {
    const now = new Date();

    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are 0-based, so add 1
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    return `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`;
}

export function appendTimestamp(text: string) {
    return `${text}-${getCurrentDateTime()}`
}

/**
 * @description This function returns the current date in the format 'dd-mm-yyyy' (day-month-year).
 */
export function getFormattedDate(currentDate: Date) {
    // Define constants for month names
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    return `${String(currentDate.getDate()).padStart(2, '0')}-${months[currentDate.getMonth()]}-${currentDate.getFullYear()}`;
}

/**
 * @description Get the current time in 12-hour format with 'am/pm', e.g., 'hh:mm am/pm'
 */
export function getFormattedTime(currentDate: Date) {
    let hours = currentDate.getHours();
    const minutes = String(currentDate.getMinutes()).padStart(2, '0');
    const period = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12 || 12; // Converts 0 to 12 for 12-hour format
    return `${String(hours).padStart(2, '0')}:${minutes} ${period}`;
}

/**
   * @description Get the date of tomorrow formatted as "dd-MMM-yyyy"
   * @returns {string} The formatted date string
   */
export function getExpiryDate(): string {
    const currentDate = new Date();
    const tomorrow = new Date(currentDate);
    tomorrow.setDate(currentDate.getDate() + 1);

    const options: Intl.DateTimeFormatOptions = {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
    };

    return tomorrow.toLocaleDateString('en-US', options).replace(',', '');
}


export function getUTCDatesFromArray(datesText: string[]) {
    const dates = datesText.map(dateText => {
        const [day, month, year] = dateText.trim().split('-');
        const months: { [key: string]: number } = {
            Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
            Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11
        };
        return new Date(Date.UTC(parseInt(year, 10), months[month], parseInt(day, 10)));
    });

    return dates;
}