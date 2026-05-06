function printPrimes() {
    let count = 0;
    let n = 2;
    let result = "";

    while (count < 20) {
        let isPrime = true;

        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            result += n + " ";
            count++;
        }

        n++;
    }

    document.getElementById("result").innerText = result;
}
