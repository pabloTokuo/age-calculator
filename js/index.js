// Regex only number inputs
const inputCalendar = document.querySelectorAll('[data-js="input-calendar"]');

inputCalendar.forEach((input) => {
  const handleInput = () => {
    input.value = onlyNumber(input.value);
  }

  input.addEventListener('input', handleInput);
})

const onlyNumber = (v) => {
  if (!v) return '';
  v = v.replace(/\D/g, '');
  v = v.replace(/(\d)(\d{4})$/, '$1-$2');
  return v;
}

// Input validator
const btn = document.querySelector('[data-js="btn"]');
const day = document.getElementById('day');
const month = document.getElementById('month');
const year = document.getElementById('year');
