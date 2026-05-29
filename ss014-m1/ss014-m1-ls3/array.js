function calculate() {
    let numbers = [5, 12, 8, 20, 7, 15, 3, 10];

    let max = numbers[0];
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {

        sum += numbers[i];

        if (numbers[i] > max) {
            max = numbers[i];
        }
    }

    let average = sum / numbers.length;

    document.getElementById("result").innerText =
        "Max: " + max +
        " | Trung bình: " + average;
}
