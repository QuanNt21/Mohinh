const selectHome = document.querySelector(".home");
const selectHearder = selectHome.querySelector(".hearder");
const selectContainer = selectHome.querySelector(".container");
const selectFooter = selectHome.querySelector(".footer");
const selectBtnPower = selectFooter.querySelector(".footer-below .power");
const screen = selectContainer.querySelector(".screen .show-information");
const hide = selectContainer.querySelector(".screen .hide");

selectBtnPower.onclick = () => {
    setTimeout(() => showScreen(), 1000);
};

function showScreen() {
    // console.log("Power");
    hide.classList.remove("hide"); //hide select box
    screen.style.display = "block"; //show the playboard section
}
