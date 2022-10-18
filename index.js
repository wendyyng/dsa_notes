// 6_Arrays

//Lookiup O(1)
//Push O(1)
//Insert O(n) linear
//Delete O(n) 

const strings = ['a', 'b', 'c', 'd'];
// strings[2]
strings.push('e'); //O(1) adding one to the end
strings.pop(); // O(1) remove the last item
strings.unshift('x') //add to the beginning
//loop through everything and realign the indexes O(n)
strings.splice(2, 0, 'alien') //O(n/2) -> O(n)


//32 bits 4 shelft to store one variable
//4*4 = 16 bytes of storage

//Two types of arrays: Static & Dynamic
//Static: fixed in size, create with adjacent set of memory
//Dynamic: allows to copy and rebuild the array in new location

//C++ - allow to manage and more control over memory
// int a[20]; //array that has space for 20items
// int b[5] {1,2,3,4,5}

//Dyanmic Array

// Var vs Let vs Const
// https://dev.to/sethusenthil/var-vs-let-vs-const-1cgc