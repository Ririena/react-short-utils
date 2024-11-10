
/**
 * Generates a unique ID based on the current timestamp and a random number.
 * @returns {string} The generated unique ID.
 */
const generateUniqueId = () => {
    return `id-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
  };
  
  export default generateUniqueId;
  