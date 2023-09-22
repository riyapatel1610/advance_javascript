/*
-> Want to re-use variable name so which variable declare method should i use

------------------------------------------------------------------------------------------

-> give the list which variable name not works in js
1. let a=0    True
2. let "a"=0   error
3. let 'a'=0  error
4. let `10`=0  error
5. let 1=0     error
------------------------------------------------------------------------------------------

let x = 100
// var y = 100
// const z = 100
// const m
{
      x= 90
      // y= 90
      // z= 90
      console.log(x) ____________90_______ point-x1
      console.log(y) __________90_________ point-y1
      console.log(z) ________error___________ point-z1
      console.log(m) _________error__________ 
} 

console.log(x) _________100__________ point-x2
console.log(y) _________100__________ point-y2
console.log(z) ___________100_______ point-z2
console.log(m) _________error__________

what will print at x1-__90_____
what will print at y1-___90____
what will print at z1-__error_____
what will print at x2-_100______
what will print at y2-__100_____
what will print at z2-___100____
what will print at m2-___error____


------------------------------------------------------------------------------------------

-> task-2

console.log(x) ________error___________ point-x2
console.log(y) _____________error______ point-y2
console.log(z) ______________error_____ point-z2

{
      let x = 100
      var y = 100
      const z = 100
}

console.log(x) ____________error_______ point-x1
console.log(y) ______________error__ point-y1
console.log(z) ______________error_____ point-z1


what will print at x1-___error____
what will print at y1-__error_____
what will print at z1-___error____
what will print at x2-____error___
what will print at y2-____error____
what will print at z2-____error___

------------------------------------------------------------------------------------------

*/
