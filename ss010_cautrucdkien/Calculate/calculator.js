function append(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculate() {
    const display = document.getElementById("display");

    try {
        // eval tính toán biểu thức (đơn giản cho bài học)
        display.value = eval(display.value);
    } catch (e) {
        display.value = "Error";
    }
}