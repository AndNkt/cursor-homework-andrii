var numbers = [null, 2.3, 'str', 6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2];


function filtCllbck(el){
	return (el!== undefined && el!==null && typeof(el)!== 'string' && el%1==0);
	//return  el%1==0;
}

////////////////////////////////////////////////////////////////////////////////////////
//1
getRandomArray = (length, min, max)=>{
	let randArr = [];
	for (let i=0; i<length; i++){
		randArr.push(Math.floor(Math.random() * (max - min + 1) + min))
	}
	return randArr;
}

console.log(getRandomArray(15,1,100));


////////////////////////////////////////////////////////////////////////////////////////
//2 kind a tuff maybe set or obj use or arr
/*getModa = (...nums) => {
	let coins=[];
	let p = nums.filter(filtCllbck);
	p.forEach( el=> (p.filter(fEl=> fEl===el ).length>=2 )? coins.push(el): '')
	return coins;
}
*/

//console.log(getModa(...numbers))

//3
getAverage = (...nums) =>   nums.filter(filtCllbck).reduce((a,b)=> a+b)/nums.filter(filtCllbck).length;

console.log('Average',getAverage(...numbers));

/////////////////////////////////////////////////////////
//4

getMedian=(...nums) =>{
	let normNums = [...nums.sort((a,b)=>a-b)];
	
	if(nums.length>1){
		let index = nums.length/2;
		return (nums.length%2===0)? (nums[index]+nums[--index])/2 : nums[parseInt(index)];
	}else return nums;
}

let kuru = [7,4,5,3,1,2,6];
let nunu = [1, 5, 3, 4, 2];
let numu = [4, 3, 2, 1]
console.log('Median of [1, 5, 3, 4, 2]',getMedian(...nunu));
console.log('Median of [4, 3, 2, 1]' ,getMedian(...numu));
//console.log(getMedian(...kuru));

/////////////////////////////////////////////////////////
//5

let exmplEvNums = [1, 2, 3, 4, 5, 6];

filterEvenNumbers=(...nums) => nums.filter(filtCllbck).filter( num => num%2 > 0)

console.log('Even nums for [1, 2, 3, 4, 5, 6]',filterEvenNumbers(...exmplEvNums));

/////////////////////////////////////////////////////////
//6

let arrForPosNums = [1, -2, 3, -4, -5, 6];

countPositiveNumbers=(...numbers)=> numbers.filter( el=> el>0).length;

console.log(countPositiveNumbers(...arrForPosNums));

/////////////////////////////////////////////////////////
//7

getDividedByFive = (...numbers) => numbers.filter(filtCllbck).filter( el => el%5 === 0 )

console.log(getDividedByFive(...numbers))

/////////////////////////////////////////////////////////
//8
let strWithBadWrds = 'What a fuck you talking you Fucking fuck. Shitty-fuck';

let songWithBadWords = 'You such a fuckin whore and i love it, you such a Fuckin whore and i love it, your boy is a dork... '+
						'she take lines.. i dont remember words and i love it... '+
						'Ima sick fuck i like quick fuck. Ima sick fuck i like quick fuck. '+
						'i like my dick suck, i buy sick truck, i buy a new tits, i\'ll get ya niptuck.....' ;


let badTokens =['fuck', 'shit'];

let songBadTokens = ['dick',...badTokens];

replaceBadWords = ( strUncens, badWrds) =>{
	let t = strUncens.toLowerCase().split(' ').join(' ');

		for (let i=0; i<badWrds.length; i++){
			//generate RegExp from arr
			let regBw = new RegExp(badWrds[i], 'gim');
			t= t.replace(regBw, '*'.repeat(badWrds[i].length))
		}
	return t;
}

replaceBadWords(strWithBadWrds, badTokens);
replaceBadWords(songWithBadWords, songBadTokens);


/////////////////////////////////////////////////////////
//9
divideByThree=(word)=>{
	console.log(word);
	let str = word.toLowerCase().split(' ').join('').split('');

	if(str.length>3){

			for (let i=0; i<str.length; i++){

 				if(i%4=== 0 ) {
 					str.splice(i, 0 , ' ')
 				}
			}
 		str = str.slice(1).join('').split(' ')
 		return str;
	}	else return str.join('');
	console.log('Arr',str);
}

console.log(divideByThree('NWA'));
console.log(divideByThree("live"));
console.log(divideByThree('Commander'));
console.log(divideByThree('Commander commander'));





/////////////////////////////////////////////////////////
//10




