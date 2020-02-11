const STUDENTS = ["Саша", "Игорь", "Лена", "Ира", "Алексей", "Светлана"];
//const STUDENTS = ["Alexander", "Igor", "Lena", "Ira", "Alexey", "Svetlana"];

const GENDER_MASK = [1,1,0,0,1,0];//somewhere from service (1-male, 0-female)

const THEMES = ["Дифференциальные уравнения", "Теория автоматов", "Алгоритмы и структуры данных"];
//const THEMES = ['Diff equations', 'Theory of automats', 'Algorithms and data structures'];

const MARKS = [4, 5, 5, 3, 4, 5];



divideStudentsByGender = (arr, sexMask) => {
	//find male indexes 
	let male=[];
	let female=[];
	sexMask.forEach( (el,ind) => (el)? male.push(STUDENTS[ind]) : female.push(STUDENTS[ind]));
	return [male , female];
}


let dividedArr = divideStudentsByGender(STUDENTS, GENDER_MASK)

let [shuffledMaleArr, shuffledFemaleArr] = dividedArr;

//before
//console.log('before shuffling',shuffledMaleArr);
//console.log('before shuffling',shuffledFemaleArr);

//shuffling elements in arr 
shuffledMaleArr = shuffledMaleArr.sort(()=> Math.random() - 0.5);
shuffledFemaleArr = shuffledFemaleArr.sort(()=> Math.random() - 0.5);
//not always working, in safari doesnt work well

//console.log('after shuffling',shuffledMaleArr);
//console.log('after shuffling',shuffledFemaleArr);

///////////////////////////////////////////////////////////////////////////////
//1
getPairs = (maleArr, femaleArr) => {
	const [MALE, FEMALE] = [maleArr, femaleArr];
	
	let arp = [];
	//some check just in case
	if(MALE.length ===FEMALE.length){
		for(let i=0; i<MALE.length; i++){
			arp.push([MALE[i],FEMALE[i]]);
		}

	}else return 'Arr length is diferent'//just check
	
	return arp;
}

let getPairsResult = getPairs(shuffledMaleArr, shuffledFemaleArr);

console.log(getPairsResult);

///////////////////////////////////////////////////////////////////////////////
//2
studsAndTheme = ( pairedArr, thms ) => pairedArr.map( (el,ind) =>  [el.join(' и ')  ,thms[ind]]  );

let resStudsTheme = studsAndTheme(getPairsResult, THEMES.sort(()=>Math.random()-0.5)); //get rand theme

console.log(resStudsTheme)
///////////////////////////////////////////////////////////////////////////////
//3

///studentsMarks = (arr) => arr.map((el, ind)=> [el,MARKS[ind]]);//easy way

studentsMarks = ( studs , marks ) => [studs, marks].reduce((a,b)=> a.map( (el, ind)=> [el, b[ind]]));

console.log(studentsMarks(STUDENTS, MARKS));

///////////////////////////////////////////////////////////////////////////////
//4

let studsPairsAndMarks= resStudsTheme.map( (el, ind) => [...el, Math.floor(Math.random() * 5)+1] );

console.log(studsPairsAndMarks)
