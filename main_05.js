// Задание 5 - done
let country = prompt('Выбере страну');
let price;

if(country === null) {
	console.log('попробуйте еще раз');
} else {
	switch (country.toLowerCase()) {
		case 'китай':
			country = 'Китай';
			price = 100;
			break;

		case 'Чили':
			country = 'Чили';
			price = 250;
			break;

		case 'Австралия':
			country = 'Австралию';
			price = 170;
			break;

		case 'Индия':
			country = 'Индию';
			price = 80;
			break;

		case 'Ямайка':
			country = 'Ямайку';
			price = 120;
			break; 

		default: 
			console.log('В вашей стране доставка не доступна');
			price = undefined;
	}

	if(price !== undefined) {
		console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
	}
}