function countNegative() {
    let numbers = [5, -2, 8, -7, 0, -1, 10];

    let count = 0;

    for (let i = 0; i < numbers.length; i++) {

        if (numbers[i] < 0) {
            count++;
        }
    }

    document.getElementById("result").innerText =
        "Có " + count + " số nguyên âm";
}
