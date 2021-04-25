var kérdések;
var aktuálisKérdésSorszáma = 0;

//function letöltés() {
//    //fetch('questions.json')
//    fetch('/questions/1')
//        .then(response => response.json())
//        //.then(data => letöltésBefejeződött(data));
//        .then(data => kérdésMegjelenítés(data))
//}

//function letöltésBefejeződött(d) {
//    console.log("Sikeres letöltés")
//    console.log(d)
//    kérdések = d;
//    kérdésMegjelenítés(0);
//}

function kérdésBetöltés(id) {
    fetch(`/questions/${id}`)
        .then(response => {
            if (!response.ok) {
                console.error(`Hibás válasz: ${response.status}`)
            }
            else {
                return response.json()
            }
        })
        .then(data => kérdésMegjelenítés(data));
}

var kérdésMegjelenítés = function (kérdésSzáma) {

    console.log(kérdésSzáma);
    document.getElementById("kérdés_szöveg").innerText = kérdésSzáma.questionText
    document.getElementById(válasz1).innerText = kérdésSzáma.answer1
    document.getElementById(válasz2).innerText = kérdésSzáma.answer2
    document.getElementById(válasz3).innerText = kérdésSzáma.answer3
    document.getElementById("kép").src = "https://szoft1.comeback.hu/hajo/" + kérdés.image;

    var kepDiv = document.getElementById("kép");
    if (kérdésSzáma.image != "") {
        if (kepDiv.style.display == "none") {
            kepDiv.style.display = "block";
        }
        kép.src = "https://szoft1.comeback.hu/hajo/" + kerdes.image;
    }
    else {
        kepDiv.style.display = "none";
    }

    //let kérdés_szöveg = document.getElementById("kérdés_szöveg");
    //let kép = document.getElementById("kép1");
    //let válasz1 = document.getElementById("válasz1");
    //let válasz2 = document.getElementById("válasz2");
    //let válasz3 = document.getElementById("válasz3");

    //kérdés_szöveg.innerHTML = kérdések[kérdésSzáma].questionText

    //if (kérdések[kérdésSzáma].image != "") {
    //    document.getElementById("kép").src = "https://szoft1.comeback.hu/hajo/" + kérdések[kérdésSzáma].image;
    //}
    //else {
    //    kép.src = "";
    //}

    //válasz1.innerText = kérdések[kérdésSzáma].answer1
    //válasz2.innerText = kérdések[kérdésSzáma].answer2
    //válasz3.innerText = kérdések[kérdésSzáma].answer3
}

window.onload = () => {

    console.log("Sikeres betöltés!")
    kérdésBetöltés(aktuálisKérdésSorszáma);

    //var előreLépés = document.getElementById("előre");
    //előreLépés.addEventListener("click", function (){
    //    aktuálisKérdésSorszáma++;
    //    kérdésBetöltés(aktuálisKérdésSorszáma);
    //});

    //var visszaLépés = document.getElementById("vissza");
    //visszaLépés.addEventListener("click", function () {
    //    aktuálisKérdésSorszáma--;
    //    kérdésBetöltés(aktuálisKérdésSorszáma);
    //});

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
            document.getElementById("válasz1").style.background = "lightgreen";
        }
        else {
            document.getElementById("válasz1").style.background = "lightcoral";
            document.getElementById("válasz" + kérdések[aktuálisKérdésSorszáma].correctAnswer).style.background = "lightgreen";
        }

        document.getElementById("válasz1").style.pointerEvents = 'none';
        document.getElementById("válasz2").style.pointerEvents = 'none';
        document.getElementById("válasz3").style.pointerEvents = 'none';

    }

    document.getElementById("válasz2").onclick = () => {

        if (kérdések[aktuálisKérdésSorszáma].correctAnswer == 2) {
            document.getElementById("válasz2").style.background = "lightgreen";
        }
        else {
            document.getElementById("válasz2").style.background = "lightcoral";
            document.getElementById("válasz" + kérdések[aktuálisKérdésSorszáma].correctAnswer).style.background = "lightgreen";
        }

        document.getElementById("válasz1").style.pointerEvents = 'none';
        document.getElementById("válasz2").style.pointerEvents = 'none';
        document.getElementById("válasz3").style.pointerEvents = 'none';
    }

    document.getElementById("válasz3").onclick = () => {

        if (kérdések[aktuálisKérdésSorszáma].correctAnswer == 3) {
            document.getElementById("válasz3").style.background = "lightgreen";
        }
        else {
            document.getElementById("válasz3").style.background = "lightcoral";
            document.getElementById("válasz" + kérdések[aktuálisKérdésSorszáma].correctAnswer).style.background = "lightgreen";
        }

        document.getElementById("válasz1").style.pointerEvents = 'none';
        document.getElementById("válasz2").style.pointerEvents = 'none';
        document.getElementById("válasz3").style.pointerEvents = 'none';
    }
}
