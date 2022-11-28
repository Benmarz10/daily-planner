var today = dayjs();

$(init);

function init() {
//dayjs for current date
$('#currentDay').text(today.format('MMM D, YYYY'));

//this sets the color coding for each block and puts it on an interval to change every minute
defineTimeBlocks();
setInterval(defineTimeBlocks, 60000);

$(".time-block").each(function() {
    var blockId = $(this).attr("id");
    //set data to local storage
    $("#" + blockId + "textarea").text(localStorage.setItem("textarea" + blockId));
  });

    $(".SaveBtn").on('save', clickSave)
    }

    function defineTimeBlocks(){
        $(".time-block").each(function(){
           
            var HourBlock = parseInt($(this).attr("id").replace("hour-", ""));
            var currentHour = parseInt(dayjs().format("H"));
            
            $(this).removeClass("future past present");
            
            if (HourBlock < currentHour) {
                $(this).addClass("past");
            } 
            else if (HourBlock > currentHour) {
                $(this).addClass("future");
            } 
            else {
                $(this).addClass("present")
            }

        })
    }

    //get data from the local storage
    function clickSave() {
        $('#' + blockId + " textarea").text(localStorage.getItem("textarea" + blockId));
    }
