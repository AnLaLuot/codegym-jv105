function countCharacter(characters, targetCharacter) {

    let count = 0;

    for (const character of characters) {

        if (character === targetCharacter) {

            count++;
        }
    }

    return count || -1;
}

function checkCharacter() {

    const input =
        document.getElementById("array").value;

    const targetCharacter =
        document.getElementById("character").value;

    if (!input.trim() || !targetCharacter.trim()) {

        document.getElementById("result").innerText =
            `Vui lòng nhập đầy đủ dữ liệu!`;

        return;
    }

    const characters =
        input.split(",");

    const result =
        countCharacter(characters, targetCharacter);

    document.getElementById("result").innerText =
        `Kết quả: ${result}`;
}
