function generate() {
    let n = parseInt(document.getElementById("n").value);

    if (isNaN(n) || n <= 0) {
        document.getElementById("result").innerText = "Nhập số hợp lệ!";
        return;
    }

    let a = 0, b = 1;
    let result = "";

    for (let i = 1; i <= n; i++) {
        result += a + " ";

        let next = a + b;
        a = b;
        b = next;
    }

    document.getElementById("result").innerText = result;
}
