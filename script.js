/* ================================================= */
/* GIFT POPUP */
/* ================================================= */

const giftPopup =
    document.getElementById("giftPopup");


function openGift(giftId) {

    giftPopup.classList.add("active");

    const allGifts =
        document.querySelectorAll(".gift-content");

    allGifts.forEach(function(gift) {
        gift.classList.remove("active");
    });

    const selectedGift =
        document.getElementById(giftId);

    selectedGift.classList.add("active");
}


/* ================================================= */
/* CLOSE GIFT */
/* ================================================= */

function closeGift() {

    giftPopup.classList.remove("active");

}


/* ================================================= */
/* YES — DINNER DATE */
/* ================================================= */

function sayYes() {

    const response =
        document.getElementById("date-response");

    response.innerHTML =
        "I KNEW YOU'D SAY YES 😭❤️<br><br>" +
        "It's a date, pretty boy! 🍝❤️";

    createHearts();

}


/* ================================================= */
/* NO — DRAMATIC RESPONSE */
/* ================================================= */

function sayNo() {

    const response =
        document.getElementById("date-response");

    response.innerHTML =
        "EXCUSE ME?! 😭<br>" +
        "Try that answer again.";

}


/* ================================================= */
/* HEART ANIMATION */
/* ================================================= */

function createHearts() {

    for (let i = 0; i < 25; i++) {

        const heart =
            document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position = "fixed";

        heart.style.left =
            Math.random() * 100 + "%";

        heart.style.top = "100%";

        heart.style.fontSize =
            Math.random() * 25 + 15 + "px";

        heart.style.zIndex = "1000";

        heart.style.pointerEvents = "none";


        document.body.appendChild(heart);


        heart.animate(
            [
                {
                    transform:
                        "translateY(0) rotate(0deg)",
                    opacity: 1
                },

                {
                    transform:
                        "translateY(-100vh) rotate(360deg)",
                    opacity: 0
                }
            ],

            {
                duration:
                    Math.random() * 2000 + 2000,

                easing: "ease-out"
            }
        );


        setTimeout(function() {

            heart.remove();

        }, 4000);

    }

}


/* ================================================= */
/* SPOTIFY QR CODES */
/* ================================================= */

if (document.getElementById("qrMusic1")) {


    /* QR 1 — AARZU */

    new QRCode(
        document.getElementById("qrMusic1"),
        {
            text:
                "https://open.spotify.com/track/5JNA2orn7dCoDdjOWcFRTW",

            width: 90,

            height: 90
        }
    );


    /* QR 2 — LIFE OF RAM */

    new QRCode(
        document.getElementById("qrMusic2"),
        {
            text:
                 "https://open.spotify.com/track/0v9EKb1ochmdHlFFmdT7Yo?si=Y7G2vZ8fQpqdHagg5x8Uhw&utm_source=copy-link",


            width: 90,

            height: 90
        }
    );


    /* QR 3 — UDI UDI */

    new QRCode(
        document.getElementById("qrMusic3"),
        {
            text:
                "https://open.spotify.com/track/4ROldgaRDDAI2VP8rWkjat",


            width: 90,

            height: 90
        }
    );

}