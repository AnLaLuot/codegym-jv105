function calculate() {
    const P = parseFloat(document.getElementById("principal").value);
    const r = parseFloat(document.getElementById("rate").value) / 100;
    const n = parseInt(document.getElementById("months").value);

    if (isNaN(P) || isNaN(r) || isNaN(n) || P <= 0 || r < 0 || n <= 0) {
        document.getElementById("result").innerText = "Dữ liệu không hợp lệ!";
        return;
    }

    const A = P * Math.pow(1 + r, n);

    document.getElementById("result").innerText =
        "Số tiền sau " + n + " tháng: " + A.toLocaleString() + " VND";
}
