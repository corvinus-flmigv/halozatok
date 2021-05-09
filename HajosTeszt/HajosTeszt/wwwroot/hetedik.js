//var jóVálasz; //az aktuálisan megjelenített kérdéshez tartozó helyes válasz száma
//var questionId = 1; //az éppen feltett kérdés száma

////function letöltés() {
////    //fetch('questions.json')
////    fetch('/questions/1')
////        .then(response => response.json())
////        //.then(data => letöltésBefejeződött(data));
////        .then(data => kérdésMegjelenítés(data))
////}

////function letöltésBefejeződött(d) {
////    console.log("Sikeres letöltés")
////    console.log(d)
////    kérdések = d;
////    kérdésMegjelenítés(0);
////}

//function kérdésBetöltés(id) {
//    fetch(`/questions/${id}`)
//        .then(response => {
//            if (!response.ok) {
//                console.error(`Hibás válasz: ${response.status}`)
//            }
//            else {
//                kérdésMegjelenítés(response.json())
//            }
//        })
//        //.then(data => kérdésMegjelenítés(data));
//}


//function kérdésMegjelenítés(kérdés) {
//    if (!kérdés) return; //Ha undefined a kérdés objektum, nincs mit tenni
//    console.log(kérdés);
//    document.getElementById("kérdés_szöveg").innerText = kérdés.questionText
//    document.getElementById("válasz1").innerText = kérdés.answer1
//    document.getElementById("válasz2").innerText = kérdés.answer2
//    document.getElementById("válasz3").innerText = kérdés.answer3
//    jóVálasz = kérdés.correctAnswer;
//    if (kérdés.image) {
//        document.getElementById("kép").src = "https://szoft1.comeback.hu/hajo/" + kérdés.image;
//        document.getElementById("kép").classList.remove("rejtett")
//    }
//    else {
//        document.getElementById("kép").classList.add("rejtett")
//    }
//    //Jó és rossz kérdések jelölésének levétele
//    document.getElementById("válasz1").classList.remove("jó", "rossz");
//    document.getElementById("válasz2").classList.remove("jó", "rossz");
//    document.getElementById("válasz3").classList.remove("jó", "rossz");
//}

////var kérdésMegjelenítés = function (kérdésSzáma) {

////    console.log(kérdésSzáma);
////    document.getElementById("kérdés_szöveg").innerText = kérdésSzáma.questionText
////    document.getElementById(válasz1).innerText = kérdésSzáma.answer1
////    document.getElementById(válasz2).innerText = kérdésSzáma.answer2
////    document.getElementById(válasz3).innerText = kérdésSzáma.answer3
////    document.getElementById("kép").src = "https://szoft1.comeback.hu/hajo/" + kérdés.image;

////    var kepDiv = document.getElementById("kép");
////    if (kérdésSzáma.image != "") {
////        if (kepDiv.style.display == "none") {
////            kepDiv.style.display = "block";
////        }
////        kép.src = "https://szoft1.comeback.hu/hajo/" + kerdes.image;
////    }
////    else {
////        kepDiv.style.display = "none";
////    }

//    //let kérdés_szöveg = document.getElementById("kérdés_szöveg");
//    //let kép = document.getElementById("kép1");
//    //let válasz1 = document.getElementById("válasz1");
//    //let válasz2 = document.getElementById("válasz2");
//    //let válasz3 = document.getElementById("válasz3");

//    //kérdés_szöveg.innerHTML = kérdések[kérdésSzáma].questionText

//    //if (kérdések[kérdésSzáma].image != "") {
//    //    document.getElementById("kép").src = "https://szoft1.comeback.hu/hajo/" + kérdések[kérdésSzáma].image;
//    //}
//    //else {
//    //    kép.src = "";
//    //}

//    //válasz1.innerText = kérdések[kérdésSzáma].answer1
//    //válasz2.innerText = kérdések[kérdésSzáma].answer2
//    //válasz3.innerText = kérdések[kérdésSzáma].answer3
//}

//function választás(n) {
//    if (n != jóVálasz) {
//        document.getElementById(`válasz${n}`).classList.add("rossz");
//        document.getElementById(`válasz${jóVálasz}`).classList.add("jó");
//    }
//    else {
//        document.getElementById(`válasz${jóVálasz}`).classList.add("jó");
//    }
//}

