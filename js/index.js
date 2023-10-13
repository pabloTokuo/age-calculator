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
const yearInput = document.getElementById('year');

btn.addEventListener('click', () => {
  let dayValue = parseInt(dayInput.value);
  let monthValue = parseInt(monthInput.value);
  let yearValue = parseInt(yearInput.value);
  

  const isDayValidForMonth = (day, month, year) => {
    if (month < 1 || month > 12) {
      return false;
    }

    if (year > new Date().getFullYear()) {
      return false;
    }
  
    const date = new Date(new Date().getFullYear(), month - 1, day);
    
    return date.getMonth() === month - 1 && date.getDate() === day;
  }
  
  const isValid = isDayValidForMonth(dayValue, monthValue, yearValue);

  const dayError = document.querySelector(".day-error");
  const monthError = document.querySelector(".month-error");
  const yearError = document.querySelector(".year-error");
  const dayReq = document.querySelector(".day-req");
  const monthReq = document.querySelector(".month-req");
  const yearReq = document.querySelector(".year-req");


  if(isNaN(dayValue)) {
    dayReq.style.display = "block";
  } else {
    dayReq.style.display = "none";
  }

  if(isNaN(monthValue)) {
    monthReq.style.display = "block";
  } else {
    monthReq.style.display = "none";
  }

  if(isNaN(yearValue)) {
    yearReq.style.display = "block";
  } else {
    yearReq.style.display = "none";
  }

  if(dayValue == 0 || dayValue > 31) {
    dayError.style.display = "block";
  } else {
    dayError.style.display = "none";
  }

  if(monthValue == 0 || monthValue > 12) {
    monthError.style.display = "block";
  } else {
    monthError.style.display = "none";
  }

  if(yearValue > 2023) {
    yearError.style.display = "block";
  } else {
    yearError.style.display = "none";
  }

  const oneDay = 24 * 60 * 60 * 1000;

  const spanYear = document.querySelector("[data-year='year']");
  const spanMonth = document.querySelector("[data-month='month']");
  const spanDay = document.querySelector("[data-day='day']");

  let totalMonth = monthValue - (new Date().getMonth() + 1);
  spanMonth.innerText = totalMonth;

  const birthdate = new Date(`${yearValue}-${monthValue}-${dayValue}`);
  const today = new Date();

  // Calculate the age difference
  const ageDiff = today - birthdate;

  spanYear.innerText = Math.floor(ageDiff / (oneDay * 365));
  spanMonth.innerText = Math.floor((ageDiff % (oneDay * 365)) / (oneDay * 30));
  spanDay.innerText = Math.floor(((ageDiff % (oneDay * 365)) % (oneDay * 30)) / oneDay);

  if(isNaN(yearValue) || isNaN(monthValue) || isNaN(dayValue)) {
    spanYear.innerText = '- -';
    spanMonth.innerText = '- -';
    spanDay.innerText = '- -';
  }
})

