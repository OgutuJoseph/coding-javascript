/** controller methods */

// concat()
const concat = async (req, res, next) => {
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
const constructor = async (req, res, next) => {
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    let text = fruits.constructor;

    console.log('text: ', text);
    // res.status(200).json(text);
};

// copyWithin()
const copyWithin = async (req, res, next) => { 
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

module.exports = {
    concat,
    constructor,
    copyWithin
};