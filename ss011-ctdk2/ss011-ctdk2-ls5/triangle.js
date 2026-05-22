function calculate() {
    const a = parseFloat(document.getElementById("a").value);
    const b = parseFloat(document.getElementById("b").value);

    if (isNaN(a) || isNaN(b) || a <= 0 || b <= 0) {
        document.getElementById("result").innerText = "Giá trị không hợp lệ!";
        return;
    }

    const area = (a * b) / 2;

    document.getElementById("result").innerText =
        "Diện tích: " + area;
}
