function xepLoai() {
    const test = parseFloat(document.getElementById("test").value);
    const mid = parseFloat(document.getElementById("midterm").value);
    const final = parseFloat(document.getElementById("final").value);

    if (isNaN(test) || isNaN(mid) || isNaN(final)) {
        document.getElementById("result").innerText = "Vui lòng nhập đầy đủ điểm!";
        return;
    }

    // Tính trung bình có trọng số
    const avg = (test + mid * 2 + final * 3) / 6;

    let rank;

    if (avg >= 8) {
        rank = "Giỏi";
    } else if (avg >= 6.5) {
        rank = "Khá";
    } else if (avg >= 5) {
        rank = "Trung bình";
    } else {
        rank = "Yếu";
    }

    document.getElementById("result").innerText =
        "Điểm TB: " + avg.toFixed(2) + " - Xếp loại: " + rank;
}
