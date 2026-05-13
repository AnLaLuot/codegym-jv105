function countNumbers() {
    let numbers = [5, 12, 8, 20, 7, 15, 3, 10, 25, 1];

    let count = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] >= 10) {
            count++;
        }
    }

    document.getElementById("result").innerText =
        "Có " + count + " số lớn hơn hoặc bằng 10";
}
