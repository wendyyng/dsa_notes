//Section 13: Algorithms: Sorting

//the issue with sort();
//JS: converts them to string and sort
//'65'.charCodeAt(0) //return 54 (Unicode)
//What kind of sort used depends on the browser
// String.localeCompare(String2)

//Sorting Algorithms
//X implemen from scratch
//https://www.toptal.com/developers/sorting-algorithms
//https://coggle.it/diagram/W5E5tqYlrXvFJPsq/t/master-the-interview-click-here-for-course-link

//Bubble Sort
//Elementary sorts: bubble, insertion, selection
//More complex: merge, quick
//Least efficient

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// function bubbleSort(array) {
//   let min = array[0]
//   let max = array[0]
//   for(let i = 1; i < array.length; i ++){
//     if(array[i] < min){
//       min = array[i]
//     }
//     if(array[i] > max){
//       max = array[i]
//     }
//   }
//   console.log(`min: ${min}`)
//   console.log(`max: ${max}`)
  
//   while(array[0] !== min || array[array.length - 1] !== max){
//   for(let i = 1; i < array.length; i++){ 
//     if(array[i] < array[i -1]){
//       let temp = array[i - 1]
//       array[i - 1] = array[i]
//       array[i] = temp
//     }
//   } 
//     // console.log(array)
//   }
//   return array
// }

//O(1) but good space complexity
function bubbleSort(array) {
  const length = array.length;
  for (let i = 0; i < length; i++){
    for(let j = 0; j < length; j++){
      if(array[j] > array[j+1]){
        //Swap numbers
        let temp = array[j];
        array[j] = array[j+1];
        array[j+1] = temp;
      }
    }
  }
}

bubbleSort(numbers);
// console.log(numbers);


const numbers2 = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
  
  for(let i = 0; i < array.length - 1; i++){
      let min = array[i]
      let minIndex
    for(let j = i+1; j <= array.length - 1; j++){
  //find the smallest number of the array
      // console.log(array[j])
      if(array[j] < min){
        min = array[j]
        minIndex = j
      }
    }
  //swap the min with the current index
    array[minIndex] = array[i]
    array[i] = min
  }
  return array
}

console.log(selectionSort(numbers2));

// function selectionSort(array) {
//   const length = array.length;
//   for(let i = 0; i < length; i++){
//     // set current index as minimum
//     let min = i;
//     let temp = array[i];
//     for(let j = i+1; j < length; j++){
//       if (array[j] < array[min]){
//         //update minimum if current is lower that what we had previously
//         min = j;
//       }
//     }
//     array[i] = array[min];
//     array[min] = temp;
//   }
//   return array;
// }

//Dancing Algorithms: https://www.youtube.com/user/AlgoRythmics/videos



//Insertion Sort
//O(n) Best case
//Great for small dataset or nearly sorted data

const numbers3 = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
  const length = array.length;
	for (let i = 0; i < length; i++) {
		if (array[i] < array[0]) {
      //move number to the first position
      array.unshift(array.splice(i,1)[0]);
    } else {
      // only sort number smaller than number on the left of it. This is the part of insertion sort that makes it fast if the array is almost sorted.
      if (array[i] < array[i-1]) {
        //find where number should go
        for (var j = 1; j < i; j++) {
          if (array[i] >= array[j-1] && array[i] < array[j]) {
            //move number to the right spot
            array.splice(j,0,array.splice(i,1)[0]);
          }
        }
      }
    }
	}
}

insertionSort(numbers3);
console.log(numbers3);

//Merge Sort and O(n log n)
//Divide & Conquer
//More efficient than other sorting methods - usually
//O (n log n) : n -> Have to look at each one of the numbers and compare them in order to sort it
//Divide the list into one : finding the middle index O(1)
//Sort the items O(n)
//Compare their local lists to each other
//Space Complexity O(n)

