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
            szam.style.backgroundColor = 'rgb(${255/10*i},0,${255/10*j})'
        }
    }
}