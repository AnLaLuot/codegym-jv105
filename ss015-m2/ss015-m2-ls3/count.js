function countDigits() {

    let arr = ['a', '1', 'b', '2', 'c', '8', '@', '9'];

    let count = 0;

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] >= '0' && arr[i] <= '9') {
            count++;
        }
    }

    document.getElementById("result").innerText =
        "Số ký tự số là: " + count;
}
