export const openUrl = (url, newTab = false) =>
  window.open(url, `_${newTab ? "blank" : "self"}`);
