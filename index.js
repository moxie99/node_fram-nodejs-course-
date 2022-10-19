var nameOfStudent;
nameOfStudent = 7;
nameOfStudent = "Oluwasegun";
console.log("name of student is ".concat(nameOfStudent));
var surname = new String("Danny");
console.log(typeof surname);
console.log(typeof "Oluwasegun");
var token = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var username = ["Oluwasegun", "Dashboard", "Derry"];
var comments = [
    { id: 1, comment: "Lobe is here" },
    { id: 2, comment: "Lobe is here" },
    { id: 3, comment: "Lobe is here" },
];
comments.map(function (comment, index) {
    console.log("".concat(comment.comment, "  is my ").concat(index, " in life"));
});
