const showNav = document.getElementById("showNav");
const closeNav = document.getElementById("closeNav");
const sideBar = document.querySelector(".sidebar");

showNav.addEventListener("click", () => {
    sideBar.style.display = "flex"
})
closeNav.addEventListener("click", () => {
    sideBar.style.display = "none"
})

const moreData = document.querySelectorAll(".moreData")
const dataICon = document.querySelectorAll(".moreData div")
const hiddenActivity = document.querySelectorAll(".activity__hidden")

for (let i = 0; i < moreData.length; i++) {
    moreData[i].addEventListener("click", () => {
        if (hiddenActivity[i].style.display == "none" || hiddenActivity[i].style.display == '') {
            hiddenActivity[i].style.display = "flex"
            dataICon[i].innerHTML = "&#8593;"
        } else {
            dataICon[i].innerHTML = "&#8595;"
            hiddenActivity[i].style.display = "none"
        }
    })
}


let oldPassword = document.getElementById("oldPasswordValue");
let newPassword = document.getElementById("newPasswordValue");
let showNewPassword = document.querySelector(".showNewPassword");
let showOldPassword = document.querySelector(".showOldPassword");


showOldPassword.addEventListener("click", () => {
    if (oldPassword.type === "password") {
        oldPassword.type = "text"
    } else {
        oldPassword.type = "password"
    }
})

showNewPassword.addEventListener("click", () => {
    if (newPassword.type === "password") {
        newPassword.type = "text"
    } else {
        newPassword.type = "password"
    }
})


const passwordSection = document.getElementById("password")
const transactionSection = document.getElementById("transaction")

const transactionInfo = document.querySelector(".transactionInfo")
const passwordInfo = document.querySelector(".passwordInfo");


// transactionSection.addEventListener("click", () => {
//     if (transactionInfo.style.display == "none" || transactionInfo.style.display == '') {
//         transactionInfo.style.display == "flex"
//         passwordInfo.style.display == "none"
//         console.log("hi");
//     } else {
//         transactionInfo.style.display == "none"
//         passwordInfo.style.display == "flex"
//         console.log("hhhhi");
//     }
// })
// passwordSection.addEventListener("click", () => {
//     if (passwordInfo.style.display == "none" || passwordInfo.style.display == '') {
//         transactionInfo.style.display == "none"
//         passwordInfo.style.display == "flex"

//     } else {
//         transactionInfo.style.display == "flex"
//         passwordInfo.style.display == "none"
//     }
// })