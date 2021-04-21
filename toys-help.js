 /*const phones = [
    {
        id: 1,
        name: "iPhone",
        maker: "Apple, Inc.",
        operatingSystem: "iOS",
        price: 900,
        weight: 1.2
    },
    {
        id: 2,
        name: "Galaxy",
        maker: "Samsung",
        operatingSystem: "Android",
        price: 600,
        weight: 1.4
    }
]

const addPhoneToInventory = (phoneObject) => {
    /*
        Step 1: Get maximum id current in array
    */
    // Get index of last item in array
     /*const lastIndex = phones.length - 1

    // Get the last object in the array
    const currentLastPhone = phones[lastIndex]

    // Get id property value of last phone
    const maxId = currentLastPhone.id


    /*
        Step 2: Increase the current max id by 1
    */
     /*const idForNewPhone = maxId + 1


    /*
        Step 3: Add the id property to the phone object
    */
     /*- phoneObject.id = idForNewPhone


    /*
        Step 4: Add the phone object to the array
    */
     /*- phones.push(phoneObject)
}

const pixel = {
    name: "Pixel",
    maker: "Google",
    operatingSystem: "Android",
    price: 399,
    weight: 1.2
}

addPhoneToInventory(pixel)

for (const phone of phones) {
    console.log(`The ${phone.maker} ${phone.name} costs ${phone.price} dollars. It weighs ${phone.weight} grams.`)
}

console.log(phones)


/*
    Commented out the "find" code
 */

// const phoneToFind = 2
//
// for (const phone of phones) {
//     if (phone.id === phoneToFind) {
//         phone.weight = phone.weight + 0.4
//         console.log(`The ${phone.maker} ${phone.name} costs ${phone.price} dollars. It weighs ${phone.weight} grams.`)
//     }
// }