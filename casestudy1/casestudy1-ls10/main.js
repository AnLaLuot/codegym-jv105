function checkString(str) {

    const vowels =
        ["a", "e", "i", "o", "u"];

    const result = [];

    const lowerString = str.toLowerCase();

    for (const character of lowerString) {
        if (
            vowels.includes(character)
            && !result.includes(character)
        ) {
            result.push(character);
        }
    }
    return result;
}

function run() {

    const text = document.getElementById("text").value;

    const result = checkString(text);

    document.getElementById("result").innerText =
        `Kết quả: [${result.join(", ")}]`;
}
