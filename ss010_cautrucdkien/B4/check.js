function findMax() {
    const a = parseFloat(document.getElementById("a").value);
    const b = parseFloat(document.getElementById("b").value);
    const c = parseFloat(document.getElementById("c").value);

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        document.getElementById("result").innerText = "Vui lòng nhập đủ 3 số!";
        return;
    }

    let max = a;

    if (b > max) {
        max = b;
    }
    if (c > max) {
        max = c;
    }

    document.getElementById("result").innerText = "Số lớn nhất là: " + max;
}
