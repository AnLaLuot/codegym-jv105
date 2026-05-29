function checkCharacters(characters) {

    let letterCount = 0;

    let digitCount = 0;

    for (const character of characters) {

        if (character >= "0" && character <= "9") {
            digitCount++;

        } else if (
            (character >= "a" && character <= "z")
            || (character >= "A" && character <= "Z")
        ) {
            letterCount++;
        }
    }
    if (digitCount === characters.length) {
        return 1;
    }

    if (letterCount === characters.length) {
        return 0;
    }
    return -1;
}

function run() {

    const input = document.getElementById("characters").value;

    if (!input.trim()) {
        document.getElementById("result").innerText =
            `Vui lòng nhập mảng!`;

        return;
    }

    const characters = input.split(",");

    document.getElementById("arrayResult").innerText =
        `Mảng vừa nhập: ${characters.join(", ")}`;

    const result = checkCharacters(characters);

    document.getElementById("result").innerText =
        `Kết quả: ${result}`;
}
