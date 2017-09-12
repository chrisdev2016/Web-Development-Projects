const arr1 = [5,8,2,1,5,7,3,4,5,8,1,2,4,8,3,1,4,5]; 
const arr2 = [15,26,74,12,3,6,9,1,2,5];


//exercise 1
console.log("Exercise 1");
for(var i=0; i<arr1.length; i++){
    if(arr1[i]%2==0){
        console.log(arr1[i]);
    }
}
console.log("       ");
//exercise 2
console.log("Exercise 2");
var biggestNumber = 0;
for (var i=0; i<arr2.length;i++ ){
    if(arr2[i]>biggestNumber){
        biggestNumber=arr2[i];
    }
}  
        console.log( "The biggest number in this array is" + " " + biggestNumber);


console.log('        ');

//exercise 3
console.log("Exercise 3");
function myNumbers(int){
    var text = ' ';
for ( var i =1; i<= int;i++){
    
    for (var j = 0; j< i; j++){
     text = text + i;
    }
    
}

console.log(text);
}

myNumbers(5);

console.log("           ");

//exercise 4
console.log("Exercise 4");
function numberPyramid(int){

for ( var i =1; i<= int;i++){
    var output = " ";
    for (var j = 1; j<= i; j++){
        output = output + i ;
       
    }
     console.log(output);
}

}

numberPyramid(5);







