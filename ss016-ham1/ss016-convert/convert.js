function footToMeter(foot) {
    return 0.305 * foot;
}

function meterToFoot(meter) {
    return 3.279 * meter;
}

function convert() {

    let result = "Feet -> Meter\n";

    for (let i = 1; i <= 10; i++) {
        result += i + " feet = "
            + footToMeter(i).toFixed(3)
            + " meters\n";
    }

    result += "\nMeter -> Feet\n";

    for (let i = 20; i <= 65; i += 5) {
        result += i + " meters = "
            + meterToFoot(i).toFixed(3)
            + " feet\n";
    }

    document.getElementById("result").innerText = result;
}
