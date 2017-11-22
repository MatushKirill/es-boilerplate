export default (limit = 10, delay = 1000, callback = val => val) => {
    if (typeof callback !== 'function') {
        throw new Error('third argument must be function');
    }
    if (typeof  limit !== 'number') {
        throw new Error('First argument must be a number');
    }
    if (typeof  delay !== 'number') {
        throw new Error('Second argument must be a number');
    }

    for (let i = 0; i < limit; i++) {
        setTimeout(() =>
            console.log(callback(i)), i * delay)
    }
}
