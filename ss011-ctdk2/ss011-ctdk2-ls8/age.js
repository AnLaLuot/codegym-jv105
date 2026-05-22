function checkAge() {
    const age = parseFloat(document.getElementById("age").value);

    if (isNaN(age) || !Number.isInteger(age)) {
        document.getElementById("result").innerText = "Vui lòng nhập số nguyên!";
        return;
    }

    if (age > 0 && age < 120) {
        document.getElementById("result").innerText = "Tuổi hợp lệ";
    } else {
        document.getElementById("result").innerText = "Tuổi không hợp lệ";
    }
}
