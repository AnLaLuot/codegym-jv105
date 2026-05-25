class ProductManager {

    constructor(products) {

        this.products = products;
    }

    displayProducts() {

        let table = "";

        for (let i = 0; i < this.products.length; i++) {

            table += `
                <tr>
                    <td>${i + 1}</td>

                    <td>
                        ${this.products[i]}
                    </td>

                    <td>
                        <button onclick="productManager.editProduct(${i})">
                            Edit
                        </button>
                    </td>

                    <td>
                        <button onclick="productManager.deleteProduct(${i})">
                            Delete
                        </button>
                    </td>
                </tr>
            `;
        }

        document.getElementById("productTable").innerHTML =
            table;

        document.getElementById("count").innerText =
            `${this.products.length} products`;
    }

    addProduct() {

        const productName =
            document.getElementById("productName").value.trim();

        if (!productName) {

            alert("Vui lòng nhập tên sản phẩm!");

            return;
        }

        this.products.push(productName);

        document.getElementById("productName").value = "";

        this.displayProducts();
    }

    editProduct(index) {

        const newName =
            prompt(
                "Nhập tên mới:",
                this.products[index]
            );

        if (!newName || !newName.trim()) {

            return;
        }

        this.products[index] = newName.trim();

        this.displayProducts();
    }

    deleteProduct(index) {

        const isDelete =
            confirm("Bạn có chắc muốn xoá sản phẩm?");

        if (!isDelete) {

            return;
        }

        this.products.splice(index, 1);

        this.displayProducts();
    }
}

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

const productManager =
    new ProductManager(products);

productManager.displayProducts();
