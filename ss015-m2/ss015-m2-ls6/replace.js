function replaceChar() {

    let arr = ['a', '-', 'b', '-', 'c', '-'];

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] === '-') {
            arr[i] = '_';
        }
    }

    document.getElementById("result").innerText =
        arr.join(" ");
}
