function doiNhietDo(event) {
    const celsius = parseFloat(document.getElementById("celsius").value);

    if (isNaN(celsius)) {
        alert("Vui lòng nhập độ C!");
        return;
    }

    const fahrenheit = (celsius * 9/5) + 32;

    document.getElementById("fahrenheit").innerText = fahrenheit;
}