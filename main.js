const $ = document.querySelector(".home");
// header
const selectHearder = $.querySelector(".hearder");
const led2 = selectHearder.querySelectorAll(".hearder-center .led_2");

// container
const selectContainer = $.querySelector(".container");
const scale = selectContainer.querySelectorAll(".btn-scale input");
const selectChannel = selectContainer.querySelectorAll(".nav-container_right .btns-blue-1 input");
const selectSignal = selectContainer.querySelectorAll(".nav-container_right .btns-blue-2 input");
const checkPencil = selectContainer.querySelectorAll(".nav-footer_center input");
const addPencil = selectContainer.querySelectorAll(".nav-footer_right input");
const kenhPhong = selectContainer.querySelectorAll(".nav-container_left .btns-blue-1 input");

const screen = selectContainer.querySelector(".screen .show-information");
const hide = selectContainer.querySelector(".screen .hide");
const selectedBe = selectContainer.querySelectorAll(".bullets .row-bullet .be");

const pencilBe = selectContainer.querySelectorAll(".row-bullet .pencil div");
const noticePencil = selectContainer.querySelectorAll(".row-bullet .pencil span");

const pencilChannel = selectContainer.querySelectorAll(".row-channel .channel div");
const noticeChannel = selectContainer.querySelectorAll(".row-channel .channel span");

const signal = selectContainer.querySelectorAll(".grid-signal .row-signal");
const pencil1Signal = selectContainer.querySelectorAll(".grid-signal .row-signal .shoots1");
const pencil2Signal = selectContainer.querySelectorAll(".grid-signal .row-signal .shoots2");

// footer
const selectFooter = $.querySelector(".footer");
const selectBtnPower = selectFooter.querySelector(".footer-below .power");
const be = selectFooter.querySelectorAll(".range-btns .btns-white input");
const shootingMode = selectFooter.querySelectorAll(".footer-below_left .shooting-mode input");
const recognition = selectFooter.querySelectorAll(".footer-below_right .recognition input");
const ktcnBe = selectFooter.querySelectorAll(".footer-above_left .ktcn-be");
const pencilPhong = selectFooter.querySelectorAll(".footer-below .array-push .btns-red-2 input");

console.log(pencil1Signal);

