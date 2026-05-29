function gcd(a, b) {

    while (b !== 0) {
        const remainder = a % b;
        a = b;
        b = remainder;
    }

    return a;
}

function find(fraction) {

    const parts = fraction.split("/");
    if (parts.length !== 2) {
        return "Không phải là phân số";
    }

    const numerator = parseInt(parts[0]);
    const denominator = parseInt(parts[1]);

    if (
        isNaN(numerator)
        || isNaN(denominator)
        || denominator === 0
    ) {

        return "Không phải là phân số";
    }

    if (numerator === 0) {

        return "0";
    }

    const divisor =
        gcd(
            Math.abs(numerator),
            Math.abs(denominator)
        );

    return `
        ${numerator / divisor}
        /
        ${denominator / divisor}
    `.replace(/\s/g, "");
}

function run() {
    const fraction = document.getElementById("fraction").value;
    document.getElementById("result").innerText =
        `Kết quả: ${find(fraction)}`;
}
