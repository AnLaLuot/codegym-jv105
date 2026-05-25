function xepLoai() {

    const MIDTERM_WEIGHT = 2;

    const FINAL_WEIGHT = 3;

    const TOTAL_WEIGHT = 6;

    const EXCELLENT = 8;

    const GOOD = 6.5;

    const AVERAGE = 5;

    const test =
        parseFloat(document.getElementById("test").value);

    const mid =
        parseFloat(document.getElementById("midterm").value);

    const final =
        parseFloat(document.getElementById("final").value);

    if (isNaN(test) || isNaN(mid) || isNaN(final)) {
        document.getElementById("result").innerText =
            "Vui lòng nhập đầy đủ điểm!";
        return;
    }
    const avg =
        (
            test
            + mid * MIDTERM_WEIGHT
            + final * FINAL_WEIGHT
        ) / TOTAL_WEIGHT;

    let rank = "Yếu";

    if (avg >= EXCELLENT) {

        rank = "Giỏi";

    } else if (avg >= GOOD) {

        rank = "Khá";

    } else if (avg >= AVERAGE) {

        rank = "Trung bình";
    }
    document.getElementById("result").innerText =
        `Điểm TB: ${avg.toFixed(2)} - Xếp loại: ${rank}`;
}
