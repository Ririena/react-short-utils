
/**
 * Filters an array of objects by a specific key-value pair.
 * @param {Array} array - Array of objects to filter.
 * @param {string} key - Key to filter by.
 * @param {any} value - Value to match for the given key.
 * @returns {Array} Filtered array of objects.
 */
const filterByKey = (array, key, value) => {
    return array.filter(item => item[key] === value);
  };
  
  export default filterByKey;
  