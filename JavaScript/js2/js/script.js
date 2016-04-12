var x = +prompt('Введите число, которое будем возводить в степень');
var n = +prompt('Введите степень, в которую будем возводить');

function pow(base, exponent) {
    var result = 1;
    for (var i = 0; i < exponent; i++) {
        result = result * base;
    }
    return result;
}
var powResult = pow(x, n);
alert(powResult);
console.log('Результат данной операции', powResult);
