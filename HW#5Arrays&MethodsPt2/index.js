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

//console.log(getRandomArray(15,1,100));


////////////////////////////////////////////////////////////////////////////////////////
//2
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
