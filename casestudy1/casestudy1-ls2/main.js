function checkTriangle(x, y, z) {

    if (
        x <= 0
        || y <= 0
        || z <= 0
        || x + y <= z
        || x + z <= y
        || y + z <= x
    ) {

        return "Không phải là cạnh của 1 tam giác";
    }

    const isRightTriangle =
        x * x + y * y === z * z
        || x * x + z * z === y * y
        || y * y + z * z === x * x;

    return isRightTriangle
        ? "Là 3 cạnh của tam giác vuông"
        : "Chỉ là 3 cạnh của một tam giác";
}

function run() {

    const x =
        parseFloat(document.getElementById("x").value);

    const y =
        parseFloat(document.getElementById("y").value);

    const z =
        parseFloat(document.getElementById("z").value);

    if (
        isNaN(x)
        || isNaN(y)
        || isNaN(z)
    ) {

        document.getElementById("result").innerText =
            `Vui lòng nhập đầy đủ dữ liệu!`;

        return;
    }

    document.getElementById("result").innerText =
        checkTriangle(x, y, z);
}
