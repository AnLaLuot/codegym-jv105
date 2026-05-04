function tinhThue() {
    const income = parseFloat(document.getElementById("income").value);

    if (isNaN(income) || income < 0) {
        document.getElementById("result").innerText = "Thu nhập không hợp lệ!";
        return;
    }

    let tax = 0;

    if (income <= 5000000) {
        tax = income * 0.05;
    } else if (income <= 10000000) {
        tax = 5000000 * 0.05 +
            (income - 5000000) * 0.10;
    } else if (income <= 18000000) {
        tax = 5000000 * 0.05 +
            5000000 * 0.10 +
            (income - 10000000) * 0.15;
    } else if (income <= 32000000) {
        tax = 5000000 * 0.05 +
            5000000 * 0.10 +
            8000000 * 0.15 +
            (income - 18000000) * 0.20;
    } else if (income <= 52000000) {
        tax = 5000000 * 0.05 +
            5000000 * 0.10 +
            8000000 * 0.15 +
            14000000 * 0.20 +
            (income - 32000000) * 0.25;
    } else if (income <= 80000000) {
        tax = 5000000 * 0.05 +
            5000000 * 0.10 +
            8000000 * 0.15 +
            14000000 * 0.20 +
            20000000 * 0.25 +
            (income - 52000000) * 0.30;
    } else {
        tax = 5000000 * 0.05 +
            5000000 * 0.10 +
            8000000 * 0.15 +
            14000000 * 0.20 +
            20000000 * 0.25 +
            28000000 * 0.30 +
            (income - 80000000) * 0.35;
    }

    document.getElementById("result").innerText =
        "Thuế phải nộp: " + tax.toLocaleString() + " VND";
}
