/*let	DEFAULTUSER = {
	university:"Calltech",
	course:2,
	fullname:"Andrey Carpaty",
	marks:[5,4,4,5]
}
*/
class Student{

	/*	
		get DEFAULTUSER(){
		return DEFAULTUSER;
	}*/

	//1
	//({course, university, fullname, marks}={})
	constructor(course, university, fullname, marks){
		this.course = course;
		this.university =university;
		this.fullname = fullname;
		this.arrOfMarks = marks;
		this._dissmised = false;
		//Object.assign(this,)
	}

	///2
	getInfo(){
		return `I m ${this.course}-year(grade) student of ${this.university}. My name is ${this.fullname}`
	}

	///3
	get marks(){
		return this.arrOfMarks;
		//return this.arrOfMarks;
	}

	///4
	set marks(el){

		return this._dissmised ? (this.arrOfMarks=null) : this.arrOfMarks=[...this.arrOfMarks, el];

	}
	//5
	getAverageMark(){
		return (Array.isArray(this.arrOfMarks) && this.arrOfMarks.length) ? (Number((this.arrOfMarks.reduce((sum, cur)=> sum + cur, 0) / this.arrOfMarks.length).toFixed(2))) : 0;
	}
	//6
	dismiss(){
		this._dissmised = true;
		this.arrOfMarks = null;
		//Object.frozen(this)
		//
	}


	/*unfreeze (ob){
		//just copy of object
		let objct = undefined;
		if(typeof ob == 'object'){
			objct = {};
			for( let prop in ob){
				objct[prop]=ob[prop]
			}
		}
		return objct // but we need also delete other obj!!!!
	}
	*/

	recover(){
		this._dissmised =false;
		this.arrOfMarks = [];
	}

}

class BudgetStudent extends Student{
	constructor(course, university, fullname, marks){
		super(course, university, fullname, marks);
		this._dissmised = false;
		//this._avgMark = super.getAverageMark(marks);//nah i think it's bad idea
		setInterval(()=>{
			console.log(this.getScholarship());
		}, 10000);
	}

	getScholarship(){
		let avgMark = this.getAverageMark();
		console.log('avgMark=',avgMark);
		if (avgMark>=4.6 && !this._dissmised){
			return 'For scholarship you earns 1400 uah'
		}else return 'We cant provide you a scholarship because you have average mark lower than 4.6 or college dropout';
	}
}


let Andrey = new BudgetStudent(2,'Calltech','Andrey Karpathy', [4,4,4,4]);



let Jdoe = new Student(3,'Lviv Polytechnic','John Doe',[5,4,5,3]);


console.log('1.////////////////////////////////////////////////////////////////////////////////////////////////////////');
console.log(Jdoe);
console.log('\n');
console.log('2.////////////////////////////////////////////////////////////////////////////////////////////////////////');
console.log('Method -> this.getInfo()');
console.log(Jdoe.getInfo());
console.log('\n');
console.log('3.////////////////////////////////////////////////////////////////////////////////////////////////////////');
console.log('Getter -> this.marks',Jdoe.marks);
console.log('\n');
console.log('4.////////////////////////////////////////////////////////////////////////////////////////////////////////');
console.log('Setter -> this.marks=5',Jdoe.marks=5);
console.log('Getter -> this.marks', Jdoe.marks);
console.log('\n');
console.log('5.////////////////////////////////////////////////////////////////////////////////////////////////////////');
console.log('Method -> this.AverageMark()', Jdoe.getAverageMark());
console.log('\n');
console.log('6.////////////////////////////////////////////////////////////////////////////////////////////////////////');
console.log('Method -> this.dismiss()', Jdoe.dismiss());
console.log('Getter after dismiss method -> this.marks', Jdoe.marks);
console.log('Setter after dismiss method -> this.marks=5',Jdoe.marks=5);
console.log('Getter after setter and dismiss method-> this.marks', Jdoe.marks);
console.log('Method -> this.AverageMark()', Jdoe.getAverageMark());
console.log('\n');
console.log('7.////////////////////////////////////////////////////////////////////////////////////////////////////////');
console.log('Method -> this.recover()', Jdoe.recover());
console.log('Getter after recover method -> this.marks', Jdoe.marks);
console.log('Setter after recover method -> this.marks=5',Jdoe.marks=5);
console.log('Getter after setter and recover method-> this.marks', Jdoe.marks);
console.log('Method -> this.AverageMark()', Jdoe.getAverageMark());
console.log('Setter after recover method -> this.marks=3',Jdoe.marks=3);
console.log('Method -> this.AverageMark()', Jdoe.getAverageMark());
console.log('\n');
console.log('8.////////////////////////////////////////////////////////////////////////////////////////////////////////');
//console.log('Method -> this.getInfo()');
//console.log(Andrey.getInfo());
console.log(Andrey.getScholarship());
console.log('Method -> this.dismiss()', Andrey.dismiss());
//console.log(Andrey.getScholarship());
//console.log('Getter -> this.marks',Andrey.marks);
//console.log('Method -> this.recover()', Andrey.recover());
//console.log('Setter -> this.marks=5',Andrey.marks=5);
//console.log('Setter -> this.marks=5',Andrey.marks=4);
//console.log('Getter -> this.marks', Andrey.marks);
//console.log('Method -> this.AverageMark()', Andrey.getAverageMark());


//or put in console
//Andrey.recover()
//Andrey.marks=5
//Andrey.marks=5 and so on and so on to test work