const numbers4 = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort (array) {
  if (array.length === 1) {
    return array
  }
  // Split Array in into right and left
  const length = array.length;
  const middle = Math.floor(length / 2)
  const left = array.slice(0, middle) 
  const right = array.slice(middle)
  // console.log('left:', left);
  // console.log('right:', right);

  
  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

function merge(left, right){
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while(leftIndex < left.length && 
        rightIndex < right.length){
     if(left[leftIndex] < right[rightIndex]){
       result.push(left[leftIndex]);
       leftIndex++;
     } else{
       result.push(right[rightIndex]);
       rightIndex++
    }
  }  
  // console.log(left, right)
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}


const answer = mergeSort(numbers4);
console.log(answer);


//Stable VS Unstable Algorithms
//https://stackoverflow.com/questions/1517793/what-is-stability-in-sorting-algorithms-and-why-is-it-important
//We're sorting by the first letter only. With that assumption, straw and spork compare equal. Stable sort will preserve the order of input, whereas unstable sort does not make that guarantee.



//Quick Sort
//Divide & Conquer O(n log n)
//Useful, fatest on average
//Most used - merge & quick sort
//Time Worst Case: O(n^2)
//Space Worst Case: O(log (n))

const numbers5 = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function quickSort(array, left, right){
  const len = array.length; 
  let pivot;
  let partitionIndex;

  if(left < right) {
    pivot = right;
    partitionIndex = partition(array, pivot, left, right);
    
    //sort left and right
    quickSort(array, left, partitionIndex - 1);
    quickSort(array, partitionIndex + 1, right);
  }
  return array;
}
   
function partition(array, pivot, left, right){
  let pivotValue = array[pivot];
  let partitionIndex = left;

  for(let i = left; i < right; i++) {
    if(array[i] < pivotValue){
      swap(array, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(array, right, partitionIndex);
  return partitionIndex;
}

function swap(array, firstIndex, secondIndex){
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
}

//Select first and last index as 2nd and 3rd parameters
quickSort(numbers5, 0, numbers5.length - 1);
console.log(numbers5);




// Which Sort is Best?
//Insertion Sort: Input is small, or mostly sorted, little space, easy to implement
//Bubble Sort: never gonna use it... not efficient
//Selection Sort: most likely not used
//*Merge Sort: Divide and Conquer, O (n log n) very efficient, if you worry about worst schenario, but bad space Complexity O(n)
//*Quick Sort: better than merge sort and less space complexity, but worst case O(n^2) - if you worry about worst case then shouldn't use

//Heap Sort O(1)
//On average, slower than quick sort
//https://stackoverflow.com/questions/2467751/quicksort-vs-heapsort
//https://brilliant.org/wiki/heap-sort/


//Radix Sort + Counting Sort
//Merge, Quick sort - most often used in real life
//O(n log n) - mathematically impossible to beat this because sort by comparison
//Non-Comparison Sort: Counting Sort, Radix Sort
//Only work with numbers/integers in restricted range
//https://brilliant.org/wiki/radix-sort/
//https://www.cs.usfca.edu/~galles/visualization/RadixSort.html
//https://brilliant.org/wiki/counting-sort/
//https://www.cs.usfca.edu/~galles/visualization/CountingSort.html




//Exercise: Sorting: Interview

//#1 - Sort 10 schools around your house by distance:
//Input is very small, need somthing simple, Space Complexity O(1)
//Might be nearly sorted
//Ans: Insertion Sort

//#2 - eBay sorts listings by the current Bid amount:
//Radix or Counting Sort - bid ($1~$5000), numbers that need to be sorted, fixed length of integer to beat O n log n time, know it's gonna be certain range

//#3 - Sport scores on ESPN
//Different kinds of scores
//Answer: Quick Sort: most efficient, might have worst case , probably not sorted, merge sort might be too much for space complexity, in comparision quick sort has better space complexity

//#4 - Massive database (can't fit all into memory) needs to sort through past year's user data
//Need sort externally
//Answer: Merge Sort, not sorting in memory, worry about performance, get O n logn

//#5 - Almost sorted Udemy review data needs to update and add 2 new reviews
//eg. 500 reviews
//Anser: Insertion Sort, assume prevous data is already sorted - pre ordered list - suitable for insertion sort

//#6 - Temperature Records for the past 50 years in Canada
//Answer: Radix or Counting sort: if no decimal places
//If temperatures are accurate: Quick sort - do some in memory sorting - and also save space complexity

//#7 - Large user name database needs to be sorted. Data is very random.
//Not enough info
//Answer: Merge sort if memory is not expensive, quick sort if not worry about the worst case and can save memory

//#8 - You want to teach sorting for the first time
//Ans: Bubble Sort, Selection Sort


//Sorting in Your Language
//JS: [1,2,3].sort() - quick/merge/insertion 
//no requirements for JS - different engines implement differently
//eg. Mozilla: merge sort
//eg. chrome: quicksort and also insertion sort for the smaller arrays

//Sorting Review
//Most of the time: O(N log N)
//Quick sort: when average case performance matters more than the worst case performance
//Sort in O log n, worst case: O N^2

//Merge Sort: always O(n log n), stable, always gives the same resits in order if two items are the same
//Space Complexity is higher than quick sort, but it's a useful sort

//Insertion Sort, Selction Sort, Bubble Sort
//Not used often in real life
//Insertion Sort is great for small or nearly sorted inputs

//Time constraint, something not efficient like bubble sort - slow in real life, merge sort is something we can implement with a library or fairly easity with documentation
//Use merge sort to divide and conquer the code to make it more efficient

