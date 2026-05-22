function checkNumber() {
    const num = parseFloat(document.getElementById("number").value);

    if (isNaN(num)) {
        document.getElementById("result").innerText = "Vui lòng nhập số hợp lệ!";
        return;
    }

    if (num > 0) {
        document.getElementById("result").innerText = "Số lớn hơn 0";
    } else if (num < 0) {
        document.getElementById("result").innerText = "Số nhỏ hơn 0";
    } else {
        document.getElementById("result").innerText = "Số bằng 0";
    }
}
