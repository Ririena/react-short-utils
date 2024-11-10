
/**
 * Formats a JavaScript Date object into a readable date string for a specified locale.
 * @param {Date} date - The date to format.
 * @param {string} [locale='en-US'] - The locale to format the date in. Defaults to 'en-US'.
 * @returns {string} A formatted date string.
 */
const formatDate = (date, locale = 'en-US') => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Intl.DateTimeFormat(locale, options).format(date);
  };
  
  export default formatDate;
  