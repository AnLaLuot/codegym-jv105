function printTriangles() {
    let result = "";

    // 1. Góc vuông dưới bên trái
    for (let i = 1; i <= 5; i++) {
        for (let j = 1; j <= i; j++) {
            result += "*";
        }
        result += "\n";
    }

    result += "\n";

    // 2. Góc vuông trên bên trái
    for (let i = 5; i >= 1; i--) {
        for (let j = 1; j <= i; j++) {
            result += "*";
        }
        result += "\n";
    }

    result += "\n";

    // 3. Góc vuông dưới bên phải
    for (let i = 1; i <= 5; i++) {
        for (let j = 1; j <= 5 - i; j++) {
            result += " ";
        }
        for (let j = 1; j <= i; j++) {
            result += "*";
        }
        result += "\n";
    }

    result += "\n";

    // 4. Góc vuông trên bên phải
    for (let i = 5; i >= 1; i--) {
        for (let j = 1; j <= 5 - i; j++) {
            result += " ";
        }
        for (let j = 1; j <= i; j++) {
            result += "*";
        }
        result += "\n";
    }

    document.getElementById("result").innerText = result;
}