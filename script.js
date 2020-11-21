var today = moment();
$("#date").text(today.format("LLLL"));

//create variable called currenthour that we can use to compare to time blocks 
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

    //grab first todo9 id and datatime9 data attr to iterate through for loop
    var todo9 = document.querySelectorAll("#todo9");
    

    //for loop to run through data attrbutes to compare time and add classes to todo ids
    for (var i = 9; i < 17; i++) {
        var todo = document.querySelectorAll("#todo" + i);
        var dataTime = document.querySelectorAll("div[data-time='" + i + "']");
        var momentCompare = (moment(momentObjTime));
        var momentCompare2 = momentCompare._d;
        var momentCompare3 = momentCompare2.toString().substr(15,3);

    
console.log(momentCompare3);

        //compare hours and add classes to change background colors
        if (moment(momentObjTime).isBefore(dataTime[0].outerText)) {
            todo[0].classList.add("before");
        } else if (moment(momentObjTime).isAfter(dataTime[0].outerText)) {
            todo[0].classList.add("after");
        } else {
            todo[0].classList.add("same");
        }
    }
}

//call function 
compareTime();





// var nineAMEl = $('input[name="todo"]');

// //create save button w event listner

// $(document).on("click", ".save", saveInput);

// //function that saves user text input when save button is clicked
// function saveInput(event) {

//     // Prevent the default behavior
//     event.preventDefault();
//     console.log(nineAMEl.val());
// }


// ex: var listEl = document.querySelector("#grocery-list");
// var shoppingCartEl = document.querySelector("#shopping-cart");
// var groceries = ["Bananas", "Apples", "Oranges", "Grapes", "Blueberries"];

// listEl.addEventListener("click", function(event) {
//   event.preventDefault();
//   if(event.target.matches("button")) {
//     var item = document.createElement("div");
//     item.textContent = groceries[event.target.parentElement.id];
//     shoppingCartEl.append(item);
//   }
// });


