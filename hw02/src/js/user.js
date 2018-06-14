import '../style/style.css';

export default class User{
    constructor(firstName, middleName, lastName){
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
    }

    getFullName(){
        console.log(`${this.firstName} ${this.middleName} ${this.lastName}`);
    }
}