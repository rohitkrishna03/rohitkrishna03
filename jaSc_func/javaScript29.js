const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter the value of number1: ", (input1) => {
    let number1 = Number(input1);

    rl.question("Enter the value of number2: ", (input2) => {
        let number2 = Number(input2);

        rl.question("Enter an operator (either +, -, * or /): ", (operator) => {
            let result;

            switch (operator) {
                case "+":
                    result = number1 + number2;
                    console.log(`${number1} + ${number2} = ${result}`);
                    break;

                case "-":
                    result = number1 - number2;
                    console.log(`${number1} - ${number2} = ${result}`);
                    break;

                case "*":
                    result = number1 * number2;
                    console.log(`${number1} * ${number2} = ${result}`);
                    break;

                case "/":
                    result = number1 / number2;
                    console.log(`${number1} / ${number2} = ${result}`);
                    break;

                default:
                    console.log("Invalid operator");
            }

            rl.close();
        });
    });
});
