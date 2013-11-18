/**
 * Created by samanthaklindt on 11/18/13.
 */

//Some type of math is used an a calculation and includes at least 2 factors as variables, not hard-coded
//values

//Examples of: 1. Conditional (ternary) operator 2. If statement, condition, and True block 3. Else If statement, condition, and block
// 4. Else block 5. Conditional operator other than equals

//All prompted values are checked to make sure they look okay.

//Each line of code has a meaningful comment.

var name; //This variable stores the prompted variable for name.
name = prompt('What is your name?'); //This variable prompts the user to input their name.
var year= prompt('What year were you born in?'); //This variable prompts the user to input their year of birth.
var todaysYear= prompt('What year is it now?'); //This variable prompts the user to input the year they are currently in.
var age= todaysYear - year; //This variable is subtracting todaysYear from year to get the users age.

console.log('Hello '+name+ '! You are '+age+' years old.'); //This line puts together both the name and age variable to give the user an answer.

if(age<18){ //This if statement requires the age to be less than 18 in order to print the answer.
    console.log('You are a minor!'); //This line tells the user they are a minor based on their age which is less than 18.
} else{(age>18)
    console.log('You are an adult!');
}

