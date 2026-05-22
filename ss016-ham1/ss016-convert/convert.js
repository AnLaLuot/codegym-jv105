function footToMeter(foot) {
    return 0.305 * foot;
}

function meterToFoot(meter) {
    return 3.279 * meter;
}

function convert() {

    let result = "";

    result += "Feet -> Meter\n";

    for (let feet = 1; feet <= 10; feet++) {

        result += feet + " feet = "
            + footToMeter(feet).toFixed(3)
            + " meters\n";
    }

    result += "\n";

    result += "Meter -> Feet\n";

    for (let meter = 20; meter <= 65; meter += 5) {

        result += meter + " meters = "
            + meterToFoot(meter).toFixed(3)
            + " feet\n";
    }

    document.getElementById("result").innerText = result;
}
