let nameOfStudent: string | number;
nameOfStudent = 7;
nameOfStudent = "Oluwasegun"

console.log(`name of student is ${nameOfStudent}`)

let surname = new String("Danny")
console.log(typeof surname)

console.log(typeof "Oluwasegun")

let token: number [] = [1,2,3,4,5,6,7,8,9,10]
let username: string [] = ["Oluwasegun", "Dashboard", "Derry"]

let  comments = [
    {id: 1, comment: "Lobe is here"},
    {id: 2, comment: "Lobe is here"},
    {id: 3, comment: "Lobe is here"},
]

comments.map((comment, index) => {
    console.log(`${comment.comment}  is my ${index} in life`)
})