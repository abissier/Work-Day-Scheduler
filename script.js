//main clock to display time and day
var today = moment();
$("#date").text(today.format("LLLL"));

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
        var momentCompare3 = momentCompare2.toString().substr(15,6);

        //compare hours and add classes to change background colors
        if (momentCompare3 < (dataTime[0].outerText)) {
            todo[0].classList.add("after");
        } else if (momentCompare3 > (dataTime[0].outerText)) {
            todo[0].classList.add("before");
        } else {
            todo[0].classList.add("same");
        }
    }
};

//call function 
compareTime();


//create save button w event listner
$(document).on("click", ".save", saveInput);

// //function that saves user text input when save button is clicked
function saveInput(event) {

    // Prevent the default behavior
    event.preventDefault();
    //create variable for the item
    var todoItem = $('input[name="todo"]').val();
    console.log(todoItem);
}

//call function
saveInput();


