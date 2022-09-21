const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/fruitsDB', {useNewUrlParser:true});

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required !!!"]
  },
  rating: {
    type: Number,
    min: 5,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const pineapple = new Fruit({
  name: "Pineapple",
  rating: 9,
  review: "Great fruit"
})

pineapple.save()


const mango = new Fruit({
  name:"Mango",
  rating: 6,
  review: "Decent fruit"
})

// const fruit = new Fruit({
 
//   rating: 10,
//   review: "Pretty solid as fruit."
// });

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema
})

const Person = mongoose.model("Person", personSchema)



Person.updateOne({name: "John"},{favouriteFruit: mango }, function (err){
  if(err){
    console.log(err)
  }else{
    console.log("Favourite Fruit has been updated")
  }
})






// fruit.save();



// const kiwi = new Fruit({
//   name: "Kiwi",
//   rating: 3
// });

// const orange = new Fruit({
//   name: "Orange",
//   rating: 2
// });

// Fruit.insertMany([kiwi, orange],function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("Success");
//   }
// })

Fruit.find(function(err, fruits){
  if(err){
    console.log(err);
  }else{
    // mongoose.connection.close()


    fruits.forEach(function(fruit){
      console.log(fruit.name)
    });
    
  }
});

// Fruit.updateOne({_id: "6329bde38628116a8dad31f6"},{name: "Peach"}, function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("Successsfully Updated")
//   }
// })


// Fruit.deleteOne({name: "Peach"},function(err){
//   if(err){
//     console.log(err)
//   }else{
//     console.log("Seccessfully Deleted")
//   }
// })


// Person.deleteMany({name: "John"},function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("Ready")
//   }
// })










