const loadJson = (url: any) => {
  return fetch(url).then((response) => {
    if (response.status == 200) {
      return response.json();
    } else {
      throw new Error(response.statusText);
    }
  });
};
loadJson("https://api.github.com/users").catch(alert);
