import './style.css'
import palettes from '../palettes.json' // JSON data

console.log(palettes); // test

document.addEventListener("DOMContentLoaded", function () {
  // Get the container element, aka div
  const palettesContainer = document.getElementById("app");

  // Create an unordered list to display color palettes
  const ul = document.createElement("ul");

  // Iterate through each color palette in the JSON data
  palettes.forEach((palette) => {
      // Create list items for each color palette
      // Convert to just innerHTML?
      const li = document.createElement("li");
      li.innerHTML = `<strong>${palette.title}</strong><div class="color-swatch-container">${palette.colors.map(color => `<div class="color-swatch" style="background-color: ${color};"></div>`).join('')}</div>(Temperature: ${palette.temperature})`;

      // Append each list item to the unordered list
      ul.appendChild(li);
  });

  // Append the unordered list to the container
  palettesContainer.appendChild(ul);
});


