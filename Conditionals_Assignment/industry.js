/**
 * Created by samanthaklindt on 11/18/13.
 */

//Some type of math is used an a calculation and includes at least 2 factors as variables, not hard-coded
//values

//Examples of: 1. Conditional (ternary) operator 2. If statement, condition, and True block 3. Else If statement, condition, and block
// 4. Else block 5. Conditional operator other than equals

//All prompted values are checked to make sure they look okay.

//Each line of code has a meaningful comment.


var computer= Math.random()*4;
var mobileDevice= Math.random()*4;
var totalDevices= computer + mobileDevice;

if(totalDevices>5){
    console.log('You have '+totalDevices+' and that is greater than 5... If you get anymore computers or mobile devices you might go crazy!')
}else{(totalDevices<5)
    console.log('You have '+totalDevices+' and that is less than 5... You may want to look into getting more computers or mobile devices!')
}