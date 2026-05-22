function solve() {
    const a = parseFloat(document.getElementById("a").value);
    const b = parseFloat(document.getElementById("b").value);

    if (isNaN(a) || isNaN(b)) {
        document.getElementById("result").innerText = "Dữ liệu không hợp lệ!";
        return;
    }

    if (a === 0) {
        if (b === 0) {
            document.getElementById("result").innerText = "Vô số nghiệm";
        } else {
            document.getElementById("result").innerText = "Vô nghiệm";
        }
    } else {
        const x = -b / a;
        document.getElementById("result").innerText = "x = " + x;
    }
}