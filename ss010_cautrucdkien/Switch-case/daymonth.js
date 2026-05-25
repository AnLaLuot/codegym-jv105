function tinhSoNgay() {

    const JANUARY = 1;

    const FEBRUARY = 2;

    const MARCH = 3;

    const APRIL = 4;

    const MAY = 5;

    const JUNE = 6;

    const JULY = 7;

    const AUGUST = 8;

    const SEPTEMBER = 9;

    const OCTOBER = 10;

    const NOVEMBER = 11;

    const DECEMBER = 12;

    const MIN_MONTH = JANUARY;

    const MAX_MONTH = DECEMBER;

    const month =
        parseInt(document.getElementById("month").value);

    if (
        isNaN(month)
        || month < MIN_MONTH
        || month > MAX_MONTH
    ) {

        document.getElementById("result").innerText =
            "Vui lòng nhập tháng hợp lệ (1-12)";

        return;
    }

    let days = "";

    switch (month) {

        case JANUARY:
        case MARCH:
        case MAY:
        case JULY:
        case AUGUST:
        case OCTOBER:
        case DECEMBER:

            days = "31 ngày";

            break;

        case APRIL:
        case JUNE:
        case SEPTEMBER:
        case NOVEMBER:

            days = "30 ngày";

            break;

        case FEBRUARY:

            days = "28 hoặc 29 ngày";
    }

    document.getElementById("result").innerText =
        `Tháng ${month} có ${days}`;
}
