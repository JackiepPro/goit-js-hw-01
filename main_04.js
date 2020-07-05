// Задание 4
let credits = 23580;
let pricePerDroid = 3000;
let value;
let totalPrice = 0;

value = prompt('сколько нужно дроидов?');
value = Number(value);
totalPrice = pricePerDroid * credits;

// if(value === null) {
//    value = console.log('Отменено пользователем!');
// } else if () {
// 	console.log('Недостаточно средств на счету!')
// } else {
// 	console.log(`Вы купили ${value} дроидов, на счету осталось ${totalPrice} кредитов.`)
// }

console.log(`Вы купили ${value} дроидов, на счету осталось ${totalPrice} кредитов.`)