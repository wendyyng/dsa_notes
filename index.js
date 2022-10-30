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
console.log(numbers);
