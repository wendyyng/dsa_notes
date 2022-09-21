//Big O
const nemo = ['nemo'];
const large = new Array(100).fill('nemo')
function findNemo(arr) {
  let t0 = performance.now()
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'nemo')
      console.log('Found Nemo!')
  }
  let t1 = performance.now();
  console.log('Call to find Nemo took ' + (t1 - t0)
    + ' milliseconds');
}

// findNemo(nemo)
//run time increases as the arr length increases
findNemo(large)

//Good Code
//1. Readable 
//2. Scalable