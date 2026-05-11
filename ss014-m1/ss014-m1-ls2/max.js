function findMax() {
    let numbers = [5, 12, 8, 20, 7, 15, 3, 10, 25, 1];

    let max = numbers[0];
    let index = 0;

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
            index = i;
        }
    }

    document.getElementById("result").innerText =
        "Số lớn nhất: " + max + " | Vị trí: " + index;
}
