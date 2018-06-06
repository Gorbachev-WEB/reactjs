// Task#1
var times = 3;
function callback(){
	console.log('Выполнено!');
}

function loop(t = 0, callback = null){
	for(var i = 0; i < t; i++){
		callback();
	}
}

loop(times, callback);

// Task#2
function calculateArea(figure, ...args){
	let result = {};
	switch(figure){
		case 'triangle':
			let p = (args[0] + args[1] + args[2]) * 0.5;
			result.area = Math.sqrt(p * (p - args[0]) * (p - args[1]) * (p - args[2]));
			break;
		case 'square':
			result.area = args[0] * args[0];
			break;
		case 'rectangle':
			result.area = args[0] * args[1];
			break;
		default:
			console.log('Wrong params');
			return;
	}
	result.figure = figure;
	result.input = args;
	return result;
}

console.log(calculateArea('square', 2));
// Task#3
class Human {
	constructor(_name, _age, _dateOfBirth){
		this.name = _name;
		this.age = _age;
		this.dateOfBirth = _dateOfBirth;
	}
	
	showInfo(){
		return `${this.name} ${this.age} ${this.dateOfBirth}`;
	}
}

class Employee extends Human {
	constructor(_name, _age, _dateOfBirth, _department, _salary){
		super(_name, _age, _dateOfBirth);
		this.department = _department;
		this.salary = _salary;
		
	}
	
	showInfo(){
		return `${super.showInfo()} ${this.department} ${this.salary}`;
	}
}

class Manager extends Employee {
	constructor(_name, _age, _dateOfBirth, _department, _salary){
		super(_name, _age, _dateOfBirth, _department, _salary);
		this.parters = [];
	}
	
	addPartner(partner){
		if(partner instanceof Developer){
			this.parters.push(partner);
			partner.master = this;
		}
	}
	
	removePartner(partner){
		if(this.parters.indexOf(partner) != -1){
			this.parters.splice(this.parters.indexOf(partner), 1);
			partner.master = null;
		}
	}
}

var man1 = new Manager('Viktor', 20, '09-02-1998', 'Управление', 5000);
var man2 = new Manager('Manya', 30, '09-02-1988', 'Управление2', 5500);



class Developer extends Employee {
	constructor(_name, _age, _dateOfBirth, _department, _salary, _master = null){
		super(_name, _age, _dateOfBirth, _department, _salary);
		if(_master instanceof Manager){
			this.master = master;
		}
	}
	
	changeMaster(master){
		if(master instanceof Manager){
			this.master.parters.splice(this.master.parters.indexOf(this), 1);
			this.master = master;
			master.parters.push(this);
		}
		
	}
}
