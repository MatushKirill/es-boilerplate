export default function func(numberOfIterations, timeout, callback) {
    const defaultTimeout = timeout;
    for (let i = 0; i < numberOfIterations; i++) {
        setTimeout(function () {
            console.log(callback(i))
        }, timeout);
        timeout += defaultTimeout
    }
}
