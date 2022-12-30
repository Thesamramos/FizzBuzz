let fizzBuzz = (num1, num2) => {
    for (let i = 1; i <= 100; i++){
        if (num1 % i == 0) console.log('Fizz');
        else if (num2 % i == 0) console.log('Buzz');
        else if (num1 % i == 0  && num2 % i == 0) console.log('FizzBuzz');
        else console.log(i)
    }
}

console.log(fizzBuzz(28, 43))
