function printRect() {
    let h = parseInt(document.getElementById("h").value);
    let w = parseInt(document.getElementById("w").value);

    if (isNaN(h) || isNaN(w) || h <= 0 || w <= 0) {
        document.getElementById("result").innerText = "Nhập hợp lệ!";
        return;
    }

    let result = "";

    for (let i = 1; i <= h; i++) {
        for (let j = 1; j <= w; j++) {
            result += "*";
        }
        result += "\n";
    }

    document.getElementById("result").innerText = result;
}
