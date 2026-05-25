function tinhBMI() {

    const UNDERWEIGHT = 18.5;

    const NORMAL = 25;

    const OVERWEIGHT = 30;

    const weight =
        parseFloat(document.getElementById("weight").value);

    const height =
        parseFloat(document.getElementById("height").value);

    if (
        isNaN(weight)
        || isNaN(height)
        || height <= 0
    ) {

        alert("Vui lòng nhập dữ liệu hợp lệ!");

        return;
    }

    const bmi = weight / (height * height);

    let category = "Béo phì";

    if (bmi < UNDERWEIGHT) {

        category = "Gầy";

    } else if (bmi < NORMAL) {

        category = "Bình thường";

    } else if (bmi < OVERWEIGHT) {

        category = "Thừa cân";
    }

    document.getElementById("result").innerText =
        `BMI: ${bmi.toFixed(2)} - ${category}`;
}
