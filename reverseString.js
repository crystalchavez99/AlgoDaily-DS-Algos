function reverseString(string){
    console.log(string)
    let result = "";
    for(let i = string.length -1; i >= 0; i--){
        result += string[i];
    }
    return result
}

console.log(reverseString("jake"))
