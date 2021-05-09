window.onload = () => {
    console.log("betöltődött")

    var faktorialisR = function (n) {
        if (n === 0 || n === 1) {
            return 1;
        }
        else {
            return n * faktorialisR(n - 1)
        }
    }

    let hova = document.getElementById("pascal")
    hova.innerHTML = ""

    for (var i = 0; i < 10; i++) {
        let sor = document.createElement("div")
        document.body.appendChild(sor)
        sor.classList.add("sor")
        for (var j = 0; j <= i; j++) {
            let szam = document.createElement("div")
            sor.appendChild(szam)
            szam.classList.add("elem")
            szam.innerText = faktorialisR(i) / (faktorialisR(j) * faktorialisR(i - j))
            szam.style.backgroundColor = `rgb(${255 / szam.innerText},0,${255 / szam.innerText})`
            szam.style.color = `rgb(255,255,255)`
        }
    }

    //for (var sor = 0; sor < 10; sor++) {
    //    var ujSor = document.createElement("div")
    //    ujSor.classList.add("sor")
    //    document.getElementById("pascal").appendChild(ujSor);

    //    for (var oszlop = 0; oszlop <= sor; oszlop++) {
    //        var ujElem = document.createElement("div");
    //        ujElem.classList.add("elem");
    //        ujElem.classList.add("doboz");
    //        ujElem.innerText = faktoriálisR(sor) / (faktoriálisR(oszlop) * faktoriálisR(sor - oszlop));
    //        ujElem.style.color = `rgb(0,0,${255 - (255 / 10 * ujElem.innerText)})`;
    //        ujSor.appendChild(ujElem);
    //    }
    //}
}