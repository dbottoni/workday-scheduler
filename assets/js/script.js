function insertDate(date) {  
  let h3= document.createElement('h3');
  h3.textContent = date;
  return h3;
}

const currentDay = document.querySelector('#currentDay');
currentDay.appendChild(insertDate(new Date()));
//currentDay.format('MMMM');



