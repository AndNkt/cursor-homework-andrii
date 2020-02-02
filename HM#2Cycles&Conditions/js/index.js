
function getUserInput(){

	let passEven,
	numM,
	numN;

	function getNum(numToFind, exOpt){
		let num;

		do{
			num=Number(prompt(`${exOpt}Input ${numToFind}(\int).Not Float`));
			num%1>0 ? num = NaN: '';
		}

		while( isNaN(num)===true )
	
		return num;
	}

	//get N
	numN = getNum('N','');

	//get M
	numM = getNum('M','');

	while(numN>numM){
		numM= getNum('M','Re-')
	}
	console.log('N-',numN,' M-',numM)

	passEven = confirm('Pass even numbers?');
	console.log('PassEven', passEven);

	return [numN, numM, passEven];
}



function sumNums(data){

	let [numN, numM, passEven] = data;

	let sum	= [];
	
	for(let i=numN;i<=numM; i++){

		(passEven) ? ((i%2>0)? sum.push(i):'') : sum.push(i);
	}

	sum = sum.reduce( (a,b)=> a+b);

	console.log(sum);
	return sum;
}


function logResults(userData, sum){
	var elem = document.getElementById("data");

	let [numN, numM, passEven] = userData;

	template = `
		<p>
			N = ${numN}
		</p>
		<p>
			M = ${numM}
		</p>
		<p>
			Pass Even: ${passEven}
		</p>
		<p>
			Sum = ${sum}
		</p>
		`
	elem.innerHTML= template;
}

let userInput = getUserInput();

logResults(userInput, sumNums(userInput));