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
currentTime.appendChild(currentDay)
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
var twelve = 12;
var one = 13;
var two = 14;
var three = 15;

// pull data from local storage for each row using id and class name
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));

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

if (currentHour < eleven) {
  $('#11morning').addClass("future");
} else if (currentHour > eleven){
  $('#11morning').addClass("past");
} else if (currentHour = eleven){
  $('#11morning').addClass("present");
}

if (currentHour < twelve) {
  $('#12afternoon').addClass("future");
} else if (currentHour > twelve){
  $('#12afternoon').addClass("past");
} else if (currentHour = twelve){
  $('#12afternoon').addClass("present");
}

if (currentHour < one) {
  $('#1afternoon').addClass("future");
} else if (currentHour > eleven){
  $('#1afternoon').addClass("past");
} else if (currentHour = eleven){
  $('#1afternoon').addClass("present");
}

if (currentHour < two) {
  $('#2afternoon').addClass("future");
} else if (currentHour > two){
  $('#2afternoon').addClass("past");
} else if (currentHour = two){
  $('#2afternoon').addClass("present");
}

if (currentHour < three) {
  $('#3afternoon').addClass("future");
} else if (currentHour > three){
  $('#3afternoon').addClass("past");
} else if (currentHour = three){
  $('#3afternoon').addClass("present");
}




 // local storage with JSON


//       $('#hours').on('click', function(event) {
//         event.preventDefault();

//         // Get the to-do "value" from the textbox and store it as a variable using `.val()` and `.trim()`
//         var toDoTask = $('#to-do')
//           .val()
//           .trim();

//         // Add the new to-do to our local 'list' variable
//         list.push(toDoTask);

//         // Update the to-dos on the page
//         renderTodos(list);

//         // Save the to-dos into localStorage
//         // We need to use JSON.stringify to turn the list from an array into a string
//         localStorage.setItem('todolist', JSON.stringify(list));

//         // Clear the textbox when done using `.val()`
//         $('#to-do').val('');
//       });