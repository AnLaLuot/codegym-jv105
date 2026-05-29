let table = document.getElementById("table");

for (let i = 1; i <= 9; i++) { // dòng
    let row = "<tr>";

    for (let j = 2; j <= 9; j++) { // cột
        row += "<td>" + j + " x " + i + " = " + (i * j) + "</td>";
    }

    row += "</tr>";
    table.innerHTML += row;
}