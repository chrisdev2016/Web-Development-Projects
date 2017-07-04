

var orderItem = [menu, side,drink];
var itemTime = ' ';
sum = 0;

function order(array){


    if(array.legnth===3){
  function cook(main, side,drink){
     var itemsArray = generateMenu();
      for(var j =0; j<orderItem.length; j++)
      
      for (var i =0; i< itemsArray.length; i++){
       if (orderItem[j]===itemsArray[i]){
            itemTime = itemsArray[i].time;
       }
      }

  }

  for (var k =0; k<itemTime.length; k++){
     sum = sum+ itemTime[k];
     return sum;
  }





    }
    else {
        console.log(" error! please order 3 items")
    }
}