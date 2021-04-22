var kérdések;
var aktuálisKérdésSorszáma = 0;

function letöltés() {
    fetch('questions.json')
        .then(response => response.json())
        .then(data => letöltésBefejeződött(data));
}

function letöltésBefejeződött(d) {
    console.log("Sikeres letöltés")
    console.log(d)
    kérdések = d;
    kérdésMegjelenítés(0);
}

var kérdésMegjelenítés = function (kérdésSzáma) {

    let kérdés_szöveg = document.getElementById("kérdés_szöveg");
    let kép = document.getElementById("kép1");
    let válasz1 = document.getElementById("válasz1");
    let válasz2 = document.getElementById("válasz2");
    let válasz3 = document.getElementById("válasz3");

    kérdés_szöveg.innerHTML = kérdések[kérdésSzáma].questionText

    if (kérdések[kérdésSzáma].image != "") {
        kép.src = "https://szoft1.comeback.hu/hajo/" + kérdések[kérdésSzáma].image;
    }
    else {
        kép.src = "";
    }

    válasz1.innerText = kérdések[kérdésSzáma].answer1
    válasz2.innerText = kérdések[kérdésSzáma].answer2
    válasz3.innerText = kérdések[kérdésSzáma].answer3
}


window.onload = () => {

    letöltés();

    document.getElementById("vissza").onclick = () => {

        document.getElementById("válasz1").style.backgroundColor = "#f9f7f7";
        document.getElementById("válasz2").style.backgroundColor = "#f9f7f7";
        document.getElementById("válasz3").style.backgroundColor = "#f9f7f7";

        document.getElementById("válasz1").style.pointerEvents = 'auto';
        document.getElementById("válasz2").style.pointerEvents = 'auto';
        document.getElementById("válasz3").style.pointerEvents = 'auto';

        if (aktuálisKérdésSorszáma == 0) {
            aktuálisKérdésSorszáma = kérdések.length - 1
            kérdésMegjelenítés(aktuálisKérdésSorszáma);
        }
        else {
            kérdésMegjelenítés(--aktuálisKérdésSorszáma);
        }

    }

    document.getElementById("előre").onclick = () => {

        document.getElementById("válasz1").style.backgroundColor = "#f9f7f7";
        document.getElementById("válasz2").style.backgroundColor = "#f9f7f7";
        document.getElementById("válasz3").style.backgroundColor = "#f9f7f7";

        document.getElementById("válasz1").style.pointerEvents = 'auto';
        document.getElementById("válasz2").style.pointerEvents = 'auto';
        document.getElementById("válasz3").style.pointerEvents = 'auto';

        if (aktuálisKérdésSorszáma == kérdések.length - 1) {
            aktuálisKérdésSorszáma = 0;
            kérdésMegjelenítés(aktuálisKérdésSorszáma);
        }
        else {
            kérdésMegjelenítés(++aktuálisKérdésSorszáma);
        }

    }


    document.getElementById("válasz1").onclick = () => {

        if (kérdések[aktuálisKérdésSorszáma].correctAnswer == 1) {
            document.getElementById("válasz1").style.background = "darkgreen";
        }
        else {
            document.getElementById("válasz1").style.background = "lightcoral";
            document.getElementById("válasz" + kérdések[aktuálisKérdésSorszáma].correctAnswer).style.background = "darkgreen";
        }

        document.getElementById("válasz1").style.pointerEvents = 'none';
        document.getElementById("válasz2").style.pointerEvents = 'none';
        document.getElementById("válasz3").style.pointerEvents = 'none';

    }

    document.getElementById("válasz2").onclick = () => {

        if (kérdések[aktuálisKérdésSorszáma].correctAnswer == 2) {
            document.getElementById("válasz2").style.background = "darkgreen";
        }
        else {
            document.getElementById("válasz2").style.background = "lightcoral";
            document.getElementById("válasz" + kérdések[aktuálisKérdésSorszáma].correctAnswer).style.background = "darkgreen";
        }

        document.getElementById("válasz1").style.pointerEvents = 'none';
        document.getElementById("válasz2").style.pointerEvents = 'none';
        document.getElementById("válasz3").style.pointerEvents = 'none';
    }

    document.getElementById("válasz3").onclick = () => {

        if (kérdések[aktuálisKérdésSorszáma].correctAnswer == 3) {
            document.getElementById("válasz3").style.background = "darkgreen";
        }
        else {
            document.getElementById("válasz3").style.background = "lightcoral";
            document.getElementById("válasz" + kérdések[aktuálisKérdésSorszáma].correctAnswer).style.background = "darkgreen";
        }

        document.getElementById("válasz1").style.pointerEvents = 'none';
        document.getElementById("válasz2").style.pointerEvents = 'none';
        document.getElementById("válasz3").style.pointerEvents = 'none';
    }
}
