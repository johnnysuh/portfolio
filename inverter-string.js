function reverseString(str) {
    var newString
    for (var i = str.lenght - 1; i > 0; i--) {
    newString += str[i];
    }
    return newString;
}
reverseString("Javascript")