export function countGs(str) {
    var count = 0;   
    for (var i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() == "g") {
            count++;
        }
    }
    return count;
}