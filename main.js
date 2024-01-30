const $ = document.querySelector(".home");
// header
const selectHearder = $.querySelector(".hearder");
const led2 = selectHearder.querySelectorAll(".hearder-center .led_2");
const cancelChannel = selectHearder.querySelectorAll(".hearder-down-left_btns .btns-circle input");
// const OTMEHA = selectHearder.querySelectorAll(".hearder-down-left_btns .btns-circle input");

// container
const selectContainer = $.querySelector(".container");
const scale = selectContainer.querySelectorAll(".btn-scale input");
const selectChannel = selectContainer.querySelectorAll(".nav-container_right .btns-blue-1 input");
const selectSignal = selectContainer.querySelectorAll(".nav-container_right .btns-blue-2 input");
const checkPencil = selectContainer.querySelectorAll(".nav-footer_center input");
const addPencil = selectContainer.querySelectorAll(".nav-footer_right input");
const kenhPhong = selectContainer.querySelectorAll(".nav-container_left .btns-blue-1 input");
const cancelPencil = selectContainer.querySelectorAll(".nav-footer_left .btns-circle input");

const screen = selectContainer.querySelector(".screen .show-information");
const hide = selectContainer.querySelector(".screen .hide");
const selectedBe = selectContainer.querySelectorAll(".bullets .row-bullet .be");
const selectedCN = selectContainer.querySelectorAll(".bullets .row-bullet .be span");

const pencilBe = [...selectContainer.querySelectorAll(".row-bullet .pencil div")];
const sumPencil = selectContainer.querySelectorAll(".sum-bullet .pencil-notice h3");

const noticePencil = [...selectContainer.querySelectorAll(".row-bullet .pencil span")];

const pencilChannel = selectContainer.querySelectorAll(".row-channel .channel div");
const noticeChannel = selectContainer.querySelectorAll(".row-channel .channel span");

const signal = selectContainer.querySelectorAll(".grid-signal .row-signal");
const typeTarget = selectContainer.querySelectorAll(".grid-signal .row-signal .signal h4");
const dashTarget = selectContainer.querySelectorAll(".grid-signal .row-signal .signal .dash");
const problem = selectContainer.querySelectorAll(".grid-signal .row-signal .signal h3");

const pencil1Signal = selectContainer.querySelectorAll(".grid-signal .row-signal .shoots1");
const pencil2Signal = selectContainer.querySelectorAll(".grid-signal .row-signal .shoots2");
const diemDau = [...selectContainer.querySelectorAll(".grid-signal .point-target .diemdau")];
const gapTL1 = selectContainer.querySelectorAll(".grid-signal .point-target .gap-tenlua1");
const gapTL2 = [...selectContainer.querySelectorAll(".grid-signal .point-target .gap-tenlua2")];

// footer
const selectFooter = $.querySelector(".footer");
const selectBtnPower = selectFooter.querySelector(".footer-below .power input");
const be = selectFooter.querySelectorAll(".range-btns .btns-white input");
const shootingMode = selectFooter.querySelectorAll(".footer-below_left .shooting-mode input");
const recognition = selectFooter.querySelectorAll(".footer-below_right .recognition input");
const ktcnBe = selectFooter.querySelectorAll(".footer-above_left .ktcn-be");
const pencilPhong = selectFooter.querySelectorAll(".footer-below .array-push .btns-red-2 input");

// console.log(selectedCN);

