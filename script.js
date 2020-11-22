//main clock to display time and day
var today = moment();
$("#date").text(today.format("LLLL"));

getTodoFromLocalStorage()

//create variable called currenthour that we can use to compare w time blocks 
var currentHour = moment().format("H");

// grab HTML data attr to compare to current hour
var dataAtt = document.querySelector("#time-keeper");
var timeSlot = dataAtt.dataset.time;

//parse the dataattr so it can be compared
var calendarHourObj = moment(timeSlot, "H");

//function that compares current hour w calendar hour
function compareTime(currentHour, calendarHourTime) {

    //grab time from moment obj
    var momentObj = (moment(currentHour));
    var momentObjTime = momentObj._d;

    //grab time from currentHour obj 
    calendarHourTime = calendarHourObj._d;

    //for loop to run through data attrbutes to compare time and add classes to todo ids
    for (var i = 9; i < 18; i++) {

        //create variables that will update when looped through
        var todo = document.querySelectorAll("#todo" + i);
        var dataTime = document.querySelectorAll("div[data-time='" + i + "']");

        //grab the hour and minutes from moment obj
        var momentCompare = (moment(momentObjTime));
        var momentCompare2 = momentCompare._d;
        var momentCompare3 = momentCompare2.toString().substr(16, 2);
        var newCalenTime = dataTime[0].outerText.substr(0, 2);

        if (newCalenTime.includes(':')) {
            newCalenTime = newCalenTime.slice(0, 1).padStart(2, '0');
        }

        //compare hours and add classes to change background colors

        if (momentCompare3 < newCalenTime) {
            todo[0].classList.add("before");
        } else if (momentCompare3 > newCalenTime) {
            todo[0].classList.add("after");
        } else {
            todo[0].classList.add("same");
        }
    }
};

//call function 
compareTime();

//grab save button from html
var saveButton = document.querySelectorAll(".btn-success");

//for loop
for (var i = 0; i < saveButton.length; i++) {

    // //create save button event listner 
    saveButton[i].addEventListener("click", function (event) {
        event.preventDefault();
      
        var text= event.target.id
        var text2 = document.getElementById("todo" + text +"")
        var text3= text2.value;

        localStorage.setItem("todo" + text, text3);
        console.log(text3)
        console.log(text2)
    });
}

function getTodoFromLocalStorage(){

    for (var i = 9; i < 17; i++){
        var displayTodo = localStorage.getItem("todo" + i)
        if (displayTodo) {
           document.getElementById("todo" + i +"").value = displayTodo;
        }
    }
}

