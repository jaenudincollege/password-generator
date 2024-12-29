import password from './password-array.js';
import { number, display, form, qrBox, passVal } from './dom.js';
import getRandomItems from './logic.js';
import generateQRCode from './qrcode.js';

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const randomPassword = getRandomItems(password, number.value);
  display.textContent = randomPassword;
  generateQRCode(qrBox, randomPassword);
});
