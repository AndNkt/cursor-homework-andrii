
/*let	DEFAULTUSER = {
	university:"Calltech",
	course:2,
	fullname:"Andrey Carpaty",
	marks:[5,4,4,5]
}

*/
class Student{

/*	get DEFAULTUSER(){
		return DEFAULTUSER;
	}*/


	//({course, university, fullname, marks}={})
	constructor(course, university, fullname, marks, diss){
		this.course = course;
		this.university =university;
		this.fullname = fullname;
		this.arrOfMarks = marks;
		this._dissmised = diss || false;
		//Object.assign(this,)

	}
	///1
	getInfo(){
		return `I m ${this.course}-year(grade) student of ${this.university}. My name is ${this.fullname}`
	}
	///2
	get marks(){
		return this.arrOfMarks;
	}
	///3
	set marks(el){
		return this.arrOfMarks=[...this.arrOfMarks, el]
	}
	///4
	getAverageMark(){
		return this.arrOfMarks.reduce((sum, cur)=> sum + cur, 0) / this.arrOfMarks.length;
	}


	get dismised

}
//let Andrey = new Student();


let Jdoe = new Student('Lviv Polytechnic', 3, 'John Doe', [5,4,5,3]);



//console.log(Jdoe);
console.log(Jdoe.getInfo());
console.log('Getter -> Jdoe.marks',Jdoe.marks);
console.log('Setter -> Jdoe.marks=5',Jdoe.marks=5);
console.log('Getter -> Jdoe.marks', Jdoe.marks);
console.log('AverageMark', Jdoe.getAverageMark());

