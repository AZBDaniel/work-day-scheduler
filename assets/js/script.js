const hours = [8,9,10,11,12,13,14,15,16,17];
const now = dayjs().format('dddd, MMMM DD YYYY');
var currentHour = 0;

$("#currentDay").text(now);


$('.time-block').each(function (i) {
    const currentTimeHour = parseInt(dayjs().format('HH'));
    var timeSlotHour = hours[i];
console.log(timeSlotHour)
    if (timeSlotHour < currentTimeHour) {
        $(this).children('.description').addClass('past');
    } else if (timeSlotHour === currentTimeHour) {
        $(this).children('.description').addClass('present');
    } else {
        $(this).children('.description').addClass('future');
    }
});

$('.saveBtn').on('click', function () {
    var saveClick = $(this).siblings('.description').val();
    var hourId = $(this).parent().attr('id');
    localStorage.setItem(hourId, saveClick);
    console.log(hourId, saveClick);
})

$('#hour8 .description').val(localStorage.getItem('hour8'));
$('#hour9 .description').val(localStorage.getItem('hour9'));
$('#hour10 .description').val(localStorage.getItem('hour10'));
$('#hour11 .description').val(localStorage.getItem('hour11'));
$('#hour12 .description').val(localStorage.getItem('hour12'));
$('#hour1 .description').val(localStorage.getItem('hour1'));
$('#hour2 .description').val(localStorage.getItem('hour2'));
$('#hour3 .description').val(localStorage.getItem('hour3'));
$('#hour4 .description').val(localStorage.getItem('hour4'));
$('#hour5 .description').val(localStorage.getItem('hour5'));