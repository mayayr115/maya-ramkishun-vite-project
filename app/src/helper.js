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

export const removePalette = (paletteUuid) => {
  const palettes = getPalettes().filter((palette) => palette !== paletteUuid);
  getPalettes([...palettes]);
}

export {
  setLocalStorageKey,
  getLocalStorageKey,
  initPalettesIfEmpty,
};