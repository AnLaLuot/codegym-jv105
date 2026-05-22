function checkAge() {

    const MINIMUM_AGE = 15;

    const age =
        parseInt(document.getElementById("age").value);

    if (isNaN(age) || age <= 0) {
        document.getElementById("result").innerText =
            "Tuổi không hợp lệ!";
        return;
    }

    document.getElementById("result").innerText =
        age >= MINIMUM_AGE
            ? "Đủ điều kiện vào lớp 10"
            : "Không đủ điều kiện vào lớp 10";
}
