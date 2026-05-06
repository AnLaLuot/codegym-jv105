function play() {
    // B1: nhập khoảng
    let min = parseInt(prompt("Nhập số nhỏ nhất:"));
    let max = parseInt(prompt("Nhập số lớn nhất:"));

    if (isNaN(min) || isNaN(max) || min >= max) {
        alert("Khoảng không hợp lệ!");
        return;
    }

    // B2: random số
    let random = Math.floor(Math.random() * (max - min + 1)) + min;

    // B3: đoán
    let guess;

    while (true) {
        guess = parseInt(prompt("Nhập số bạn đoán:"));

        if (isNaN(guess)) {
            alert("Vui lòng nhập số!");
            continue;
        }

        if (guess === random) {
            alert("🎉 Chúc mừng! Bạn đoán đúng!");
            break;
        } else if (guess > random) {
            alert("Số bạn đoán lớn hơn!");
        } else {
            alert("Số bạn đoán nhỏ hơn!");
        }
    }
}