//window.onload = function (e) {

//    console.log("Sikeres betöltés!")
//    document.getElementById("előre").onclick = előre;
//    document.getElementById("vissza").onclick = vissza;
//    kérdésBetöltés(questionId)

//    //var előreLépés = document.getElementById("előre");
//    //előreLépés.addEventListener("click", function (){
//    //    aktuálisKérdésSorszáma++;
//    //    kérdésBetöltés(aktuálisKérdésSorszáma);
//    //});

//    //var visszaLépés = document.getElementById("vissza");
//    //visszaLépés.addEventListener("click", function () {
//    //    aktuálisKérdésSorszáma--;
//    //    kérdésBetöltés(aktuálisKérdésSorszáma);
//    //});

//    document.getElementById("vissza").onclick = () => {

//        document.getElementById("válasz1").style.backgroundColor = "#f9f7f7";
//        document.getElementById("válasz2").style.backgroundColor = "#f9f7f7";
//        document.getElementById("válasz3").style.backgroundColor = "#f9f7f7";

//        document.getElementById("válasz1").style.pointerEvents = 'auto';
//        document.getElementById("válasz2").style.pointerEvents = 'auto';
//        document.getElementById("válasz3").style.pointerEvents = 'auto';

//        if (questionId == 0) {
//            questionId = jóVálasz.length - 1
//            kérdésMegjelenítés(questionId);
//        }
//        else {
//            kérdésMegjelenítés(--questionId);
//        }

//    }

//    document.getElementById("előre").onclick = () => {

//        document.getElementById("válasz1").style.backgroundColor = "#f9f7f7";
//        document.getElementById("válasz2").style.backgroundColor = "#f9f7f7";
//        document.getElementById("válasz3").style.backgroundColor = "#f9f7f7";

//        document.getElementById("válasz1").style.pointerEvents = 'auto';
//        document.getElementById("válasz2").style.pointerEvents = 'auto';
//        document.getElementById("válasz3").style.pointerEvents = 'auto';

//        if (questionId == jóVálasz.length - 1) {
//            questionId = 0;
//            kérdésMegjelenítés(questionId);
//        }
//        else {
//            kérdésMegjelenítés(++questionId);
//        }

//    }


//    document.getElementById("válasz1").onclick = () => {

//        if (jóVálasz[questionId].correctAnswer == 1) {
//            document.getElementById("válasz1").style.background = "lightgreen";
//        }
//        else {
//            document.getElementById("válasz1").style.background = "lightcoral";
//            document.getElementById("válasz" + jóVálasz[questionId].correctAnswer).style.background = "lightgreen";
//        }

//        document.getElementById("válasz1").style.pointerEvents = 'none';
//        document.getElementById("válasz2").style.pointerEvents = 'none';
//        document.getElementById("válasz3").style.pointerEvents = 'none';

//    }

//    document.getElementById("válasz2").onclick = () => {

//        if (jóVálasz[questionId].correctAnswer == 2) {
//            document.getElementById("válasz2").style.background = "lightgreen";
//        }
//        else {
//            document.getElementById("válasz2").style.background = "lightcoral";
//            document.getElementById("válasz" + jóVálasz[questionId].correctAnswer).style.background = "lightgreen";
//        }

//        document.getElementById("válasz1").style.pointerEvents = 'none';
//        document.getElementById("válasz2").style.pointerEvents = 'none';
//        document.getElementById("válasz3").style.pointerEvents = 'none';
//    }

//    document.getElementById("válasz3").onclick = () => {

//        if (jóVálasz[questionId].correctAnswer == 3) {
//            document.getElementById("válasz3").style.background = "lightgreen";
//        }
//        else {
//            document.getElementById("válasz3").style.background = "lightcoral";
//            document.getElementById("válasz" + jóVálasz[questionId].correctAnswer).style.background = "lightgreen";
//        }

//        document.getElementById("válasz1").style.pointerEvents = 'none';
//        document.getElementById("válasz2").style.pointerEvents = 'none';
//        document.getElementById("válasz3").style.pointerEvents = 'none';
//    }
//}

var kérdések;
var kerdID = 1;

