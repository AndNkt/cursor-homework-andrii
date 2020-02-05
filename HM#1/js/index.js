
//some hypot data from service
const DATA = [
	{
		id:12,
		name:'screenFoil',
		price:15.678
	},{
		id:13,
		name:'iPad',
		price:123.965
	},{
		id:14,
		name:'T-Mobile',
		price:90.2345
	}
];

//prices
let prices = [];

//go trough data'n'take prices
for (arr of DATA){//forEach todo
		let {price}= arr;
		prices.push(price);
}

//Сложите стоимость всех товаров, поместите её в переменную и выведите эту сумму
let sumOffGoods = prices.reduce((a,b)=>a+b);

const randDiscount = Math.round(Math.random()*100);
//const randDiscount = 50;


let template = `
Max product price: ${ Math.max.apply(null,prices) }	${/*Используя встроенный объект Math – выведите максимальное число*/''}
Min product price: ${ Math.min.apply(null,prices) } ${/*Используя встроенный объект Math – выведите минимальное число*/''}
Cost of all goods: ${ sumOffGoods } ${/*выведите эту сумму*/''}
Sum of integer part of all goods prices \with rounding to smallest(nearest): ${ prices.map(el => Math.floor(el)).reduce((a,b)=>a+b) } ${/*Сложите только целую часть стоимости всех товаров ..*/''}
Whole sum rounder to min: ${Math.floor(sumOffGoods)}
Rounding to hundreds: ${Math.ceil( sumOffGoods/100 )*100}
Rounded sum is Even: ${(Math.floor(sumOffGoods)%2===0)? true:false}${/*является сумма всех товаров (округленная в меньшую сторону) четным или нечетным числом*/''}
Change: ${500-sumOffGoods}${/*Выведите сумму сдачи, при оплате всех товаров*/''}

Avarage price: ${(sumOffGoods/prices.length).toFixed(2)}

Random discount: ${randDiscount} %
Price \with discount: ${(sumOffGoods-(sumOffGoods*randDiscount/100)).toFixed(2)}
Lost Profit: ${	(sumOffGoods/2 - (sumOffGoods*randDiscount/100)).toFixed(2) }
`

console.log(template);


