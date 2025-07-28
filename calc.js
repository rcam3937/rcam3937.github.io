//Auto
lowerLedgeValueAuto = 2;
upperLedgeValueAuto = 3;
summitValueAuto = 4;
//Telop
lowerLedgeValueTelop = 1;
upperLedgeValueTelop = 2;
summitValueTelop = 3;

penaltiesValue = -3

function calcLedgePoints() {
    const llTotal = 0;
    const llAuto = (document.getElementById("ll-auto").value || 0) * lowerLedgeValueAuto;
    const llTelop = (document.getElementById("ll-telop").value || 0) * lowerLedgeValueTelop;
    const llBonus = document.getElementById("ll-true").checked;
    console.log(llBonus);
    if(llBonus) {
        llTotal = (llAuto + llTelop) * 2;
    } else {
        llTotal = llAuto + llTelop;
    }

    const ulTotal = 0;
    const ulAuto = (document.getElementById("ul-auto").value || 0) * upperLedgeValueAuto;
    const ulTelop = (document.getElementById("ul-telop").value || 0) * upperLedgeValueTelop;
    const ulBonus = document.getElementById("ul-true").checked;
    console.log(ulBonus);
    if(ulBonus) {
        ulTotal = (ulAuto + ulTelop) * 2;
    } else {
        ulTotal = ulAuto + ulTelop;
    }

    const sTotal = 0;
    const sAuto = (document.getElementById("s-auto").value || 0) * summitValueAuto;
    const sTelop = (document.getElementById("s-telop").value || 0) * summitValueTelop;
    const sBonus = document.getElementById("s-true");
    if(sBonus) {
        sTotal = (slAuto + sTelop) * 2;
    } else {
        sTotal = sAuto + sTelop;
    }

    const score = llTotal + ulTotal + sTotal;

    console.log(score);

    //const scoreField = document.getElementById("score");
    //scoreField.textContent = "Score: " + score;

    return score;
}

function calcTraversePoints() {

}

function calcPenalties() {
    const penalties = (document.getElementById("amount").value || 0) * (-3);

    console.log("penalties:" + penalties)

    return penalties
}

function calcTotalPoints() {
    return calcLedgePoints() + calcTraversePoints() + calcPenalties();
}