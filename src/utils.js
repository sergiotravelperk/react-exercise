function arrayToString(array) {
    if (array) {        
        return array.map((item) => { return item.name }).join(', ');
    }        
    return '';
}

export {
    arrayToString
}