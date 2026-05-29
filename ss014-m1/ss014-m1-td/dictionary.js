function translateWord() {

    // mảng tiếng Anh
    let english = [
        "hello",
        "cat",
        "dog",
        "apple",
        "book"
    ];

    // mảng tiếng Việt
    let vietnamese = [
        "xin chào",
        "con mèo",
        "con chó",
        "quả táo",
        "quyển sách"
    ];

    let word = document.getElementById("english").value;

    let result = "Không tìm thấy";

    for (let i = 0; i < english.length; i++) {

        if (word.toLowerCase() === english[i]) {
            result = vietnamese[i];
            break;
        }
    }

    document.getElementById("result").innerText = result;
}
