/*Задача 1. принимает на вход строку, возвращает перевернутую строку
пример запуска функции:
reverseStr('Hello'); //вернет  'olleH'*/
function reverseStr(str) {
    return str.split('').reverse().join('');
}
console.log(1, reverseStr('Hello'));
/*Задача 2.принимает на вход массив чисел, вывести в консоль квадрат каждого элемента массива. тремя способами. for, for..in, for..of*/
function logSquare(array) {
    console.log(2);
    console.log('for');
    for (var i = 0; i < array.length; i++) {
        // console.log(array[i] * array[i]);
        console.log(array[i] * * 2);
        //console.log(Math.pow(array[i], 2));
    }
    console.log('for..in');
    for (var i in array) {
        console.log(array[i] * array[i]);
    }
    console.log('for..of');
    for (var i of array) {
        console.log(i * i);
    }
}
logSquare([1, 3, 4, 5]);
/*Задача 3. принимает на вход массив строк. возвращает перевернутый массив перевернутых строк
Пример:
reverseArr(['lol', '123', 'usd']); // вернет ['dsu', '321', 'lol']*/
function reverseArr(array) {
    array = array.reverse();
    for (var item in array) {
        array[item] = array[item].split('').reverse().join('');
    }
    return array;
    //return array.join(',').split.reverse().join('').split(',');
}
/*Задача 4. калькулятор. первым аргументом идет действие (add subtract multiply divide). вторым и третьим - числа. Возвращает результат действия над двумя числами
примеры:
calculate('add', 10, 5); //15
calculate('subtract', 12, 3) //9
calculate('multiply', 2, 7) //14
calculate('divide', 6, 2) //3
*/
function calculate(acttion, num1, num2) {
    if (acttion === 'add') {
        return num1 + num2;
    }
    else if (acttion === 'subtract') {
        return num1 - num2;
    }
    else if (acttion === 'multiply') {
        return num1 * num2;
    }
    else if (acttion === 'divide') {
        return num1 / num2;
    }
}
/* Задача 5. на вход - массив чисел
на выход - сумма элементов массива*/
function arraySum(array) {
    var sum = 0;
    for (var item of array) {
        sum = sum + item;
    }
    return sum;
}
/* Задача 6.на вход - массив строк
на выход - сумма длин строк
Пример:
getSumLengths(['ab', 'abc', 'lol']) //8*/
function getSumLengths(array) {
    var sum = 0;
    for (var item of array) {
        sum = sum + item.length;
    }
    return sum;
}
/*Задача7. на вход - массив, в котором находятся массивы чисел. вывести каждый элемент на экран
пример массива на вход - [ [1,2,3], [1, 4], [10, 5, 9] ]*/
function logArr(array) {
    for (var item of array) {
        for (var i of item) {
            console.log(i);
        }
    }
}