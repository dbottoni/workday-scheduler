// function insertDate(date) {  
//   let h3= document.createElement('h3');
//   h3.textContent = date;
//   return h3;
// }

// const currentDay = document.querySelector('#currentDay');
// currentDay.appendChild(insertDate(new Date()));
// //currentDay.format('MMMM');


var currentDay = document.createElement("p");
currentDay.innerHTML = moment().format("MMMM DD, YYYY h:mm a");
timeNow.appendChild(currentDay)
console.log(moment());

$(".saveBtn").on("click", function(){
  var textValue = $(this).siblings(".description").val();
  var time = $(this).parent().attr("id");

  localStorage.setItem(time, textValue);
});


// make readable time vairables 
var nine = 9;
var ten = 10;
var eleven = 11;
var two = 14;
var three = 15;

// pull data from local storage for each row using id and class name
$("#hour9 .description").val(localStorage.getItem("hour9"));


// use moment.js to set currentHour var to the hour
var currentHour = moment().format('H');

if (currentHour < nine) {
  $('#9morning').addClass("future");
} else if (currentHour > nine){
  $('#9morning').addClass("past");
} else if (currentHour = nine){
  $('#9morning').addClass("present");
}

if (currentHour < ten) {
  $('#10morning').addClass("future");
} else if (currentHour > ten){
  $('#10morning').addClass("past");
} else if (currentHour = ten){
  $('#10morning').addClass("present");
}

if (currentHour < two) {
  $('#11morning').addClass("future");
} else if (currentHour > eleven){
  $('#11morning').addClass("past");
} else if (currentHour = eleven){
  $('#11morning').addClass("present");
}


if (currentHour < three) {
  $('#3afternoon').addClass("future");
} else if (currentHour > three){
  $('#3afternoon').addClass("past");
} else if (currentHour = three){
  $('#3afternoon').addClass("present");
}

if (currentHour < two) {
  $('#2afternoon').addClass("future");
} else if (currentHour > two){
  $('#2afternoon').addClass("past");
} else if (currentHour = two){
  $('#2afternoon').addClass("present");
}