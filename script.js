var age = +prompt ('Введите свой возраст:')


if (age <= 18 && age > 0) {
    alert ('Вы еще молоды вамм нужно учиться')
}else if ( age > 18 && age <= 50) {
    alert('Вам нужно работать')
}else if ( age > 50 && age <= 59) {
    alert('Вам скоро на пенсию')
}else if ( age > 59 && age <= 100) {
    alert('Вы пенсионер')
}else {
    alert('Что-то пошло не так')
}


var num = +prompt ('Введите время в ')

switch(num){
    case 0:
        alert('Полночь')
        break;
        case 1:
        alert('час ночи')
        break;
        case 2:
        alert('2 часа ночи')
        break;
        case 3:
        alert('3 часа ночи')
        break;
        case 4:
        alert('4 часа ночи')
        break;
        case 5:
        alert('5 часов ночи')
        break;
        case 6:
        alert('6 часов утра')
        break;
        case 7:
        alert('7 часов утра')
        break;
        case 8:
        alert('8 часов утра')
        break;
        case 9:
        alert('9 часов утра')
        break;
        case 10:
        alert('10 часов утра')
        break;
        case 11:
        alert('11 часов утра')
        break;
        case 12:
        alert('Полдень')
        break;
        case 13:
        alert('час дня')
        break;
        case 14:
        alert('2 часа дня')
        break;
        case 15:
        alert('3 часа дня')
        break;
        case 16:
        alert('4 часа дня')
        break;
        case 17:
        alert('5 часа дня')
        break;
        case 18:
        alert('6 часов вечера')
        break;
        case 19:
        alert('7 часов вечера')
        break;
        case 20:
        alert('8 часов вечера')
        break;
        case 21:
        alert('9 часов вечера')
        break;
        case 22:
        alert('10 часов вечера')
        break;
        case 23:
        alert('11 часов вечера')
        break;
}

var a = +prompt('Введите первое число:')
var b = +prompt('Введите второе число:')
var c = +prompt('Введите третье число:')
var mn, mx, sr;

if (a < b) mn = a; else mn = b;
if (c < mn) mn = c;
if (a > b) mx = a; else mx = b;
if (c > mx) mx = c;
sr = a + b + c - mn - mx;
alert(sr);