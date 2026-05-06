function showFib() {
    let a = 0, b = 1;
    let result = "";

    for (let i = 1; i <= 20; i++) {
        result += a + " ";
        let next = a + b;
        a = b;
        b = next;
    }

    document.getElementById("result").innerText = result;
}
