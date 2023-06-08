const numbers = [48, 20, 18, 7, 12,9, 8,10,12, 96, 3,36,51]; //my array

function filterNumbers(num){
    return num.filter(num => num % 3 === 0 && num % 6 === 0 && num % 9 !== 0);
    //filter mthod checks if the num is divisble by 3, 6, and not 9
}


const filArr = filterNumbers(numbers)// calling the function in a variable
console.log(filArr) //showing this in node
