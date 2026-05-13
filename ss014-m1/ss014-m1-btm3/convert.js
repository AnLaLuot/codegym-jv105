function convert(): void {

    let input = document.getElementById("text").value;

    let result = "";

    for (let i = 0; i < input.length; i++) {

        let char = input[i];

        result += char === char.toUpperCase()
            ? char.toLowerCase()
            : char.toUpperCase();
    }

    document.getElementById("result").innerText = result;
}
