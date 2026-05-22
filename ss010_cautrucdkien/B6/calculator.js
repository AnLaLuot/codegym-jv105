function tinhHoaHong() {
    const sales = parseFloat(document.getElementById("sales").value);

    if (isNaN(sales) || sales < 0) {
        document.getElementById("result").innerText = "Doanh số không hợp lệ!";
        return;
    }

    let rate;

    if (sales < 10000000) {
        rate = 0.05;
    } else if (sales <= 50000000) {
        rate = 0.10;
    } else {
        rate = 0.15;
    }

    const commission = sales * rate;

    document.getElementById("result").innerText =
        "Hoa hồng: " + commission.toLocaleString() + " VND (" + (rate * 100) + "%)";
}
