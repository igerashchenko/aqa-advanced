// usage of the for loop
const number1 = 3;

console.log(`Таблиця множення для числа ${number1} (використання циклу for):`);

for (let i = 1; i <= 10; i++) {
    console.log(`${number1} x ${i} = ${number1 * i}`);
}

// usage of the while loop
const number2 = 6;

console.log(`Таблиця множення для числа ${number2} (використання циклу while):`);

let i = 1; 
while (i <= 10) {
    console.log(`${number2} x ${i} = ${number2 * i}`);
    i++; 
}