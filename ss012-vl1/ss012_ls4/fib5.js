function find() {

    let a = 0;

    let b = 1;

    while (true) {
        let next = a + b;
        if (!(next % 5)) {

            document.getElementById("result").innerText =
                `Số đầu tiên chia hết cho 5 là: ${next}`;

            break;
        }
        a = b;
        b = next;
    }
}