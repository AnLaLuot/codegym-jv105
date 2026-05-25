const products = [
    "Sony Xperia",
    "Samsung Galaxy",
    "Nokia 6",
    "Xiaomi Redmi Note 4",
    "Apple iPhone 6S",
    "Xiaomi Mi 5s Plus",
    "Apple iPhone 8 Plus",
    "Fujitsu F-04E",
    "Oppo A71"
];

function displayProducts() {

    let table = "";

    for (let i = 0; i < products.length; i++) {

        table += `
            <tr>
                <td>${i + 1}</td>

                <td onclick="editProduct(${i})">
                    ${products[i]}
                </td>

                <td>
                    <button onclick="editProduct(${i})">
                        Edit
                    </button>
                </td>

                <td>
                    <button onclick="deleteProduct(${i})">
                        Delete
                    </button>
                </td>
            </tr>
        `;
    }

    document.getElementById("productTable").innerHTML =
        table;

    document.getElementById("count").innerText =
        `${products.length} products`;
}

function addProduct() {

    const productName =
        document.getElementById("productName").value.trim();

    if (!productName) {

        alert("Vui lòng nhập tên sản phẩm!");

        return;
    }

    products.push(productName);

    document.getElementById("productName").value = "";

    displayProducts();
}

function editProduct(index) {

    const newName =
        prompt(
            "Nhập tên mới:",
            products[index]
        );

    if (!newName || !newName.trim()) {

        return;
    }

    products[index] = newName.trim();

    displayProducts();
}

function deleteProduct(index) {

    const isDelete =
        confirm("Bạn có chắc muốn xoá sản phẩm?");

    if (!isDelete) {

        return;
    }

    products.splice(index, 1);

    displayProducts();
}

displayProducts();
