export const setAuthToken = (token) => {
  const jsonString = JSON.stringify(token);
  document.cookie = `token-weekly=${jsonString}; expires=${new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toUTCString()}`;
  sessionStorage.setItem("token-weekly", JSON.stringify(token));
};

export const getAuthToken = () => {
  const cookieValue = document.cookie.match(/token-weekly=([^;]+)/);
  if(cookieValue) {
    const obj = JSON.parse(cookieValue[1]);
    return obj;
  }
  return null
};

export const removeAuthToken = () => {
  document.cookie = `token-weekly=${null}; expires=${new Date(Date.now() - 10000).toUTCString()}`;
};