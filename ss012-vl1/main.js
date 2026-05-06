let temp;

do {
    temp = parseFloat(prompt("Nhập nhiệt độ hiện tại:"));

    if (temp > 100) {
        alert("Giảm nhiệt độ!");
    } else if (temp < 20) {
        alert("Tăng nhiệt độ!");
    }

} while (temp > 100 || temp < 20);

alert("Nhiệt độ đã ổn!");
