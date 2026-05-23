function check() {
    const a = parseFloat(document.getElementById("a").value);
    const b = parseFloat(document.getElementById("b").value);

    if (isNaN(a) || isNaN(b)) {
        document.getElementById("result").innerText = "Vui lòng nhập đủ số!";
        return;
    }

    if (b === 0) {
        document.getElementById("result").innerText = "Không thể chia cho 0!";
    } else if (a % b === 0) {
        document.getElementById("result").innerText = a + " chia hết cho " + b;
    } else {
        document.getElementById("result").innerText = a + " không chia hết cho " + b;
    }
}