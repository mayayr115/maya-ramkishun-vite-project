import palettes from '../palettes.json'; // JSON data

export const loadPalettes = () => {
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