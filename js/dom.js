const display = document.querySelector('.display');
const number = document.querySelector('#number');
const form = document.querySelector('form');
const year = document.querySelector('.year');

const date = new Date();
year.textContent = date.getFullYear();

export { number, display, form };
