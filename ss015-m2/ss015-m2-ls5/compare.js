function compareStrings() {

    let str1 = document.getElementById("str1").value;

    let str2 = document.getElementById("str2").value;

    document.getElementById("result").innerText = (str1 === str2)
            ? "Hai chuỗi giống nhau"
            : "Hai chuỗi khác nhau";
}
