const saveBtn = document.querySelector("#save-btn");
const addBtn = document.querySelector("#add-btn");
const deleteBtn = document.querySelector("#delete-btn");
const showBtn = document.querySelector("#show-btn");

let user = {
    id: 1,
    name: "Avazbek",
    username: "Qaxxorov",
    email: "avazbek@gmail.com",
    time: "12:12:12"
    
}
let users = [user];
saveBtn.addEventListener("click", () => {
    localStorage.setItem("users", JSON.stringify(users))
});

addBtn.addEventListener("click", () => {

    alert("Add new user");

    let usersInLS = JSON.parse(localStorage.getItem("users"));

    let name = prompt("Enter user name: ");
    let username = prompt("Enter user username: ");
    let email = prompt("Enter user email: ");
    let timeHour = prompt("Enter user hour: ");
    let timeMinutes = prompt("Enter user minutes: ");
    let timeSecondary = prompt("Enter user secondary: ");
    let times = `${timeHour}: ${timeMinutes}: ${timeSecondary}`;

    let newUser = {
        id: usersInLS.length +1,
        name: name,
        username: username,
        email: email,
        time: times,
    };
    usersInLS.push(newUser)
    localStorage.setItem("users", JSON.stringify(usersInLS))
    console.log(usersInLS); 
});

deleteBtn.addEventListener("click" , () => {
    let deleteId = +prompt(" Enter id has to be deleted: ")
    let usersInLS = JSON.parse(localStorage.getItem("users"))
    let deleteIndex = -1;
    for (let i = 0; i < usersInLS.length; i++) {
        if (usersInLS[i].id === deleteId) {
            deleteIndex = i;
            break;
        }
    }
    if (deleteIndex !== -1) {
        usersInLS.splice(deleteIndex, 1);
        localStorage.setItem("users", JSON.stringify(usersInLS));
    } else {
        console.log(" Item with given id not found");
    }
})

showBtn.addEventListener("click", () => {
    let usersInLS= JSON.parse(localStorage.getItem("users"));

        usersInLS.sort((a, b) => {
        let timeA = new Date("2000/01/01 " + a.time).getTime();
        let timeB = new Date("2000/01/01 " + b.time).getTime();
        
        return timeA - timeB;
    });

    document.write("<h2>users</h2>");
    usersInLS.forEach((user) => {
        document.write(`<p>user: ${user.name} | Time: ${user.time}</p>`);
    });
});