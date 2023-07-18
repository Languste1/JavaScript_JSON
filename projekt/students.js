var students = [];

$(document).ready(() => {

    if (localStorage.getItem('students') != null)
        students = JSON.parse(localStorage.getItem('students'));

    renderStudentsTable();
});

function createStudent() {

    let preName = $('#inputPrename').val();
    let lastName = $('#inputLastname').val();
    let id = $('#inputId').val();

    let newStudent = new Student(preName, lastName, id);

    students.push(newStudent);

    //save student in local storage
    localStorage.setItem('students', JSON.stringify(students));

    renderStudentsTable();
}

function renderStudentsTable() {

    console.log(students);

    //delete all rows that contains students
    //takes the table and removes the elements gt(greatern then) 0.
    //like that our header-row stays
    $("table tr:gt(0)").remove();

    // render/create rows for all students
    for (let i = 0; i < students.length; i++) {

        $("tbody").append("<tr></tr>");
        let row = $("tr:last");
        $(row).append("<td>" + students[i].prename + "</td>");
        $(row).append("<td>" + students[i].lastname + "</td>");
        $(row).append("<td>" + students[i].id + "</td>");
    }

}


class Student {
    constructor(prename, lastname, id) {
        this.prename = prename;
        this.lastname = lastname;
        this.id = id;
    }
}