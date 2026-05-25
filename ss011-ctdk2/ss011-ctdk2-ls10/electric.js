function tinhTien() {

    const LEVEL_1 = 50;
    const LEVEL_2 = 100;
    const LEVEL_3 = 200;
    const LEVEL_4 = 300;
    const LEVEL_5 = 400;

    const PRICE_1 = 1678;
    const PRICE_2 = 1734;
    const PRICE_3 = 2014;
    const PRICE_4 = 2536;
    const PRICE_5 = 2834;
    const PRICE_6 = 2927;

    const kwh =
        parseInt(document.getElementById("kwh").value);

    if (isNaN(kwh) || kwh < 0) {

        document.getElementById("result").innerText =
            "Số điện không hợp lệ!";

        return;
    }

    let total = 0;

    if (kwh <= LEVEL_1) {

        total = kwh * PRICE_1;

    } else if (kwh <= LEVEL_2) {

        total =
            LEVEL_1 * PRICE_1
            + (kwh - LEVEL_1) * PRICE_2;

    } else if (kwh <= LEVEL_3) {

        total =
            LEVEL_1 * PRICE_1
            + LEVEL_1 * PRICE_2
            + (kwh - LEVEL_2) * PRICE_3;

    } else if (kwh <= LEVEL_4) {

        total =
            LEVEL_1 * PRICE_1
            + LEVEL_1 * PRICE_2
            + (LEVEL_3 - LEVEL_2) * PRICE_3
            + (kwh - LEVEL_3) * PRICE_4;

    } else if (kwh <= LEVEL_5) {

        total =
            LEVEL_1 * PRICE_1
            + LEVEL_1 * PRICE_2
            + (LEVEL_3 - LEVEL_2) * PRICE_3
            + (LEVEL_4 - LEVEL_3) * PRICE_4
            + (kwh - LEVEL_4) * PRICE_5;

    } else {

        total =
            LEVEL_1 * PRICE_1
            + LEVEL_1 * PRICE_2
            + (LEVEL_3 - LEVEL_2) * PRICE_3
            + (LEVEL_4 - LEVEL_3) * PRICE_4
            + (LEVEL_5 - LEVEL_4) * PRICE_5
            + (kwh - LEVEL_5) * PRICE_6;
    }

    document.getElementById("result").innerText =
        `Tiền điện: ${total.toLocaleString()} VND`;
}
