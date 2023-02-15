export const useUtilities = () => {
  function toUpperCase(str) {
    return str.toUpperCase();
  }

  return {
    toUpperCase,
  };
};
