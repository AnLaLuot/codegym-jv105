function sortArray() {

    let numbers = [5, 12, 8, 20, 7, 15, 3, 10, 25, 1];

    numbers.sort(function(a, b) {
        return b - a;
    });

    document.getElementById("result").innerText =
        numbers.join(", ");
}
