function calculate() {
    const a = parseFloat(document.getElementById("side").value);

    if (isNaN(a) || a <= 0) {
        document.getElementById("result").innerText = "Giá trị không hợp lệ!";
        return;
    }

    const area = a * a;

    document.getElementById("result").innerText =
        "Diện tích: " + area;
}