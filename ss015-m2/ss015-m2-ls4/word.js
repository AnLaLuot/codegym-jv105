function countWords() {

    let str = document.getElementById("text").value;

    let words = str.split(" ");

    let count = words.length;

    document.getElementById("result").innerText =
        "Số từ là: " + count;
}
