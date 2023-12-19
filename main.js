const selectHome = document.querySelector(".home");
const selectHearder = selectHome.querySelector(".hearder");
const selectContainer = selectHome.querySelector(".container");
const selectFooter = selectHome.querySelector(".footer");
const selectBtnPower = selectFooter.querySelector(".footer-below .power");
const screen = selectContainer.querySelector(".screen .show-information");
const hide = selectContainer.querySelector(".screen .hide");
const be = selectFooter.querySelectorAll(".range-btns .btns-white input");

const app = {
    handleEvents: function () {
        const _this = this;
        // Xử lý khi click play
        // Handle when click play
        selectBtnPower.onclick = function () {
            hide.classList.remove("hide"); //hide select box
            screen.style.display = "block"; //show the playboard section
        };

        for (var i = 0; i < be.length; i++) {
            be[i].addEventListener("click", function (e) {
                var currentBe = this.value;
                console.log(currentBe);
            });
        }
    },

    start: function () {
        // Lắng nghe / xử lý các sự kiện (DOM events)
        // Listening / handling events (DOM events)
        this.handleEvents();
    },
};

app.start();
