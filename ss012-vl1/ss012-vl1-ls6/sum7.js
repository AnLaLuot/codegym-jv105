function calculate() {

    const TOTAL_NUMBERS = 30;

    const DIVISIBLE_NUMBER = 7;

    let sum = 0;

    for (let count = 1; count <= TOTAL_NUMBERS; count++) {
        sum += count * DIVISIBLE_NUMBER;
    }

    document.getElementById("result").innerText =
        `Tổng là: ${sum}`;
}
