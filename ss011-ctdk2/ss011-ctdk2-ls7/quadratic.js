function solve() {
    const a = parseFloat(document.getElementById("a").value);
    const b = parseFloat(document.getElementById("b").value);
    const c = parseFloat(document.getElementById("c").value);

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        document.getElementById("result").innerText = "Dữ liệu không hợp lệ!";
        return;
    }

    if (a === 0) {
        if (b === 0) {
            document.getElementById("result").innerText =
                (c === 0) ? "Vô số nghiệm" : "Vô nghiệm";
        } else {
            document.getElementById("result").innerText =
                "x = " + (-c / b);
        }
        return;
    }

    const delta = b * b - 4 * a * c;

    if (delta > 0) {
        const x1 = (-b + Math.sqrt(delta)) / (2 * a);
        const x2 = (-b - Math.sqrt(delta)) / (2 * a);
        document.getElementById("result").innerText =
            "x1 = " + x1 + ", x2 = " + x2;
    } else if (delta === 0) {
        const x = -b / (2 * a);
        document.getElementById("result").innerText =
            "Nghiệm kép x = " + x;
    } else {
        document.getElementById("result").innerText = "Vô nghiệm";
    }
}
