export function range(start, end, step = start > end ? 1 : -1) {
    var array_to_return = [];

    if ((start > end && step >= 0) || (start < end && step <= 0)) {
        return array_to_return;
    }
    if (start < end) {
        for (var i = start; i <= end; i+=step) {
        array_to_return.push(i);
        }
    }
    else if (start > end) {
        for (var i = start; i >= end; i+=step) {
            array_to_return.push(i);
        }
    }
    
    
    return array_to_return;
}