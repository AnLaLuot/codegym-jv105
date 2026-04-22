function tinhBMI() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);

    // Kiểm tra hợp lệ
    if (isNaN(weight) || isNaN(height) || height <= 0) {
        alert("Vui lòng nhập dữ liệu hợp lệ!");
        return;
    }

    // Tính BMI
    const bmi = weight / (height * height);

    let category;

    // Phân loại BMI
    if (bmi < 18.5) {
        category = "Gầy";
    } else if (bmi < 25) {
        category = "Bình thường";
    } else if (bmi < 30) {
        category = "Thừa cân";
    } else {
        category = "Béo phì";
    }

    // Hiển thị
    document.getElementById("result").innerText =
        "BMI: " + bmi.toFixed(2) + " - " + category;
}