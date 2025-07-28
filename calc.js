//Auto
lowerLedgeValueAuto = 2;
upperLedgeValueAuto = 3;
summitValueAuto = 4;
traverseAutoValue = 5;
//Telop
lowerLedgeValueTelop = 1;
upperLedgeValueTelop = 2;
summitValueTelop = 3;
lowerTraverseVaue = 5;
upperTraverseValue = 10;
hangingTraverseValue = 10;

penaltiesValue = -3

function calcLedgePoints() {
    llTotal = 0;
    const llAuto = (document.getElementById("ll-auto").value || 0) * lowerLedgeValueAuto;
    const llTelop = (document.getElementById("ll-telop").value || 0) * lowerLedgeValueTelop;
    const llBonus = document.getElementById("ll-true").checked;
    console.log(llBonus);
    if(llBonus) {
        llTotal = (llAuto + llTelop) * 2;
    } else {
        llTotal = llAuto + llTelop;
    }

    ulTotal = 0;
    const ulAuto = (document.getElementById("ul-auto").value || 0) * upperLedgeValueAuto;
    const ulTelop = (document.getElementById("ul-telop").value || 0) * upperLedgeValueTelop;
    const ulBonus = document.getElementById("ul-true").checked;
    console.log(ulBonus);
    if(ulBonus) {
        ulTotal = (ulAuto + ulTelop) * 2;
    } else {
        ulTotal = ulAuto + ulTelop;
    }

    sTotal = 0;
    const sAuto = (document.getElementById("s-auto").value || 0) * summitValueAuto;
    const sTelop = (document.getElementById("s-telop").value || 0) * summitValueTelop;
    const sBonus = document.getElementById("s-true");
    if(sBonus) {
        sTotal = (sAuto + sTelop) * 2;
    } else {
        sTotal = sAuto + sTelop;
    }

    const score = llTotal + ulTotal + sTotal;

    console.log(score);

    return score;
}

function calcTraversePoints() {
    score = 0;

    const traverseAuto = document.getElementById("t-auto-true").checked;
    const traverseTelop = document.getElementById("t-telop-true").checked;
    const upperTraverse = document.getElementById("upper-telop-true").checked;
    const hanging = document.getElementById("hanging-telop-true").checked;

    if(traverseAuto) {
        score = score + lowerTraverseValue;
    }
    if(traverseTelop) {
        score = score + lowerTraverseVaue;
    }
    if(upperTraverse) {
        score = score + upperTraverseValue;
    }
    if(hanging) {
        score = score + hangingTraverseValue;
    }


    return score;
}

function calcPenalties() {
    const penalties = (document.getElementById("amount").value || 0) * (-3);

    console.log("penalties:" + penalties);

    return penalties
}

function calcTotalPoints() {
    total = calcLedgePoints() + calcTraversePoints() + calcPenalties();
    console.log(total);

    const scoreField = document.getElementById("score");
    scoreField.textContent = "Score: " + total;
    
    return total;
}
