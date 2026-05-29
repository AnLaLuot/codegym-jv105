function convert() {
    const c = parseFloat(document.getElementById("celsius").value);

    if (isNaN(c)) {
        document.getElementById("result").innerText = "Vui lòng nhập số!";
        return;
    }

    const f = c * 9/5 + 32;

    document.getElementById("result").innerText = "Độ F: " + f;
}
