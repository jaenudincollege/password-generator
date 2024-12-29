const display = document.querySelector('.display');
const number = document.querySelector('#number');
const form = document.querySelector('form');
const year = document.querySelector('.year');
const qrBox = document.querySelector('.qr-box');
const passVal = document.querySelector('.display');

const date = new Date();
year.textContent = date.getFullYear();

export { number, display, form, qrBox, passVal };
