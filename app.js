//Ans of Problem no 1.....

var num = 67;

if(num < 33) {
    console.log("Failed!");
}
else if(num >= 33 && num <= 39) {
    console.log("D");
}
else if(num >= 40 && num <= 49) {
    console.log("C");
}
else if(num >= 50 && num <= 59) {
    console.log("B");
}
else if(num >= 60 && num <= 69) {
    console.log("A-");
}
else if(num >= 70 && num <= 79) {
    console.log("A");
}
else if(num >= 80) {
    console.log("A+");
}
else
console.log("Invalid!");



//Ans of Problem no 2.....

const num = prompt("Enter your number: ");

if (num % 2 == 0) {
    console.log("Even");
}
else
{
    console.log("Odd");
}



//Ans of Problem no 3.....

let nums2 = [8, 10, 17, 3, 7, 18, 11, 12, 20, 1, 14, 19, 5, 13, 9, 4, 16, 2, 15, 6];

function compare(a, b) {
    return a - b;
}
console.log(nums2.sort(compare));




//Ans of Problem no 4.....

const year = prompt("Enter your year: ");

if (year % 4 == 0) {
    console.log("Yes! This is leap year");
}
else
{
    console.log("No, This is not leap year");
}




//Ans of Problem no 5.....

const nums = [];

for (let i = 1; i <= 50; i++) {
    if(i % 15 == 0) {
        nums.push(i);
    }
}
console.log(nums);




//Ans of Problem no 6.....

const checkfriends = (arr) => 
{
    let biggestName = arr[0];

    for(let i = 0; i < arr.length; i++)
    {
        const element = arr[i];
        if(element.length > biggestName.length)
        {
            biggestName = element;
        }
    }
    return biggestName;
}

var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];

const bigFriend = checkfriends(friends);
console.log(bigFriend);





//Ans of Problem no 7.....

var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

var uniqueNums = [...new Set(numbers)]
console.log(uniqueNums);





//Ans of Problem no 8.....
const checkNums = (arr) => 
{
    let biggestNumber = arr[0];

    for(let i = 0; i < arr.length; i++)
    {
        if(arr[i] > biggestNumber)
        {
            biggestNumber = arr[i];
        }
    }
    return biggestNumber;
}

var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
var bigNum = checkNums(numbers);

console.log(bigNum);




let monthlySavings = (arr, num) => {
    if (typeof(arr) != "object" || typeof(num) != "number")
    {
        return "invalid input";
    }

    var totalIncome = 0;
    var totalTax = 0;
    for (let i = 0; i < arr.length; i++) {
        totalIncome += arr[i];

        if (arr[i] >= 3000) {
            var tax = arr[i]*(20/100);
            totalTax += tax;
        }
    }
    var netIncome = totalIncome-totalTax;
    const totalSavings = netIncome-num;
    if (totalSavings >= 0)
    {
        return totalSavings;
    }
    else
    {
        return "earn more";
    }
    
}

var payment = [900, 2700, 3400];
var livingCost = 10000;

const savings = monthlySavings(payment,livingCost);
console.log(savings);