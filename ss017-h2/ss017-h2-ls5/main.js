function findMinNumber() {

    const firstNumber =
        parseInt(document.getElementById("number1").value);

    const secondNumber =
        parseInt(document.getElementById("number2").value);

    const thirdNumber =
        parseInt(document.getElementById("number3").value);

    if (
        isNaN(firstNumber)
        || isNaN(secondNumber)
        || isNaN(thirdNumber)
    ) {

        document.getElementById("result").innerText =
            `Vui lòng nhập đầy đủ số!`;

        return;
    }

    let minNumber = firstNumber;

    if (secondNumber < minNumber) {

        minNumber = secondNumber;
    }

    if (thirdNumber < minNumber) {

        minNumber = thirdNumber;
    }

    document.getElementById("result").innerText =
        `Số nhỏ nhất là: ${minNumber}`;
}
