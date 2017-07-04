//JavaScript restaurant
//use the generateMenu() function to get a menu object when you need it

// This is a test order. It should take 8 seconds and should cost $65.
// You can also test your restaurant functions with other menu items.
//order('Lobster','Wild Rice','Wine')


// WRITE YOUR CODE BELOW
// Order Function Here:

// Cook Function Here:

// Serve Function Here:



// function that returns a menu array, no need to modify this function
function generateMenu() {
    return [{
        name: 'Steak',
        time: 5,
        price: 40
    }, {
        name: 'Burger',
        time: 4,
        price: 15
    }, {
        name: 'Shawarma',
        time: 4,
        price: 20
    }, {
        name: 'Pizza',
        time: 3,
        price: 10
    }, {
        name: 'Sushi',
        time: 3,
        price: 15
    }, {
        name: 'Lobster',
        time: 5,
        price: 50
    }, {
        name: 'Carpaccio',
        time: 5,
        price: 25
    }, {
        name: 'Chicken',
        time: 4,
        price: 10
    }, {
        name: 'Wild Rice',
        time: 2,
        price: 5
    }, {
        name: 'Fries',
        time: 1,
        price: 5
    }, {
        name: 'Baked Potato',
        time: 1,
        price: 5
    }, {
        name: 'Salad',
        time: 1,
        price: 5
    }, {
        name: 'Coffee',
        time: 1,
        price: 0
    }, {
        name: 'Tea',
        time: 1,
        price: 0
    }, {
        name: 'Pop',
        time: 1,
        price: 0
    }, {
        name: 'Beer',
        time: 1,
        price: 5
    }, {
        name: 'Wine',
        time: 1,
        price: 10
    }]
}



var orderTime = 0;
var price = 0;

function order(item1, item2, item3) {

    if ((item1 === undefined) || (item2 === undefined) || (item3 === undefined)) {
        console.log(" error! please order 3 items");
    }

    else {
        cook(item1, item2, item3);

    }
}





function cook(orderitem1, orderitem2, orderitem3) {
    var array2 = [orderitem1, orderitem2, orderitem3]
    var menuArray = generateMenu();
    for (var j = 0; j < array2.length; j++) {

        for (var i = 0; i < menuArray.length; i++) {
            if (array2[j] === menuArray[i].name) {

                orderTime = orderTime + menuArray[i].time;
                break;
            }

        }

    }




    console.log('your order will take ' + orderTime + " " + "seconds");
    setTimeout(function () {
        serve(orderitem1, orderitem2, orderitem3);
    }, (orderTime * 1000));



    return orderTime;



}

function serve(cookItem1, cookItem2, cookItem3) {
    var cookedItemArray = [cookItem1, cookItem2, cookItem3];
    var menuArray = generateMenu();
    for (var k = 0; k < menuArray.length; k++) {
        for (var j = 0; j < menuArray.length; j++) {
            if (cookedItemArray[k] === menuArray[j].name) {
                price = price + menuArray[j].price;
                break;
            }
        }
    }
    console.log("your meal is ready! please pay " + " " + price + "dollars");
    return price;
}




order('Lobster', 'Wild Rice', 'Wine');