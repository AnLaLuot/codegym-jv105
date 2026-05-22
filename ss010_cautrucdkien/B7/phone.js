function tinhCuoc() {
    const minutes = parseInt(document.getElementById("minutes").value);

    if (isNaN(minutes) || minutes < 0) {
        document.getElementById("result").innerText = "Số phút không hợp lệ!";
        return;
    }

    let total = 25000; // phí thuê bao

    if (minutes <= 50) {
        total += minutes * 600;
    } else if (minutes <= 100) {
        total += 50 * 600 + (minutes - 50) * 400;
    } else {
        total += 50 * 600 + 50 * 400 + (minutes - 100) * 200;
    }

    document.getElementById("result").innerText =
        "Tổng cước: " + total.toLocaleString() + " VND";
}
