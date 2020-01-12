// 1. Написать функцию возведения числа в степень.
function pow(x, n) {
    return (n == 1) ? x : (x * pow(x, n - 1));
  }
console.log( pow(2, 8) );

//  2. Написать функцию поиска наибольшего общего делителя. (быстрый алгоритм Евклида)
function nod (a, b) {
    return (b == 0) ? a : nod(b, a % b)
}
console.log( nod(12, 36) );

// 3. Написать функцию для поиска максимальной цифры в числе. 
/* function maxNumber (n) {
    let m = n % 10;
   return (m > m) ? m : maxNumber(m, n / 10)
}
console.log( maxNumber(12) ); */
function recursion(nInput) {
    while ( let r > nInput.lenght ){
       // Базовый случай 
    if (num[r] == 0) {
        return 0;
    } // Шаг рекурсии / рекурсивное условие
    else {
        return Math.max(num[r+1], recursion());
    }
}
}
console.log( recursion(123) );

// 4. Написать функцию, которая определяет простое ли переданное число.
let n = prompt('Введите число', 7);
function isPrime (n, i) {
    // i- дополнительный параметр. При вызове должен быть равен 2
   // Базовый случай 
    if (n < 2) {
        return false;
    } // Базовый случай 
    else if (n == 2) {
        return true;
    } // Базовый случай 
    else if (n % i == 0) {
        return false;
    } // Шаг рекурсии / рекурсивное условие
    else if (i < n / 2) {
        return isPrime(n, i + 1);
    } else {
        return true;
    }
}
alert( isPrime(n, 2) );

// 5. Написать функцию для вывода всех множителей переданного числа в возрастающем порядке.
function factors(l, k) {
    // k- дополнительный параметр. При вызове должен быть равен 2
    // Базовый случай
    if (k > l / 2) {
        console.log(l);
        return;
    }
    // Шаг рекурсии / рекурсивное условие
    if (l % k == 0) {
        console.log(k);
        factors(l / k, k);
    } // Шаг рекурсии / рекурсивное условие
    else {
        factors(l, ++k);
    }
}
console.log( factors(18,2) );

// 6. Написать функцию, которая возвращает число Фибоначчи по переданному порядковому номеру.
fn = prompt("Введите порядковый номер числа Фибоначчи");
function fib(fn) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= fn; i++) {
      let c = a + b;
      a = b;
      b = c;
    }
    return b;
}    
alert( fib() );   
