const PERSONDATA = [{
    name:"Michael",
    rank:4,
    age:19,
    score: 66
},{
    name:"Emily",
    rank:7,
    age:22,
    score: 37
},{
    name:"Sam",
    rank:2,
    age:23,
    score:80
},{
    name:"William",
    rank:10,
    age:26,
    score:11
},{
    name:"James",
    rank:8,
    age:26,
    score:28
},{
    name:"Mia",
    rank:5,
    age:28,
    score:54
},{
    name:"Isabella",
    rank:1,
    age:31,
    score:100
},{
    name:"Alex",
    rank:3,
    age:34,
    score:75
},{
    name:"Olivia",
    rank:6,
    age:36,
    score:42
},{
    name:"Geoff",
    rank:9,
    age:41,
    score:19
}]

//exercise 5
console.log("Exercise 5");

function search(fname,array){
    var found = false;
    for(var i = 0; i<array.length;i++){ 
        if( array[i].name===fname){
            found =true;
             console.log( array[i].name+ " was found at" +" " + i);
        }
    }   
    if(found ==false){
       
    
        console.log(fname + " was not found");
    }

}

search("Geoff", PERSONDATA);
search("Eric", PERSONDATA);
 
console.log("            ")
 console.log("Exercise 6");
//Exercise 6

function filter(fscore, array2){
    var arr3 = [];
    for(var i = 0; i < array2.length;i++){
        if(array2[i].score>fscore){
         arr3.push (array2[i]);
        
        }

    }
    return arr3;
    

}
console.log(filter(50, PERSONDATA ));
