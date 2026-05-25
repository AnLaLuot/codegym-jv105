function tinhCuoc() {

    const SUBSCRIPTION_FEE = 25000;

    const MIN_MINUTES = 50;

    const MAX_MINUTES = 100;

    const PRICE_1 = 600;

    const PRICE_2 = 400;

    const PRICE_3 = 200;

    const minutes =
        parseInt(document.getElementById("minutes").value);

    if (isNaN(minutes) || minutes < 0) {

        document.getElementById("result").innerText =
            `Số phút không hợp lệ!`;

        return;
    }

    let total = SUBSCRIPTION_FEE;

    if (minutes <= MIN_MINUTES) {

        total += minutes * PRICE_1;

    } else if (minutes <= MAX_MINUTES) {

        total +=
            MIN_MINUTES * PRICE_1
            + (minutes - MIN_MINUTES) * PRICE_2;

    } else {

        total +=
            MIN_MINUTES * PRICE_1
            + (MAX_MINUTES - MIN_MINUTES) * PRICE_2
            + (minutes - MAX_MINUTES) * PRICE_3;
    }

    document.getElementById("result").innerText =
        `Tổng cước: ${total.toLocaleString()} VND`;
}
