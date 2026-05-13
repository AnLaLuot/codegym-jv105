function findValue() {

    let numbers = [5, 12, 8, 20, 7, 15, 3, 10, 25, 1];

    let searchValue = parseInt(document.getElementById("value").value);

    let found = false;

    for (let i = 0; i < numbers.length; i++) {

        if (numbers[i] === V) {
            found = true;
            break;
        }
    }

    if (found) {
        document.getElementById("result").innerText =
            V + " is in the array";
    } else {
        document.getElementById("result").innerText =
            V + " is not in the array";
    }
}