const app = {
    handleEvents: function () {
        const _this = this;
        let currentBe;
        let selectBe = [];
        let selectNotive = [];
        let currentChannel = 0;
        let currentKenhPhong = 0;
        let currentSignal = 0;
        let selectPencilChannel = [];
        let selectNotiveChannel = [];
        let selectNotivePhong = [];
        let selectKenhPhong = [];
        let shoots1Channel;
        let shoots2Channel;
        let currentCancelChannel;
        let currentCancelPencil;
        let timer_on = 0;
        let quaso;
        let channel = 0;
        let channelPhong = 0;
        let kenh1 = [, , , ,];
        let kenh2 = [, , , ,];
        let kenh3 = [, , , ,];
        let kenh4 = [, , , ,];
        let kenh5 = [, , , ,];
        let kenh6 = [, , , ,];
        let kenh = [0, kenh1, kenh2, kenh3, kenh4, kenh5, kenh6];
        let selectCN;

        function countdown(notive1, notive2) {
            timer_on = 1;
            if (timer_on == 1) {
                if (notive1.textContent == "4") {
                    notive1.textContent = "4";
                    notive2.textContent = "4";
                    setTimeout(function () {
                        notive1.textContent = "3";
                        notive2.textContent = "3";
                    }, 5000);

                    setTimeout(function () {
                        notive1.textContent = "2";
                        notive2.textContent = "2";
                    }, 180000);

                    setTimeout(function () {
                        notive1.textContent = "1";
                        notive2.textContent = "1";
                    }, 270000);
                    setTimeout(function () {
                        notive1.textContent = "";
                        notive2.textContent = "";
                    }, 350000);
                }
                if (notive1.textContent == "3") {
                    setTimeout(function () {
                        notive1.textContent = "2";
                        notive2.textContent = "2";
                    }, 150000);

                    setTimeout(function () {
                        notive1.textContent = "1";
                        notive2.textContent = "1";
                    }, 270000);

                    setTimeout(function () {
                        notive1.textContent = "";
                        notive2.textContent = "";
                    }, 350000);
                }
                if (notive1.textContent == "2") {
                    setTimeout(function () {
                        notive1.textContent = "1";
                        notive2.textContent = "1";
                    }, 50000);
                    setTimeout(function () {
                        notive1.textContent = "";
                        notive2.textContent = "";
                    }, 350000);
                }
            }
        }

        function stopCount() {
            clearTimeout(countdown);
            timer_on = 0;
        }

        // Xử lý khi click play
        // Handle when click play
        selectBtnPower.onclick = function () {
            // console.log(scale[0]);
            setTimeout(power, 2000);
            function power() {
                led2[0].classList.add("active");
                scale[0].checked = true;
                selectChannel[0].checked = true;
                currentChannel = 1;
                channel = 1;
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
                selectBtnPower.checked = false;
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
                currentBe = this.value;

                valueBe = [+currentBe - 1, +currentBe + 11, +currentBe + 23, +currentBe + 35];

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
                        currentPencil.style.animation = "blink 2s linear infinite";
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
                        }, 15000);

                        setTimeout(function () {
                            currentNoticePencil.textContent = "3";
                        }, 90000);

                        setTimeout(function () {
                            currentNoticePencil.textContent = "2";
                        }, 180000);

                        setTimeout(function () {
                            currentNoticePencil.textContent = "1";
                        }, 270000);
                        setTimeout(function () {
                            currentNoticePencil.textContent = "";
                        }, 350000);
                    }
                }
                // console.log(currentNoticePencil);
            );
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
                if (currentChannel === 1) {
                    channel = 1;
                }
                if (currentChannel === "5") {
                    channel = 2;
                }
                if (currentChannel === "9") {
                    channel = 3;
                }
                if (currentChannel === "13") {
                    channel = 4;
                }
                if (currentChannel === "17") {
                    channel = 5;
                }
                if (currentChannel === "21") {
                    channel = 6;
                }
            });
        }

        // chi thi muc tieu
        for (var a = 0; a < addPencil.length; a++) {
            addPencil[a].addEventListener("click", function () {
                if (selectBe == 0 || currentChannel == 0) {
                    console.log("Chưa chọn bệ");
                } else {
                    var currentPencil = selectBe[+this.value - 1];
                    quaso = valueBe[+this.value - 1];
                    console.log(channel, currentChannel);
                    if (
                        selectPencilChannel[0].style.display == "block" &&
                        selectPencilChannel[1].style.display == "block" &&
                        selectPencilChannel[2].style.display == "block" &&
                        selectPencilChannel[3].style.display == !"block"
                    ) {
                        selectPencilChannel[3].style.display = "block";
                        selectNotiveChannel[3].textContent = noticePencil[quaso].textContent;
                        selectPencilChannel[3].classList = pencilBe[quaso].classList;
                        kenh[channel][3] = quaso;
                        countdown(selectNotiveChannel[3], noticePencil[quaso]);
                    }
                    if (
                        selectPencilChannel[0].style.display == "block" &&
                        selectPencilChannel[1].style.display == "block" &&
                        selectPencilChannel[2].style.display == !"block" &&
                        selectPencilChannel[3].style.display == !"block"
                    ) {
                        selectPencilChannel[2].style.display = "block";
                        selectNotiveChannel[2].textContent = noticePencil[quaso].textContent;
                        selectPencilChannel[2].classList = pencilBe[quaso].classList;
                        kenh[channel][2] = quaso;
                        countdown(selectNotiveChannel[2], noticePencil[quaso]);
                    }
                    if (
                        selectPencilChannel[0].style.display == "block" &&
                        selectPencilChannel[1].style.display == !"block" &&
                        selectPencilChannel[2].style.display == !"block" &&
                        selectPencilChannel[3].style.display == !"block"
                    ) {
                        selectPencilChannel[1].style.display = "block";
                        selectNotiveChannel[1].textContent = noticePencil[quaso].textContent;
                        selectPencilChannel[1].classList = pencilBe[quaso].classList;
                        kenh[channel][1] = quaso;
                        countdown(selectNotiveChannel[1], noticePencil[quaso]);
                    }
                    if (
                        selectPencilChannel[0].style.display == !"block" &&
                        selectPencilChannel[1].style.display == !"block" &&
                        selectPencilChannel[2].style.display == !"block" &&
                        selectPencilChannel[3].style.display == !"block"
                    ) {
                        selectPencilChannel[0].style.display = "block";
                        selectNotiveChannel[0].textContent = noticePencil[quaso].textContent;
                        selectPencilChannel[0].classList = pencilBe[quaso].classList;
                        kenh[channel][0] = quaso;
                        countdown(selectNotiveChannel[0], noticePencil[quaso]);
                    } else {
                        // selectNotiveChannel[0].textContent = currentNoticePencil.textContent;
                        // selectPencilChannel[0].classList = currentPencil.classList;
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
            addPencil[a].checked = false;
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
                selectNotivePhong = [
                    noticeChannel[+currentKenhPhong - 1],
                    noticeChannel[+currentKenhPhong],
                    noticeChannel[+currentKenhPhong + 1],
                    noticeChannel[+currentKenhPhong + 2],
                ];
                if (currentKenhPhong == 1) {
                    shoots1Channel = pencil1Signal[0];
                    shoots2Channel = pencil2Signal[0];
                    channelPhong = 1;
                }
                if (currentKenhPhong == 5) {
                    shoots1Channel = pencil1Signal[1];
                    shoots2Channel = pencil2Signal[1];
                    channelPhong = 2;
                }
                if (currentKenhPhong == 9) {
                    shoots1Channel = pencil1Signal[2];
                    shoots2Channel = pencil2Signal[2];
                    channelPhong = 3;
                }
                if (currentKenhPhong == 13) {
                    shoots1Channel = pencil1Signal[3];
                    shoots2Channel = pencil2Signal[3];
                    channelPhong = 4;
                }
                if (currentKenhPhong == 17) {
                    shoots1Channel = pencil1Signal[4];
                    shoots2Channel = pencil2Signal[4];
                    channelPhong = 5;
                }
                if (currentKenhPhong == 21) {
                    shoots1Channel = pencil1Signal[5];
                    shoots2Channel = pencil2Signal[5];
                    channelPhong = 6;
                }

                console.log(currentKenhPhong);
                console.log(shoots1Channel, shoots2Channel);
            });
        }

        // phong ten lua so ...
        for (var i = 0; i < pencilPhong.length; i++) {
            pencilPhong[i].addEventListener("click", function () {
                if (channelPhong === 0 || currentSignal === 0) {
                    console.log(currentKenhPhong === 0, currentSignal === 0);
                } else {
                    var currentPencilPhong = this.value;
                    stopCount();
                    setTimeout(function () {
                        selectKenhPhong[+currentPencilPhong - 1].classList.remove("triangle-solid");
                        selectKenhPhong[+currentPencilPhong - 1].classList.add(
                            "triangle-solid-small"
                        );
                        selectKenhPhong[+currentPencilPhong - 1].style.animation = "";
                        selectNotivePhong[+currentPencilPhong - 1].textContent = "";
                        selectNotivePhong[+currentPencilPhong - 1].style.display = "none";
                        pencilBe[kenh[channelPhong][0]].classList.remove("triangle-solid-small");
                        pencilBe[kenh[channelPhong][0]].classList.add("triangle");
                        pencilBe[kenh[channelPhong][0]].style.display = "none";
                        noticePencil[kenh[channelPhong][0]].style.display = "none";
                        noticePencil[kenh[channelPhong][0]].textContent = "";
                        shoots1Channel.classList.remove("shoots1");
                        shoots1Channel.classList.add("shoots1-solid");
                        diemDau[channelPhong - 1].style.animation =
                            "animate 20s linear normal forwards";
                    }, 2000);
                    setTimeout(function () {
                        selectKenhPhong[+currentPencilPhong].classList.remove("triangle-solid");
                        selectKenhPhong[+currentPencilPhong].classList.add("triangle-solid-small");
                        selectKenhPhong[+currentPencilPhong].style.animation = "";
                        pencilBe[kenh[channelPhong][1]].style.display = "none";
                        pencilBe[kenh[channelPhong][1]].classList.remove("triangle-solid-small");
                        pencilBe[kenh[channelPhong][1]].classList.add("triangle");
                        noticePencil[kenh[channelPhong][1]].style.display = "none";
                        selectNotivePhong[+currentPencilPhong].textContent = "";
                        selectNotivePhong[+currentPencilPhong].style.display = "none";
                        shoots2Channel.classList.remove("shoots2");
                        shoots2Channel.classList.add("shoots2-solid");
                        stopCount();
                    }, 8000);
                }
            });
        }

        // Bàn phím
        document.addEventListener("keydown", (e) => {
            let keyName = e.keyCode === 32 ? "Space" : e.key;

            // console.log(e.keyCode);
            if (e.keyCode === 16) {
                // selectPencilChannel[0].classList.remove("triangle-solid");
                // selectPencilChannel[0].classList.add("triangle-solid-small");
                selectPencilChannel[0].style.animation = "blink 1s linear infinite";
                selectPencilChannel[1].style.animation = "blink 1s linear infinite";
                selectPencilChannel[2].style.animation = "blink 1s linear infinite";
                selectPencilChannel[3].style.animation = "blink 1s linear infinite";
            }

            // Mở máy
            if (e.keyCode === 27) {
                // selectBtnPower.checked = true;
                setTimeout(power, 2000);
                function power() {
                    led2[0].classList.add("active");
                    scale[0].checked = true;
                    selectChannel[0].checked = true;
                    currentChannel = 1;
                    channel = 1;
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
            }

            // Chọn bệ
            if ((e.keyCode >= 112 && e.keyCode <= 123 && e.keyCode !== 116) || e.keyCode === 145) {
                e.preventDefault();
                // console.log(e.keyCode);
                var currentBe = e.keyCode - 111;
                var currentCN;
                if (e.keyCode === 145) {
                    currentBe = e.keyCode - 134;
                }
                be[currentBe - 1].checked = true;
                valueBe = [+currentBe - 1, +currentBe + 11, +currentBe + 23, +currentBe + 35];

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
                if (currentBe == 1) {
                    currentCN = 1;
                }
                if (currentBe == 2) {
                    currentCN = 5;
                }
                if (currentBe == 3) {
                    currentCN = 9;
                }
                if (currentBe == 4) {
                    currentCN = 13;
                }
                if (currentBe == 5) {
                    currentCN = 17;
                }
                if (currentBe == 6) {
                    currentCN = 21;
                }
                if (currentBe == 7) {
                    currentCN = 25;
                }
                if (currentBe == 8) {
                    currentCN = 29;
                }
                if (currentBe == 9) {
                    currentCN = 33;
                }
                if (currentBe == 10) {
                    currentCN = 37;
                }
                if (currentBe == 11) {
                    currentCN = 41;
                }
                if (currentBe == 12) {
                    currentCN = 45;
                }

                selectCN = [
                    selectedCN[+currentCN - 1],
                    selectedCN[+currentCN],
                    selectedCN[+currentCN + 1],
                    selectedCN[+currentCN + 2],
                ];
                console.log(selectCN);
                for (var j = 0; j < be.length; j++) {
                    be[j].checked === true
                        ? (selectedBe[j].style.background = "rgba(211, 211, 211, 0.3)")
                        : (selectedBe[j].style.background = "var(--primary-color)");
                }
            }

            // Chuẩn bị tên lửa
            if (e.keyCode >= 49 && e.keyCode <= 52) {
                // console.log(e.keyCode);
                if (selectBe == 0) {
                    console.log("Chưa chọn bệ");
                } else {
                    // console.log("Notice so", +this.value);
                    var currentValue = e.keyCode - 48;
                    checkPencil[currentValue - 1].checked = true;
                    var currentPencil = selectBe[currentValue - 1];
                    var currentNoticePencil = selectNotive[currentValue - 1];
                    currentNoticePencil.textContent = "4";
                    currentPencil.style.animation = "blink 2s linear infinite";
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
                    }, 15000);

                    setTimeout(function () {
                        currentNoticePencil.textContent = "3";
                    }, 90000);

                    setTimeout(function () {
                        currentNoticePencil.textContent = "2";
                    }, 180000);

                    setTimeout(function () {
                        currentNoticePencil.textContent = "1";
                    }, 270000);
                    setTimeout(function () {
                        currentNoticePencil.textContent = "";
                    }, 350000);
                }
            }

            // Hủy chuẩn bị tên lửa
            if (e.keyCode === 77 || e.keyCode === 188 || e.keyCode === 190 || e.keyCode === 191) {
                if (selectBe == 0) {
                    console.log("Chưa chọn bệ");
                } else {
                    if (e.keyCode === 77) {
                        currentCancelPencil = 1;
                    }
                    if (e.keyCode === 188) {
                        currentCancelPencil = 2;
                    }
                    if (e.keyCode === 190) {
                        currentCancelPencil = 3;
                    }
                    if (e.keyCode === 191) {
                        currentCancelPencil = 4;
                    }
                    cancelPencil[currentCancelPencil - 1].checked = true;
                    var currentPencil = selectBe[currentCancelPencil - 1];
                    var currentNoticePencil = selectNotive[currentCancelPencil - 1];
                    currentNoticePencil.textContent = "";
                    currentNoticePencil.style.display = "none";
                    currentPencil.style.animation = "";
                    currentPencil.classList.remove("triangle-solid");
                    currentPencil.classList.add("triangle");
                }
            }

            // Chọn kênh
            if (
                e.keyCode === 81 ||
                e.keyCode === 87 ||
                e.keyCode === 69 ||
                e.keyCode === 82 ||
                e.keyCode === 84 ||
                e.keyCode === 89
            ) {
                if (e.keyCode === 81) {
                    currentChannel = 1;
                    channel = 1;
                }
                if (e.keyCode === 87) {
                    currentChannel = 5;
                    channel = 2;
                }
                if (e.keyCode === 69) {
                    currentChannel = 9;
                    channel = 3;
                }
                if (e.keyCode === 82) {
                    currentChannel = 13;
                    channel = 4;
                }
                if (e.keyCode === 84) {
                    currentChannel = 17;
                    channel = 5;
                }
                if (e.keyCode === 89) {
                    currentChannel = 21;
                    channel = 6;
                }

                selectChannel[channel - 1].checked = true;
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
            }

            // Chỉ thị mục tiêu
            if (e.keyCode >= 53 && e.keyCode <= 56) {
                // console.log(e.keyCode);
                if (currentChannel == 0) {
                    console.log("Chưa chọn kênh");
                } else {
                    if (selectBe == 0) {
                        console.log("Chưa chọn bệ");
                    } else {
                        var currentValue = e.keyCode - 52;
                        addPencil[currentValue - 1].checked = true;
                        var currentPencil = selectBe[+currentValue - 1];
                        quaso = valueBe[+currentValue - 1];
                        // console.log(quaso);
                        if (
                            selectPencilChannel[0].style.display == "block" &&
                            selectPencilChannel[1].style.display == "block" &&
                            selectPencilChannel[2].style.display == "block" &&
                            selectPencilChannel[3].style.display == !"block"
                        ) {
                            selectPencilChannel[3].style.display = "block";
                            selectNotiveChannel[3].textContent = noticePencil[quaso].textContent;
                            selectPencilChannel[3].classList = pencilBe[quaso].classList;
                            kenh[channel][3] = quaso;
                            countdown(selectNotiveChannel[3], noticePencil[quaso]);
                        }
                        if (
                            selectPencilChannel[0].style.display == "block" &&
                            selectPencilChannel[1].style.display == "block" &&
                            selectPencilChannel[2].style.display == !"block" &&
                            selectPencilChannel[3].style.display == !"block"
                        ) {
                            selectPencilChannel[2].style.display = "block";
                            selectNotiveChannel[2].textContent = noticePencil[quaso].textContent;
                            selectPencilChannel[2].classList = pencilBe[quaso].classList;
                            kenh[channel][2] = quaso;
                            countdown(selectNotiveChannel[2], noticePencil[quaso]);
                        }
                        if (
                            selectPencilChannel[0].style.display == "block" &&
                            selectPencilChannel[1].style.display == !"block" &&
                            selectPencilChannel[2].style.display == !"block" &&
                            selectPencilChannel[3].style.display == !"block"
                        ) {
                            selectPencilChannel[1].style.display = "block";
                            selectNotiveChannel[1].textContent = noticePencil[quaso].textContent;
                            selectPencilChannel[1].classList = pencilBe[quaso].classList;
                            kenh[channel][1] = quaso;
                            countdown(selectNotiveChannel[1], noticePencil[quaso]);
                        }
                        if (
                            selectPencilChannel[0].style.display == !"block" &&
                            selectPencilChannel[1].style.display == !"block" &&
                            selectPencilChannel[2].style.display == !"block" &&
                            selectPencilChannel[3].style.display == !"block"
                        ) {
                            selectPencilChannel[0].style.display = "block";
                            selectNotiveChannel[0].textContent = noticePencil[quaso].textContent;
                            selectPencilChannel[0].classList = pencilBe[quaso].classList;
                            kenh[channel][0] = quaso;
                            countdown(selectNotiveChannel[0], noticePencil[quaso]);
                        } else {
                            // selectNotiveChannel[0].textContent = currentNoticePencil.textContent;
                            // selectPencilChannel[0].classList = currentPencil.classList;
                        }

                        currentPencil.classList.remove("triangle-solid");
                        currentPencil.classList.add("triangle-solid-small");
                        for (var j = 0; j < be.length; j++) {
                            be[j].checked = false;
                            be[j].checked === true
                                ? (selectedBe[j].style.background = "rgba(211, 211, 211, 0.3)")
                                : (selectedBe[j].style.background = "var(--primary-color)");
                        }
                    }
                }
            }

            // Huy chi thi muc tieu
            if (e.keyCode === 75 || e.keyCode === 76 || e.keyCode === 186 || e.keyCode === 222) {
                if (channel == 0) {
                    alert("Chua chon kenh");
                } else {
                    // console.log(kenh);
                    if (e.keyCode === 75) {
                        currentCancelChannel = 1;
                    }
                    if (e.keyCode === 76) {
                        currentCancelChannel = 2;
                    }
                    if (e.keyCode === 186) {
                        currentCancelChannel = 3;
                    }
                    if (e.keyCode === 222) {
                        currentCancelChannel = 4;
                    }
                    cancelChannel[currentCancelChannel - 1].checked = true;
                    selectPencilChannel[+currentCancelChannel - 1].classList.add("triangle");
                    selectPencilChannel[+currentCancelChannel - 1].style.display = "none";
                    selectNotiveChannel[+currentCancelChannel - 1].textContent = "";
                    selectNotiveChannel[+currentCancelChannel - 1].style.display = "none";
                    pencilBe[kenh[channel][+currentCancelChannel - 1]].classList.remove(
                        "triangle-solid-small"
                    );
                    pencilBe[kenh[channel][+currentCancelChannel - 1]].classList.add(
                        "triangle-solid"
                    );
                    // pencilBe[kenh[currentChannel][+currentCancelChannel - 1]].style.display = "none";
                    // noticePencil[kenh[currentChannel][+currentCancelChannel - 1]].style.display = "none";
                    // noticePencil[kenh[currentChannel][+currentCancelChannel - 1]].textContent = "";
                    kenh[channel][+currentCancelChannel - 1] = null;
                }
            }

            // Tín hiệu kênh
            if (
                e.keyCode === 85 ||
                e.keyCode === 73 ||
                e.keyCode === 79 ||
                e.keyCode === 80 ||
                e.keyCode === 219 ||
                e.keyCode === 221
            ) {
                if (e.keyCode === 85) {
                    currentSignal = 1;
                }
                if (e.keyCode === 73) {
                    currentSignal = 2;
                }
                if (e.keyCode === 79) {
                    currentSignal = 3;
                }
                if (e.keyCode === 80) {
                    currentSignal = 4;
                }
                if (e.keyCode === 219) {
                    currentSignal = 5;
                }
                if (e.keyCode === 221) {
                    currentSignal = 6;
                }

                selectSignal[currentSignal - 1].checked = !selectSignal[currentSignal - 1].checked;
                signal[currentSignal - 1].classList.remove("hide-signal");
                for (var i = 0; i < selectSignal.length; i++) {
                    selectSignal[i].checked === true
                        ? signal[i].classList.remove("hide-signal")
                        : signal[i].classList.add("hide-signal");
                }
            }

            // Chọn kênh phóng
            if (
                e.keyCode === 65 ||
                e.keyCode === 83 ||
                e.keyCode === 68 ||
                e.keyCode === 70 ||
                e.keyCode === 71 ||
                e.keyCode === 72
            ) {
                if (e.keyCode === 65) {
                    currentKenhPhong = 1;
                    channelPhong = 1;
                }
                if (e.keyCode === 83) {
                    currentKenhPhong = 5;
                    channelPhong = 2;
                }
                if (e.keyCode === 68) {
                    currentKenhPhong = 9;
                    channelPhong = 3;
                }
                if (e.keyCode === 70) {
                    currentKenhPhong = 13;
                    channelPhong = 4;
                }
                if (e.keyCode === 71) {
                    currentKenhPhong = 17;
                    channelPhong = 5;
                }
                if (e.keyCode === 72) {
                    currentKenhPhong = 21;
                    channelPhong = 6;
                }

                selectKenhPhong = [
                    pencilChannel[+currentKenhPhong - 1],
                    pencilChannel[+currentKenhPhong],
                    pencilChannel[+currentKenhPhong + 1],
                    pencilChannel[+currentKenhPhong + 2],
                ];
                selectNotivePhong = [
                    noticeChannel[+currentKenhPhong - 1],
                    noticeChannel[+currentKenhPhong],
                    noticeChannel[+currentKenhPhong + 1],
                    noticeChannel[+currentKenhPhong + 2],
                ];
                kenhPhong[channelPhong - 1].checked = true;
                shoots1Channel = pencil1Signal[channelPhong - 1];
                shoots2Channel = pencil2Signal[channelPhong - 1];
            }

            // Phóng tên lửa số ...
            if (e.keyCode === 90 || e.keyCode === 88 || e.keyCode === 67 || e.keyCode === 86) {
                if (currentSignal == 0) {
                    alert("chua chon");
                } else {
                    console.log(channelPhong);
                    var currentPencilPhong;
                    if (e.keyCode === 90) {
                        currentPencilPhong = 1;
                    }
                    if (e.keyCode === 88) {
                        currentPencilPhong = 2;
                    }
                    if (e.keyCode === 67) {
                        currentPencilPhong = 3;
                    }
                    if (e.keyCode === 86) {
                        currentPencilPhong = 4;
                    }
                    pencilPhong[currentPencilPhong - 1].checked = true;
                    console.log(kenh[channelPhong]);
                    stopCount();
                    setTimeout(function () {
                        selectKenhPhong[+currentPencilPhong - 1].classList.remove("triangle-solid");
                        selectKenhPhong[+currentPencilPhong - 1].classList.add(
                            "triangle-solid-small"
                        );
                        kenhPhong[channelPhong - 1].checked = false;
                        pencilPhong[currentPencilPhong - 1].checked = false;
                        selectKenhPhong[+currentPencilPhong - 1].style.animation = "";

                        selectNotivePhong[+currentPencilPhong - 1].textContent = "";
                        selectNotivePhong[+currentPencilPhong - 1].style.display = "none";
                        pencilBe[kenh[channelPhong][0]].classList.remove("triangle-solid-small");
                        pencilBe[kenh[channelPhong][0]].classList.add("triangle");
                        pencilBe[kenh[channelPhong][0]].style.display = "none";
                        noticePencil[kenh[channelPhong][0]].style.display = "none";
                        noticePencil[kenh[channelPhong][0]].textContent = "";
                        gapTL1[channelPhong - 1].style.display = "block";
                        shoots1Channel.classList.remove("shoots1");
                        shoots1Channel.classList.add("shoots1-solid");
                        sumPencil[0].innerText = "47";
                        diemDau[channelPhong - 1].style.animation =
                            "animate 25s linear normal forwards";
                        setTimeout(function () {
                            gapTL1[channelPhong - 1].style.display = "none";
                            pencilBe[kenh[channelPhong][0]].style.display = "block";
                            // noticePencil[kenh[channelPhong][0]].style.display = "block";
                            selectKenhPhong[+currentPencilPhong - 1].classList.remove(
                                "triangle-solid-small"
                            );
                            selectKenhPhong[+currentPencilPhong - 1].classList.add("triangle");
                            selectKenhPhong[+currentPencilPhong - 1].style.display = "none";
                            shoots1Channel.classList.remove("shoots1-solid");
                            shoots1Channel.classList.add("shoots1");
                            sumPencil[0].innerText = "47";
                            diemDau[channelPhong - 1].style.animation =
                                "animate2 5s linear normal forwards";
                            setTimeout(function () {
                                pencilBe[kenh[channelPhong][1]].style.display = "block";
                                gapTL2[channelPhong - 1].style.display = "none";
                                // noticePencil[kenh[channelPhong][1]].style.display = "block";
                                selectKenhPhong[+currentPencilPhong].classList.remove(
                                    "triangle-solid-small"
                                );
                                selectKenhPhong[+currentPencilPhong].classList.add("triangle");
                                selectKenhPhong[+currentPencilPhong].style.display = "none";
                                shoots2Channel.classList.remove("shoots2-solid");
                                shoots2Channel.classList.add("shoots2");
                                sumPencil[0].innerText = "48";
                            }, 5500);
                        }, 25500);
                    }, 2000);
                    setTimeout(function () {
                        stopCount();
                        selectKenhPhong[+currentPencilPhong].classList.remove("triangle-solid");
                        selectKenhPhong[+currentPencilPhong].classList.add("triangle-solid-small");
                        selectKenhPhong[+currentPencilPhong].style.animation = "";
                        pencilBe[kenh[channelPhong][1]].style.display = "none";
                        pencilBe[kenh[channelPhong][1]].classList.remove("triangle-solid-small");
                        pencilBe[kenh[channelPhong][1]].classList.add("triangle");
                        noticePencil[kenh[channelPhong][1]].style.display = "none";
                        selectNotivePhong[+currentPencilPhong].textContent = "";
                        selectNotivePhong[+currentPencilPhong].style.display = "none";
                        shoots2Channel.classList.remove("shoots2");
                        shoots2Channel.classList.add("shoots2-solid");
                        gapTL2[channelPhong - 1].style.display = "block";
                        sumPencil[0].innerText = "46";
                    }, 8000);
                }
            }

            // Phếch số liệu
            if (e.keyCode === 192) {
                if (channel === 0) {
                    console.log("Chua chon keenh");
                } else {
                    typeTarget[channel - 1].innerText = "Г";
                }
            }

            if (e.keyCode === 74) {
                if (channel === 0) {
                    console.log("Chua chon keenh");
                } else {
                    typeTarget[channel - 1].innerText = "П";
                }
            }

            if (e.keyCode === 78) {
                if (channel === 0) {
                    console.log("Chua chon keenh");
                } else {
                    typeTarget[channel - 1].innerText = "Б";
                }
            }

            if (e.keyCode === 66) {
                if (channel === 0) {
                    console.log("Chua chon keenh");
                } else {
                    typeTarget[channel - 1].innerText = "A";
                }
            }

            if (e.keyCode === 189) {
                if (channel === 0) {
                    console.log("Chua chon keenh");
                } else {
                    dashTarget[channel - 1].style.top = "18px";
                }
            }

            if (e.keyCode === 187) {
                if (channel === 0) {
                    console.log("Chua chon keenh");
                } else {
                    dashTarget[channel - 1].style.top = "10px";
                }
            }

            if (e.keyCode === 48) {
                if (channel === 0) {
                    console.log("Chua chon keenh");
                } else {
                    dashTarget[channel - 1].style.top = "14px";
                }
            }

            if (e.keyCode === 57) {
                if (channel === 0) {
                    console.log("Chua chon keenh");
                } else {
                    problem[channel - 1].style.display = "none";
                }
            }

            if (e.keyCode === 13) {
                led2[0].classList.add("active");
                scale[0].checked = true;
                selectChannel[0].checked = true;
                currentChannel = 1;
                channel = 1;
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

            if (e.keyCode >= 37 && e.keyCode <= 40) {
                if (selectBe == 0) {
                    console.log("Chưa chọn bệ");
                } else {
                }
            }
        });

        // Nhả phím
        document.addEventListener("keyup", (e) => {
            let keyName = e.keyCode === 32 ? "Space" : e.key;
            if (e.keyCode === 16) {
            }

            // Mở máy
            if (e.keyCode === 27) {
                selectBtnPower.checked = false;
            }

            // Chọn bệ phóng
            if ((e.keyCode > 111 && e.keyCode < 124) || e.keyCode === 145) {
                var currentBe = e.keyCode - 111;
                if (e.keyCode === 145) {
                    currentBe = e.keyCode - 134;
                }
                be[currentBe - 1].checked = false;
                for (var j = 0; j < be.length; j++) {
                    be[j].checked === true
                        ? (selectedBe[j].style.background = "rgba(211, 211, 211, 0.3)")
                        : (selectedBe[j].style.background = "var(--primary-color)");
                }
            }

            // Chuẩn bị tên lửa
            if (e.keyCode >= 49 && e.keyCode <= 52) {
                var currentValue = e.keyCode - 48;
                checkPencil[currentValue - 1].checked = false;
            }

            // Hủy chuẩn bị tên lửa
            if (e.keyCode === 77 || e.keyCode === 188 || e.keyCode === 190 || e.keyCode === 191) {
                if (selectBe == 0) {
                    console.log("Chưa chọn bệ");
                } else {
                    if (e.keyCode === 77) {
                        currentCancelPencil = 1;
                    }
                    if (e.keyCode === 188) {
                        currentCancelPencil = 2;
                    }
                    if (e.keyCode === 190) {
                        currentCancelPencil = 3;
                    }
                    if (e.keyCode === 191) {
                        currentCancelPencil = 4;
                    }
                    cancelPencil[currentCancelPencil - 1].checked = false;
                }
            }

            // Chỉ thị mục tiêu
            if (e.keyCode >= 53 && e.keyCode <= 56) {
                var currentValue = e.keyCode - 52;
                addPencil[currentValue - 1].checked = false;
            }

            // Huy chi thi muc tieu
            if (e.keyCode === 75 || e.keyCode === 76 || e.keyCode === 186 || e.keyCode === 222) {
                if (channel == 0) {
                    alert("Chua chon kenh");
                } else {
                    // console.log(kenh);
                    if (e.keyCode === 75) {
                        currentCancelChannel = 1;
                    }
                    if (e.keyCode === 76) {
                        currentCancelChannel = 2;
                    }
                    if (e.keyCode === 186) {
                        currentCancelChannel = 3;
                    }
                    if (e.keyCode === 222) {
                        currentCancelChannel = 4;
                    }
                    cancelChannel[currentCancelChannel - 1].checked = false;
                }
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
