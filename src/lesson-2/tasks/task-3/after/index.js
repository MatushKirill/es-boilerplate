export function format(func) {
    let first = func.charCodeAt(0);
    let second = func.charCodeAt(1);
    return `\\u${ first.toString(16)}\\u${second.toString(16)}`
}
