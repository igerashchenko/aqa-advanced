function calculateAreaDeclaration(width, height) {
    return width * height;
}

const area1 = calculateAreaDeclaration(5, 10);
console.log(`Площа прямокутника (function declaration): ${area1}`);

const calculateAreaExpression = function(width, height) {
    return width * height;
};

const area2 = calculateAreaExpression(5, 10);
console.log(`Площа прямокутника (function expression): ${area2}`);

const calculateAreaArrow = (width, height) => width * height;

const area3 = calculateAreaArrow(5, 10);
console.log(`Площа прямокутника (arrow function): ${area3}`);

