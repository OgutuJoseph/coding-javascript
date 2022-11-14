/** controller methods */

// concat()
const concat = async (req, res) => {
    /** Join two arrays */
    // const arr1 = ["Cecilie", "Lone"];
    // const arr2 = ["Emil", "Tobias", "Linus"];
    // const children = arr1.concat(arr2); 


    /** Join three arrays */
    // const arr1 = ["Cecilie", "Lone"];
    // const arr2 = ["Emil", "Tobias", "Linus"];
    // const arr3 = ["Robin"];
    // const children = arr1.concat(arr2, arr3);

    /** Concatenate string and numbers */
    // const arr1 = ["Cecilie", "Lone"];
    // const arr2 = [1, 2, 3];
    // const arr3 = arr1.concat(arr2);

    /** Concatenate nested arrays */
    const arr1 = [1, 2, [3, 4]];
    const arr2 = [[5, 6], 7, 8];
    const arr3 = arr1.concat(arr2);

    res.status(200).json(arr3);
};

// constructor
const constructor = async (req, res) => {
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    let text = fruits.constructor;

    console.log('text: ', text);
    // res.status(200).json(text);
};

// copyWithin()
const copyWithin = async (req, res) => { 
    /** Copy the first two array elements to the last two array elements */
    // const fruits = ["Banana", "Orange", "Apple", "Mango"];
    // fruits.copyWithin(2, 0);

    /** Copy the first two array elements to the last two array elements */
    // const fruits = ["Banana", "Orange", "Apple", "Mango", "fruit5", "fruit6"];
    // fruits.copyWithin(4, 0);

    /** Copy the first two array elements to the third and fourth position */
    // const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
    // fruits.copyWithin(2, 0, 2);

    /** Copy the first three array elements to the fifth, sixth and seventh */
    const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi", "fruit6", "fruit7"];
    fruits.copyWithin(4, 0, 3);

    res.status(200).json(fruits);
};

// entries()
const entries = async (req, res) => {
    /** Create an Array Iterator, and then iterate over the key/value pairs */
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    const f = fruits.entries();

    for (let x of f) {
        console.log('x', x);
    }
};

// every()
const every = async (req, res) => {
    /** Check if all values in ages[] are over 18 */
    const ages = [32, 33, 25, 40];

    // ages.every(checkAge)
    // function checkAge(age) {
    //     return age > 18;
    // }

    const checkAge = (age) => age > 18 //dont use parentheses here
    
    let result;
    if (ages.every(checkAge)){
        result = 'all ages are greater than 18';
    } else {
        result = 'not all ages are greater than 18';
    }

    res.status(200).json(result);

};

// fill()
const fill = async (req, res) => {
    /** Fill all the elements with a value */
    // const fruits = ["Banana", "Orange", "Apple", "Mango"];
    // fruits.fill("Kiwi");

    /** Fill the last two elements */
    // const fruits = ["Banana", "Orange", "Apple", "Mango"];
    // fruits.fill("Kiwi", 2, 4);

    /** Fill the last two elements */
    // const fruits = ["Banana", "Orange", "Apple", "Mango", "fruit5", "fruit6"];
    // fruits.fill("Kiwi", 4, 6);

    /** Fill the last three elements */
    const fruits = ["Banana", "Orange", "Apple", "Mango", "fruit5", "fruit6"];
    fruits.fill("Kiwi", 3, 6);

    res.status(200).json(fruits);
};

// filter()
const filter = async (req, res) => {
    /** Return an array of all values in ages[] that are 18 or over */
    const ages = [32, 33, 16, 40];

    /** !!works!! */
    // const result = ages.filter(checkAdult);
    // function checkAdult(age) {
    //     return age >= 18;
    // }

    /** !!alternative implementation!! */
    const checkAdult = (age) => {
        return age >= 18;
    };
    const result = ages.filter(checkAdult);

    res.status(200).json(result);
};

// find()
const find = async (req, res) => {
    /** Find the value of the FIRST element with a value over 18 */
    const ages = [3, 10, 18, 19, 20];

    const checkAge = (age) => {
        return age > 18;
    };
    const result = ages.find(checkAge);

    res.status(200).json(result);
};

// findIndex()
const findIndex = async (req, res) => {
    /** Find the FIRST element with a value over 18 */
    const ages = [3, 10, 17, 18, 20];

    const checkAge = (age) => {
        return age > 18;
    };
    const result = ages.findIndex(checkAge);

    res.status(200).json(result);
};

module.exports = {
    concat,
    constructor,
    copyWithin,
    entries,
    every,
    fill,
    filter,
    find,
    findIndex
};