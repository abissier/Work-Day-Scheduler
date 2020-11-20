var today = moment();
$("#date").text(today.format("LLLL"));

//timeblock is color coded to indicate whether it is in the past, present, or future via classList?
//query is after, is before, is same?

//create variable called currenthour that we can use to compare to time blocks 

var currentHour = moment().format("H");
console.log(currentHour);

// grab HTML data attr to compare to current hour
var dataAtt = document.querySelector("#time-keeper");
console.log(dataAtt.dataset.time);
var timeSlot = dataAtt.dataset.time;

//parse the dataattr so it can be compared
var calendarHour = moment(timeSlot, "H");
console.log(calendarHour);

//function that compares current hour w calendar hour
function matchTime (currentHour, calendarHour) {

    //grab time from moment obj
    var momentObj = (moment(currentHour));
    var momentObjTime = momentObj._d;
    console.log(momentObjTime);

    //grab time from currentHour obj 
    var calendarHourObj = (moment(calendarHour));
    var calendarHourObjTime = calendarHourObj._d;
    console.log(calendarHourObjTime);

    //compare hours
    if (moment(currentHour).isAfter(calendarHour)) {
        console.log("success");
    } else {
        console.log("figure this out");
    }

}

//call function 
matchTime();

    // var todo9 = document.querySelector("#todo9");


//     if(moment(currentHour).isBefore(dataAtt)) {
//         todo9.classList.add("before");
//     } else if (moment(hour).isAfter(dataAtt)) {
//         // todo9.classList.add("after");
//     } else {
//         console.log("success")

//         // todo9.classList.add("current");
//     }

// }


// var nineAMEl = $('input[name="todo"]');

// //create save button w event listner

// $(document).on("click", ".save", saveInput);

// //function that saves user text input when save button is clicked
// function saveInput(event) {

//     // Prevent the default behavior
//     event.preventDefault();
//     console.log(nineAMEl.val());
// }


// //when the page refreshes the content stays via preventDefault()
// //local storeage?


// for loop that went through id data attribute compare that  hour from current 
// moment for current time w current hour
// compare to the hour 