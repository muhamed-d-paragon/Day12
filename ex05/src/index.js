var myPetsArray = [
    {
      animalType: "Dog",
      name: "Pujdo"
    },
    {
      animalType: "Cat",
      name: "Maca"
    },
    {
      animalType: "Bird",
      name: "Tweety"
    }
  ];

function myPetsFunction(pets) {
    return myPetsArray[1].name;
}

console.log(myPetsFunction());
module.exports = myPetsFunction;
module.exports.myPets = myPetsArray;