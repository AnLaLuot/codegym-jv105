function convert() {
    let input = document.getElementById("text").value;

    let result = "";

    for (let i = 0; i < input.length; i++) {
        let char = input[i];

        if (char === char.toUpperCase()) {
            result += char.toLowerCase();
        } else {
            result += char.toUpperCase();
        }
    }

    document.getElementById("result").innerText = result;
}
