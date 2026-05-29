function insertDash() {
    let input = document.getElementById("numbers").value;

    let result = "";

    for (let i = 0; i < input.length; i++) {
        result += input[i];

        if (
            input[i] % 2 === 0 &&
            input[i + 1] % 2 === 0
        ) {
            result += "-";
        }
    }

    document.getElementById("result").innerText = result;
}
