import './style.css';
import { v4 as uuidv4 } from 'uuid'
import { loadPalettes } from './util.js';
import { addPalette, removePalette } from './helper.js';

document.addEventListener('DOMContentLoaded', loadPalettes());

const handleSubmit = (e) => {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);
  const formObj = Object.fromEntries(formData)
  
  const newPalette = {
    uuid:uuidv4(),
    title: formObj.title,
    colors: [formObj.color1, formObj.color2, formObj.color3],
    temperature: formObj.temperature,
  };

  addPalette(newPalette);

  form.reset();
};

const palettePicker = document.querySelector('#palette-picker');
palettePicker.addEventListener('submit', handleSubmit);
