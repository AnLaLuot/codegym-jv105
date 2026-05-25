document.getElementById("btnCalculate").onclick = function () {
    const radius = parseFloat(document.getElementById("radius").value);

    if (isNaN(radius) || radius <= 0) {
        alert("Vui lòng nhập bán kính hợp lệ!");
        return;
    }

    const area = Math.PI * radius * radius;

    document.getElementById("area").innerText = area;
};