function checkTriangle() {
    const a = parseFloat(document.getElementById("a").value);
    const b = parseFloat(document.getElementById("b").value);
    const c = parseFloat(document.getElementById("c").value);

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        document.getElementById("result").innerText = "Vui lòng nhập đủ số!";
        return;
    }

    if (
        a > 0 && b > 0 && c > 0 &&
        a + b > c &&
        b + c > a &&
        a + c > b
    ) {
        document.getElementById("result").innerText = "Là tam giác";
    } else {
        document.getElementById("result").innerText = "Không phải tam giác";
    }
}
