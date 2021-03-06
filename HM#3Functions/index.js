//---------------------------------------------------------------------------------------------------
//1
const getMaxDigit = (num) => {	
	let p=Number(num);
		//console.log(p);
	if(isNaN(p)===true || p===0){
		return 'Input number or GT than 0'
	}else{
		return parseInt(Math.max(...p.toString().split('')));
		}
}
	
console.log('getMaxDigit(385)->8',getMaxDigit(385));	
//console.log(getMaxDigit('p23'));
console.log('getMaxDigit(1236)->6',getMaxDigit(1236));
console.log('getMaxDigit(987)->9',getMaxDigit(987));
console.log('getMaxDigit(385)->8',getMaxDigit(385));


//---------------------------------------------------------------------------------------------------
//2 
funPow = (num, pow) => {
//TODO realize pow 1/2,1/3, 0.25, etc. 
/*
if pow<1...
 let epsilon=0.001;
 let root= num/pow;
while
 root=0.5*(root+num/root)
	
*/
	switch(true){
		case (isNaN(num)):
			return 'You should put a num'
		case Number(pow)%1>0 || pow<0 :
			return 'Power must be a int num and greater than 0';
		case pow===0:
			return 1;
		case (pow===1): 
			return num;
		case (pow > 1):
			let acm =num;
			for (let i=0; i<pow-1; i++){
				acm *= num
			}
			return acm;
		default: 
		return 'Something definitely went wrong';
	}
}

//console.log('funPow("os",-1)',funPow('os',1));
//console.log('funPow(2,-1)',funPow(2,-1));
//console.log('funPow(-2,3)',funPow(-2,3));
//console.log('funPow(2,1.2)',funPow(2,1.2));
console.log('funPow(2,0)',funPow(2,0));
console.log('funPow(2,1)',funPow(2,1));
console.log('funPow(2,3)',funPow(2,3));


//---------------------------------------------------------------------------------------------------
//3
firstLetter = (str) => str.charAt(0).toUpperCase()+str.slice(1,).toLowerCase();

console.log('firstLetter("mike")', firstLetter("mike"));
console.log('firstLetter("mIKE")', firstLetter("mIKE"));

//---------------------------------------------------------------------------------------------------
//4
wageSumAfterTaxes = (salary) => salary - salary*0.195; 
console.log('wageSumAfterTaxes(1000)', wageSumAfterTaxes(1000));

//---------------------------------------------------------------------------------------------------
//5
getRandomNumber = (N, M) => Math.floor(Math.random()*(Math.floor(M)- Math.ceil(N)+1))+N;

console.log('getRandomNumber(1,10)',getRandomNumber(1,10));

//---------------------------------------------------------------------------------------------------
//6
countLetter = (letter, str) => {
	let counter=0;//todo put charCodeAtLocal
	let a = letter.toLowerCase().charCodeAt(0);
	let t = str.toLowerCase().split('');
	for(let i=0; i<t.length; i++){
		if(t[i].charCodeAt(0)===a) {
			counter++;
		}
	}
	return counter
}
//console.log('countLetter("A", "123123a")=>', countLetter("A", "123123a"));
//console.log('countLetter("A", "Asasa")=>', countLetter("A", "Asasa"));
console.log('countLetter("A", "Astalavista")', countLetter("A", "Astalavista"))

//---------------------------------------------------------------------------------------------------
//7
convertCurrency=(str)=>{

	const REUSD = /\$|(usd)/gi;
	const REUAH = /\₴|(uah)/gi;

	let course = 25;//bad practice 'just for exmpl'
	let puah,pusd;
	puah = str.match(REUAH);
	const ERRMSG = 'Change only (usd<=>uah), or bad money format';

	if(puah){
		return (puah.length == 1) ?  `${(parseFloat(str)/course)}$` : ERRMSG;
	}
	
	pusd = str.match(REUSD);
	
	if(pusd){
		return (pusd.length == 1) ? `${(parseFloat(str)*course)}UAH` :  ERRMSG;
	}

	if(!(puah) && !(pusd)) return 'There is no such currencies'
}

console.log('convertCurrency("100$")',convertCurrency("100$"))
console.log('convertCurrency("100usd")',convertCurrency("100usd"));
console.log('convertCurrency("100UAh")',convertCurrency("100Uah"));

//console.log('convertCurrency("100₴")',convertCurrency("100₴"));
//console.log('convertCurrency("100UAHUAH")',convertCurrency("100UAHUAH"));
//console.log('convertCurrency("2PLN")',convertCurrency("2PLN"));
//console.log('convertCurrency("0.100UAH")',convertCurrency("0.500UAH"));
//console.log('convertCurrency("usd100usd")',convertCurrency("usd100usd"));
//console.log('convertCurrency("\$100\$")',convertCurrency("$100$"));
//console.log('convertCurrency("$100usd")',convertCurrency("$100usd"));

//---------------------------------------------------------------------------------------------------
//8
getRandomPassword = (defPassLen=4) => Math.random()
										  .toString()
										  .slice(-defPassLen);

console.log('getRandomPassword()',getRandomPassword());
console.log('getRandomPassword()',getRandomPassword(8));
//---------------------------------------------------------------------------------------------------
//9 
deleteLetters = (letr, wrd) => wrd.toLowerCase()
								  .split('')
								  .filter( el => el !== letr.toLowerCase())
								  .join('');

console.log('deleteLetters("a", "blablabla")', deleteLetters("a", "blablabla"));

//---------------------------------------------------------------------------------------------------
//10

isPalyndrom = (someString) =>{
	
	let normalStr, reverseStr;

	normalStr = someString.toLowerCase();
	normalStr = normalStr.split('').slice().filter(el => el !=' ');
	reverseStr = normalStr.slice().reverse().join('');
	normalStr = normalStr.join('');
	return (normalStr === reverseStr)? true: false;

}

console.log('Madam', isPalyndrom('Madam'));
console.log('Kokos', isPalyndrom('Kokos'));

//---------------------------------------------------------------------------------------------------
//11

deleteDuplicateLetter = (sentence) => {
	let normalized= sentence.toLowerCase().split(' ').join('').split('').slice().join('');

	let arrWithLetters =[];

	for (let i=0; i< normalized.length; i++){
		if(normalized.split(normalized[i]).length===2){
			arrWithLetters.push(normalized[i])
		}
	}
	return arrWithLetters.join('');
	
}

console.log('Biscuit was wery soft->', deleteDuplicateLetter("Biscuit was wery soft"));
console.log('Duplicated Complicated->', deleteDuplicateLetter('Duplicated Complicated'));
console.log(deleteDuplicateLetter('Бисквит был очень нежный'));
