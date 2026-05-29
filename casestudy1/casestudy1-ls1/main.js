function isIncreasingArray(numbers) {

    for (let i = 0; i < numbers.length - 1; i++) {

        if (numbers[i] >= numbers[i + 1]) {

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

    if (numbers.length > 20) {

        document.getElementById("result").innerText =
            `Số lượng phần tử không được lớn hơn 20!`;

        return;
    }

    document.getElementById("arrayResult").innerText =
        `Mảng vừa nhập: ${numbers.join(", ")}`;

    const result =
        isIncreasingArray(numbers)
            ? "TRUE"
            : "FALSE";

    document.getElementById("result").innerText =
        `Kết quả: ${result}`;
}
