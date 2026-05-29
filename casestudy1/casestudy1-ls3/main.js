function isSymmetricArray(numbers) {

    for (
        let i = 0;
        i < numbers.length / 2;
        i++
    ) {

        if (
            numbers[i]
            !== numbers[numbers.length - 1 - i]
        ) {

            return false;
        }
    }

    return true;
}

function checkArray() {

    const input =
        document.getElementById("numbers").value;

    if (!input.trim()) {

        document.getElementById("result").innerText =
            `Vui lòng nhập mảng!`;

        return;
    }

    const numbers =
        input.split(",").map(Number);

    document.getElementById("arrayResult").innerText =
        `Mảng vừa nhập: ${numbers.join(", ")}`;

    const result =
        isSymmetricArray(numbers)
            ? "OK"
            : "NO";

    document.getElementById("result").innerText =
        `Kết quả: ${result}`;
}
