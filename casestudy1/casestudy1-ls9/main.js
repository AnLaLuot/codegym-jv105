function checkPairs(numbers) {

    let detail = "";

    for (let i = 0; i < numbers.length; i += 2) {

        const first = numbers[i];

        const second = numbers[i + 1];

        if (first >= second) {
            detail += `
                Cặp (${first},${second})
                không thỏa mãn
            \n`;
            return {
                result: "NO",
                detail: detail
            };
        }
        detail += `
            Cặp (${first},${second})
            thỏa mãn
        \n`;
    }
    return {
        result: "OK",
        detail: detail
    };
}

function run() {

    const input = document.getElementById("numbers").value;

    if (!input.trim()) {
        document.getElementById("result").innerText =
            `Vui lòng nhập mảng!`;
        return;
    }

    const numbers = input.split(",").map(Number);

    if (numbers.length % 2 !== 0) {
        document.getElementById("result").innerText =
            `Mảng phải có số lượng phần tử chẵn!`;
        return;
    }
    document.getElementById("arrayResult").innerText =
        `Mảng vừa nhập: ${numbers.join(", ")}`;

    const checkResult = checkPairs(numbers);

    document.getElementById("detail").innerText = checkResult.detail;

    document.getElementById("result").innerText =
        `Kết quả: ${checkResult.result}`;
}