const app = {
    handleEvents: function () {
        const _this = this;

        let selectBe = [];
        let selectNotive = [];
        let currentChannel = 1;
        let currentKenhPhong;
        let selectPencilChannel = [];
        let selectNotiveChannel = [];
        let selectKenhPhong = [];
        let shoots1Channel;
        let shoots2Channel;

        // Xử lý khi click play
        // Handle when click play
        selectBtnPower.onclick = function () {
            // console.log(scale[0]);
            setTimeout(power, 2000);
            function power() {
                led2[0].classList.add("active");
                scale[0].checked = true;
                selectChannel[0].checked = true;
                selectPencilChannel = [
                    pencilChannel[+currentChannel - 1],
                    pencilChannel[+currentChannel],
                    pencilChannel[+currentChannel + 1],
                    pencilChannel[+currentChannel + 2],
                ];
                selectNotiveChannel = [
                    noticeChannel[+currentChannel - 1],
                    noticeChannel[+currentChannel],
                    noticeChannel[+currentChannel + 1],
                    noticeChannel[+currentChannel + 2],
                ];
                shootingMode[1].checked = true;
                recognition[1].checked = true;
                hide.classList.remove("hide"); //hide select box
                screen.style.display = "block"; //show the playboard section
            }
        };

        // kiem tra chuc nang be phong
        ktcnBe[0].onclick = function (e) {
            // console.log("ktcn");

            if (selectBe == 0) {
                console.log("Chưa chọn bệ");
            } else {
                console.log(selectBe);
                // var currentPencil = selectBe[+this.value - 1];
                // var currentNoticePencil = selectNotive[+this.value - 1];
                // currentNoticePencil.textContent = "4";

                selectBe[0].style.animation = "blink 1s linear infinite";
                selectBe[1].style.animation = "blink 1s linear infinite";
                selectBe[2].style.animation = "blink 1s linear infinite";
                selectBe[3].style.animation = "blink 1s linear infinite";
                setTimeout(function () {
                    selectBe[0].style.animation = "";
                    selectBe[1].style.animation = "";
                    selectBe[2].style.animation = "";
                    selectBe[3].style.animation = "";
                    for (var j = 0; j < be.length; j++) {
                        be[j].checked = false;
                        be[j].checked === true
                            ? (selectedBe[j].style.background = "rgba(211, 211, 211, 0.3)")
                            : (selectedBe[j].style.background = "var(--primary-color)");
                    }
                }, 5000);
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
                var currentBe = this.value;

                valueBe = [
                    [+currentBe - 1],
                    [+currentBe + 11],
                    [+currentBe + 23],
                    [+currentBe + 35],
                ];

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
                        }, 15000);

                        setTimeout(function () {
                            currentNoticePencil.textContent = "2";
                        }, 25000);

                        setTimeout(function () {
                            currentNoticePencil.textContent = "1";
                        }, 35000);
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
                    var currentPencil = selectBe[+this.value - 1];
                    var currentNoticePencil = selectNotive[+this.value - 1];
                    if (
                        selectPencilChannel[0].style.display == "block" &&
                        selectPencilChannel[1].style.display == "block" &&
                        selectPencilChannel[2].style.display == "block" &&
                        selectPencilChannel[3].style.display == !"block"
                    ) {
                        selectPencilChannel[3].style.display = "block";
                        selectNotiveChannel[3].textContent = currentNoticePencil.textContent;
                        selectPencilChannel[3].classList = currentPencil.classList;
                        countdown(selectNotiveChannel[3], currentNoticePencil);
                    }
                    if (
                        selectPencilChannel[0].style.display == "block" &&
                        selectPencilChannel[1].style.display == "block" &&
                        selectPencilChannel[2].style.display == !"block" &&
                        selectPencilChannel[3].style.display == !"block"
                    ) {
                        selectPencilChannel[2].style.display = "block";
                        selectNotiveChannel[2].textContent = currentNoticePencil.textContent;
                        selectPencilChannel[2].classList = currentPencil.classList;
                        countdown(selectNotiveChannel[2], currentNoticePencil);
                    }
                    if (
                        selectPencilChannel[0].style.display == "block" &&
                        selectPencilChannel[1].style.display == !"block" &&
                        selectPencilChannel[2].style.display == !"block" &&
                        selectPencilChannel[3].style.display == !"block"
                    ) {
                        selectPencilChannel[1].style.display = "block";
                        selectNotiveChannel[1].textContent = currentNoticePencil.textContent;
                        selectPencilChannel[1].classList = currentPencil.classList;
                        countdown(selectNotiveChannel[1], currentNoticePencil);
                    }
                    if (
                        selectPencilChannel[0].style.display == !"block" &&
                        selectPencilChannel[1].style.display == !"block" &&
                        selectPencilChannel[2].style.display == !"block" &&
                        selectPencilChannel[3].style.display == !"block"
                    ) {
                        selectPencilChannel[0].style.display = "block";
                        selectNotiveChannel[0].textContent = currentNoticePencil.textContent;
                        selectPencilChannel[0].classList = currentPencil.classList;
                        countdown(selectNotiveChannel[0], currentNoticePencil);
                    } else {
                        // selectNotiveChannel[0].textContent = currentNoticePencil.textContent;
                        // selectPencilChannel[0].classList = currentPencil.classList;
                    }
                    function countdown(notive1, notive2) {
                        if (notive1.textContent == "4") {
                            setTimeout(function () {
                                notive1.textContent = "3";
                                notive2.textContent = "3";
                            }, 3000);

                            setTimeout(function () {
                                notive1.textContent = "2";
                                notive2.textContent = "2";
                            }, 13000);

                            setTimeout(function () {
                                notive1.textContent = "1";
                                notive2.textContent = "1";
                            }, 23000);
                        }
                        if (notive1.textContent == "3") {
                            setTimeout(function () {
                                notive1.textContent = "2";
                                notive2.textContent = "2";
                            }, 3000);

                            setTimeout(function () {
                                notive1.textContent = "1";
                                notive2.textContent = "1";
                            }, 13000);
                        }
                        if (notive1.textContent == "2") {
                            setTimeout(function () {
                                notive1.textContent = "1";
                                notive2.textContent = "1";
                            }, 5000);
                        }
                    }

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

        // chon kenh
        for (var i = 0; i < selectChannel.length; i++) {
            selectChannel[i].addEventListener("click", function () {
                currentChannel = this.value;
                selectPencilChannel = [
                    pencilChannel[+currentChannel - 1],
                    pencilChannel[+currentChannel],
                    pencilChannel[+currentChannel + 1],
                    pencilChannel[+currentChannel + 2],
                ];
                selectNotiveChannel = [
                    noticeChannel[+currentChannel - 1],
                    noticeChannel[+currentChannel],
                    noticeChannel[+currentChannel + 1],
                    noticeChannel[+currentChannel + 2],
                ];

                if (currentChannel == 5 || currentChannel == 13 || currentChannel == 21) {
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

        // tín hiệu kênh
        for (var i = 0; i < selectSignal.length; i++) {
            selectSignal[i].addEventListener("click", function () {
                currentSignal = this.value;
                signal[currentSignal - 1].classList.remove("hide-signal");
                for (var i = 0; i < selectSignal.length; i++) {
                    selectSignal[i].checked === true
                        ? signal[i].classList.remove("hide-signal")
                        : signal[i].classList.add("hide-signal");
                }
            });
        }

        // chon kenh phong
        for (var i = 0; i < kenhPhong.length; i++) {
            kenhPhong[i].addEventListener("click", function () {
                currentKenhPhong = this.value;
                selectKenhPhong = [
                    pencilChannel[+currentKenhPhong - 1],
                    pencilChannel[+currentKenhPhong],
                    pencilChannel[+currentKenhPhong + 1],
                    pencilChannel[+currentKenhPhong + 2],
                ];
                // selectNotiveChannel = [
                //     noticeChannel[+currentKenhPhong - 1],
                //     noticeChannel[+currentKenhPhong],
                //     noticeChannel[+currentKenhPhong + 1],
                //     noticeChannel[+currentKenhPhong + 2],
                // ];
                if (currentKenhPhong == 1) {
                    shoots1Channel = pencil1Signal[0];
                    shoots2Channel = pencil2Signal[0];
                }
                if (currentKenhPhong == 5) {
                    shoots1Channel = pencil1Signal[1];
                    shoots2Channel = pencil2Signal[1];
                }
                if (currentKenhPhong == 9) {
                    shoots1Channel = pencil1Signal[2];
                    shoots2Channel = pencil2Signal[2];
                }
                if (currentKenhPhong == 13) {
                    shoots1Channel = pencil1Signal[3];
                    shoots2Channel = pencil2Signal[3];
                }
                if (currentKenhPhong == 17) {
                    shoots1Channel = pencil1Signal[4];
                    shoots2Channel = pencil2Signal[4];
                }
                if (currentKenhPhong == 21) {
                    shoots1Channel = pencil1Signal[5];
                    shoots2Channel = pencil2Signal[5];
                }

                console.log(currentKenhPhong);
                console.log(shoots1Channel, shoots2Channel);
            });
        }

        // phong ten lua so ...
        for (var i = 0; i < pencilPhong.length; i++) {
            pencilPhong[i].addEventListener("click", function () {
                var currentPencilPhong = this.value;
                setTimeout(function () {
                    selectKenhPhong[+currentPencilPhong - 1].classList.remove("triangle-solid");
                    selectKenhPhong[+currentPencilPhong - 1].classList.add("triangle-solid-small");
                    selectKenhPhong[+currentPencilPhong - 1].style.animation = "";
                    shoots1Channel.classList.remove("shoots1");
                    shoots1Channel.classList.add("shoots1-solid");
                }, 1000);
                setTimeout(function () {
                    selectKenhPhong[+currentPencilPhong].classList.remove("triangle-solid");
                    selectKenhPhong[+currentPencilPhong].classList.add("triangle-solid-small");
                    selectKenhPhong[+currentPencilPhong].style.animation = "";
                    shoots2Channel.classList.remove("shoots2");
                    shoots2Channel.classList.add("shoots2-solid");
                }, 3000);
            });
        }

        document.addEventListener("keydown", (e) => {
            let keyName = e.keyCode === 32 ? "Space" : e.key;
            if (e.keyCode === 16) {
                // selectPencilChannel[0].classList.remove("triangle-solid");
                // selectPencilChannel[0].classList.add("triangle-solid-small");
                selectPencilChannel[0].style.animation = "blink 1s linear infinite";
                selectPencilChannel[1].style.animation = "blink 1s linear infinite";
                selectPencilChannel[2].style.animation = "blink 1s linear infinite";
                selectPencilChannel[3].style.animation = "blink 1s linear infinite";
            }
        });
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
