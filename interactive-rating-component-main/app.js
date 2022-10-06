const param = new URLSearchParams(location.search);
const formRating = param.get('rating');

const insert = (formRating) => document.querySelector('#rate').innerHTML = formRating;

document.addEventListener("DOMContentLoaded", insert(formRating));