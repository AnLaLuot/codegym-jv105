function isPositiveInteger(number) {

    return Number.isInteger(number) && number > 0;
}

function checkPositiveInteger() {

    const number =
        parseFloat(document.getElementById("number").value);

    if (isNaN(number)) {

        document.getElementById("result").innerText =
            `Vui lòng nhập số hợp lệ!`;

        return;
    }

    document.getElementById("result").innerText =
        isPositiveInteger(number)
            ? `true`
            : `false`;
}
