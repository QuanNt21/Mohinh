const $ = document.querySelector(".home");
// header
const selectHearder = $.querySelector(".hearder");
const led2 = selectHearder.querySelectorAll(".hearder-center .led_2");

// container
const selectContainer = $.querySelector(".container");
const screen = selectContainer.querySelector(".screen .show-information");
const hide = selectContainer.querySelector(".screen .hide");
const scale = selectContainer.querySelectorAll(".btn-scale input");
const selectChannel = selectContainer.querySelectorAll(".nav-container_right .btns-blue-1 input");
const selectedBe = selectContainer.querySelectorAll(".bullets .row-bullet .be");

// footer
const selectFooter = $.querySelector(".footer");
const selectBtnPower = selectFooter.querySelector(".footer-below .power");
const be = selectFooter.querySelectorAll(".range-btns .btns-white input");
const shootingMode = selectFooter.querySelectorAll(".footer-below_left .shooting-mode input");
const recognition = selectFooter.querySelectorAll(".footer-below_right .recognition input");

console.log(selectedBe);

const app = {
    handleEvents: function () {
        const _this = this;
        // Xử lý khi click play
        // Handle when click play
        selectBtnPower.onclick = function () {
            // console.log(scale[0]);
            setTimeout(power, 2000);
            function power() {
                led2[0].classList.add("active");
                scale[0].checked = true;
                selectChannel[0].checked = true;
                shootingMode[1].checked = true;
                recognition[1].checked = true;
                hide.classList.remove("hide"); //hide select box
                screen.style.display = "block"; //show the playboard section
            }
        };

        for (var i = 0; i < scale.length; i++) {
            scale[i].addEventListener("click", function (e) {
                var currentScale = this.value;
                console.log(currentScale);
            });
        }

        for (var i = 0; i < be.length; i++) {
            be[i].addEventListener("click", function (e) {
                var currentBe = this.value;
                var selectBe = selectedBe[currentBe - 1];
                selectBe.style.background = "rgba(211, 211, 211, 0.3)";
                console.log(selectBe);
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
