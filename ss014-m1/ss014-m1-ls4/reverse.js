function reverseArray() {
    let numbers = [1, 2, 3, 4, 5];

    numbers.reverse();

    document.getElementById("result").innerText =
        numbers.join(", ");
}
