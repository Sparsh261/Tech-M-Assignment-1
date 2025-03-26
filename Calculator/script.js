let input = document.getElementById("input");
let buttons = document.getElementsByClassName("btn");
let clearButton = document.querySelector('.clear');
let exp = '';

let ar = Array.from(buttons);

ar.forEach(button => {
    button.addEventListener('click', () => {

        let value = button.textContent;

        if (value !== "=" && value !== "C") {
            exp += value;
            input.value = exp;
        }

        // To evaluate
        if (value === "=") {
            try {
                exp = evaluateExpression(exp);
                input.value = exp;
            } catch (e) {
                input.value = "Error";
                exp = '';
            }
        }

        // To clear expression
        if (value === "C") {
            exp = '';
            input.value = '';
        }
    });
});

// Evaluation
function evaluateExpression(expr) {
    expr = expr.replace(/%/g, '/100');
    return eval(expr);
}