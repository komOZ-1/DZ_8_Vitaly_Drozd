//Задание 1
let name = prompt('Введите ваше Имя'),
    age = prompt('Сколько вам лет ?'),
    city = prompt('В каком городе проживаете ?'),
    phone = prompt('ваш номер телефона'),
    email = prompt('ваш email'),
    company = prompt('место работы');
document.writeln("Задание 1: ");
document.writeln("Меня зовут " + name +" мне " + age + " лет. " + " Я проживаю в городе " + city +
" и работаю в компании " + company + "." + " Мои контактные данные: " + phone + " " + email);


//Задание 2
document.writeln("Задание 2: ");
let date = new Date();

let year = date.getFullYear();

document.writeln(name + " родился в " + (year - age) + " году.");



//Задание 3
console.log("Задание 3");
let customString = '123411',
    sumFirst = 0,
    sumSecond = 0;
str = customString.split('');
for (let i = 0; i < str.length; i++) {
    if (i <= 2) {
        sumFirst = sumFirst + Number(str[i]);
    } else {
        sumSecond = sumSecond + Number(str[i]);
    }
}

if (sumFirst === sumSecond) {
    console.log('Yes');
} else {
    console.log('No');
}

//Задание 4
console.log("Задание 4");
let a1 = 1;
if (a1 > 0) {
    console.log("верно");
} else {
    console.log("неверно");
}

//Задание 5
console.log("Задание 5");
let a = 10,
    b = 2,
    sum,
    diff,
    multiply,
    div,
    squareOfSum;

sum = a + b;
diff = a - b;
multiply = a * b;
div = a / b;

if (sum > 1) {
    squareOfSum = Math.pow(sum, 2)
}

console.log(
    'Сумма: ' + sum,
    'Разность: ' + diff,
    'Произведение: ' + multiply,
    'Частное: ' + div,
    'Квадрат суммы: ' + squareOfSum
);

//Задание 6
console.log("Задание 6");
if ((a > 2 && a < 11) || (b >= 6 && b < 14)) {
    console.log("верно");
} else {
    console.log("неверно");
}







//Задание 7
console.log("Задание 7");
let n = 35;
if (n <= 15) {
    console.log('первая половина')
} else if (n <= 30) {
    console.log('вторая половина')
} else if (n <= 45) {
    console.log('третяя половина')
} else {
    console.log('четвертая половина')
}



//Задание 8
console.log("Задание 8");
let day = 60;
if (day > 0 && day < 11) {
    console.log('первая');
} else if (day > 10 && day < 21) {
    console.log('вторая');
} else {
    console.log('третья');
}





//Задание 9
let dayNum9 = 534,
    years = Math.floor(dayNum9 / 365) === 1
        ? parseInt(dayNum9 / 365)
        : Math.floor(dayNum9 / 365),
    monthes = Math.floor(dayNum9 / 31) === 1
        ? parseInt(dayNum9 / 31)
        : Math.floor(dayNum9 / 31),
    weeks = Math.floor(dayNum9 / 7) === 1
        ? parseInt(dayNum9 / 7)
        : Math.floor(dayNum9 / 7),
    hours = dayNum9 * 24,
    minutes = dayNum9 * 1440,
    seconds = dayNum9 * 86400;

years < 1
    ? console.log('«Меньше года»')
    : console.log(`Количество лет: ${years}`);
monthes < 1
    ? console.log('«Меньше месяца»')
    : console.log(`Количество месяцев: ${monthes}`);
weeks < 1
    ? console.log('«Меньше недели»')
    : console.log(`Количество недель: ${weeks}`);


console.log(
    `Количество часов: ${hours}`,
    `Количество минут: ${minutes}`,
    `Количество секунд: ${seconds}`
);


//Задание 10  по аналогии JavaScript Date getMonth()
console.log('Задание 10')
let days = day > 365 ? day % 365 : day,
    sumDays = 0,
    indexMonth;

let monthes1 = [
    31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31
];

for (let i = 0; i < monthes1.length; i++) {
    sumDays = sumDays + monthes1[i];

    if (sumDays >= days) {
        indexMonth = i + 1;
        break;
    }
}

console.log('Номер месяца: ' + indexMonth);

switch (indexMonth) {
    case 1:
        console.log('зима');
        break;
    case 2:
        console.log('зима');
        break;
    case 3:
        console.log('весна');
        break;
    case 4:
        console.log('весна');
        break;
    case 5:
        console.log('весна');
        break;
    case 6:
        console.log('лето');
        break;
    case 7:
        console.log('лето');
        break;
    case 8:
        console.log('лето');
        break;
    case 9:
        console.log('осень');
        break;
    case 10:
        console.log('осень');
        break;
    case 11:
        console.log('осень');
        break;
    case 12:
        console.log('зима');
        break;
}












