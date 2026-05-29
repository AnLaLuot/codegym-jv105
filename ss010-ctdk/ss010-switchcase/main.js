function tinhSoNgay() {

    const MIN_MONTH = 1;

    const MAX_MONTH = 12;

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

    const DAYS_31 = "31 ngày";

    const DAYS_30 = "30 ngày";

    const DAYS_28_29 = "28 hoặc 29 ngày";

    let days = "";

    switch (month) {

        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            days = DAYS_31;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            days = DAYS_30;
            break;
        default:
            days = DAYS_28_29;
    }
    document.getElementById("result").innerText =
        `Tháng ${month} có ${days}`;
}
