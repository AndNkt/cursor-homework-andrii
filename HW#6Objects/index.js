
const students = [{
  name: "Tanya",
  course: 3,
  subjects: {
    math: [4, 4, 3, 4],
    algorithms: [3, 3, 3, 4, 4, 4],
    data_science: [5, 5, 3, 4]
  }
}, {
  name: "Victor",
  course: 4,
  subjects: {
    physics: [5, 5, 5, 3],
    economics: [2, 3, 3, 3, 3, 5],
    geometry: [5, 5, 2, 3, 5]
  }
}, {
  name: "Anton",
  course: 2,
  subjects: {
    statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
    english: [5, 3],
    cosmology: [5, 5, 5, 5]
  }
}];

////////////////////////////////////////////////////////////////////////////////////////
//1
getSubjects = (stud) =>{
	let {subjects} = stud;
	return Object.keys(subjects).map(el=> el.charAt(0).toUpperCase().concat(el.slice(1)).replace('_', ' '));
}

console.log('getSubjects(students[0])', getSubjects(students[0]));

////////////////////////////////////////////////////////////////////////////////////////
//2
getAverageMark = (stud) =>{
	let {subjects} = stud;
	let studMarks = Object.values(subjects).flat()
	let qMarks = studMarks.length;
	return ([...studMarks].reduce((a,b)=> a+b)/qMarks).toFixed(2)
}

console.log('getAvg()', getAverageMark(students[0]));
//console.log('getAvg()', getAverageMark(students[2]));

////////////////////////////////////////////////////////////////////////////////////////
//3
getStudentInfo = (somestudents) => {
	let {course, name} = somestudents;
	let avgMark = getAverageMark(somestudents);
	return { course, name, 'averageMark': avgMark };
}

console.log('getStudentInfo(students[0])', getStudentInfo(students[0]));

////////////////////////////////////////////////////////////////////////////////////////
//4
getStudentsNames = (studs) => {
	let studsNames = [];
	for( stud in studs){
		studsNames.push(studs[stud].name)
	}
	return studsNames.sort();
}

console.log('getStudentsNames(students)',getStudentsNames(students));

////////////////////////////////////////////////////////////////////////////////////////
//5

getBestStudent = (studs)=> {
	let studMark, bestStudName;
	for (stud in studs){
		let {name, averageMark} = getStudentInfo(studs[stud])

		if (stud==1){
			studMark = averageMark;
			bestStudName = name;
	
		}else{
			if(studMark< averageMark){
				studMark = averageMark;
				bestStudName = name;
			}
		}
	}
	return bestStudName;
}

console.log(getBestStudent(students));

////////////////////////////////////////////////////////////////////////////////////////
//6
calculateWordLetters = (word) =>{
	let arrOfLetters = {};
	let sArr = Array.from(new Set(word.split('')));
	for(let i=0; i< sArr.length; i++){
		arrOfLetters[sArr[i]]=word.split('').filter( el => el===sArr[i]).length
	}
	console.log(arrOfLetters);
}

calculateWordLetters('test');
//calculateWordLetters('rest');
//calculateWordLetters('quest');
