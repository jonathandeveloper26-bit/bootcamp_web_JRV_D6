export function fizzbuzz(num){
    var string_to_return = ""
    for (var i = 1; i <= num; i++) {
        if (i % 3 == 0) {
            string_to_return += "Fizz";
        }
        if (i% 5 == 0) {
            string_to_return += "Buzz";
        }

        if (!(i % 3 == 0 || i % 5 == 0)) {
            string_to_return += String(i);
        }

        if (i != num) {
            string_to_return+= ", ";
        }
    }
    return string_to_return;
}