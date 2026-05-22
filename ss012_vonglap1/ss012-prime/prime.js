function printPrimes() {

    const TOTAL_PRIMES = 20;

    let count = 0;

    let number = 2;

    let result = "";

    while (count < TOTAL_PRIMES) {
        let isPrime = true;
        for (let divisor = 2;
             divisor <= Math.sqrt(number);
             divisor++) {

            if (!(number % divisor)) {

                isPrime = false;

                break;
            }
        }
        if (isPrime) {
            result += `${number} `;
            count++;
        }
        number++;
    }
    document.getElementById("result").innerText =
        result;
}
