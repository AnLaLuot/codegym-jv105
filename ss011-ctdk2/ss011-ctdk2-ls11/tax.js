function tinhThue() {

    const income =
        parseFloat(document.getElementById("income").value);

    if (isNaN(income) || income < 0) {

        document.getElementById("result").innerText =
            "Thu nhập không hợp lệ!";

        return;
    }

    let taxRate = 0;

    if (income <= 5000000) {

        taxRate = 0.05;

    } else if (income <= 10000000) {

        taxRate = 0.10;

    } else if (income <= 18000000) {

        taxRate = 0.15;

    } else if (income <= 32000000) {

        taxRate = 0.20;

    } else if (income <= 52000000) {

        taxRate = 0.25;

    } else if (income <= 80000000) {

        taxRate = 0.30;

    } else {

        taxRate = 0.35;
    }

    const tax = income * taxRate;

    document.getElementById("result").innerText =
        `Thuế phải nộp: ${tax.toLocaleString()} VND`;
}
