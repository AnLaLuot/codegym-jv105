function calculate() {
    let sum = 0;

    for (let i = 1; i <= 30; i++) {
        sum += 7 * i;
    }

    document.getElementById("result").innerText =
        "Tổng là: " + sum;
}
