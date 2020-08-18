function map (array, fn){
    return array.map(fn);
}

function reduce(array, fn, start) {
    if (!!start) return array.reduce(fn, start);
    return  array.reduce(fn);
}