// Хранение пользователей



let users = [
    { username: "user1", password: "pass1" },
    { username: "user2", password: "pass2" }
];

function login() {
    
        window.location.href = "index2.html";
}

function sss() {
    window.location.href = "index.html";
}

function createUser() {
    const username = document.getElementById('admin').value;
    const password = document.getElementById('pass').value;
    if (username && password) {
        users.push({ username, password });
        alert("Пользователь создан!");
    } else {
        alert("Ошибка: данные не введены.");
    }
}