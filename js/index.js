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
const dayInput = document.getElementById('day');
const monthInput = document.getElementById('month');
const year = document.getElementById('year');


btn.addEventListener('click', () => {
  let dayValue = parseInt(dayInput.value);
  let monthValue = parseInt(monthInput.value);
  

  const isDayValidForMonth = (day, month) => {
    // Validating month
    if (month < 1 || month > 12) {
      return false;
    }
  
    // Creating Date object
    const date = new Date(new Date().getFullYear(), month - 1, day);
    
    return date.getMonth() === month - 1 && date.getDate() === day;
  }
  
  const isValid = isDayValidForMonth(dayValue, monthValue);
  console.log(`Is ${dayValue}/${monthValue} a valid date? ${isValid}`);
})

