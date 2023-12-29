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
const pencilChannel1 = selectContainer.querySelectorAll(".row-channel.channel-1 .channel div");
const pencilChannel2 = selectContainer.querySelectorAll(".row-channel.channel-2 .channel div");
const pencilChannel3 = selectContainer.querySelectorAll(".row-channel.channel-3 .channel div");
const pencilChannel4 = selectContainer.querySelectorAll(".row-channel.channel-4 .channel div");
const pencilChannel5 = selectContainer.querySelectorAll(".row-channel.channel-5 .channel div");
const pencilChannel6 = selectContainer.querySelectorAll(".row-channel.channel-6 .channel div");
const noticeChannel1 = selectContainer.querySelectorAll(".row-channel.channel-1 .channel span");
const noticeChannel2 = selectContainer.querySelectorAll(".row-channel.channel-2 .channel span");
const noticeChannel3 = selectContainer.querySelectorAll(".row-channel.channel-3 .channel span");
const noticeChannel4 = selectContainer.querySelectorAll(".row-channel.channel-4 .channel span");
const noticeChannel5 = selectContainer.querySelectorAll(".row-channel.channel-5 .channel span");
const noticeChannel6 = selectContainer.querySelectorAll(".row-channel.channel-6 .channel span");

// footer
const selectFooter = $.querySelector(".footer");
const selectBtnPower = selectFooter.querySelector(".footer-below .power");
const be = selectFooter.querySelectorAll(".range-btns .btns-white input");
const shootingMode = selectFooter.querySelectorAll(".footer-below_left .shooting-mode input");
const recognition = selectFooter.querySelectorAll(".footer-below_right .recognition input");
const ktcnBe = selectFooter.querySelectorAll(".footer-above_left .ktcn-be input");

console.log(ktcnBe);

const app = {
    handleEvents: function () {
        const _this = this;
        const pencilChannel = [
            pencilChannel1,
            pencilChannel2,
            pencilChannel3,
            pencilChannel4,
            pencilChannel5,
            pencilChannel6,
        ];
        const noticeChannel = [
            noticeChannel1,
            noticeChannel2,
            noticeChannel3,
            noticeChannel4,
            noticeChannel5,
            noticeChannel6,
        ];
        let selectBe = [];
        let selectNotive = [];
        let currentChannel = 1;
        let selectPencilChannel = [];
        let selectNotiveChannel = [];
        let missile1;
        let missile2;
        let missile3;
        let missile4;

        // Xử lý khi click play
        // Handle when click play
        selectBtnPower.onclick = function () {
            // console.log(scale[0]);
            setTimeout(power, 2000);
            function power() {
                led2[0].classList.add("active");
                scale[0].checked = true;
                selectChannel[0].checked = true;
                selectPencilChannel = pencilChannel[+currentChannel - 1];
                selectNotiveChannel = noticeChannel[+currentChannel - 1];
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

        // kiem tra chuc nang be phong

        ktcnBe.onclick = function () {
            function ktcn() {
                if (selectBe == 0) {
                    console.log("Chưa chọn bệ");
                } else {
                    console.log(selectBe);
                    // var currentPencil = selectBe[+this.value - 1];
                    // var currentNoticePencil = selectNotive[+this.value - 1];
                    // currentNoticePencil.textContent = "4";
                    for (var i = 0; i < selectBe.length; i++) {
                        selectBe[i].style.animation = "blink 1s linear infinite";
                        setTimeout(function () {
                            selectBe[i].style.animation = "";
                        }, 5000);
                    }
                    for (var j = 0; j < be.length; j++) {
                        be[j].checked = false;
                        be[j].checked === true
                            ? (selectedBe[j].style.background = "rgba(211, 211, 211, 0.3)")
                            : (selectedBe[j].style.background = "var(--primary-color)");
                    }
                    selectBe = [];
                    selectNotive = [];
                }
            }
            ktcn();
        };

        // chuan bi ten lua
        for (var i = 0; i < checkPencil.length; i++) {
            checkPencil[i].addEventListener(
                "click",
                function () {
                    if (selectBe == 0) {
                        console.log("Chưa chọn bệ");
                    } else {
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
                        }, 10000);

                        setTimeout(function () {
                            currentNoticePencil.textContent = "2";
                        }, 15000);

                        setTimeout(function () {
                            currentNoticePencil.textContent = "1";
                        }, 20000);
                    }
                }
                // console.log(currentNoticePencil);
            );
        }

        // chi thi muc tieu
        for (var a = 0; a < addPencil.length; a++) {
            addPencil[a].addEventListener("click", function () {
                if (selectBe == 0) {
                    console.log("Chưa chọn bệ");
                } else {
                    // console.log("Notice so", +this.value);
                    var currentPencil = selectBe[+this.value - 1];
                    var currentNoticePencil = selectNotive[+this.value - 1];
                    // console.log(selectPencilChannel);
                    for (var q = 0; q < selectPencilChannel.length; q++) {
                        if (selectPencilChannel[q].style.display == "block") {
                            selectPencilChannel[q + 1].style.display = "block";
                            selectNotiveChannel[q + 1].textContent =
                                currentNoticePencil.textContent;
                            selectPencilChannel[q + 1].classList = currentPencil.classList;
                        } else {
                            selectPencilChannel[q].style.display = "block";
                            selectNotiveChannel[q].textContent = currentNoticePencil.textContent;
                            selectPencilChannel[q].classList = currentPencil.classList;
                        }
                        break;
                    }

                    // selectPencilChannel[0].style.display = "block";
                    // selectPencilChannel[0].classList = currentPencil.classList;
                    // selectNotiveChannel[0].textContent = currentNoticePencil.textContent;
                    currentPencil.classList.remove("triangle-solid");
                    currentPencil.classList.add("triangle-solid-small");
                    for (var j = 0; j < be.length; j++) {
                        be[j].checked = false;
                        be[j].checked === true
                            ? (selectedBe[j].style.background = "rgba(211, 211, 211, 0.3)")
                            : (selectedBe[j].style.background = "var(--primary-color)");
                    }
                    selectBe = [];
                    selectNotive = [];
                }
            });
        }

        // chi thi kenh
        for (var i = 0; i < selectChannel.length; i++) {
            selectChannel[i].addEventListener("click", function () {
                currentChannel = this.value;
                selectPencilChannel = pencilChannel[+currentChannel - 1];
                selectNotiveChannel = noticeChannel[+currentChannel - 1];
                // console.log(selectPencilChannel);
                if (currentChannel % 2 == 0) {
                    for (j = 0; j < pencilBe.length; j++) {
                        if (j % 2 == 0) {
                            pencilBe[j].classList.add("blue");
                        } else {
                            pencilBe[j].classList.remove("blue");
                        }
                    }
                } else {
                    for (j = 0; j < pencilBe.length; j++) {
                        if (j % 2 == 0) {
                            pencilBe[j].classList.remove("blue");
                        } else {
                            pencilBe[j].classList.add("blue");
                        }
                    }
                }
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
