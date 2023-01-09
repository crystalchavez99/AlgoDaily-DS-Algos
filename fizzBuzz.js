function fizzBuzz(num) {
    let res = '';
    let i = 1;
    while (i <= num) {
        if (i % 3 === 0) {
            res += `fizz`
        } else if (i % 5 === 0) {
            res += `buzz`
        }else if (i % 3 === 0 && i % 5 === 0) {
            res += `fizzbuzz`
        } else {
            res += `${i}`
        }
        i++;
    }
    return res
}

console.log(fizzBuzz(15))
