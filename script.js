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
        console.log(hiddenActivity[i].style.display);
        if (hiddenActivity[i].style.display == "none" || hiddenActivity[i].style.display == '') {
            console.log(`click ${i}`);
            hiddenActivity[i].style.display = "flex"
            dataICon[i].innerHTML = "&#8593;"
        } else {
            dataICon[i].innerHTML = "&#8595;"
            hiddenActivity[i].style.display = "none"
        }
    })
}