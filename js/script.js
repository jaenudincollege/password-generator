import password from './password-array.js';
import { number, form, display } from './dom.js';
import getRandomItems from './logic.js';

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const randomPassword = getRandomItems(password, number.value);
  display.textContent = randomPassword;
});

// TODO: add qr code from generate random password
