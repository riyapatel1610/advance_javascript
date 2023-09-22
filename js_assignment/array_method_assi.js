/*
// [1,2,3,300,100]
->  create array which have 1 to 9 no */


function createArray(){
    let myarr=[1,2,3,4,5,6,7,8,9];
    return myarr;
}
let newArray=createArray();
// console.log(newArray);

// 1. print 9th and 10th index of array.
// let y=newArray.splice(8, 1,10);
// console.log(y)



// 2.print every element of array by map and for loop

// using map 
// function printArraymap(arr) {
//     arr.map(function (e) {
//       console.log(e);
//     });
//   }
  
//   printArraymap(newArray);
  
//  using for loop
// function printArrayforloop(arr) {
//     for (let i = 0; i < arr.length; i++) {
//       console.log(arr[i]);
//     }
//   }

//   printArrayforloop(newArray);
// 3. change a value of 6th index with 100

// let z= newArray.splice(6, 0, 100);
// console.log(" add:", newArray);


// 4. print a array till element value not grater then 100
// let myArray = [12, 45, 67, 89, 101, 34, 56];

// function printArrayGreaterThan100(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 100) {
//       break;
//     }
//     console.log(arr[i]);
//   }
// }

// printArrayGreaterThan100(myArray);


// 5. add 1 in every element of an array
// function addOneToElements(arr) {
//     return arr.map(function (e) {
//       return e + 1;
//     });
//   }
  
//   let myArray = [1, 2, 3, 4, 5];
//   let addone = addOneToElements(myArray);
  
//   console.log(addone); 


// 6. add 0 in start of array

// function addZeroToStart(arr) {
//     arr.unshift(0);
//     return arr;
//   }

//   addZeroToStart(newArray);
  
//   console.log(newArray); 
  
// 7. add  99 in end of array
// function add99ToEnd(arr) {
//     arr.push(99);
//     return arr;
//   }
  
  
//   add99ToEnd(newArray);
  
//   console.log(newArray); 
  
// 8. remove 1 element from start of  array

// function removeStartElement(arr) {
//     arr.shift();
//     return arr;
//   }
  

//   removeStartElement(newArray);
  
//   console.log(newArray);
  
// 9. remove 1 element from end of array
// function removeLastElement(arr) {
//     arr.pop();
//     return arr;
//   }
  
  
//   removeLastElement(newArray);
  
//   console.log(newArray); 

// 10. do sum of all value of an array with use of map, reduce and for-loop

// using map 

// sum = 0;
// let x = newArray.map((e) => {
//   sum += e;
// });
// console.log("sum is :", sum);

// using for loop
// function sumArray(arr) {
//     let total = 0;
//     for (let i = 0; i < arr.length; i++) {
//       total += arr[i];
//     }
//     return total;
//   }
  
  
//   let result = sumArray(newArray);
  
//   console.log(result); 

// using reduce
// function sumArray(arr) {
//     let total = arr.reduce(function (e, x) {
//       return e + x;
//     }, 0);
//     return total;
//   }
  
 
//   let result = sumArray(newArray);
  
//   console.log(result); 


// 11. sort a array in acending decending

// function sortAscending(arr) {
//     return arr.slice().sort(function (a, b) {
//       return a - b;
//     });
//   }
  
//   let myArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
//   let ascendingArray = sortAscending(myArray);
//   console.log("Ascending Order:", ascendingArray);   
 
  
// 12. reverce an array with use of method

// function reverseArray(arr) {
//     return arr.reverse();
//   }
  
//   let myArray = [150, 200, 300, 400, 500];
// //   let reversedArray = reverseArray(myArray);
  
// //   console.log(reversedArray); 
  
// // 13. reverce an array with use of for-loop
// for (let i = myArray.length - 1; i >= 0; i--) {
//       console.log(myArray[i]);
//     }
  
  // 14.uv hello world
// output-->world uv hello

// let str = "uv hello world";
// let a = str.split("");
// a.reverse();
// let b = a.join("");
// console.log("-------", b);
