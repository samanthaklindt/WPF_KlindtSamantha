/**
 * Created by samanthaklindt on 11/15/13.
 */

//Personal

//Some type of math is used an a calculation and includes at least 3 factors as variables, not hard-coded values, and at least 3
//arithmetic operators (total, not in one place).


//The user is prompted for at least 3 values, and numbers are correctly parsed.


//Console output includes: 1. Calculated values 2. Supporting descriptive narrative text 3. String concatenation


//At least one of each variable with meaningful names: 1. Array 2. String 3. Number


var age= prompt('What is your age?');
var year= prompt('What year is it?');
var yearRandom= prompt('What year will it be in 20 years?');
var equation= (yearRandom - year);
var futureAge= parseInt(age + equation);

console.log('You will be ' + (futureAge) + ' years old in ' + (yearRandom));

var over18Array= [];
var over18Array[0]= ['vote'];
var over18Array[1]= ['smoke'];
var over18Array[2]= ['join the army'];
var over18Array[3]= ['go to clubs'];

console.log(over18Array[0]);






