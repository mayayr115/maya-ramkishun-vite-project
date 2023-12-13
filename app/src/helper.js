const setLocalStorageKey = (key, value) => {


}

const getLocalStorageKey = (key) => {
  
}

const getPalettes = () => {

}

const setPalettes = (newPalettes) => {

}

const initPalettesIfEmpty = () => {

}

const addPalette = (newPalette) => {
  const li = document.createElement("li");
  li.innerHTML = `<strong>${newPalette.title}</strong><div class="color-swatch-container">${newPalette.colors.map(color => `<div class="color-swatch" style="background-color: ${color};"></div>`).join('')}</div>(Temperature: ${newPalette.temperature})`;

  // Append each list item to the unordered list
  ul.appendChild(li);

  // Append the unordered list to the container
  palettesContainer.appendChild(ul);
}

const removePalette = (paletteUuid) => {

}

export {
  setLocalStorageKey,
  getLocalStorageKey,
  getPalettes,
  setPalettes,
  addPalette,
  removePalette,
};