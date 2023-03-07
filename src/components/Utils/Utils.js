export const saveDataToSessionStorage = (key, data) => {
  window.sessionStorage.setItem(key, JSON.stringify(data));
  return true;
};
export const findDataFromSessionStorage = (key) => {
  return JSON.parse(sessionStorage.getItem(key));
};
export const saveDataToLocalStorage = (key, data) => {
  window.localStorage.setItem(key, JSON.stringify(data));
  return true;
};
export const findDataFromLocalStorage = (key, data) => {
  return JSON.parse(localStorage.getItem(key));
};
export const clearSessionStorage = () => {
  window.sessionStorage.clear();
};
export const clearLocalStorage = () => {
  window.localStorage.clear();
};
