function calculate(operator) {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Vui lòng nhập đủ 2 số!");
        return;
    }

    let result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                alert("Không thể chia cho 0!");
                return;
            }
            result = num1 / num2;
            break;
    }

    document.getElementById("result").innerText = "Result: " + result;
}