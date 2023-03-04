export const shortenArrayByMaxLength = (arr, maxLength = 10) =>
  arr.length > maxLength ? arr.slice(0, maxLength) : arr;
