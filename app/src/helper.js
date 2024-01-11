import palettes from '../palettes.json'; // JSON data

const setLocalStorageKey = (key, value) => localStorage.setItem(key, JSON.stringify(value))

const getLocalStorageKey = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key))
  } catch (err) {
    console.error(err);
    return null;
  }
}

export const getPalettes = () => getLocalStorageKey('palettes') || [];

export const setPalettes = (newPalettes) => setLocalStorageKey('palettes', newPalettes);

const initPalettesIfEmpty = () => setPalettes(palettes);

export const addPalette = (newPalette) => {
  const newPalettes = getPalettes();
  setPalettes([...newPalettes, newPalette]);
}

export const removePalette = (uuid) => {
  const newPalettes = getPalettes().filter(palette => palette.uuid !== uuid);
  setPalettes(newPalettes);
}

const renderUserPalette = (parent, data) => {
  const { title, colors, temperature, uuid } = data;
  const li = document.createElement('li');
  li.dataset.uuid = uuid;
  const h2 = document.createElement('h2');
  h2.innerText = title;
  const div = document.createElement('div')
  div.dataset.uuid = temperature;
}

export {
  setLocalStorageKey,
  getLocalStorageKey,
  initPalettesIfEmpty,
};