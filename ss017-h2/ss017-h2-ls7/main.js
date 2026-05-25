function swap(firstNumber, secondNumber) {

    const temp = firstNumber;

    firstNumber = secondNumber;

    secondNumber = temp;

    return [firstNumber, secondNumber];
}

function swapNumbers() {

    const firstNumber =
        parseInt(document.getElementById("number1").value);

    const secondNumber =
        parseInt(document.getElementById("number2").value);

    if (
        isNaN(firstNumber)
        || isNaN(secondNumber)
    ) {

        document.getElementById("result").innerText =
            `Vui lòng nhập đầy đủ số!`;

        return;
    }

    const result =
        swap(firstNumber, secondNumber);

    document.getElementById("result").innerText =
        `Sau khi đổi chỗ:
        Số thứ nhất = ${result[0]},
        Số thứ hai = ${result[1]}`;
}
