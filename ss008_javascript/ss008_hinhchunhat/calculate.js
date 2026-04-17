document.getElementById("btnCalculate").onclick = function () {
    const length = parseFloat(document.getElementById("length").value);
    const width = parseFloat(document.getElementById("width").value);

    if (isNaN(length) || isNaN(width) || length <= 0 || width <= 0) {
        alert("Vui lòng nhập số hợp lệ!");
        return;
    }

    const area = length * width;
    const perimeter = 2 * (length + width);

    document.getElementById("area").innerText = area;
    document.getElementById("perimeter").innerText = perimeter;
};