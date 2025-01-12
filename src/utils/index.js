import { NEWSPAPER_KEY } from '../constants'

const urlToSrc = (id) => {
  return `https://drive.google.com/thumbnail?id=${id}`
}

const localStorageHandler = (key, obj) => {
  const prevData = JSON.parse(localStorage.getItem(NEWSPAPER_KEY));
  localStorage.setItem(NEWSPAPER_KEY, JSON.stringify({...prevData, ...{[key]: obj}}));
}

export { urlToSrc, localStorageHandler }