export function arrayFiltering(array, test) {
    var array_to_return = [];
    for (var i = 0; i < array.length; i++) {
        if (test(array[i])) {
            array_to_return.push(array[i]);
        }
        else {
            continue;
        }
    }
    return array_to_return;
}