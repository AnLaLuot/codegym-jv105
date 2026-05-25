document.getElementById("btnCalculate").onclick = function () {
    // Lấy bán kính
    const radius = parseFloat(document.getElementById("radius").value);

    // Kiểm tra hợp lệ
    if (isNaN(radius) || radius <= 0) {
        alert("Vui lòng nhập bán kính hợp lệ!");
        return;
    }

    // Tính diện tích: S = π * r^2
    const area = Math.PI * radius * 2;

    // Hiển thị kết quả
    document.getElementById("area").innerText = area;
};