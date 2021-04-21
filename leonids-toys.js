//All of the keys and values are contained within the opening and closing curly braces {}.//
//Each key/value pair is separated by a comma (except after the last one)//

// const toys = {
   // id: 1,
   // name: "Optimus Prime",
    // maker: "Hasbro",
    // price: 700,
    // weight: 3.2
// }

//const games = {
   // id: 2,
  //  name: "Shoots N Ladders",
   // maker: "Milton Bradley",
   // price: 20,
    //weight: 1.4
 // }

 // const toyGun = {
   // id: 3,
    // name: "Zombie Strike",
    // maker: "Nerf",
   // price: 35,
   // weight: 3.2
// }

 const toys = [
    {
        id: 1,
        name: "Optimus Prime",
        maker: "Hasbro",
        price: 700,
        weight: 3.2
 },
 {
        id: 2,
        name: "Shoots N Ladders",
        maker: "Milton Bradley",
        price: 20,
        weight: 1.4
},
{
        id: 3,
        name: "Zombie Strike",
        maker: "Nerf",
        price: 35,
        weight: 3.2
 }
]

//console.log(toys)//

/*for (const toy of toys) {
    console.log(toy.price)
}*/

/*for (const toy of toys) {
    console.log(`Price is $${toy.weight}`)
}*/

const car = {
        id: 4,
        name: "Dump Trucks",
        maker: "toys r us",
        price: 11.00,
        weight: 1.34
}

const play = {
    id: 5,
    name: "clay",
    maker: "play dough",
    price: 3.50,
    weight: 1.38
}

toys.push(car)
toys.push(play)

/*for (const toy of toys) {
    console.log(`The cost $${toy.price} for the ${toy.name} usually depends on the ${toy.weight}`)
}*/

/*for (const toy of toys) {
    toy.price = toy.price + 5%
    console.log(`Toy maker ${toy.maker}'s old cost of $${toy.price} for the ${toy.name} has now increased by $${toy.weight}`)
}*/

/*const toysToFind = 1

for (const toy of toys) {
    if (toy.id === toysToFind) {
    toy.price = toy.price + 5%
    console.log(`Toy maker ${toy.maker}'s old cost of $${toy.price} for the ${toy.name} has now increased by $${toy.weight}`)
    }
}*/

const starwars = {
    name: "Lego Star Wars X-wing",
    maker: "The Lego Group",
    price: 69.99,
    weight: 3.47
}

const addToyToInventory = (toyObject) => {
    const lastIndex = toys.length - 1
    const currentLastToy = toys[lastIndex]
    const maxId = currentLastToy.id
    const idForNewToy = maxId + 1

    toyObject.id = idForNewToy
    toys.push(toyObject)
}

addToyToInventory(starwars)

for (const toy of toys) {
        console.log(`Toy maker ${toy.maker}'s old cost of $${toy.price} for the ${toy.name} has now increased by $${toy.weight}`)
} 