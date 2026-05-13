function isPrime(number) {

    if (number < 2) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {

        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

function showPrime() {

    let result = "";

    for (let i = 2; i < 10000; i++) {

        if (isPrime(i)) {
            result += i + " ";
        }
    }

    document.getElementById("result").innerText = result;
}
