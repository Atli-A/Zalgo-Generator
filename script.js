

/*define functions */

function copyToClipboard(id) {
    let idText = id.textContent;
    navigator.clipboard.writeText(idText);

    console.log(id)


}




/* define global vars */

let zalgoList = ["&#771", "&#772", "&#770", "&#773", "&#774", "&#775", "&#817", "&#863"];

let slider = document.getElementById("slide")
let inputBox = document.getElementById("inputArea")
let outputBox = document.getElementById("outputArea")
let copyButton = document.getElementById("copy")

slider.addEventListener("input", function () {
    outputArea.innerHTML = getZalgo(document.getElementById("inputArea").value)
})

inputBox.addEventListener("input", function () {
    outputArea.innerHTML = getZalgo(document.getElementById("inputArea").value)
})

copyButton.addEventListener("click", function () { copyToClipboard(outputBox) })

// copyButton.onClick = copyToClipboard(outputBox)




// inpt = document.getElementById("inputArea").value;
// slideVal = document.getElementById("slide").value;

// function editOutpt() {
//   if (document.getElementById("inputArea").value != inpt || document.getElementById("slide").value != slideVal) {
//     inpt = document.getElementById("inputArea").value;
//     slideVal = document.getElementById("slide").value;
//     //console.log(inpt);

//     document.getElementById("outputArea").innerHTML = getZalgo(inpt);
//   }
// }

function getZalgo(inptVal) {
    console.log("getZalgo() called")
    let s = inptVal;
    let finalString = "";
    for (let j = 0; j < s.length; j++) {
        finalString += s.charAt(j);
        for (let i = 0; i < document.getElementById("slide").value; i++) {
            finalString =
                finalString +
                zalgoList[Math.round(Math.random() * (zalgoList.length - 1))];
        }
    }
    return finalString;
}

// function loop() {
//   editOutpt();
//   setTimeout(loop, 30);
// }

// loop();