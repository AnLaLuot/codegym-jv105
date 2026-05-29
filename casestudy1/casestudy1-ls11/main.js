class Student {

    constructor(
        id,
        name,
        className,
        email,
        birthday,
        module
    ) {

        this.id = id;

        this.name = name;

        this.className = className;

        this.email = email;

        this.birthday = birthday;

        this.module = module;
    }
}

const students = [

    new Student(
        "HV-0001",
        "Nguyen Van A",
        "C0525G1",
        "a@gmail.com",
        "01/01/2000",
        1
    ),

    new Student(
        "HV-0002",
        "Tran Thi B",
        "C0525G1",
        "b@gmail.com",
        "02/02/2001",
        2
    )
];

function displayStudents() {

    let table = "";

    for (const student of students) {

        table += `
            <tr>
                <td>${student.id}</td>
                <td>${student.name}</td>
                <td>${student.className}</td>
                <td>${student.email}</td>
                <td>${student.birthday}</td>
                <td>${student.module}</td>
            </tr>
        `;
    }

    document.getElementById("studentTable").innerHTML = table;
}

function isValidId(id) {

    const regex = /^HV-\d{4}$/;

    return regex.test(id);
}

function isDuplicateId(id) {

    for (const student of students) {

        if (student.id === id) {
            return true;
        }
    }
    return false;
}

function isValidBirthday(birthday) {

    const regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;

    return regex.test(birthday);
}

function addStudent() {

    const id = prompt("Nhập mã học viên (HV-XXXX):");

    if (
        !isValidId(id)
        || isDuplicateId(id)
    ) {
        alert("Mã học viên không hợp lệ hoặc bị trùng!");
        return;
    }

    const name = prompt("Nhập tên học viên:");

    if (!name || name.length > 50) {
        alert("Tên không hợp lệ!");
        return;
    }

    const className = prompt("Nhập lớp:");

    const email = prompt("Nhập email:");

    const birthday = prompt("Nhập ngày sinh (dd/mm/yyyy):");

    if (!isValidBirthday(birthday)) {
        alert("Ngày sinh không hợp lệ!");
        return;
    }

    const module = parseInt(prompt("Nhập module (1 -> 6):"));

    if (module < 1 || module > 6) {
        alert("Module không hợp lệ!");
        return;
    }

    students.push(
        new Student(
            id,
            name,
            className,
            email,
            birthday,
            module
        )
    );

    displayStudents();
}

function editStudent() {

    const id = prompt("Nhập mã học viên cần sửa:");

    let student = null;

    for (const item of students) {
        if (item.id === id) {
            student = item;
            break;
        }
    }

    if (!student) {
        alert("Mã học viên không tồn tại");
        return;
    }

    student.name = prompt("Nhập tên mới:", student.name);

    student.className = prompt("Nhập lớp mới:", student.className);

    student.email = prompt("Nhập email mới:", student.email);

    const birthday = prompt("Nhập ngày sinh mới:", student.birthday);

    if (isValidBirthday(birthday)) {
        student.birthday = birthday;
    }

    const module = parseInt(prompt("Nhập module mới:", student.module));

    if (module >= 1 && module <= 6) {
        student.module = module;
    }

    displayStudents();
}

function deleteStudent() {

    const id = prompt("Nhập mã học viên cần xóa:");

    let index = -1;

    for (let i = 0; i < students.length; i++) {

        if (students[i].id === id) {
            index = i;
            break;
        }
    }

    if (index === -1) {
        alert("Mã học viên không tồn tại");
        return;
    }

    const confirmDelete = confirm("Bạn có chắc muốn xóa?");

    if (confirmDelete) {
        students.splice(index, 1);
        displayStudents();
    }
}

displayStudents();
