function reverseArray() {

    let numbers = [1, 2, 3, 4, 5];

    for (let i = 0; i < numbers.length / 2; i++) {

        let temp = numbers[i];

        numbers[i] = numbers[numbers.length - 1 - i];

        numbers[numbers.length - 1 - i] = temp;
    }

    document.getElementById("result").innerText =
        numbers.join(", ");
}
