function calculate() {
    let n = parseInt(document.getElementById("n").value);

    if (isNaN(n) || n < 0) {
        document.getElementById("result").innerText = "Nhập số hợp lệ!";
        return;
    }

    let result = 1;

    for (let i = 1; i <= n; i++) {
        result *= i;
    }

    document.getElementById("result").innerText =
        n + "! = " + result;
}
