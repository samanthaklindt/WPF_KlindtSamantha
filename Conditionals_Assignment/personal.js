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

if(age<18){
    console.log('You are a minor!');
} else{(age>18)
    console.log('You are an adult!');
}

if(year<2013){
    console.log('Congratulations, You have some how figured out time travel and are in a past time!');
}else if(year>=2013){
    console.log('Congratulations, You have some how figured out time travel and are in a future time!');
}