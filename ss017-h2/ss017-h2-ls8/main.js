function reverse(numbers) {

    return numbers.reverse();
}

function reverseArray() {

    const input =
        document.getElementById("numbers").value;

    if (!input.trim()) {

        document.getElementById("result").innerText =
            `Vui lòng nhập mảng!`;

        return;
    }

    const numbers =
        input.split(",").map(Number);

    const reversedNumbers =
        reverse(numbers);

    document.getElementById("result").innerText =
        `Mảng sau khi đảo:
        ${reversedNumbers.join(", ")}`;
}
