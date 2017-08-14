const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const router = express.Router();
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));






const Cars = require('../models/Cars').model;
const Dealerships = require('../models/Dealerships').model;



// const car1 = new Cars({
//     make:"Toyoto",
//     model:"ETI",
//     year:2015,
//     dealership_id:'598e66ce1f77412cfc6494c6' 
// })

// car1.save()
// .then(savedcar=>{
//     console.log(savedcar)
// })
// .catch(err=>{
//     console.log(err)
// })



// // get all cars in a dealership

// Cars.find({})
// .then(cars=>{
//     console.log(cars)
// })
// .catch(err=>{
//     console.log(err)
// })



// // get car with a specific year

// Cars.find({"year": 2017})
// .then(cars=>{
//     console.log(cars)
// })
// .catch(err=>{
//     console.log(err)
// })

// // find a car with by id

// Cars.findById('598e66ce1f77412cfc6494c8')
// .then(car=>{
//     console.log(car)
// })
// .catch(err=>{
//     console.log(err)
// })


// // update attribute of car
// const updateData = {
//     make: "Toyoto"
// }

// Cars.findOneAndUpdate({ _id: '598e66ce1f77412cfc6494c9' }, updateData, {})
//     .then(result => {
//         console.log(result)
//     })
//     .catch(err => {
//         console.log(err)
//     })

// // find dealership of a single car
// Cars.findById('598e66ce1f77412cfc6494c8')
//     .then(car => {
//         if (car) {
//             let dealership_id = car.dealership_id
//             Dealerships.findById(dealership_id)
//                 .then(dealership => {
//                     console.log(dealership)
//                 })
//                 .catch(err => {
//                     console.log(err)
//                 })

//         }
//     })
//     .catch(err => {
//         console.log(err)
//     })




// //find all cars that belong to a  dealership
// Cars.find({})
// .where('dealership_id').equals('598e66ce1f77412cfc6494c5')
// .then(cars=>{
//     console.log(cars)
// })
// .catch(err=>{
//     console.log(err)
// })



router.get('/cars',(req,res)=>{
Cars.find({})
.then(cars=>{
    res.json(cars);
})
.catch(err=>{
    console.log(err)
    res.status(400)
    .json({err})
})

})

router.post('/cars', (req,res)=>{
    let car = req.body;
    let newCar = new Cars(car);

    newCar.save()
    .then(savedcar=>{
        console.log(savedcar)
        res.json(savedcar)
    })
    .catch(err=>{
        console.log(err)
        res.status(400)
        .json({err})
    })
    
})


router.get('/cars/:car_id', (req,res)=>{
     let id = req.params.car_id
     console.log(id)
   Cars.findById(id)
   .then(car=>{
       console.log(car);
       res.json(car)
   })
   .catch(err=>{
       console.log(err)
       res.status(400)
       .json({err})
   })


})

router.put('/cars/:car_id', (req,res)=>{
    Cars.findOneAndUpdate({_id:req.params.car_id},{make:req.body.make},{})
    .then(car=>{
        console.log(car)
        res.json(car)
    })

    .catch(err=>{
        console.log(err)
        res.status(400)
        .json({err})
    })
    


})




router.delete('/cars/:car_id', (req,res)=>{
    Cars.findByIdAndRemove(req.params.car_id)
    .then(car=>{
        console.log(car)
        res.json(car)
    })
    .catch(err=>{
        console.log(err)
        res.status(400)
        .json({err})
    })
})
module.exports=router