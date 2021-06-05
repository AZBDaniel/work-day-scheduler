
const now = dayjs().format('dddd, MMMM DD YYYY');

$("#currentDay").text(now);


$('.time-block').each(function () {
    const currentTimeHour = parseInt(dayjs().format('HH'));
    var timeSlot = $(this).children('.timeContainer').text();
    var timeSlotHour = parseInt(timeSlot.trim().split(':')[0]);
    debugger
    if (timeSlotHour < currentTimeHour) {
        $(this).children('.description').addClass('past');
    } else if (timeSlotHour == currentTimeHour) {
        $(this).children('.description').addClass('present');
    } else {
        $(this).children('.description').addClass('future');
    }
});







