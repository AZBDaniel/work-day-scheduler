const hours = [8,9,10,11,12,13,14,15,16,17];
const now = dayjs().format('dddd, MMMM DD YYYY');
var currentHour = 0;

$("#currentDay").text(now);


$('.time-block').each(function (i) {
    const currentTimeHour = parseInt(dayjs().format('HH'));
    var timeSlotHour = hours[i];

    if (timeSlotHour < currentTimeHour) {
        $(this).children('.description').addClass('past');
    } else if (timeSlotHour == currentTimeHour) {
        $(this).children('.description').addClass('present');
    } else {
        $(this).children('.description').addClass('future');
    }
});







