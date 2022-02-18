// დავალება 1

let number = [5, 25, 89, 120, 36]
number.push('javascript' , 'python')
console.log(number);

let number = [5, 25, 89, 120, 36]
number.unshift('html','css')
console.log(number);

let number = [5, 25, 89, 120, 36]
console.log (number .length)

let number = [5, 25, 89, 120, 36]
number.shift()
number.pop()
console.log(number)

let number = [5, 25, 89, 120, 36,'javascript','python']
let newnumber = number.slice( 5 );
console.log(newnumber);

// დავალება 2

let fruit= ['orang', 'banana', 'pear'] 
console.log(fruit.length);
fruit.push('apple', 'ananas');
fruit.unshift('Watermelon');
fruit.splice(2,0, 'mango');
fruit.shift ();
fruit.pop()
console.log(fruit);

//დავალება 3

let array = [12, 25, 3, 6, 8, 14, 7, 23];
let newarray = array.map (function(item) {
    return item / 3;
})
 console.log(newarray);

 //დავალება 4
 
 let array = ["hello", 125, "javascript", "html", 43, "css", "scss", "bootstrap", 88, 59, "python"];
 let newarray=array.filter(function(item){
     return item > 0;
 })
 console.log(newarray);

 //დავალება 5

 let languages = ['html', 'css', 'javascript', 'python','php' ]
 let newlanguages = languages.filter ((item) => item.length > 3) ;

 console.log(newlanguages);

 //დავალება 6

 let array= ['academy', 'of', 'digital', 'industries'].reduce (function(accumulator, currentValue){
     return accumulator.concat(currentValue)
 },
 []
 )

console.log(array);

//დავალება 7

//let item = [12, 'google', 32, 'null', 'yahoo', 25];

// ?????????


//დავალება 8

let words = ['Madrid', 'Rome', 'Milan', 'Berlin'];
let newwords = words.filter (item =>item.includes('M'));
console.log(newwords);
 








