function convert() {
    const m = parseFloat(document.getElementById("meter").value);

    if (isNaN(m)) {
        document.getElementById("result").innerText = "Vui lòng nhập số!";
        return;
    }

    const ft = m * 3.2808;

    document.getElementById("result").innerText =
        "Feet: " + ft.toFixed(2);
}