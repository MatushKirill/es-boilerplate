export const getInfo = (data) => {
    const {arr0, arr1 = [], arr2 = []} = data;
    const allArrays = [...arr0,...arr1,...arr2];
    return {
        length:allArrays.length,
        max: Math.max(...allArrays),
        min: Math.min(...allArrays)
    }
};