window.onload = () => {
    letöltés();
}

function letöltés() {
    //fetch('/questions.json')
    //    .then(response => response.json())
    //    .then(data => letöltésBefejeződött(data)
    //    );

    fetch('/questions/1')
        .then(response => response.json())
        .then(data => kérdésBetöltés(data)
        );
}

function kérdésBetöltés(id) {
    fetch(`/questions/${id}`)
        .then(válaszfeldolgozás)
        .then(kérdésMegjelenítés);
}

function válaszfeldolgozás(válasz) {
    if (!válasz.ok) {
        console.error(`Hibás válasz: ${response.status}`)
    }
    else {
        return válasz.json()
    }
}


function letöltésBefejeződött(d) {
    console.log("Sikeres letöltés")
    console.log(d)
    kérdések = d;

    kérdésMegjelenítés(kerdID)
}

function kérdésMegjelenítés(kérdés) {
    console.log(kérdés);
    document.getElementById("kérdés_szöveg").innerText = kérdés.questionText
    document.getElementById("válasz1").innerText = kérdés.answer1
    document.getElementById("válasz2").innerText = kérdés.answer2
    document.getElementById("válasz3").innerText = kérdés.answer3
    if (kérdés.image == "") {
        document.getElementById("kép").style.visibility = 'hidden';
    }
    else {
        document.getElementById("kép").style.visibility = 'visible';
        document.getElementById("kép").src = "https://szoft1.comeback.hu/hajo/" + kérdés.image;
    }

    kérdések = kérdés;
}

//function kérdésMegjelenítés(kérdID) {
//    document.getElementById("kérdés_szöveg").innerHTML = kérdések[kérdID].questionText;

//    document.getElementById("válasz1").innerHTML = kérdések[kérdID].answer1;
//    document.getElementById("válasz2").innerHTML = kérdések[kérdID].answer2;
//    document.getElementById("válasz3").innerHTML = kérdések[kérdID].answer3;

//    document.getElementById("kép1").src = "https://szoft1.comeback.hu/hajo/" + kérdések[kérdID].image;

//}

function back() {
    kerdID--;
    if (kerdID == -1) {
        kerdID++;
        visszaSzinezes();
    }
    kérdésBetöltés(kerdID)
    visszaSzinezes();
}

function next() {
    kerdID++;
    //if (kerdID == kérdések.length+1) {
    //    kerdID = 0;
    //}
    kérdésBetöltés(kerdID)
    visszaSzinezes();
}

function visszaSzinezes() {
    var elem = document.getElementById("válasz1");
    elem.classList.remove("jó");
    elem.classList.remove("rossz");
    elem.classList.add("kattintható");
    elem = document.getElementById("válasz2");
    elem.classList.remove("jó");
    elem.classList.remove("rossz");
    elem.classList.add("kattintható");
    elem = document.getElementById("válasz3");
    elem.classList.remove("jó");
    elem.classList.remove("rossz");
    elem.classList.add("kattintható");
}

function szinezés(labelID) {


    if (kérdések.correctAnswer == 1) {
        var elem = document.getElementById("válasz1")
        elem.classList.add("jó");
        elem.classList.remove("kattintható");
        elem = document.getElementById("válasz2")
        elem.classList.add("rossz");
        elem.classList.remove("kattintható");
        elem = document.getElementById("válasz3")
        elem.classList.add("rossz");
        elem.classList.remove("kattintható");
    }
    if (kérdések.correctAnswer == 2) {
        var elem = document.getElementById("válasz1")
        elem.classList.add("rossz");
        elem.classList.remove("kattintható");
        elem = document.getElementById("válasz2")
        elem.classList.add("jó");
        elem.classList.remove("kattintható");
        elem = document.getElementById("válasz3")
        elem.classList.add("rossz");
        elem.classList.remove("kattintható");
    }
    if (kérdések.correctAnswer == 3) {
        var elem = document.getElementById("válasz1")
        elem.classList.add("rossz");
        elem.classList.remove("kattintható");
        elem = document.getElementById("válasz2")
        elem.classList.add("rossz");
        elem.classList.remove("kattintható");
        elem = document.getElementById("válasz3")
        elem.classList.add("jó");
        elem.classList.remove("kattintható");
    }

}
