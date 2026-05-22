function tinhSoNgay() {
    const month = parseInt(document.getElementById("month").value);

    if (isNaN(month) || month < 1 || month > 12) {
        document.getElementById("result").innerText = "Vui lòng nhập tháng hợp lệ (1-12)";
        return;
    }

    let days;

    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            days = "31 ngày";
            break;

        case 4:
        case 6:
        case 9:
        case 11:
            days = "30 ngày";
            break;

        case 2:
            days = "28 hoặc 29 ngày";
            break;
    }

    document.getElementById("result").innerText = "Tháng " + month + " có " + days;
}
