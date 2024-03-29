// const { maxHeaderSize } = require("http");

// console.log('Hello World')

// // let arr = [1,32,4,5,442,654,3,43,3232,7000];
// let arr = [64,25,12,22,11]
// function findFirstLargest() {
//     let max = arr[0]
//     for(let i = 1 ;i<arr.length;i++) {
//         if (max < arr[i]) {
//             max = arr[i]
//         }
//     }
//     return max
// }
// // time complexity = O(n) traverse the array
// // space complexity = O(1) need extra variable to store to 0the index element
// console.log('Largest number is ', findFirstLargest());


// function findTwoLargest() {
//     let max1 = 0
//     let max2 = 0
//     for(let i = 0 ;i<arr.length;i++) {
//         if (max1 < arr[i]) {
//             max2 = max1
//             max1 = arr[i]
//         } else if (max2 < arr[i]) {
//             max2 = arr[i]
//         }
//     }
//     return [max1, max2]
// }
// console.log('Two Largest number are ', findTwoLargest())


// function findThreeLargest() {
//     let max1 = 0
//     let max2 = 0
//     let max3 = 0
//     for(let i = 0 ;i<arr.length;i++) {
//         if (max1 < arr[i]) {
//             max3 = max2
//             max2 = max1
//             max1 = arr[i]
//         } else if (max2 < arr[i]) {
//             max3 = max2
//             max2 = arr[i]
//         } else if (max3 < arr[i]) {
//             max3 = arr[i]
//         }
//     }
//     return [max1, max2, max3];
// }

// console.log('Three Largest number are ', findThreeLargest())
// let sArr = [64,25,12,22,11]

// function swap(x,y) {
//     var temp = sArr[x];
//     sArr[x] = sArr[y];
//     sArr[y] = temp;
// }


// //Bubble Sort
// arr = [5, 1, 4, 2, 8]
// function BubbleSort() {
//     for(let i = 0; i < arr.length; i++) {
//         let swapped = false
//         for(let j = 0; j < arr.length - i - 1; j++) {
//             console.log('========',i,'===========')
//             if(arr[j]>arr[j+1]) {
//                 let element = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = element;
//                 swapped = true
//             }
//             console.log('**',j,'===========')
//         }
//         if (swapped == false) {
//              break;
//          }
//     }
//     return arr
// }
// // Time Complexity O(n^2) worst case
// // Time Complexity O(n) best case when array is already sorted  
// console.log('BubbleSort Result ',BubbleSort())
// arr = [5, 1, 4, 2, 8,12,53,23]

// function insertionSort() {
//     let j;
//     let key;
//     for(let i=1;i<arr.length;i++) {
//         key = arr[i]
//         j = i-1;
//         while(j >= 0 && key < arr[j]) {
//             arr[j+1] = arr[j]
//             j = j-1;
//         }   
//         arr[j+1] = key
//     }
//     return arr
// }
// console.log('Insertion sort Result =>',insertionSort())

// // Program to find elements which produce sum = 9
// let arrInput = [4,7,5,2]
// function printElementHaveSum9() {
//     for (let i = 0; i< arrInput.length-1;i++) {
//         let initialElement = arrInput[i];
//         for (let j = i+1; j < arrInput.length;j++) { 
//                 let sum = initialElement + arrInput[j];
//                 if (sum === 9) {
//                     console.log('Elements have sum 9 are',initialElement ,arrInput[j]);
//                     break
//                 }
//         }
//     }
// }
// console.log("Program to find elements which produce sum = 9 from array", "arrInput, are below");
// console.log(printElementHaveSum9())

// //Program to print number 1-10 without loop
// function printNumbers(number) {
//     if (number >= 1) {
//         console.log('Number is ->',number);
//        printNumbers(number-1);
//         console.log('See this execute when ==>', number)
//     }
//     console.log('Finally me here **********',number)
// }
// console.log('Print number 1-10 using recursion', printNumbers(10))

// //Program to move all zero at the end of the array
// arr = [1,0,23,0,2,32]
// let zeroArr = []
// let numberArr = []
// function moveZeroToEnd() {
// //    let result = arr.map(element => {
// //           if (element === 0) {
// //             zeroArr.push(element)
// //           } else {
// //             numberArr.push(element)
// //           }
// //    })
//     //Second way to do the same work
//    zeroArr = arr.filter(function(element){
//     return (element === 0)
//    })
//    numberArr = arr.filter(element =>{
//     return element != 0
//    })
   
// }
// console.log("Result after moving all 0 to end is ",moveZeroToEnd(),"\n", numberArr.concat(zeroArr))

// function binarySearch(array, low, high, elementToFind) {
//     let mid = Math.floor((low + high) / 2);
//     if (array[mid] === elementToFind)  {
//         console.log("Binary Search Element",elementToFind, "found at index =>" ,mid);
//         return
//     }
//     if (low >= high){
//         console.log("Binary Search Element Not found");
//     } else  if (elementToFind < array[mid] ) {
//             binarySearch(array, low, mid - 1, elementToFind)
//     } else { // if (elementToFind > array[mid] )    
//             binarySearch(array, mid + 1 , high, elementToFind)
//     } 
// }
// let binarySrchArr = [11,12,13,14,15,16,17]
// binarySearch(binarySrchArr, 0, binarySrchArr.length, 1)

