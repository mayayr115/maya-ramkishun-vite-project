import palettes from '../palettes.json'; // JSON data

const setLocalStorageKey = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value))
}

const getLocalStorageKey = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key))
  } catch (err) {
    console.error(err);
    return null;
  }
}

const getPalettes = () => {
  const palettesContainer = document.getElementById('section');

  const ul = document.createElement('ul');

  palettes.forEach((palette) => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${
      palette.title
    }</strong><div class="color-swatch-container">${palette.colors
      .map(
        (color) =>
          `<div class="color-swatch" style="background-color: ${color};"></div>`
      )
      .join('')}</div>(Temperature: ${palette.temperature})`;

    ul.appendChild(li);
  });

  palettesContainer.appendChild(ul);
}

const setPalettes = (newPalettes) => {

}

const initPalettesIfEmpty = () => {

}

const addPalette = (newPalette) => {
  
}

const loadPalette = () => {

}

const removePalette = (paletteUuid) => {

}

export {
  setLocalStorageKey,
  getLocalStorageKey,
  getPalettes,
  setPalettes,
  initPalettesIfEmpty,
  addPalette,
  loadPalette,
  removePalette,
};