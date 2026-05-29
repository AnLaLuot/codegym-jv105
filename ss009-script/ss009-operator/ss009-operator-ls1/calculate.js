function tinhDiem(event) {

    const physics = parseFloat(document.getElementById("physics").value);
    const chemistry = parseFloat(document.getElementById("chemistry").value);
    const biology = parseFloat(document.getElementById("biology").value);

    if (isNaN(physics) || isNaN(chemistry) || isNaN(biology)) {
        alert("Vui lòng nhập đầy đủ điểm!");
        return;
    }

    const total = physics + chemistry + biology;
    const average = total / 3;

    document.getElementById("total").innerText = total;
    document.getElementById("average").innerText = average;
}