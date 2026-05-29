function findMaxNumber(number) {

    const NUMBER_LENGTH = 4;

    if (
        isNaN(number) || number < 1000 || number > 9999
    ) {
        return -1;
    }
    const numberString = number.toString();

    let maxNumber = 0;

    for (
        let i = 0;
        i < NUMBER_LENGTH;
        i++
    ) {

        const newNumber =
            parseInt(numberString.slice(0, i) + numberString.slice(i + 1));
        if (newNumber > maxNumber) {

            maxNumber = newNumber;
        }
    }
    return maxNumber;
}

function run() {

    const number = parseInt(document.getElementById("number").value);
    document.getElementById("result").innerText =
        `Kết quả: ${findMaxNumber(number)}`;
}
