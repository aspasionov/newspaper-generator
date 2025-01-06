const urlToSrc = (id) => {
  return `https://drive.google.com/thumbnail?id=${id}&sz=w1000`
}

const localStorageHandler = (key, obj) => {
  const prevData = JSON.parse(localStorage.getItem("nwsppr"));
  localStorage.setItem("nwsppr", JSON.stringify({...prevData, ...{[key]: obj}}));
}

export { urlToSrc, localStorageHandler }