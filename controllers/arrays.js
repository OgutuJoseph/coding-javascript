/** controller methods */

// concat()
const concat = async (req, res, next) => {
    try {
        /** join two arrays */
        // const arr1 = ["Cecilie", "Lone"];
        // const arr2 = ["Emil", "Tobias", "Linus"];
        // const children = arr1.concat(arr2); 


        /** join three arrays */
        // const arr1 = ["Cecilie", "Lone"];
        // const arr2 = ["Emil", "Tobias", "Linus"];
        // const arr3 = ["Robin"];
        // const children = arr1.concat(arr2, arr3);

        /** concatenate string and numbers */
        // const arr1 = ["Cecilie", "Lone"];
        // const arr2 = [1, 2, 3];
        // const arr3 = arr1.concat(arr2);

        /** concatenate nested arrays */
        const arr1 = [1, 2, [3, 4]];
        const arr2 = [[5, 6], 7, 8];
        const arr3 = arr1.concat(arr2);

        res.status(200).json(arr3);

    } catch (error) {
        console.log('error: ', error);
    }
};

module.exports = {
    concat,
};