function compareStrings() {

    let str1 = document.getElementById("str1").value;
    let str2 = document.getElementById("str2").value;

    if (str1 === str2) {
        document.getElementById("result").innerText =
            "Hai chuỗi giống nhau";
    } else {
        document.getElementById("result").innerText =
            "Hai chuỗi khác nhau";
    }
}
