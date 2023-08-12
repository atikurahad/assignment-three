// 1) javascript For in loop

// const person ={
//     name: "Shihab",
//     age: 28,
//     gender: "Male",
//     occupation:"Job holder",
// }

// const printObjectProperties = (properties)=>{
//     if(Object.keys(properties).length === 0){
//         console.log("Object is empty")
//     }

//     for (const property in properties) {

//          console.log(`${property } : ${properties[property]}`)

//     }

// }

// printObjectProperties(person)

// 2) javascript function returns

// function findMaxNumber(params) {
//   if (params.length === 0) {
//     return null;
//   }

//   const maxNum = Math.max(...params);
//   return maxNum;
// }
// const numbers1 = [10, 20, 5, 30, 25];

// console.log(findMaxNumber(numbers1)); // Output: 30

// const numbers2 = [5, 15, 7];

// console.log(findMaxNumber(numbers2)); // Output: 15

// const emptyArray = [];

// console.log(findMaxNumber(emptyArray)); // Output: null

// 3) javascript Spread Operator

  function mergeArrays (array1 , array2){


    let newArr = [...array1, ...array2]
    return newArr
  }
  const arr1 = [1, 2, 3];

const arr2 = [4, 5, 6];

console.log(mergeArrays(arr1,arr2));
