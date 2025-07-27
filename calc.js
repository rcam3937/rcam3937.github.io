//auto
lowerLedgeValueAuto = 2;
upperLedgeValueAuto = 3;
summitValueAuto = 4;
//telop
lowerLedgeValueTelop = 1;
upperLedgeValueTelop = 2;
summitValueTelop = 3;

function calcLedgePoints() {
    const llAuto = (document.getElementById("ll-auto").value || 0) * lowerLedgeValueAuto;
    const llTelop = (document.getElementById("ll-telop").value || 0) * lowerLedgeValueTelop;

    const ulAuto = (document.getElementById("ul-auto").value || 0) * upperLedgeValueAuto;
    const ulTelop = (document.getElementById("ul-telop").value || 0) * upperLedgeValueTelop;

    const sAuto = (document.getElementById("s-auto").value || 0) * summitValueAuto;
    const sTelop = (document.getElementById("s-telop").value || 0) * summitValueTelop;

    score = llAuto+llTelop+ulAuto+ulTelop+sAuto+sTelop;

    console.log(score);

    const scoreField = document.getElementById("score");
    scoreField.textContent = "Score: " + score;
}