// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var SaveBtn = $('#hour-9');
var today = dayjs();

$(init);

function init() {
//Jquery for current date
$('#currentDay').text(today.format('MMM D, YYYY'));

defineTimeBlocks();
setInterval(defineTimeBlocks, 60000);

$(".time-block").each(function() {
    var blockId = $(this).attr("id");
    // load saved data from local storage
    $("#" + blockId + " textarea").text(localStorage.getItem(dayjs().format("DDDYYYY") + blockId));
  });

    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?

    $(".SaveBtn").on('click', handleSave)
    }

    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    function defineTimeBlocks(){
        $(".time-block").each(function(){
            var HourBlock = parseInt($(this).attr("id").replace("hour-", ""));
            var currentHour = parseInt(dayjs().format("H"));
            $(this).removeClass("past present future");
            if (HourBlock < currentHour) {
                $(this).addClass("past");
            } else if (HourBlock > currentHour) {
                $(this).addClass("future");
            } else {
                $(this).addClass("present")
            }

        })
    }

    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.