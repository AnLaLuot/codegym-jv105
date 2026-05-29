function isPrime(number) {

    if (number < 2) {
        return false;
    }
    for (
        let i = 2; i <= Math.sqrt(number); i++
    ) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

function checkArray(numbers) {
    for (const number of numbers) {
        if (!isPrime(number)) {
            return false;
        }
    }
    return true;
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

    const result = checkArray(numbers)
            ? "TRUE"
            : "FALSE";

    document.getElementById("result").innerText =
        `Kết quả: ${result}`;
}