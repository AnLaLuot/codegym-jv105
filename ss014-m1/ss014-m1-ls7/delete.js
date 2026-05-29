function deleteValue() {

    let numbers = [5, 12, 8, 20, 7, 15, 3, 10, 25, 1];

    let searchValue = parseInt(document.getElementById("value").value);

    for (let i = 0; i < numbers.length; i++) {

        if (numbers[i] === searchValue) {

            for (let j = i; j < numbers.length - 1; j++) {
                numbers[j] = numbers[j + 1];
            }

            numbers[numbers.length - 1] = 0;

            break;
        }
    }

    document.getElementById("result").innerText =
        numbers.join(", ");
}