// function linearSearch(array, serachItem) {
//     let found = false
//     for (let i = 0 ; i < array.length - 1; i++) {
//         if (array[i] == serachItem) {
//             console.log("Linear Search Element",serachItem, "found at index =>" ,i);
//             found = true
//             break
//         }
//     }
//     if (found == false) {
//         console.log('Linear search Element not found')
//     }
// }
// linearSearch(binarySrchArr,1)


// const person = {
//     //  with param
//     fullNameWithCity: function(city) {
//         return this.fName + " " + this.lName + " lived in " + city 
//     }
//     // without param
//     // fullName: function () {
//     //     return this.fName + " " + this.lName;
//     // }
// }
// const gPerson = {
//     fName: 'Gurjinder',
//     lName: 'Singh',
// }
// console.log('\n------JavaScript call() method--------')
// // without param
// // let fullName = person.fullName.call(gPerson)
// // console.log("call() work here",fullName)
// const sPerson = {
//     fName: 'Sarbjeet',
//     lName: 'kaur'
// }
// // with param
// let fullName = person.fullNameWithCity.call(sPerson,"Chandigarh")
// console.log("call() work here-->",fullName)

// let applyFullName = person.fullNameWithCity.apply(sPerson,["Chandigarh"]);
// console.log("apply() work here-->",applyFullName)
// // let fname = person.fullName.apply(sPerson);
// // console.log("apply() work here-->",fname)

function mergeSort(arr1, arr2) {
    let result = [];
    let i=0;
    let j=0;
    while(i< arr1.length && j < arr2.length) {
      if(arr1[i] < arr2[j]){
        result.push(arr1[i])
        i++;
      } else {
        result.push(arr2[j])
        j++;
      }
    }
   while(i < arr1.length) {
      result.push(arr1[i])
      i++;
   }
   while(j < arr2.length){
      result.push(arr2[j])
      j++;
   }    
   console.log('\nHere comes the Result===>', result)
    return result
}

function merge(arr){
    if(arr.length <= 1) 
        return arr;
    let mid = Math.floor(arr.length/2);
    console.log('\nMid of array is ******* ', mid)
    console.log('Left part of array is ===', arr.slice(0, mid))

    let left = merge(arr.slice(0, mid));

    console.log('\n###### Sorting left part of array ######', left)
    console.log('\nNow array ######', arr)

    console.log('\n** Right Mid of array is ******* ', mid)
    console.log('===Right part of array is ===', arr.slice(mid))
    
    let right = merge(arr.slice(mid))
    console.log('-------------Here is comes now------------')
    console.log('Left is []', left);
    console.log('Right is []', right)
    return mergeSort(left,right)
}

let mergeSArr = [4, 8, 7, 2, 11, 1, 3];
console.log('==================== Merge Sort output ==============', merge(mergeSArr))

const arrForSelectionSort = [21,32,4,3,33,234];
console.log('Length of selection array', arrForSelectionSort.length);

function sortWithSelection() {
  let index = 0;
  for (let i = 0; i< arrForSelectionSort.length-1; i++) {
    console.log('Runing for i----->',i);
    index = i
    for(let j = i + 1; j< arrForSelectionSort.length-1;j++) {
          console.log('Runing for j',j);
          if (arrForSelectionSort[index] > arrForSelectionSort[j]) {
            index = j;
          }
    }
    if (index != i) {
      let elementToSave = arrForSelectionSort[i];
      arrForSelectionSort[i] = arrForSelectionSort[index];
      arrForSelectionSort[index] = elementToSave
    }
  }
  console.log('After sorting using selection sort we have', arrForSelectionSort);
}

sortWithSelection()
  

let NO_OF_CHARS = 256;
 
/* function to check whether two strings
    are anagram of each other */
function areAnagram(str1, str2)
{
 
    // Create 2 count arrays and initialize
        // all values as 0
        let count1 = new Array(NO_OF_CHARS);
        let count2 = new Array(NO_OF_CHARS);
        for(let i = 0; i < NO_OF_CHARS; i++)
        {
            count1[i] = 0;
            count2[i] = 0;
        }
         
        let i;
  
        // For each character in input strings,
        // increment count in the corresponding
        // count array
        for (i = 0; i < str1.length && i < str2.length;
             i++) {
            count1[str1[i].charCodeAt(0)]++;
            count2[str1[i].charCodeAt(0)]++;
        }
  
        // If both strings are of different length.
        // Removing this condition will make the program
        // fail for strings like "aaca" and "aca"
        if (str1.length != str2.length)
            return false;
  
        // Compare count arrays
        for (i = 0; i < NO_OF_CHARS; i++)
            if (count1[i] != count2[i])
                return false;
  
        return true;
}
let str1 = ("abcd").split("");
let str2 = ("bcda").split("");
  
        // Function call
if (areAnagram(str1, str2)) {
  console.log('Yes');
}
else {
  console.log('No');
}




