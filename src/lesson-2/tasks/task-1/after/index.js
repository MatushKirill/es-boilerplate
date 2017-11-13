export function findString(text, pattern) {
    let result = 0;
    const rexSource = pattern.source;
    while (text.indexOf(rexSource) !== -1) {
        let lastIndex = text.indexOf(rexSource);
        pattern.lastIndex = lastIndex;
        result += pattern.exec(text).length;
        text = text.substring(lastIndex + rexSource.length, text.length);
    }
    return result
}
