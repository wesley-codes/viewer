export const setCookie = (cValue: string, exdays: number) => {
  const date = new Date();
  date.setTime(date.getTime() + exdays * 24 * 60 * 60 * 100);
  let expires = "expires=" + date.toUTCString();
  document.cookie =
    "viewer_cookie-token_x_token" + "=" + cValue + ";" + expires + ";path=/";

console.log(document.cookie)
  };
