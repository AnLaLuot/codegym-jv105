function checkAge() {
    const age = parseInt(document.getElementById("age").value);

    if (isNaN(age) || age <= 0) {
        document.getElementById("result").innerText = "Tuổi không hợp lệ!";
        return;
    }

    if (age >= 15) {
        document.getElementById("result").innerText = "Đủ điều kiện vào lớp 10";
    } else {
        document.getElementById("result").innerText = "Không đủ điều kiện vào lớp 10";
    }
}