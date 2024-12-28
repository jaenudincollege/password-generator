import password from './password-array.js';
import { numVal, btn, display } from './dom.js';
import getRandomItems from './logic.js';

console.log(numVal);

btn.addEventListener('click', () => {
  const randomPassword = getRandomItems(password, numVal);
  display.textContent = randomPassword;
});

//  TODO: fix the number value bug
// TODO: add qr code from generate random password
