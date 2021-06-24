var currentDay = document.createElement("p");
currentDay.innerHTML = moment().format("MMMM DD, YYYY h:mm a");
currentTime.appendChild(currentDay)

$(".saveBtn").on("click", function(){
  var textValue = $(this).siblings(".description").val();
  var time = $(this).parent().attr("id");
  localStorage.setItem(time, textValue);
});

 var timeSlots = [9,10,11,12,13,14,15,16,17];
 var currentHour = moment().format('H');

for (var i = 0; i < timeSlots.length; i++){

  if (currentHour < timeSlots[i] ) {
  $(`#time${timeSlots[i]}`).addClass("future");
} else if (currentHour > timeSlots[i]){
  $(`#time${timeSlots[i]}`).addClass("past");
} else if (currentHour = timeSlots[i]){
  $(`#time${timeSlots[i]}`).addClass("present");
}
}

// pull data from local storage for each row using id and class name
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));



