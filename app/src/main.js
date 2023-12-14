import './style.css';
import {
  setLocalStorageKey,
  getLocalStorageKey,
  getPalettes,
  setPalettes,
  initPalettesIfEmpty,
  addPalette,
  loadPalette,
  removePalette,
} from './helper.js';


document.addEventListener('DOMContentLoaded', getPalettes());

const handleSubmit = (e) => {
  e.preventDefault();
  addPalette();
  const form = e.target;
  console.log(form)
  form.reset();
};

const palettePicker = document.querySelector('#palette-picker');
palettePicker.addEventListener('submit', handleSubmit);
