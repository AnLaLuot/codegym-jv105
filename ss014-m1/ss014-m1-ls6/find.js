function findValue() {

    let numbers = [5, 12, 8, 20, 7, 15, 3, 10, 25, 1];

    let searchValue =
        parseInt(document.getElementById("value").value);

    let found = false;

    for (let i = 0; i < numbers.length; i++) {

        if (numbers[i] === searchValue) {

            found = true;

            break;
        }
    }

    document.getElementById("result").innerText =
        `${searchValue} ${
            found
                ? "is in the array"
                : "is not in the array"
        }`;
}
