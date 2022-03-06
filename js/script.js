//Меню-бургер

var burger = document.getElementById("burger");
var navLinks = document.getElementsByClassName("nav__links")[0];

burger.addEventListener('click', function () {
    this.classList.toggle('active-menu');
    navLinks.classList.toggle('active-menu');
});

//Задание 2
function getDayInfo(date) {
    var dateSplit = date.split('.');

    const mounths = {
        '01': 'Января',
        '02': 'Февраля',
        '03': 'Марта',
        '04': 'Апреля',
        '05': 'Мая',
        '06': 'Июня',
        '07': 'Июля',
        '08': 'Августа',
        '09': 'Сентября',
        '10': 'Октября',
        '11': 'Ноября',
        '12': 'Декабря',
    };

    const days = {
        '0': 'Четверг',
        '1': 'Пятница',
        '2': 'Суббота',
        '3': 'Воскресенье',
        '4': 'Понедельник',
        '5': 'Вторник',
        '6': 'Среда',
    }

    const weeks = {
        '01': '1 неделя',
        '02': '1 неделя',
        '03': '1 неделя',
        '04': '1 неделя',
        '05': '1 неделя',
        '06': '1 неделя',
        '07': '1 неделя',
        '08': '2 неделя',
        '09': '2 неделя',
        '10': '2 неделя',
        '11': '2 неделя',
        '12': '2 неделя',
        '13': '2 неделя',
        '14': '2 неделя',
        '15': '3 неделя',
        '16': '3 неделя',
        '17': '3 неделя',
        '18': '3 неделя',
        '19': '3 неделя',
        '20': '3 неделя',
        '21': '3 неделя',
        '22': '4 неделя',
        '23': '4 неделя',
        '24': '4 неделя',
        '25': '4 неделя',
        '26': '4 неделя',
        '27': '4 неделя',
        '28': '4 неделя',
        '29': '5 неделя',
        '30': '5 неделя',
        '31': '5 неделя',
    };

    var dateInFormat = new Date(dateSplit[2], dateSplit[1], dateSplit[0]);
    var day = dateInFormat.getDay();
    var dateText = "";

    if (dateSplit[2] === undefined || dateSplit[1] === undefined || dateSplit[0] === undefined) dateText = " ";
    else {

        for (const key in days) {
            if (day == key) dateText += `${days[key]}, `;
        }

        for (const key in weeks) {
            if (dateSplit[0] == key) dateText += `${weeks[key]} `;
        }

        for (const key in mounths) {
            if (dateSplit[1] == key) dateText += `${mounths[key]} `;
        }

        dateText += `${dateSplit[2]} года`;
    }

    return dateText;
}

var inputDate = document.getElementById('inputDate');
var outputText = document.getElementsByClassName('date__text')[0];

inputDate.addEventListener('change', function () {
    var dateValue = this.value;
    var dateReverse = dateValue.split('-').reverse().join('.');

    outputText.innerText = getDayInfo(dateReverse);
});

