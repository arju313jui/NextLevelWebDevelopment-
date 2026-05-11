// problem 1
function filterEvenNumbers(numbersInput : number[]): number[]{
    return numbersInput.filter((numbersInput)=> numbersInput % 2 === 0);
};
console.log(filterEvenNumbers([1,2,3,4,5,6]));

// problem 2
function reverseString(stringInput : string) : string{
    return (stringInput.split("").reverse().join(""));
};
console.log(reverseString("typescript"));

// problem 3
type StringOrNumber = string | number;
function checkType(input : StringOrNumber) : "String" | "Number" {
    if (typeof input === "string"){
        return "String";
    } else {
        return "Number"; 
    }; 
};
console.log(checkType("Hello"));
console.log(checkType(42))

// problem 5
interface Book{
    title : string;
    author : string;
    publishedYear : number;
};
function toggleReadStatus(book : Book): Book & {isRead : boolean}{
    return{...book,isRead : true};
};
const myBook = {title : "TypeScript Guide", author : "Jane Doe", publishedYear : 2024}
console.log(toggleReadStatus(myBook));

//problem 6
class Person {
    name : string;
    age : number;
    constructor( name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}
class Student extends Person {
    grade : string;
    constructor(name: string, age: number, grade: string) {
        super(name,age);
        this.grade = grade;
    }

    getDetails(): string {
        // Changed ${this.age} to ${this.grade} at the end
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
    }
}
const student = new Student("Alice", 20, "A");
console.log(student.getDetails()); 

// problem 7
function getIntersection(array1: number[], array2: number[]) : number[]{
    return array1.filter((value) => array2.includes(value));
};
console.log(getIntersection([1,2,3,4,5],[3,4,5,6,7]));
