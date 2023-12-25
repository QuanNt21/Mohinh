const $ = document.querySelector(".home");
// header
const selectHearder = $.querySelector(".hearder");
const led2 = selectHearder.querySelectorAll(".hearder-center .led_2");

// container
const selectContainer = $.querySelector(".container");
const scale = selectContainer.querySelectorAll(".btn-scale input");
const selectChannel = selectContainer.querySelectorAll(".nav-container_right .btns-blue-1 input");
const checkPencil = selectContainer.querySelectorAll(".nav-footer_center input");
const addPencil = selectContainer.querySelectorAll(".nav-footer_right input");

const screen = selectContainer.querySelector(".screen .show-information");
const hide = selectContainer.querySelector(".screen .hide");
const selectedBe = selectContainer.querySelectorAll(".bullets .row-bullet .be");
const pencilBe = selectContainer.querySelectorAll(".row-bullet .pencil div");
const noticePencil = selectContainer.querySelectorAll(".row-bullet .pencil span");
const pencilChannel = selectContainer.querySelectorAll(".row-channel .channel div");
const noticeChannel = selectContainer.querySelectorAll(".row-channel .channel span");

// footer
const selectFooter = $.querySelector(".footer");
const selectBtnPower = selectFooter.querySelector(".footer-below .power");
const be = selectFooter.querySelectorAll(".range-btns .btns-white input");
const shootingMode = selectFooter.querySelectorAll(".footer-below_left .shooting-mode input");
const recognition = selectFooter.querySelectorAll(".footer-below_right .recognition input");

// console.log(addPencil);

const app = {
    handleEvents: function () {
        const _this = this;
        let selectBe = [];
        let selectNotive = [];
        let currentChannel;

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

        // Chon ti le
        for (var i = 0; i < scale.length; i++) {
            scale[i].addEventListener("click", function (e) {
                var currentScale = this.value;
                console.log(currentScale);
            });
        }

        // Chon be phong
        for (var i = 0; i < be.length; i++) {
            be[i].addEventListener("click", function (e) {
                let currentBe = this.value;
                selectBe = [
                    pencilBe[+currentBe - 1],
                    pencilBe[+currentBe + 11],
                    pencilBe[+currentBe + 23],
                    pencilBe[+currentBe + 35],
                ];

                selectNotive = [
                    noticePencil[+currentBe - 1],
                    noticePencil[+currentBe + 11],
                    noticePencil[+currentBe + 23],
                    noticePencil[+currentBe + 35],
                ];

                // console.log("Be so", currentBe);
                for (var j = 0; j < be.length; j++) {
                    be[j].checked === true
                        ? (selectedBe[j].style.background = "rgba(211, 211, 211, 0.3)")
                        : (selectedBe[j].style.background = "var(--primary-color)");
                }
            });
        }

        // chuan bi ten lua
        for (var i = 0; i < checkPencil.length; i++) {
            checkPencil[i].addEventListener(
                "click",
                function () {
                    // console.log("Notice so", +this.value);
                    var currentPencil = selectBe[+this.value - 1];
                    var currentNoticePencil = selectNotive[+this.value - 1];
                    currentNoticePencil.textContent = "4";
                    currentPencil.style.animation = "blink 1s linear infinite";
                    for (var j = 0; j < be.length; j++) {
                        be[j].checked = false;
                        be[j].checked === true
                            ? (selectedBe[j].style.background = "rgba(211, 211, 211, 0.3)")
                            : (selectedBe[j].style.background = "var(--primary-color)");
                    }
                    selectBe = [];
                    selectNotive = [];
                    setTimeout(function () {
                        currentPencil.classList.remove("triangle");
                        currentPencil.classList.add("triangle-solid");
                        currentPencil.style.animation = "";
                    }, 5000);

                    setTimeout(function () {
                        currentNoticePencil.textContent = "3";
                    }, 7000);

                    setTimeout(function () {
                        currentNoticePencil.textContent = "2";
                    }, 9000);

                    setTimeout(function () {
                        currentNoticePencil.textContent = "1";
                    }, 11000);
                }
                // console.log(currentNoticePencil);
            );
        }

        // chi thi muc tieu
        for (var a = 0; a < addPencil.length; a++) {
            addPencil[a].addEventListener("click", function () {
                // console.log("Notice so", +this.value);
                var currentPencil = selectBe[+this.value - 1];
                var currentNoticePencil = selectNotive[+this.value - 1];
                // currentNoticePencil.textContent = "4";
                // currentPencil.style.animation = "blink 1s linear infinite";
                for (var j = 0; j < be.length; j++) {
                    be[j].checked = false;
                    be[j].checked === true
                        ? (selectedBe[j].style.background = "rgba(211, 211, 211, 0.3)")
                        : (selectedBe[j].style.background = "var(--primary-color)");
                }
                selectBe = [];
                selectNotive = [];
            });
        }

        for (var i = 0; i < selectChannel.length; i++) {
            selectChannel[i].addEventListener("click", function () {
                currentChannel = this.value;
            });
        }
    },

    render: function () {
        for (var j = 0; j < be.length; j++) {
            be[j].checked === true
                ? (selectedBe[j].style.background = "rgba(211, 211, 211, 0.3)")
                : (selectedBe[j].style.background = "var(--primary-color)");
        }
    },

    start: function () {
        // Lắng nghe / xử lý các sự kiện (DOM events)
        // Listening / handling events (DOM events)
        this.handleEvents();

        // Render
        this.render();
    },
};

app.start();
