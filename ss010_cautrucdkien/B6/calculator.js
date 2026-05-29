function tinhHoaHong() {

    const MIN_SALES = 10000000;

    const MAX_SALES = 50000000;

    const RATE_5 = 0.05;

    const RATE_10 = 0.10;

    const RATE_15 = 0.15;

    const sales =
        parseFloat(document.getElementById("sales").value);

    if (isNaN(sales) || sales < 0) {

        document.getElementById("result").innerText =
            `Doanh số không hợp lệ!`;

        return;
    }

    let rate = RATE_15;

    if (sales < MIN_SALES) {

        rate = RATE_5;

    } else if (sales <= MAX_SALES) {

        rate = RATE_10;
    }

    const commission = sales * rate;

    document.getElementById("result").innerText =
        `Hoa hồng: ${commission.toLocaleString()} VND (${rate * 100}%)`;
}
