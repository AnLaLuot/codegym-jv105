function checkArray(numbers) {

    let evenCount = 0;

    let oddCount = 0;

    for (const number of numbers) {
        if (number % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }

    if (evenCount === numbers.length) {
        return 1;
    }
    if (oddCount === numbers.length) {
        return 0;
    }
    return -1;
}

function run() {

    const input = document.getElementById("numbers").value;

    if (!input.trim()) {
        document.getElementById("result").innerText =
            `Vui lòng nhập mảng!`;
        return;
    }

    const numbers = input.split(",").map(Number);

    document.getElementById("arrayResult").innerText =
        `Mảng vừa nhập: ${numbers.join(", ")}`;

    const result = checkArray(numbers);

    document.getElementById("result").innerText =
        `Kết quả: ${result}`;
}
