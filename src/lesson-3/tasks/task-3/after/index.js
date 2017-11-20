let result = 0;

const sum = () => (number = 0) => {
    if (typeof number === 'number') {
        result += number;
        console.log(result);
    } else {
        throw new Error("First argument is not a 'Number' ")
    }
};

export default sum
