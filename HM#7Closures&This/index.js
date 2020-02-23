const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };
//////////////////////////////////////////////////////////////////////////
//1
function getMyTaxes(salary){
	return this['tax'] * salary;
}
//////////////////////////////////////////////////////////////////////////
//2
function getMiddleTaxes(){
	return this.tax*this.middleSalary;	
}
//////////////////////////////////////////////////////////////////////////
//3
function getTotalTaxes(){
	return this.tax*this.middleSalary*this.vacancies;
}
//////////////////////////////////////////////////////////////////////////
//4
function getMySalary(){
	let randSalary = getRandomSalary();

	function getRandomSalary() {
		return Math.floor(Math.random() * (500 + 1)) + 1500;
	}

	let taxes = this.tax;
	let profit = parseFloat((randSalary - taxes*randSalary).toFixed(2));

	return console.log({ salary:randSalary, taxes: taxes, profit: profit })
}
//////////////////////////////////////////////////////////////////////////
console.log('getMyTaxes.call(ukraine, 1000)->', getMyTaxes.call(ukraine, 1000));

console.log('getMiddleTaxes.call(ukraine)->', getMiddleTaxes.call(ukraine));

console.log('getTotalTaxes.call(ukraine)->', getTotalTaxes.call(ukraine));



function printMySalary(){
	getMySalary.call(ukraine)
}

printMySalary();//first call


setInterval( printMySalary, 10000);